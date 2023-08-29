"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7480],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=i,g=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(25773),i=(n(27378),n(35318));const a={sidebar_position:2,title:"Selecting a context in the status bar",description:"Viewing and selecting the current Kubernetes context in the status bar",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes"],tags:["migrating-to-kubernetes"]},o="Viewing and selecting the current Kubernetes context",s={unversionedId:"kubernetes/viewing-and-selecting-current-kubernete-context-in-the-status-bar",id:"kubernetes/viewing-and-selecting-current-kubernete-context-in-the-status-bar",title:"Selecting a context in the status bar",description:"Viewing and selecting the current Kubernetes context in the status bar",source:"@site/docs/kubernetes/viewing-and-selecting-current-kubernete-context-in-the-status-bar.md",sourceDirName:"kubernetes",slug:"/kubernetes/viewing-and-selecting-current-kubernete-context-in-the-status-bar",permalink:"/docs/kubernetes/viewing-and-selecting-current-kubernete-context-in-the-status-bar",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/viewing-and-selecting-current-kubernete-context-in-the-status-bar.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Selecting a context in the status bar",description:"Viewing and selecting the current Kubernetes context in the status bar",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes"],tags:["migrating-to-kubernetes"]},sidebar:"mySidebar",previous:{title:"Configuring access",permalink:"/docs/kubernetes/configuring-access-to-a-kubernetes-cluster"},next:{title:"Selecting a context",permalink:"/docs/kubernetes/viewing-and-selecting-current-kubernete-context"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"viewing-and-selecting-the-current-kubernetes-context"},"Viewing and selecting the current Kubernetes context"),(0,i.kt)("p",null,"With Podman Desktop, you can view and select your current Kubernetes context in the status bar."),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have a Kubernetes context in your kubeconfig file: ",(0,i.kt)("em",{parentName:"li"},"<your_kubernetes_cluster>"),".\nFor example, ",(0,i.kt)("a",{parentName:"li",href:"kind/creating-a-kind-cluster"},"Creating a kind cluster"),".")),(0,i.kt)("h4",{id:"procedure"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To view your current Kubernetes context, in the ",(0,i.kt)("strong",{parentName:"p"},"Podman Desktop")," main window status bar, see the name next to the ",(0,i.kt)("icon",{icon:"fa-solid fa-server",size:"lg"})," icon.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(Optionally) To change your Kubernetes context:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("icon",{icon:"fa-solid fa-server",size:"lg"}),"."),(0,i.kt)("li",{parentName:"ol"},"In the drop-down menu, click the context name to activate.")))))}p.isMDXComponent=!0}}]);