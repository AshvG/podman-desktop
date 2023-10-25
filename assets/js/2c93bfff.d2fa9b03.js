"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[628],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var i=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||a;return r?i.createElement(d,o(o({ref:t},p),{},{components:r})):i.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},16247:(e,t,r)=>{r.d(t,{ZP:()=>o});var i=r(25773),n=(r(27378),r(35318));const a={toc:[{value:"Verification",id:"verification",level:4}]};function o(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"verification"},"Verification"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images"),"."),(0,n.kt)("li",{parentName:"ol"},"You can pull a private image from the registry."),(0,n.kt)("li",{parentName:"ol"},"You can push an image to the registry:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Build an image with the fully qualified name required for your registry, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"quay.io/my-repository/my-image"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"ghcr.io/my-repository/my-image"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"docker.io/my-repository/my-image"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"my-registry.tld/my-repository/my-image"),"."),(0,n.kt)("li",{parentName:"ol"},"On your image line, click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})),"."),(0,n.kt)("li",{parentName:"ol"},"The contextual menu has a ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("icon",{icon:"fa-solid fa-arrow-up",size:"lg"}),"Push Image")," entry.")))))}o.isMDXComponent=!0},16019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=r(25773),n=(r(27378),r(35318)),a=r(16247);const o={sidebar_position:10,title:"Authenticating to a registry",description:"Authenticating to a pre-configured registry.",keywords:["podman desktop","podman","containers","registry","registries"],tags:["images"]},s="Authenticating to a pre-configured registry",c={unversionedId:"working-with-containers/registries/authenticating-to-a-preconfigured-registry",id:"working-with-containers/registries/authenticating-to-a-preconfigured-registry",title:"Authenticating to a registry",description:"Authenticating to a pre-configured registry.",source:"@site/docs/working-with-containers/registries/authenticating-to-a-preconfigured-registry.md",sourceDirName:"working-with-containers/registries",slug:"/working-with-containers/registries/authenticating-to-a-preconfigured-registry",permalink:"/docs/working-with-containers/registries/authenticating-to-a-preconfigured-registry",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/working-with-containers/registries/authenticating-to-a-preconfigured-registry.md",tags:[{label:"images",permalink:"/docs/tags/images"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Authenticating to a registry",description:"Authenticating to a pre-configured registry.",keywords:["podman desktop","podman","containers","registry","registries"],tags:["images"]},sidebar:"mySidebar",previous:{title:"Registries",permalink:"/docs/working-with-containers/registries/"},next:{title:"Adding an insecure registry",permalink:"/docs/working-with-containers/registries/insecure-registry"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4}],g={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"authenticating-to-a-pre-configured-registry"},"Authenticating to a pre-configured registry"),(0,n.kt)("p",null,"With Podman Desktop, you can authenticate to a set of pre-configured registries:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Red Hat Quay"),(0,n.kt)("li",{parentName:"ul"},"Docker Hub"),(0,n.kt)("li",{parentName:"ul"},"GitHub"),(0,n.kt)("li",{parentName:"ul"},"Google Container registry")),(0,n.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have credentials on a pre-configured image registry.")),(0,n.kt)("h4",{id:"procedure"},"Procedure"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Registries"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On your registry line, click ",(0,n.kt)("strong",{parentName:"p"},"Configure"),"."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"User name"),": Enter your user name."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Password"),": Enter your password or OAuth secret."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Login"),".")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Authenticating to a preconfigured registry",src:r(95856).Z,width:"933",height:"431"})))),(0,n.kt)(a.ZP,{mdxType:"Verification"}))}u.isMDXComponent=!0},95856:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/authenticating-to-a-preconfigured-registry-12cf722d1b380d17ae90e8129d31a981.png"}}]);