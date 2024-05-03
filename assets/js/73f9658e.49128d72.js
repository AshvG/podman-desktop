"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61305],{40680:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=s(24246),t=s(71670);const a={},c="Function: pushImage()",r={id:"namespaces/containerEngine/functions/pushImage",title:"Function: pushImage()",description:"pushImage(engineId, imageId, callback, authInfo?): Promise\\",source:"@site/api/namespaces/containerEngine/functions/pushImage.md",sourceDirName:"namespaces/containerEngine/functions",slug:"/namespaces/containerEngine/functions/pushImage",permalink:"/api/namespaces/containerEngine/functions/pushImage",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"pullImage",permalink:"/api/namespaces/containerEngine/functions/pullImage"},next:{title:"removePod",permalink:"/api/namespaces/containerEngine/functions/removePod"}},o={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Source",id:"source",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"function-pushimage",children:"Function: pushImage()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"pushImage"}),"(",(0,i.jsx)(n.code,{children:"engineId"}),", ",(0,i.jsx)(n.code,{children:"imageId"}),", ",(0,i.jsx)(n.code,{children:"callback"}),", ",(0,i.jsx)(n.code,{children:"authInfo"}),"?): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Push an image to a registry."}),"\n",(0,i.jsxs)(n.p,{children:["If you wish to push an image on to a private registry, that image must already have a tag which references the registry. For example, ",(0,i.jsx)(n.code,{children:"registry.example.com/myimage:latest"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"engineId"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.p,{children:["the id of the engine managing the image, obtained from the result of ",(0,i.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/listImages",children:"containerEngine.listImages"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"imageId"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.p,{children:["the id of the image on this engine, obtained from the result of ",(0,i.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/listImages",children:"containerEngine.listImages"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"callback"})]}),"\n",(0,i.jsxs)(n.p,{children:["the function called when new logs are emitted or new events happen on the stream. The value of ",(0,i.jsx)(n.code,{children:"name"})," can be either ",(0,i.jsx)(n.code,{children:"data"}),"(and ",(0,i.jsx)(n.code,{children:"data"})," contains the logs), or ",(0,i.jsx)(n.code,{children:"end"})," indicating the end of the stream, or ",(0,i.jsx)(n.code,{children:"first-message"})," indicating no data has been emitted yet on the stream."]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"authInfo?"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/ContainerAuthInfo",children:(0,i.jsx)(n.code,{children:"ContainerAuthInfo"})})]}),"\n",(0,i.jsx)(n.p,{children:"Authentication credentials"}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(n.h2,{id:"source",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/89c394b9e7c49aca6b677ed6b74c62569c71d950/packages/extension-api/src/extension-api.d.ts#L3325",children:"packages/extension-api/src/extension-api.d.ts:3325"})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>c});var i=s(27378);const t={},a=i.createContext(t);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);