use std::collections::BTreeMap;

use pallas::ledger::{
    addresses::Address,
    primitives::ToCanonicalJson,
    traverse::{MultiEraOutput, MultiEraTx},
};

use super::common::{
    build_asset, filter_outputs_and_datums_by_address, filter_outputs_and_datums_by_hash,
    reduce_ada_amount, Dex, DexType, QueuedMeanPrice, QueuedSwap, SundaeSwapV1,
};
use crate::{era_common::OutputWithTxData, multiera::utils::common::get_asset_amount};
use entity::dex_swap::Operation;

pub const POOL_SCRIPT_HASH: &str = "4020e7fc2de75a0729c3cc3af715b34d98381e0cdbcfa99c950bc3ac";
pub const REQUEST_SCRIPT_HASH: &str = "ba158766c1bae60e2117ee8987621441fac66a5e0fb9c7aca58cf20a";
pub const SWAP_IN_ADA: u64 = 4_500_000; // oil ADA + agent fee
pub const SWAP_OUT_ADA: u64 = 2_000_000; // oil ADA

impl Dex for SundaeSwapV1 {
    fn queue_mean_price(
        &self,
        queued_prices: &mut Vec<QueuedMeanPrice>,
        tx: &MultiEraTx,
        tx_id: i64,
    ) -> Result<(), String> {
        // Note: there should be at most one pool output
        if let Some((output, datum)) =
            filter_outputs_and_datums_by_hash(&tx.outputs(), &[POOL_SCRIPT_HASH], &tx.plutus_data())
                .get(0)
        {
            let datum = datum.to_json();

            let parse_asset_item = |i, j| -> Result<Vec<u8>, &str> {
                let item = datum["fields"][0]["fields"][i]["fields"][j]["bytes"]
                    .as_str()
                    .ok_or("Failed to parse asset item")?
                    .to_string();
                hex::decode(item).map_err(|_e| "Failed to parse asset item")
            };
            let asset1 = build_asset(parse_asset_item(0, 0)?, parse_asset_item(0, 1)?);
            let asset2 = build_asset(parse_asset_item(1, 0)?, parse_asset_item(1, 1)?);

            let amount1 = get_asset_amount(output, &asset1);
            let amount2 = get_asset_amount(output, &asset2);

            queued_prices.push(QueuedMeanPrice {
                tx_id,
                address: output.address().unwrap().to_vec(),
                dex_type: DexType::SundaeSwapV1,
                asset1,
                asset2,
                amount1,
                amount2,
            });
        }
        Ok(())
    }

    fn queue_swap(
        &self,
        queued_swaps: &mut Vec<QueuedSwap>,
        tx: &MultiEraTx,
        tx_id: i64,
        multiera_used_inputs_to_outputs_map: &BTreeMap<Vec<u8>, BTreeMap<i64, OutputWithTxData>>,
    ) -> Result<(), String> {
        // Note: there should be at most one pool output
        if let Some((main_output, main_datum)) =
            filter_outputs_and_datums_by_hash(&tx.outputs(), &[POOL_SCRIPT_HASH], &tx.plutus_data())
                .get(0)
        {
            let main_datum = main_datum.to_json();
            let mut free_utxos: Vec<MultiEraOutput> = tx.outputs();

            // Extract asset information from plutus data of pool input
            let parse_asset_item = |i, j| -> Result<Vec<u8>, &str> {
                let item = main_datum["fields"][0]["fields"][i]["fields"][j]["bytes"]
                    .as_str()
                    .ok_or("Failed to parse asset item")?
                    .to_string();
                hex::decode(item).map_err(|_e| "Failed to parse asset item")
            };
            let asset1 = build_asset(parse_asset_item(0, 0)?, parse_asset_item(0, 1)?);
            let asset2 = build_asset(parse_asset_item(1, 0)?, parse_asset_item(1, 1)?);

            let inputs: Vec<MultiEraOutput> = tx
                .inputs()
                .iter()
                .map(|i| {
                    let output = &multiera_used_inputs_to_outputs_map[&i.hash().to_vec()]
                        [&(i.index() as i64)];
                    MultiEraOutput::decode(output.era, &output.model.payload).unwrap()
                })
                .collect::<Vec<_>>();
            for (input, input_datum) in filter_outputs_and_datums_by_hash(
                &inputs,
                &[REQUEST_SCRIPT_HASH],
                &tx.plutus_data(),
            ) {
                let input_datum = input_datum.to_json();

                // identify operation: 0 = swap
                let operation = input_datum["fields"][3]["constructor"]
                    .as_i64()
                    .ok_or("Failed to parse operation")?;
                if operation != 0 {
                    tracing::debug!("Operation is not a swap");
                    continue;
                }

                // Get transaction output
                let output_address_items = vec![
                    String::from("01"), // mainnet
                    input_datum["fields"][1]["fields"][0]["fields"][0]["fields"][0]["fields"][0]
                        ["bytes"]
                        .as_str()
                        .ok_or("Failed to parse output address item")?
                        .to_string(),
                    input_datum["fields"][1]["fields"][0]["fields"][0]["fields"][1]["fields"][0]
                        ["fields"][0]["fields"][0]["bytes"]
                        .as_str()
                        .ok_or("Failed to parse output address item")?
                        .to_string(),
                ];
                let output_address = Address::from_hex(&output_address_items.join(""))
                    .map_err(|_e| "Failed to parse output address")?;

                // Get coresponding UTxO with result
                let utxo_pos = free_utxos
                    .iter()
                    .position(|o| o.address().ok() == Some(output_address.clone()))
                    .ok_or("Failed to find utxo")?;
                let utxo = free_utxos[utxo_pos].clone();
                free_utxos.remove(utxo_pos);

                // Get amount and direction
                let amount1;
                let amount2;
                let direction = input_datum["fields"][3]["fields"][0]["constructor"]
                    .as_i64()
                    .ok_or("Failed to parse direction")?;

                if direction == 0 {
                    amount1 =
                        get_asset_amount(&input, &asset1) - reduce_ada_amount(&asset1, SWAP_IN_ADA);
                    amount2 =
                        get_asset_amount(&utxo, &asset2) - reduce_ada_amount(&asset2, SWAP_OUT_ADA);
                } else {
                    amount1 =
                        get_asset_amount(&utxo, &asset1) - reduce_ada_amount(&asset1, SWAP_OUT_ADA);
                    amount2 =
                        get_asset_amount(&input, &asset2) - reduce_ada_amount(&asset2, SWAP_IN_ADA);
                }
                queued_swaps.push(QueuedSwap {
                    tx_id,
                    address: main_output.address().unwrap().to_vec(),
                    dex_type: DexType::SundaeSwapV1,
                    asset1: asset1.clone(),
                    asset2: asset2.clone(),
                    amount1,
                    amount2,
                    operation: match direction == 0 {
                        true => Operation::Sell,
                        false => Operation::Buy,
                    },
                })
            }
        }
        Ok(())
    }
}
