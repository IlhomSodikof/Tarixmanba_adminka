import{r as c,j as t,T as g,B as j}from"./index-D4QZao9a.js";import{u as D,a as S,g as y,T,U as b,D as f}from"./getFilteredData-BvwjKzg9.js";import{u as v}from"./useFetchGetAllDatas-CzEXS4OH.js";import"./settings-DtboB3m9.js";import"./apiGetCalls-BRT45bd3.js";const r=[{text:"Key",space:6},{text:"Value",space:11},{text:"",space:1}],P=()=>{const[o,n]=c.useState(1),[l,u]=c.useState(""),p=D(l),{data:a,loading:d,count:i}=v("connection_value",o,p),x=c.useMemo(()=>r.reduce((e,s)=>e+s.space,1),[r]),h=r.map(e=>t.jsx(S,{sx:{width:`${e.space/x*90}%`},children:t.jsx(g,{children:e.text})},e.text)),m=a&&a.length>0&&a.map(e=>{const s=y({data:e,keys:["connection_title","value"]});return t.jsx(T,{filtered:s,info:e,deleteText:"connection_value"},e.id)});return t.jsxs(j,{children:[t.jsx(b,{updateSearch:e=>u(e)}),t.jsx(f,{count:i,headersDisplay:h,loading:d,data:a||[],result:m,page:o,updatePage:e=>n(e)})]})};export{P as default};
