"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[138],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(25773),o=(n(27378),n(35318));const a={sidebar_position:10,title:"Deploying a pod",description:"Deploying a pod to Kubernetes",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes"],tags:["migrating-to-kubernetes"]},i="Deploying a pod to Kubernetes",s={unversionedId:"kubernetes/deploying-a-pod-to-kubernetes",id:"kubernetes/deploying-a-pod-to-kubernetes",title:"Deploying a pod",description:"Deploying a pod to Kubernetes",source:"@site/docs/kubernetes/deploying-a-pod-to-kubernetes.md",sourceDirName:"kubernetes",slug:"/kubernetes/deploying-a-pod-to-kubernetes",permalink:"/docs/kubernetes/deploying-a-pod-to-kubernetes",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/deploying-a-pod-to-kubernetes.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Deploying a pod",description:"Deploying a pod to Kubernetes",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes"],tags:["migrating-to-kubernetes"]},sidebar:"mySidebar",previous:{title:"Deploying a container",permalink:"/docs/kubernetes/deploying-a-container-to-kubernetes"},next:{title:"Working with Kind",permalink:"/docs/kubernetes/kind/"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],u={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-a-pod-to-kubernetes"},"Deploying a pod to Kubernetes"),(0,o.kt)("p",null,"With Podman Desktop, you can deploy a pod to your Kubernetes cluster."),(0,o.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your are using the Podman container engine."),(0,o.kt)("li",{parentName:"ul"},"Your pod, running or stopped, is available on the ",(0,o.kt)("strong",{parentName:"li"},"Pods")," page: ",(0,o.kt)("em",{parentName:"li"},"<your_pod>"),"."),(0,o.kt)("li",{parentName:"ul"},"You registered the Kubernetes cluster in your kubeconfig file: ",(0,o.kt)("em",{parentName:"li"},"<your_kubernetes_cluster>"),". For example, ",(0,o.kt)("a",{parentName:"li",href:"/docs/kubernetes/kind/creating-a-kind-cluster"},"Creating a kind cluster"),"."),(0,o.kt)("li",{parentName:"ul"},"The Kubernetes namespace to deploy to already exists.")),(0,o.kt)("h4",{id:"procedure"},"Procedure"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Podman Desktop tray > Kubernetes > Context > ",(0,o.kt)("em",{parentName:"strong"},"<your_kubernetes_cluster>"))," to set your Kubernetes context."),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Podman Desktop dashboard > ",(0,o.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Pods > ",(0,o.kt)("em",{parentName:"strong"},"<your_pod>"))," to see the ",(0,o.kt)("strong",{parentName:"li"},"Pod Details")," page."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," to generate a Kubernetes pod."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Deploy generated pod to Kubernetes")," screen, choose your options:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Pod Name"),": edit the proposed name."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Use Kubernetes Services"),": enable or disable ",(0,o.kt)("strong",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"strong"},"hostPort")," exposure on containers by Services. It is the recommended way to expose ports, as a cluster policy might prevent to use ",(0,o.kt)("inlineCode",{parentName:"strong"},"hostPort"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes namespace"),": select in the list the namespace to deploy the pod to."))),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," Deploy")," button.")),(0,o.kt)("h4",{id:"verification"},"Verification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Deploy generated pod to Kubernetes")," screen, the created pod status is ",(0,o.kt)("em",{parentName:"p"},"Phase: Running")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Deplying a pod",src:n(2392).Z,width:"816",height:"751"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Pods"),": your pod is in the list."))))}d.isMDXComponent=!0},2392:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/deploying-a-pod-6c02e24c06e0f39452ce5bec4ab1b9e5.png"}}]);