"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53588],{49567:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var s=i(62540),d=i(43023);const t={},r="Interface: ContainerProviderConnection",c={id:"interfaces/ContainerProviderConnection",title:"Interface: ContainerProviderConnection",description:"Properties",source:"@site/api/interfaces/ContainerProviderConnection.md",sourceDirName:"interfaces",slug:"/interfaces/ContainerProviderConnection",permalink:"/api/interfaces/ContainerProviderConnection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"ContainerJSONEvent",permalink:"/api/interfaces/ContainerJSONEvent"},next:{title:"ContainerProviderConnectionEndpoint",permalink:"/api/interfaces/ContainerProviderConnectionEndpoint"}},o={},a=[{value:"Properties",id:"properties",level:2},{value:"displayName?",id:"displayname",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"endpoint",id:"endpoint",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"lifecycle?",id:"lifecycle",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"vmType?",id:"vmtype",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"vmTypeDisplayName?",id:"vmtypedisplayname",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"Methods",id:"methods",level:2},{value:"status()",id:"status",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-7",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"interface-containerproviderconnection",children:"Interface: ContainerProviderConnection"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"displayname",children:"displayName?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"displayName"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/35a6be1d97cd4f7c97ee46654569b512bb86efc7/packages/extension-api/src/extension-api.d.ts#L393",children:"packages/extension-api/src/extension-api.d.ts:393"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"endpoint",children:"endpoint"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"endpoint"}),": ",(0,s.jsx)(n.a,{href:"/api/interfaces/ContainerProviderConnectionEndpoint",children:(0,s.jsx)(n.code,{children:"ContainerProviderConnectionEndpoint"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/35a6be1d97cd4f7c97ee46654569b512bb86efc7/packages/extension-api/src/extension-api.d.ts#L395",children:"packages/extension-api/src/extension-api.d.ts:395"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"lifecycle",children:"lifecycle?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"lifecycle"}),": ",(0,s.jsx)(n.a,{href:"/api/interfaces/ProviderConnectionLifecycle",children:(0,s.jsx)(n.code,{children:"ProviderConnectionLifecycle"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/35a6be1d97cd4f7c97ee46654569b512bb86efc7/packages/extension-api/src/extension-api.d.ts#L396",children:"packages/extension-api/src/extension-api.d.ts:396"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"name"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/35a6be1d97cd4f7c97ee46654569b512bb86efc7/packages/extension-api/src/extension-api.d.ts#L392",children:"packages/extension-api/src/extension-api.d.ts:392"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"type"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type"}),": ",(0,s.jsx)(n.code,{children:'"docker"'})," | ",(0,s.jsx)(n.code,{children:'"podman"'})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/35a6be1d97cd4f7c97ee46654569b512bb86efc7/packages/extension-api/src/extension-api.d.ts#L394",children:"packages/extension-api/src/extension-api.d.ts:394"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"vmtype",children:"vmType?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"vmType"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/35a6be1d97cd4f7c97ee46654569b512bb86efc7/packages/extension-api/src/extension-api.d.ts#L398",children:"packages/extension-api/src/extension-api.d.ts:398"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"vmtypedisplayname",children:"vmTypeDisplayName?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"vmTypeDisplayName"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"the vmTypeDisplayName property cannot be set if vmType is undefined"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/35a6be1d97cd4f7c97ee46654569b512bb86efc7/packages/extension-api/src/extension-api.d.ts#L402",children:"packages/extension-api/src/extension-api.d.ts:402"})}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"status",children:"status()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"status"}),"(): ",(0,s.jsx)(n.a,{href:"/api/type-aliases/ProviderConnectionStatus",children:(0,s.jsx)(n.code,{children:"ProviderConnectionStatus"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/type-aliases/ProviderConnectionStatus",children:(0,s.jsx)(n.code,{children:"ProviderConnectionStatus"})})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/35a6be1d97cd4f7c97ee46654569b512bb86efc7/packages/extension-api/src/extension-api.d.ts#L397",children:"packages/extension-api/src/extension-api.d.ts:397"})})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(63696);const d={},t=s.createContext(d);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);