import{q as k,r as t,j as l,B as u,S as y,T as x,n as d}from"./index-D4QZao9a.js";import{U as m}from"./input-SWzy2ybu.js";import{U as B,g as v}from"./getImage-DRc_6Ldn.js";import{u as w,c as F}from"./apiUpdateCalls-CEM1YQVb.js";import"./settings-DtboB3m9.js";const D=({isEdit:r,data:e})=>{const p=k(),[n,h]=t.useState((e==null?void 0:e.title)||""),[o,a]=t.useState((e==null?void 0:e.link)||""),[f,g]=t.useState((e==null?void 0:e.file)||null),[j,c]=t.useState(!1),S=async()=>{if(!n||!o||!f)return;c(!0);const s=new FormData;if(s.append("title",n),s.append("link",o),r){const i=await v(e==null?void 0:e.file,"file");s.append("file",i)}else s.append("file",f[0]);r?w("sliders",e==null?void 0:e.id,s,!0).then(i=>(p("/sliders",{replace:!0}),i)).catch(i=>i).finally(()=>c(!1)):F("sliders",s,!0).then(i=>(p("/sliders",{replace:!0}),i)).catch(i=>i).finally(()=>c(!1))};return l.jsxs(u,{children:[l.jsxs(y,{direction:"row",gap:2,sx:{marginBottom:"20px"},children:[l.jsxs(u,{sx:{width:"100%"},children:[l.jsxs(x,{sx:{marginBottom:"10px"},children:[l.jsx("span",{style:{color:"red"},children:"*"})," Title"]}),l.jsx(m,{defaultValue:n,updateValue:s=>h(s),fullWidth:!0})]}),l.jsxs(u,{sx:{width:"100%"},children:[l.jsxs(x,{sx:{marginBottom:"10px"},children:[l.jsx("span",{style:{color:"red"},children:"*"})," Link"]}),l.jsx(m,{defaultValue:o,updateValue:s=>a(s),fullWidth:!0})]})]}),l.jsx(B,{fileChange:s=>g(s),defaultFile:e==null?void 0:e.file}),l.jsx(d,{variant:"contained",disabled:j,sx:{marginTop:"20px"},onClick:S,children:r?"Edit":"Create"})]})};export{D as default};
