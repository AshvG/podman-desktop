"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92423],{87064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(24246),s=t(71670);const o={},r="Function: logsContainer()",c={id:"namespaces/containerEngine/functions/logsContainer",title:"Function: logsContainer()",description:"logsContainer(engineId, id, callback): Promise\\",source:"@site/api/namespaces/containerEngine/functions/logsContainer.md",sourceDirName:"namespaces/containerEngine/functions",slug:"/namespaces/containerEngine/functions/logsContainer",permalink:"/api/namespaces/containerEngine/functions/logsContainer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"listVolumes",permalink:"/api/namespaces/containerEngine/functions/listVolumes"},next:{title:"onEvent",permalink:"/api/namespaces/containerEngine/functions/onEvent"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Source",id:"source",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"function-logscontainer",children:"Function: logsContainer()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"logsContainer"}),"(",(0,i.jsx)(n.code,{children:"engineId"}),", ",(0,i.jsx)(n.code,{children:"id"}),", ",(0,i.jsx)(n.code,{children:"callback"}),"): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Get the streamed logs of a container"}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"engineId"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.p,{children:["the id of the engine managing the container, obtained from the result of ",(0,i.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/listContainers",children:"containerEngine.listContainers"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"id"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.p,{children:["the id of the container on this engine, obtained from the result of ",(0,i.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/listContainers",children:"containerEngine.listContainers"})," or as the result of ",(0,i.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/createContainer",children:"containerEngine.createContainer"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"callback"})]}),"\n",(0,i.jsxs)(n.p,{children:["the function called when new logs are emitted or new events happen on the stream. The value of ",(0,i.jsx)(n.code,{children:"name"})," can be either ",(0,i.jsx)(n.code,{children:"data"})," (and ",(0,i.jsx)(n.code,{children:"data"})," contains the logs), or ",(0,i.jsx)(n.code,{children:"end"})," indicating the end of the stream, or ",(0,i.jsx)(n.code,{children:"first-message"})," indicating no data has been emitted yet on the stream."]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(n.h2,{id:"source",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/736c0de62852d6aea6e69d63cb632b1688d9f316/packages/extension-api/src/extension-api.d.ts#L3348",children:"packages/extension-api/src/extension-api.d.ts:3348"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(27378);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);