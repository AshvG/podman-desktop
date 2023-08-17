"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8502],{5318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(5773),o=(t(7378),t(5318));const i={sidebar_position:3,title:"In your containers",description:"Using Podman Desktop behind a proxy requiring custom Certificate Authorities (CA).",tags:["podman-desktop","installing","windows","macos","linux"],keywords:["podman desktop","containers","podman","installing","installation","windows","macos","linux"]},a="Using a proxy in your containers on macOS and Windows",s={unversionedId:"proxy/using-a-proxy-in-your-containers",id:"proxy/using-a-proxy-in-your-containers",title:"In your containers",description:"Using Podman Desktop behind a proxy requiring custom Certificate Authorities (CA).",source:"@site/docs/proxy/using-a-proxy-in-your-containers.md",sourceDirName:"proxy",slug:"/proxy/using-a-proxy-in-your-containers",permalink:"/docs/proxy/using-a-proxy-in-your-containers",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/proxy/using-a-proxy-in-your-containers.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"installing",permalink:"/docs/tags/installing"},{label:"windows",permalink:"/docs/tags/windows"},{label:"macos",permalink:"/docs/tags/macos"},{label:"linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"In your containers",description:"Using Podman Desktop behind a proxy requiring custom Certificate Authorities (CA).",tags:["podman-desktop","installing","windows","macos","linux"],keywords:["podman desktop","containers","podman","installing","installation","windows","macos","linux"]},sidebar:"mySidebar",previous:{title:"Custom Certificate Authorities",permalink:"/docs/proxy/using-a-proxy-requiring-a-custom-ca"},next:{title:"Linux",permalink:"/docs/proxy/using-a-proxy-on-linux"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4}],c={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-a-proxy-in-your-containers-on-macos-and-windows"},"Using a proxy in your containers on macOS and Windows"),(0,o.kt)("p",null,"You can configure your Podman machine to use a proxy for your containers."),(0,o.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<your.proxy.tld:port>"),": Your proxy URL.")),(0,o.kt)("h4",{id:"procedure"},"Procedure"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a shell prompt on the Podman machine:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ podman machine ssh\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"containers.conf")," file to pass the proxy environment variables to Podman CLI."),(0,o.kt)("p",{parentName:"li"},"The file location depends on your connection mode:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"rootless"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.config/containers/containers.conf"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"rootful"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/containers/containers.conf"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the proxy environment variables to pass into the containers:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[containers]\nhttp_proxy = true\nenv = ["http_proxy=<your.proxy.tld:port>", "https_proxy=<your.proxy.tld:port>"]\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Settings > Resources")," and restart the Podman machine."))))}u.isMDXComponent=!0}}]);