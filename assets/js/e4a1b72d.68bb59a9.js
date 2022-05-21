"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8316],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||a;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8734:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:7},p="Starting Carp in container",s={unversionedId:"indexer/docker",id:"indexer/docker",title:"Starting Carp in container",description:"Carp can be run using docker-compose. It creates 3(+1 optional) services:",source:"@site/docs/indexer/docker.md",sourceDirName:"indexer",slug:"/indexer/docker",permalink:"/carp/docs/indexer/docker",draft:!1,editUrl:"https://github.com/dcSpark/carp/docs/indexer/docker.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"SQL Format",permalink:"/carp/docs/indexer/sql"},next:{title:"Tasks",permalink:"/carp/docs/indexer/Tasks/"}},u={},l=[{value:"Backup service",id:"backup-service",level:3},{value:"Environment setup",id:"environment-setup",level:3}],d={toc:l};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"starting-carp-in-container"},"Starting Carp in container"),(0,a.kt)("p",null,"Carp can be run using ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),". It creates 3(+1 optional) services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"postgres - container running postgres database"),(0,a.kt)("li",{parentName:"ul"},"cardano-node - container running cardano-node"),(0,a.kt)("li",{parentName:"ul"},"carp - container build locally with carp")),(0,a.kt)("h3",{id:"backup-service"},"Backup service"),(0,a.kt)("p",null,"There is an optional container that can perform back of the database to an s3 bucket.\nIt check every hour the cardano-node tip epoch and if it changes, an SQL backup is being generated.\nBy defaul the backup service is commented out."),(0,a.kt)("p",null,"Backup service will upload file to path:\n",(0,a.kt)("inlineCode",{parentName:"p"},"s3://${S3_BUCKET}/${S3_FOLDER}/${NETWORK}/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WARNING:"),"\nStarting Carp with backup service from scratch will create a dozens of backups until cardano-node fully synchronizes."),(0,a.kt)("h3",{id:"environment-setup"},"Environment setup"),(0,a.kt)("p",null,"For Your convenience You can create a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file alongside ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NETWORK=<network type: mainnet or testnet>\n\nPOSTGRES_USER=<user used for carp logging into DB>\nPOSTGRES_PASSWORD=<carp DB name>\nPOSTGRES_HOST=postgres\nPOSTGRES_PORT=5432\nPOSTGRES_DB=<password for carp user>\n\nDATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}\n# optional content for backup service\nS3_BUCKET=<name of bucket to store backups>\nS3_FOLDER=<name of folder inside s3 bucket. I recommend host name>\nAWS_ACCESS_KEY_ID=<Access key for given s3 bucket with creation permissions>\nAWS_SECRET_ACCESS_KEY=<Secret for given account>\n")))}f.isMDXComponent=!0}}]);