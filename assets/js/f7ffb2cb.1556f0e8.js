"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[306],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),k=a,f=d["".concat(c,".").concat(k)]||d[k]||p[k]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5234:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={},c="MultieraBlockTask",s={unversionedId:"indexer/Tasks/MultieraBlockTask",id:"indexer/Tasks/MultieraBlockTask",title:"MultieraBlockTask",description:"Adds the block to the database",source:"@site/docs/indexer/Tasks/MultieraBlockTask.md",sourceDirName:"indexer/Tasks",slug:"/indexer/Tasks/MultieraBlockTask",permalink:"/carp/docs/indexer/Tasks/MultieraBlockTask",draft:!1,editUrl:"https://github.com/dcSpark/carp/docs/indexer/Tasks/MultieraBlockTask.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MultieraAssetMintTask",permalink:"/carp/docs/indexer/Tasks/MultieraAssetMintTask"},next:{title:"MultieraCip25EntryTask",permalink:"/carp/docs/indexer/Tasks/MultieraCip25EntryTask"}},u={},p=[{value:"Era",id:"era",level:2},{value:"Data accessed",id:"data-accessed",level:2},{value:"Writes to",id:"writes-to",level:4},{value:"Full source",id:"full-source",level:2}],d={toc:p};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multierablocktask"},"MultieraBlockTask"),(0,i.kt)("p",null,"Adds the block to the database"),(0,i.kt)("h2",{id:"era"},"Era"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"multiera")),(0,i.kt)("h2",{id:"data-accessed"},"Data accessed"),(0,i.kt)("h4",{id:"writes-to"},"Writes to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"multiera_block"))),(0,i.kt)("h2",{id:"full-source"},"Full source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dcSpark/carp/tree/main/indexer/tasks/src/multiera/multiera_block.rs"},"source")))}k.isMDXComponent=!0}}]);