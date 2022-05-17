"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[93],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(r),f=a,k=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(k,u(u({ref:t},c),{},{components:r})):n.createElement(k,u({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var o=2;o<i;o++)u[o]=r[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7536:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),u=["components"],l={},s="MultieraOutputTask",o={unversionedId:"indexer/Tasks/MultieraOutputTask",id:"indexer/Tasks/MultieraOutputTask",title:"MultieraOutputTask",description:"Adds the transaction outputs to the database",source:"@site/docs/indexer/Tasks/MultieraOutputTask.md",sourceDirName:"indexer/Tasks",slug:"/indexer/Tasks/MultieraOutputTask",permalink:"/carp/docs/indexer/Tasks/MultieraOutputTask",draft:!1,editUrl:"https://github.com/dcSpark/carp/docs/indexer/Tasks/MultieraOutputTask.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MultieraMetadataTask",permalink:"/carp/docs/indexer/Tasks/MultieraMetadataTask"},next:{title:"MultieraStakeCredentialTask",permalink:"/carp/docs/indexer/Tasks/MultieraStakeCredentialTask"}},c={},p=[{value:"Era",id:"era",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Data accessed",id:"data-accessed",level:2},{value:"Reads from",id:"reads-from",level:4},{value:"Writes to",id:"writes-to",level:4},{value:"Full source",id:"full-source",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multieraoutputtask"},"MultieraOutputTask"),(0,i.kt)("p",null,"Adds the transaction outputs to the database"),(0,i.kt)("h2",{id:"era"},"Era"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"multiera")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./MultieraAddressTask"},"MultieraAddressTask"))),(0,i.kt)("h2",{id:"data-accessed"},"Data accessed"),(0,i.kt)("h4",{id:"reads-from"},"Reads from"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"multiera_txs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"multiera_addresses"))),(0,i.kt)("h4",{id:"writes-to"},"Writes to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"multiera_outputs"))),(0,i.kt)("h2",{id:"full-source"},"Full source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dcSpark/carp/tree/main/indexer/tasks/src/multiera/multiera_outputs.rs"},"source")))}f.isMDXComponent=!0}}]);