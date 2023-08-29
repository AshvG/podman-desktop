"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7705],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),k=i,m=p["".concat(l,".").concat(k)]||p[k]||d[k]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},94175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(25773),i=(r(27378),r(35318));const o={sidebar_position:7,title:"Restarting your Kind cluster",description:"Restarting your local Kind-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},a="Restarting your local Kind-powered Kubernetes cluster",s={unversionedId:"kubernetes/kind/restarting-your-kind-cluster",id:"kubernetes/kind/restarting-your-kind-cluster",title:"Restarting your Kind cluster",description:"Restarting your local Kind-powered Kubernetes cluster.",source:"@site/docs/kubernetes/kind/restarting-your-kind-cluster.md",sourceDirName:"kubernetes/kind",slug:"/kubernetes/kind/restarting-your-kind-cluster",permalink:"/docs/kubernetes/kind/restarting-your-kind-cluster",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/kind/restarting-your-kind-cluster.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"kind",permalink:"/docs/tags/kind"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Restarting your Kind cluster",description:"Restarting your local Kind-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},sidebar:"mySidebar",previous:{title:"Deleting your Kind cluster",permalink:"/docs/kubernetes/kind/deleting-your-kind-cluster"},next:{title:"Building and testing an image",permalink:"/docs/kubernetes/kind/building-an-image-and-testing-it-in-kind"}},l={},u=[{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Workaround",id:"workaround",level:4}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"restarting-your-local-kind-powered-kubernetes-cluster"},"Restarting your local Kind-powered Kubernetes cluster"),(0,i.kt)("p",null,"With Podman Desktop, you can restart your local Kind-powered Kubernetes cluster."),(0,i.kt)("h4",{id:"procedure"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"),"."),(0,i.kt)("li",{parentName:"ol"},"Find the Kind cluster to restart."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("icon",{icon:"fa-solid fa-repeat",size:"lg"}),".")),(0,i.kt)("h4",{id:"verification"},"Verification"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},"Containers"),"."),(0,i.kt)("li",{parentName:"ol"},"Find the Kind cluster that restarted."),(0,i.kt)("li",{parentName:"ol"},"The cluster ",(0,i.kt)("strong",{parentName:"li"},"Age")," is consistent with the restart time."),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},"Pods"),"."),(0,i.kt)("li",{parentName:"ol"},"Find the pods that are running on your Kind cluster.")),(0,i.kt)("h4",{id:"workaround"},"Workaround"),(0,i.kt)("p",null,"Kind has no command to restart a cluster.\nTherefore, Podman Desktop stops the Kind cluster, starts it again, and hopes for the best.\nThe Kind cluster might not restart successfully.\nIn that case:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consider replacing Kind with a local Kubernetes cluster that you can restart, such as ",(0,i.kt)("a",{parentName:"li",href:"https://developers.redhat.com/products/openshift-local/"},"OpenShift Local"),"."),(0,i.kt)("li",{parentName:"ul"},"Consider ",(0,i.kt)("a",{parentName:"li",href:"deleting-your-kind-cluster"},"deleting your Kind cluster"),", and ",(0,i.kt)("a",{parentName:"li",href:"creating-a-kind-cluster"},"creating a Kind cluster"),".")))}d.isMDXComponent=!0}}]);