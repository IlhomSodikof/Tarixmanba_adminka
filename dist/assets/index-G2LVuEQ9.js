import{r,j as t,T as g,B as j}from"./index-D4QZao9a.js";import{u as y,g as D,T,a as S,U as b,D as f}from"./getFilteredData-BvwjKzg9.js";import{u as C}from"./useFetchGetAllDatas-CzEXS4OH.js";import"./settings-DtboB3m9.js";import"./apiGetCalls-BRT45bd3.js";const c=[{text:"#",space:1},{text:"Icon",space:1},{text:"Title",space:14},{text:"",space:1}],U=()=>{const[n,p]=r.useState(""),d=y(n),[o,u]=r.useState(1),{data:a,loading:l,count:i}=C("category",o,d),x=r.useMemo(()=>c.reduce((e,s)=>e+s.space,1),[c]),h=a&&!l&&a.length>0&&a.map(e=>{const s=D({data:e,keys:["id","icon","title"]});return t.jsx(T,{info:e,filtered:s,deleteText:"category"},e.id)}),m=c.map(e=>t.jsx(S,{sx:{width:`${e.space/x*100}%`},children:t.jsx(g,{children:e.text})},e.text));return t.jsxs(j,{children:[t.jsx(b,{updateSearch:e=>p(e)}),t.jsx(f,{count:i,headersDisplay:m,loading:l,data:a||[],result:h,page:o,updatePage:e=>u(e)})]})};export{U as default};
