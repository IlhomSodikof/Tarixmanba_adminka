import{r as o,j as n,B as p,n as c,T as x}from"./index-D4QZao9a.js";const g=({fileChange:a,defaultFile:e,id:t})=>{const[s,l]=o.useState(e&&e.split("/")[e.split("/").length-1]||""),r=i=>{i.target.files&&(a(i.target.files),l(i.target.files[0].name))};return n.jsxs(p,{sx:{width:"100%"},children:[n.jsx("input",{accept:"image/*",type:"file",onChange:r,id:t?`input-file-${t}`:"input-file",style:{display:"none"}}),n.jsxs("label",{htmlFor:t?`input-file-${t}`:"input-file",style:{display:"flex"},children:[n.jsx(c,{variant:"contained",component:"span",children:"Upload File"}),n.jsx(x,{sx:{display:"flex",alignItems:"center",paddingLeft:"10px",flexGrow:1,backgroundColor:"primary.contrastText",padding:"0 10px"},children:s})]})]})};async function d(a,e){const s=await(await fetch(a)).blob();return new File([s],e,{type:s.type})}export{g as U,d as g};
