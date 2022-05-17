"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[924],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:4},c="Resyncing database",u={unversionedId:"indexer/resyncing",id:"indexer/resyncing",title:"Resyncing database",description:"There are times when you may want to resync the database. For example,",source:"@site/docs/indexer/resyncing.md",sourceDirName:"indexer",slug:"/indexer/resyncing",permalink:"/carp/docs/indexer/resyncing",draft:!1,editUrl:"https://github.com/dcSpark/carp/docs/indexer/resyncing.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Running",permalink:"/carp/docs/indexer/run"},next:{title:"Adding your own task",permalink:"/carp/docs/indexer/add_task"}},p={},s=[{value:"Migration utility",id:"migration-utility",level:3},{value:"Rollback utility",id:"rollback-utility",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"resyncing-database"},"Resyncing database"),(0,i.kt)("p",null,"There are times when you may want to resync the database. For example,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You are modifying your execution plan"),(0,i.kt)("li",{parentName:"ol"},"You are updating Carp to a new version that includes a breaking change")),(0,i.kt)("p",null,"There are two utilities that will help with this"),(0,i.kt)("h3",{id:"migration-utility"},"Migration utility"),(0,i.kt)("p",null,"There is an alias configured for convenience."),(0,i.kt)("p",null,"Reminder: you can add the ",(0,i.kt)("inlineCode",{parentName:"p"},"-v")," parameter to see the SQL queries run by these commands"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cargo migrate up")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cargo migrate down")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cargo migrate help"))),(0,i.kt)("h3",{id:"rollback-utility"},"Rollback utility"),(0,i.kt)("p",null,"Utility to easily rollback the database state"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cargo rollback era 3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cargo rollback epoch 200")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cargo rollback height 1000"))),(0,i.kt)("p",null,"Note: these ranges are inclusive. Ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"epoch 200")," means you rollback TO era 200, discarding any epoch afterwards."))}m.isMDXComponent=!0}}]);