"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82451],{7516:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=i(24246),t=i(71670);const o={sidebar_position:10,title:"Building and testing an image",description:"Building an image and testing it in Kind",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes"]},r="Building an image and testing it in Kind",l={id:"kind/building-an-image-and-testing-it-in-kind",title:"Building and testing an image",description:"Building an image and testing it in Kind",source:"@site/docs/kind/building-an-image-and-testing-it-in-kind.md",sourceDirName:"kind",slug:"/kind/building-an-image-and-testing-it-in-kind",permalink:"/docs/kind/building-an-image-and-testing-it-in-kind",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kind/building-an-image-and-testing-it-in-kind.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Building and testing an image",description:"Building an image and testing it in Kind",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes"]},sidebar:"mySidebar",previous:{title:"Deleting your Kind cluster",permalink:"/docs/kind/deleting-your-kind-cluster"},next:{title:"Push an image to Kind",permalink:"/docs/kind/pushing-an-image-to-kind"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Icon:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"building-an-image-and-testing-it-in-kind",children:"Building an image and testing it in Kind"}),"\n",(0,s.jsx)(n.p,{children:"With Podman Desktop, you can build an image with your container engine, and test it in your local Kind-powered Kubernetes cluster."}),"\n",(0,s.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/containers",children:"You onboarded a container engine"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/kind",children:"You onboarded a Kind cluster"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/kind/working-with-your-local-kind-cluster",children:"You have set your Kubernetes context to your local Kind-powered Kubernetes cluster"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["A container definition file: ",(0,s.jsx)(n.code,{children:"Containerfile"})," or ",(0,s.jsx)(n.code,{children:"Dockerfile"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build your image:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-cloud",size:"lg"})," Images > ",(0,s.jsx)(i,{icon:"fa-solid fa-cube",size:"lg"})," Build an image"]}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Containerfile path"}),": select your ",(0,s.jsx)(n.code,{children:"Containerfile"})," or ",(0,s.jsx)(n.code,{children:"Dockerfile"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Build context directory"}),": optionally, select a directory different from the directory containing your ",(0,s.jsx)(n.code,{children:"Containerfile"})," or ",(0,s.jsx)(n.code,{children:"Dockerfile"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Image Name"}),": enter your image name ",(0,s.jsx)(n.code,{children:"my-custom-image"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-cube",size:"lg"})," Build"]}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Wait for the image build to finish."}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Done"})," to get back to the images list."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Push your image to your Kind cluster:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-cloud",size:"lg"})," Search images"]}),": enter your image name ",(0,s.jsx)(n.code,{children:"my-custom-image"})," to find the image."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,s.jsx)(i,{icon:"fa-solid fa-ellipsis-v",size:"lg"})," Push image to Kind cluster"]}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Test your image by creating a container:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(i,{icon:"fa-solid fa-play",size:"lg"})})," to open the ",(0,s.jsx)(n.strong,{children:"Create a container from image"})," dialog."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Container name"}),": enter ",(0,s.jsx)(n.code,{children:"my-custom-image-container"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Review the parameters that Podman Desktop has detected from your image definition."}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-play",size:"lg"})," Start Container"]})," to start the container in your container engine."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Test your image and container on your Kind cluster:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-cloud",size:"lg"})," Search containers"]}),": enter ",(0,s.jsx)(n.code,{children:"my-custom-image-container"})," to find the running container."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,s.jsx)(i,{icon:"fa-solid fa-rocket",size:"lg"})," Deploy to Kubernetes"]})," to open the ",(0,s.jsx)(n.strong,{children:"Deploy generated pod to Kubernetes"})," screen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pod Name"}),": keep the proposed value ",(0,s.jsx)(n.code,{children:"my-custom-image-container-pod"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use Kubernetes Services"}),": select ",(0,s.jsxs)(n.strong,{children:["Replace ",(0,s.jsx)(n.code,{children:"hostPort"})," exposure on containers by Services. It is the recommended way to expose ports, as a cluster policy might prevent to use ",(0,s.jsx)(n.code,{children:"hostPort"}),"."]})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Expose service locally using Kubernetes Ingress"}),": if your container is exposing at a port, select ",(0,s.jsxs)(n.strong,{children:["Create a Kubernetes ingress to get access to the ports that this pod exposes, at the default ingress controller location. Example: on a default Kind cluster created with Podman Desktop: ",(0,s.jsx)(n.code,{children:"http://localhost:9090"}),". Requirements: your cluster has an ingress controller`"]}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Optionally, if your container is exposing more than one port, select the port to expose."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Kubernetes namespaces"}),": select ",(0,s.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-rocket",size:"lg"})," Deploy"]}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Wait for the pod to reach the state: ",(0,s.jsx)(n.strong,{children:"Phase: Running"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Done"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-cubes",size:"lg"})," Pods"]})," screen lists the running ",(0,s.jsx)(n.code,{children:"my-image-container-pod"})," pod."]}),"\n",(0,s.jsx)(n.li,{children:"Click on the pod name to view details and logs."}),"\n",(0,s.jsxs)(n.li,{children:["Optionally, if your container is exposing a port, go to ",(0,s.jsx)(n.code,{children:"http://localhost:9090"}),": your application is running."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var s=i(27378);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);