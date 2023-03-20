"use strict";(self.webpackChunksimply_csv_docs=self.webpackChunksimply_csv_docs||[]).push([[7242],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:12},o="Upload a File programmatically",i={unversionedId:"Developers/upload-file",id:"Developers/upload-file",title:"Upload a File programmatically",description:"There are several benefits to uploading a file programmatically in a CSV file uploading application.",source:"@site/docs/Developers/upload-file.md",sourceDirName:"Developers",slug:"/Developers/upload-file",permalink:"/docs/Developers/upload-file",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Developers/upload-file.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"List Webhooks",permalink:"/docs/Developers/list-webhooks"},next:{title:"View a file programmatically",permalink:"/docs/Developers/view-file"}},p={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upload-a-file-programmatically"},"Upload a File programmatically"),(0,a.kt)("p",null,"There are several benefits to uploading a file programmatically in a CSV file uploading application. "),(0,a.kt)("p",null,"Firstly, it ensures that the file is uploaded correctly and automatically without requiring manual intervention or the risk of human error. By programming the file upload process, you can be sure that the uploaded file will be processed and stored in the correct location with the correct naming conventions and file type."),(0,a.kt)("p",null,"Secondly, programmatically uploading files can help to streamline the overall process and reduce the time and effort required to complete the task. This can be particularly useful when uploading large numbers of files or when dealing with time-sensitive data."),(0,a.kt)("p",null,"Additionally, programming the file upload process can help to improve the overall security of the application by implementing secure file transfer protocols and validating the file before it is processed. This can help to prevent malicious files from being uploaded and can protect the application and its users from potential security threats."),(0,a.kt)("p",null,"You follow the following guidelines to upload a file programmatically:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This is a function that takes ",(0,a.kt)("strong",{parentName:"li"},"$request")," of type UploadFileRequest as argument and a contract object ",(0,a.kt)("strong",{parentName:"li"},"$uploadFileContract")," and returns a ",(0,a.kt)("strong",{parentName:"li"},"FileResource"),". The ",(0,a.kt)("strong",{parentName:"li"},"$request")," object is used to obtain the template ID as seen follow: ",(0,a.kt)("strong",{parentName:"li"},"$request->get('template_id', 0)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public function store(UploadFileRequest $request, UploadFileContract $uploadFileContract)\n    {\n        /** @var UploadedFile $file */\n        $file = $request->file('file');\n        $user = auth()->user();\n\n        $filename = $uploadFileContract->uploadFile($file, $user);\n\n        $newFile = $user->files()->create([\n            'template_id' => $request->get('template_id', 0),\n            'filename' => $filename,\n            'mappings' => []\n        ]);\n\n        event(new FileUploaded($newFile));\n\n        return new FileResource($newFile);\n    }\n\n\n        \n")))}d.isMDXComponent=!0}}]);