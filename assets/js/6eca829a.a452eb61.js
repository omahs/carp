"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7028],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=o(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,u(u({ref:t},p),{},{components:r})):n.createElement(f,u({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var o=2;o<i;o++)u[o]=r[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4266:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),u=["components"],l={},s="MultieraUsedInputTask",o={unversionedId:"indexer/Tasks/MultieraUsedInputTask",id:"indexer/Tasks/MultieraUsedInputTask",title:"MultieraUsedInputTask",description:"Adds the used inputs to the database \\(regular inputs in most cases, collateral inputs if tx fails\\)",source:"@site/docs/indexer/Tasks/MultieraUsedInputTask.md",sourceDirName:"indexer/Tasks",slug:"/indexer/Tasks/MultieraUsedInputTask",permalink:"/carp/docs/indexer/Tasks/MultieraUsedInputTask",draft:!1,editUrl:"https://github.com/dcSpark/carp/docs/indexer/Tasks/MultieraUsedInputTask.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MultieraUnusedInputTask",permalink:"/carp/docs/indexer/Tasks/MultieraUnusedInputTask"},next:{title:"MultieraWingRidersV1MeanPriceTask",permalink:"/carp/docs/indexer/Tasks/MultieraWingRidersV1MeanPriceTask"}},p={},c=[{value:"Era",id:"era",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Data accessed",id:"data-accessed",level:2},{value:"Reads from",id:"reads-from",level:4},{value:"Writes to",id:"writes-to",level:4},{value:"Full source",id:"full-source",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multierausedinputtask"},"MultieraUsedInputTask"),(0,i.kt)("p",null,"Adds the used inputs to the database ","(","regular inputs in most cases, collateral inputs if tx fails",")"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Clone, Copy, serde::Deserialize, serde::Serialize)]\npub struct ReadonlyConfig {\n    pub readonly: bool,\n}\n\n"))),(0,i.kt)("h2",{id:"era"},"Era"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"multiera")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./MultieraOutputTask"},"MultieraOutputTask"))),(0,i.kt)("h2",{id:"data-accessed"},"Data accessed"),(0,i.kt)("h4",{id:"reads-from"},"Reads from"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"multiera_txs"))),(0,i.kt)("h4",{id:"writes-to"},"Writes to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vkey_relation_map")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"multiera_used_inputs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"multiera_used_inputs_to_outputs_map"))),(0,i.kt)("h2",{id:"full-source"},"Full source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dcSpark/carp/tree/main/indexer/tasks/src/multiera/multiera_used_inputs.rs"},"source")))}m.isMDXComponent=!0}}]);