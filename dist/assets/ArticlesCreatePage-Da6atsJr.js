import{r,q as y,j as t,B as C,T as u,n as F}from"./index-D364flWg.js";import{U as m}from"./input-Bs0gHKzX.js";import{u as S,c as T}from"./apiUpdateCalls-pqf5ORJ6.js";import{U as w,g as B}from"./getImage-DF1OkTmh.js";import"./settings-CG1kX9pl.js";const b=({isEdit:l=!1,data:e})=>{const[i,g]=r.useState((e==null?void 0:e.title)||""),[p,a]=r.useState((e==null?void 0:e.content)||""),[o,h]=r.useState((e==null?void 0:e.file)||null),[j,c]=r.useState(!1);console.log(e);const f=y(),v=async()=>{if(!i||!o&&!l)return;c(!0);const s=new FormData;if(s.append("title",i),s.append("content",p),!l)o&&s.append("file",o[0]);else{const n=await B(e==null?void 0:e.file,"file");s.append("file",n)}if(l){for(var x of s.entries())console.log(x[0]+", "+x[1]);S("news",e==null?void 0:e.id,s,!0).then(n=>(f("/articles",{replace:!0}),n)).catch(n=>console.log(n)).finally(()=>c(!1))}else T("news",s,!0).then(n=>(f("/articles",{replace:!0}),n)).catch(n=>n).finally(()=>c(!1))};return t.jsxs(C,{children:[t.jsxs(u,{sx:{marginBottom:"10px"},children:[t.jsx("span",{style:{color:"red"},children:"*"})," Title"]}),t.jsx(m,{updateValue:s=>g(s),defaultValue:i}),t.jsx(u,{sx:{margin:"20px 0 10px"},children:"Content"}),t.jsx(m,{updateValue:s=>a(s),defaultValue:p}),t.jsx(u,{sx:{margin:"20px 0 10px"},children:"File"}),t.jsx(w,{fileChange:s=>h(s),defaultFile:e==null?void 0:e.file}),t.jsx(F,{variant:"contained",disabled:j,sx:{marginTop:"20px"},onClick:v,children:l?"Edit":"Create"})]})};export{b as default};
