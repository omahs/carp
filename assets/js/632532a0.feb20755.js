"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8271],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6771:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={sidebar_position:3},p="Running",u={unversionedId:"indexer/run",id:"indexer/run",title:"Running",description:"Setting up cardano-node",source:"@site/docs/indexer/run.md",sourceDirName:"indexer",slug:"/indexer/run",permalink:"/carp/docs/indexer/run",draft:!1,editUrl:"https://github.com/dcSpark/carp/docs/indexer/run.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Example Execution Plan",permalink:"/carp/docs/indexer/example_plan"},next:{title:"Migrations & Rollbacks",permalink:"/carp/docs/indexer/migrations"}},c={},d=[{value:"Setting up cardano-node",id:"setting-up-cardano-node",level:2},{value:"Setting up the database",id:"setting-up-the-database",level:2},{value:"Running the indexer",id:"running-the-indexer",level:2}],s={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running"},"Running"),(0,i.kt)("h2",{id:"setting-up-cardano-node"},"Setting up cardano-node"),(0,i.kt)("p",null,"The indexer, by default, is setup to work with a local node.","*",", so you will have to run a synced copy of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/"},"cardano-node")),(0,i.kt)("p",null,"*","If you want to run on a remote node, you can change the socket in ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),". If this remote node requires a TCP connection, you can change the ",(0,i.kt)("inlineCode",{parentName:"p"},"BearerKind")," to TCP in the code and replace the usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"n2c")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"n2n")," at ",(0,i.kt)("inlineCode",{parentName:"p"},"indexer/src/setup.rs"),"."),(0,i.kt)("h2",{id:"setting-up-the-database"},"Setting up the database"),(0,i.kt)("p",null,"Note: steps assume mainnet"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo -u postgres createdb carp_mainnet")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo -u postgres psql -c 'ALTER DATABASE carp_mainnet SET jit_above_cost = -1;'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo -u postgres createuser carp")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},'sudo -u postgres psql -c "\\password carp"')),(0,i.kt)("li",{parentName:"ol"},"Add your database name & user password to ",(0,i.kt)("inlineCode",{parentName:"li"},"secrets/.pgpass")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"chmod 600 secrets/.pgpass")),(0,i.kt)("li",{parentName:"ol"},"Modify the env variables in ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," if needed (ex: connecting to local node instead of remote)"),(0,i.kt)("li",{parentName:"ol"},"In the root project folder, run ",(0,i.kt)("inlineCode",{parentName:"li"},"set -a; . ./.env; set +a")," - note you will have to re-run this command every time you reopen your shell"),(0,i.kt)("li",{parentName:"ol"},"Inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"indexer")," folder, run ",(0,i.kt)("inlineCode",{parentName:"li"},"cargo migrate up")," (you can debug migration by adding a ",(0,i.kt)("inlineCode",{parentName:"li"},"-v")," at the end of the command)")),(0,i.kt)("h2",{id:"running-the-indexer"},"Running the indexer"),(0,i.kt)("p",null,"Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"indexer")," folder, run ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo run -- --plan execution_plans/default.toml")),(0,i.kt)("p",null,"Reminder: you can visualize the execution plan using ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo plan-visualizer --plan execution_plans/default.toml -o plan-visualizer/out")))}m.isMDXComponent=!0}}]);