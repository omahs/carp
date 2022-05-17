"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[386],{8837:function(n,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return E},default:function(){return u},frontMatter:function(){return d},metadata:function(){return N},toc:function(){return l}});var i=a(7462),t=a(3366),T=(a(7294),a(3905)),c=a(5710),r=["components"],d={sidebar_position:6},E="SQL Format",N={unversionedId:"indexer/sql",id:"indexer/sql",title:"SQL Format",description:"Although Carp comes with a webserver and client, users may want to run their own SQL queries.",source:"@site/docs/indexer/sql.mdx",sourceDirName:"indexer",slug:"/indexer/sql",permalink:"/carp/docs/indexer/sql",draft:!1,editUrl:"https://github.com/dcSpark/carp/docs/indexer/sql.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Adding your own task",permalink:"/carp/docs/indexer/add_task"},next:{title:"Tasks",permalink:"/carp/docs/indexer/Tasks/"}},s={},l=[],p={toc:l};function u(n){var e=n.components,d=(0,t.Z)(n,r);return(0,T.kt)("wrapper",(0,i.Z)({},p,d,{components:e,mdxType:"MDXLayout"}),(0,T.kt)("h1",{id:"sql-format"},"SQL Format"),(0,T.kt)("p",null,"Although Carp comes with a webserver and client, users may want to run their own SQL queries."),(0,T.kt)("p",null,"Here is the table format used by Carp"),(0,T.kt)("p",null,(0,T.kt)("img",{alt:"schema",src:a(8682).Z,width:"2041",height:"795"})),(0,T.kt)("p",null,"More concretely, the full SQL schema can be seen below"),(0,T.kt)(c.Z,{language:"sql",title:"schema.sql",showLineNumbers:!0,mdxType:"CodeBlock"},'--\n-- PostgreSQL database dump\n--\n\n-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)\n-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)\n\nSET statement_timeout = 0;\nSET lock_timeout = 0;\nSET idle_in_transaction_session_timeout = 0;\nSET client_encoding = \'UTF8\';\nSET standard_conforming_strings = on;\nSELECT pg_catalog.set_config(\'search_path\', \'\', false);\nSET check_function_bodies = false;\nSET xmloption = content;\nSET client_min_messages = warning;\nSET row_security = off;\n\nSET default_tablespace = \'\';\n\nSET default_table_access_method = heap;\n\n--\n-- Name: Address; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."Address" (\n    id bigint NOT NULL,\n    payload bytea NOT NULL\n);\n\n\n--\n-- Name: AddressCredentialRelation; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."AddressCredentialRelation" (\n    address_id bigint NOT NULL,\n    credential_id bigint NOT NULL,\n    relation integer NOT NULL\n);\n\n\n--\n-- Name: Address_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."Address_id_seq"\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: Address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."Address_id_seq" OWNED BY public."Address".id;\n\n\n--\n-- Name: Block; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."Block" (\n    id integer NOT NULL,\n    era integer NOT NULL,\n    hash bytea NOT NULL,\n    height integer NOT NULL,\n    epoch integer NOT NULL,\n    slot integer NOT NULL\n);\n\n\n--\n-- Name: Block_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."Block_id_seq"\n    AS integer\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: Block_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."Block_id_seq" OWNED BY public."Block".id;\n\n\n--\n-- Name: StakeCredential; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."StakeCredential" (\n    id bigint NOT NULL,\n    credential bytea NOT NULL\n);\n\n\n--\n-- Name: StakeCredential_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."StakeCredential_id_seq"\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: StakeCredential_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."StakeCredential_id_seq" OWNED BY public."StakeCredential".id;\n\n\n--\n-- Name: Transaction; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."Transaction" (\n    id bigint NOT NULL,\n    hash bytea NOT NULL,\n    block_id integer NOT NULL,\n    tx_index integer NOT NULL,\n    payload bytea NOT NULL,\n    is_valid boolean NOT NULL\n);\n\n\n--\n-- Name: TransactionInput; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."TransactionInput" (\n    id bigint NOT NULL,\n    utxo_id bigint NOT NULL,\n    tx_id bigint NOT NULL,\n    input_index integer NOT NULL\n);\n\n\n--\n-- Name: TransactionInput_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."TransactionInput_id_seq"\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: TransactionInput_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."TransactionInput_id_seq" OWNED BY public."TransactionInput".id;\n\n\n--\n-- Name: TransactionMetadata; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."TransactionMetadata" (\n    tx_id bigint NOT NULL,\n    label bytea NOT NULL,\n    payload bytea NOT NULL\n);\n\n\n--\n-- Name: TransactionOutput; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."TransactionOutput" (\n    id bigint NOT NULL,\n    payload bytea NOT NULL,\n    address_id bigint NOT NULL,\n    tx_id bigint NOT NULL,\n    output_index integer NOT NULL\n);\n\n\n--\n-- Name: TransactionOutput_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."TransactionOutput_id_seq"\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: TransactionOutput_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."TransactionOutput_id_seq" OWNED BY public."TransactionOutput".id;\n\n\n--\n-- Name: Transaction_id_seq; Type: SEQUENCE; Schema: public; Owner: -\n--\n\nCREATE SEQUENCE public."Transaction_id_seq"\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\n\n\n--\n-- Name: Transaction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -\n--\n\nALTER SEQUENCE public."Transaction_id_seq" OWNED BY public."Transaction".id;\n\n\n--\n-- Name: TxCredentialRelation; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public."TxCredentialRelation" (\n    credential_id bigint NOT NULL,\n    tx_id bigint NOT NULL,\n    relation integer NOT NULL\n);\n\n\n--\n-- Name: seaql_migrations; Type: TABLE; Schema: public; Owner: -\n--\n\nCREATE TABLE public.seaql_migrations (\n    version character varying NOT NULL,\n    applied_at bigint NOT NULL\n);\n\n\n--\n-- Name: Address id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Address" ALTER COLUMN id SET DEFAULT nextval(\'public."Address_id_seq"\'::regclass);\n\n\n--\n-- Name: Block id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Block" ALTER COLUMN id SET DEFAULT nextval(\'public."Block_id_seq"\'::regclass);\n\n\n--\n-- Name: StakeCredential id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."StakeCredential" ALTER COLUMN id SET DEFAULT nextval(\'public."StakeCredential_id_seq"\'::regclass);\n\n\n--\n-- Name: Transaction id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Transaction" ALTER COLUMN id SET DEFAULT nextval(\'public."Transaction_id_seq"\'::regclass);\n\n\n--\n-- Name: TransactionInput id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionInput" ALTER COLUMN id SET DEFAULT nextval(\'public."TransactionInput_id_seq"\'::regclass);\n\n\n--\n-- Name: TransactionOutput id; Type: DEFAULT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionOutput" ALTER COLUMN id SET DEFAULT nextval(\'public."TransactionOutput_id_seq"\'::regclass);\n\n\n--\n-- Name: Address Address_payload_key; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Address"\n    ADD CONSTRAINT "Address_payload_key" UNIQUE (payload);\n\n\n--\n-- Name: Address Address_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Address"\n    ADD CONSTRAINT "Address_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: Block Block_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Block"\n    ADD CONSTRAINT "Block_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: StakeCredential StakeCredential_credential_key; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."StakeCredential"\n    ADD CONSTRAINT "StakeCredential_credential_key" UNIQUE (credential);\n\n\n--\n-- Name: StakeCredential StakeCredential_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."StakeCredential"\n    ADD CONSTRAINT "StakeCredential_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: TransactionInput TransactionInput_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionInput"\n    ADD CONSTRAINT "TransactionInput_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: TransactionOutput TransactionOutput_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionOutput"\n    ADD CONSTRAINT "TransactionOutput_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: Transaction Transaction_hash_key; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Transaction"\n    ADD CONSTRAINT "Transaction_hash_key" UNIQUE (hash);\n\n\n--\n-- Name: Transaction Transaction_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Transaction"\n    ADD CONSTRAINT "Transaction_pkey" PRIMARY KEY (id);\n\n\n--\n-- Name: AddressCredentialRelation address_credential-pk; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."AddressCredentialRelation"\n    ADD CONSTRAINT "address_credential-pk" PRIMARY KEY (address_id, credential_id, relation);\n\n\n--\n-- Name: TransactionMetadata metadata-pk; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionMetadata"\n    ADD CONSTRAINT "metadata-pk" PRIMARY KEY (tx_id, label);\n\n\n--\n-- Name: seaql_migrations seaql_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public.seaql_migrations\n    ADD CONSTRAINT seaql_migrations_pkey PRIMARY KEY (version);\n\n\n--\n-- Name: TxCredentialRelation tx_credential-pk; Type: CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TxCredentialRelation"\n    ADD CONSTRAINT "tx_credential-pk" PRIMARY KEY (tx_id, credential_id);\n\n\n--\n-- Name: index-address_credential-credential; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-address_credential-credential" ON public."AddressCredentialRelation" USING btree (credential_id);\n\n\n--\n-- Name: index-metadata-label; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-metadata-label" ON public."TransactionMetadata" USING btree (label);\n\n\n--\n-- Name: index-transaction-block; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-transaction-block" ON public."Transaction" USING btree (block_id);\n\n\n--\n-- Name: index-transaction_input-transaction; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-transaction_input-transaction" ON public."TransactionInput" USING btree (tx_id);\n\n\n--\n-- Name: index-transaction_input-transaction_output; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-transaction_input-transaction_output" ON public."TransactionInput" USING btree (utxo_id);\n\n\n--\n-- Name: index-transaction_output-address; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-transaction_output-address" ON public."TransactionOutput" USING btree (address_id);\n\n\n--\n-- Name: index-transaction_output-transaction; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-transaction_output-transaction" ON public."TransactionOutput" USING btree (tx_id);\n\n\n--\n-- Name: index-tx_credential-credential; Type: INDEX; Schema: public; Owner: -\n--\n\nCREATE INDEX "index-tx_credential-credential" ON public."TxCredentialRelation" USING btree (credential_id);\n\n\n--\n-- Name: AddressCredentialRelation fk-address_credential-address_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."AddressCredentialRelation"\n    ADD CONSTRAINT "fk-address_credential-address_id" FOREIGN KEY (address_id) REFERENCES public."Address"(id);\n\n\n--\n-- Name: AddressCredentialRelation fk-address_credential-credential_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."AddressCredentialRelation"\n    ADD CONSTRAINT "fk-address_credential-credential_id" FOREIGN KEY (credential_id) REFERENCES public."StakeCredential"(id);\n\n\n--\n-- Name: TransactionMetadata fk-metadata-tx_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionMetadata"\n    ADD CONSTRAINT "fk-metadata-tx_id" FOREIGN KEY (tx_id) REFERENCES public."Transaction"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: Transaction fk-transaction-block_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."Transaction"\n    ADD CONSTRAINT "fk-transaction-block_id" FOREIGN KEY (block_id) REFERENCES public."Block"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: TransactionInput fk-transaction_input-tx_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionInput"\n    ADD CONSTRAINT "fk-transaction_input-tx_id" FOREIGN KEY (tx_id) REFERENCES public."Transaction"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: TransactionInput fk-transaction_input-utxo_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionInput"\n    ADD CONSTRAINT "fk-transaction_input-utxo_id" FOREIGN KEY (utxo_id) REFERENCES public."TransactionOutput"(id);\n\n\n--\n-- Name: TransactionOutput fk-transaction_output-address_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionOutput"\n    ADD CONSTRAINT "fk-transaction_output-address_id" FOREIGN KEY (address_id) REFERENCES public."Address"(id);\n\n\n--\n-- Name: TransactionOutput fk-transaction_output-tx_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TransactionOutput"\n    ADD CONSTRAINT "fk-transaction_output-tx_id" FOREIGN KEY (tx_id) REFERENCES public."Transaction"(id) ON DELETE CASCADE;\n\n\n--\n-- Name: TxCredentialRelation fk-tx_credential-credential_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TxCredentialRelation"\n    ADD CONSTRAINT "fk-tx_credential-credential_id" FOREIGN KEY (credential_id) REFERENCES public."StakeCredential"(id);\n\n\n--\n-- Name: TxCredentialRelation fk-tx_credential-tx_id; Type: FK CONSTRAINT; Schema: public; Owner: -\n--\n\nALTER TABLE ONLY public."TxCredentialRelation"\n    ADD CONSTRAINT "fk-tx_credential-tx_id" FOREIGN KEY (tx_id) REFERENCES public."Transaction"(id) ON DELETE CASCADE;\n\n\n--\n-- PostgreSQL database dump complete\n--\n\n'))}u.isMDXComponent=!0},8682:function(n,e,a){e.Z=a.p+"assets/images/sql-graph-5b099d7d26594f62e8a6befde4fee09f.svg"}}]);