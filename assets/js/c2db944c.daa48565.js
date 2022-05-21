"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8016],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,k=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6844:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},c="ByronTransactionTask",l={unversionedId:"indexer/Tasks/ByronTransactionTask",id:"indexer/Tasks/ByronTransactionTask",title:"ByronTransactionTask",description:"Adds the transactions in the block to the database",source:"@site/docs/indexer/Tasks/ByronTransactionTask.md",sourceDirName:"indexer/Tasks",slug:"/indexer/Tasks/ByronTransactionTask",permalink:"/carp/docs/indexer/Tasks/ByronTransactionTask",draft:!1,editUrl:"https://github.com/dcSpark/carp/docs/indexer/Tasks/ByronTransactionTask.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ByronOutputTask",permalink:"/carp/docs/indexer/Tasks/ByronOutputTask"},next:{title:"ExampleTask",permalink:"/carp/docs/indexer/Tasks/ExampleTask"}},u={},p=[{value:"Era",id:"era",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Data accessed",id:"data-accessed",level:2},{value:"Reads from",id:"reads-from",level:4},{value:"Writes to",id:"writes-to",level:4},{value:"Full source",id:"full-source",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"byrontransactiontask"},"ByronTransactionTask"),(0,o.kt)("p",null,"Adds the transactions in the block to the database"),(0,o.kt)("h2",{id:"era"},"Era"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"byron")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./ByronBlockTask"},"ByronBlockTask"))),(0,o.kt)("h2",{id:"data-accessed"},"Data accessed"),(0,o.kt)("h4",{id:"reads-from"},"Reads from"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"byron_block"))),(0,o.kt)("h4",{id:"writes-to"},"Writes to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"byron_txs"))),(0,o.kt)("h2",{id:"full-source"},"Full source"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/dcSpark/carp/tree/main/indexer/tasks/src/byron/byron_txs.rs"},"source")))}f.isMDXComponent=!0}}]);