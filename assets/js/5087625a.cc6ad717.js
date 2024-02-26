"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11724],{544:(e,s,t)=>{t.d(s,{Z:()=>i});var n=t(27378),l=t(161),a=t(24246);const i=function(){function e(){if(!document?.documentElement)return;const e=document.documentElement;"dark"===e.dataset?.theme?(e.classList.add("dark"),setTimeout((()=>{e.classList.add("dark")}),100)):(e.classList.remove("dark"),setTimeout((()=>{e.classList.remove("dark")}),100))}return(0,n.useEffect)((()=>{l.Z.canUseDOM&&e()}),[l.Z.canUseDOM]),(0,n.useEffect)((()=>{if(!l.Z.canUseDOM)return;const s=new MutationObserver((s=>{s.forEach((s=>{"attributes"!==s.type||"data-rh"!==s.attributeName&&"data-theme"!==s.attributeName||e()}))}));return s.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),()=>{s.disconnect()}}),[l.Z.canUseDOM]),(0,a.jsx)("div",{})}},50036:(e,s,t)=>{t.r(s),t.d(s,{WindowsDownloads:()=>m,default:()=>p});var n=t(50353),l=t(40684),a=t(27378),i=t(544),r=t(36641),c=t(92739),d=t(9928),o=t(19374),x=t(24246);function m(){const[e,s]=(0,a.useState)({version:"",binaryX64:"",setupX64:"",airgapsetupX64:"",binaryArm64:"",setupArm64:"",airgapsetupArm64:""});return(0,a.useEffect)((()=>{(async function(e){const s=await fetch("https://api.github.com/repos/containers/podman-desktop/releases/latest"),t=await s.json(),n=t.assets,l=n.filter((e=>e.name.endsWith("-setup-x64.exe")&&!e.name.includes("airgap")));if(1!==l.length)throw new Error("Unable to grab setup.exe");const a=n.filter((e=>e.name.endsWith("-setup-arm64.exe")&&!e.name.includes("airgap"))),i=l?.[0],r=i?.browser_download_url,c=a?.[0],d=c?.browser_download_url,o=n.filter((e=>e.name.endsWith("x64.exe")&&!e.name.includes("airgap")&&e.name!==i?.name)),x=o?.[0]?.browser_download_url,m=n.filter((e=>e.name.endsWith("arm64.exe")&&!e.name.includes("airgap")&&e.name!==c?.name)),p=m?.[0]?.browser_download_url,u=n.filter((e=>e.name.endsWith("-setup-x64.exe")&&e.name.includes("airgap")&&e.name!==i?.name)),h=u?.[0]?.browser_download_url,f=n.filter((e=>e.name.endsWith("-setup-arm64.exe")&&e.name.includes("airgap")&&e.name!==c?.name)),j=f?.[0]?.browser_download_url;e({version:t.name,binaryX64:x,setupX64:r,airgapsetupX64:h,binaryArm64:p,setupArm64:d,airgapsetupArm64:j})})(s).catch((e=>{console.error(e)}))}),[]),(0,x.jsxs)("div",{className:"basis-1/3 py-2 rounded-lg dark:text-gray-400 text-gray-900  bg-zinc-300/25 dark:bg-zinc-700/25 bg-blend-multiply text-center items-center",children:[(0,x.jsx)(c.G,{size:"4x",icon:d.ts2,className:"my-4"}),(0,x.jsx)("h2",{className:"w-full text-center text-4xl title-font font-medium pb-3 border-purple-500 border-b-2",children:"Windows"}),(0,x.jsx)("div",{className:"flex p-1 flex-col md:flex-col items-center align-top",children:(0,x.jsxs)("div",{className:"flex flex-col align-middle items-center",children:[(0,x.jsx)("h3",{className:"mt-0",children:"Podman Desktop for Windows"}),(0,x.jsxs)("div",{className:"pt-8",children:[(0,x.jsxs)(r.Z,{className:"mt-auto no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-md font-semibold",to:e.setupX64,children:[(0,x.jsx)(c.G,{size:"1x",icon:o.q7m,className:"mr-2"}),"Download Now"]}),(0,x.jsxs)("caption",{className:"block w-full mt-1 text/50 dark:text-white/50",children:["Windows installer x64, version ",e.version]})]}),(0,x.jsxs)("div",{className:"mt-4",children:[(0,x.jsx)("div",{children:"Other Windows downloads:"}),(0,x.jsxs)("div",{className:"pt-4 pb-4 flex flex-col",children:[(0,x.jsx)("div",{className:"",children:"Installer:"}),(0,x.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,x.jsxs)(r.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-3 font-semibold text-md",to:e.setupX64,children:[(0,x.jsx)(c.G,{size:"1x",icon:o.q7m,className:"mr-2"}),"x64"]}),(0,x.jsxs)(r.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-3 font-semibold text-md",to:e.setupArm64,children:[(0,x.jsx)(c.G,{size:"1x",icon:o.q7m,className:"mr-2"}),"arm64"]})]})]}),(0,x.jsxs)("div",{className:"pt-2 pb-4 flex flex-col",children:[(0,x.jsx)("div",{className:"",children:"Portable binary:"}),(0,x.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,x.jsxs)(r.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-2 font-semibold text-md",to:e.binaryX64,children:[(0,x.jsx)(c.G,{size:"1x",icon:o.q7m,className:"mr-2"}),"x64"]}),(0,x.jsxs)(r.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-2 font-semibold text-md",to:e.binaryArm64,children:[(0,x.jsx)(c.G,{size:"1x",icon:o.q7m,className:"mr-2"}),"arm64"]})]})]}),(0,x.jsxs)("div",{className:"pt-2 pb-4 flex flex-col",children:[(0,x.jsx)("div",{className:"",children:"Installer for restricted environments:"}),(0,x.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,x.jsxs)(r.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-6 font-semibold text-md",to:e.airgapsetupX64,children:[(0,x.jsx)(c.G,{size:"1x",icon:o.q7m,className:"mr-2"}),"x64"]}),(0,x.jsxs)(r.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-6 font-semibold text-md",to:e.airgapsetupArm64,children:[(0,x.jsx)(c.G,{size:"1x",icon:o.q7m,className:"mr-2"}),"arm64"]})]})]}),(0,x.jsxs)(r.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-6 font-semibold text-md",to:"/docs/installation/windows-install",children:[(0,x.jsx)(c.G,{size:"1x",icon:d.ts2,className:"mr-2"}),"Package Managers Guide"]})]}),(0,x.jsx)("div",{className:"flex flex-col align-middle items-center",children:(0,x.jsxs)("div",{className:"items-center text-center pt-6",children:[(0,x.jsxs)("p",{className:"text-lg",children:["Using ",(0,x.jsx)("strong",{children:"winget"}),"? Install in one command:"]}),(0,x.jsxs)("div",{className:"flex flex-row pt-3",children:[(0,x.jsx)("p",{className:"text-xl p-1",children:(0,x.jsx)(c.G,{size:"sm",icon:d.hVS,className:"mx-1 mt-2"})}),(0,x.jsxs)("div",{className:"dark:bg-charcoal-800/50 bg-zinc-300/50 p-1 text-xl dark:text-purple-200 text-purple-600 flex flex-row",children:[(0,x.jsxs)("div",{className:"w-72 truncate",children:[(0,x.jsx)(c.G,{size:"xs",icon:o.Jw3,className:"mx-2 mt-3"}),"winget install -e --id RedHat.Podman-Desktop"]}),(0,x.jsx)("div",{children:(0,x.jsxs)("button",{title:"Copy To Clipboard",className:"mr-2 p-1",children:[" ",(0,x.jsx)(c.G,{size:"xs",icon:o.O4,className:"ml-3  cursor-pointer text-xl  text-white-500",onClick:()=>{(async()=>{await navigator.clipboard.writeText("winget install -e --id RedHat.Podman-Desktop")})().catch((e=>{console.error("unable to copy instructions",e)}))}})]})})]})]})]})})]})})]})}function p(){const{siteConfig:e}=(0,n.Z)();return(0,x.jsxs)(l.Z,{title:e.title,description:"Downloads for Windows",children:[(0,x.jsx)(i.Z,{}),(0,x.jsx)("section",{className:"container mx-auto flex justify-center flex-col",children:(0,x.jsxs)("div",{className:"w-full flex flex-col",children:[(0,x.jsx)("h1",{className:"title-font sm:text-3xl text-2xl lg:text-5xl mb-10 font-medium text-gray-900 dark:text-white",children:"Windows Downloads"}),(0,x.jsx)("main",{className:"h-screen",children:(0,x.jsx)(m,{})})]})})]})}}}]);