import{v as s,j as t,L as o,B as a}from"./index-DpvumboI.js";import{u as n}from"./useFetchGetSingleData-BbIs8BXM.js";import d from"./ArticlesCreatePage-DVEQizoh.js";import"./settings-BLllxyNW.js";import"./input-B-MYu4Pw.js";import"./apiUpdateCalls-RxKNI8Sk.js";import"./getImage-Uq0lW1Ny.js";const h=()=>{const{id:r}=s();if(!r)return t.jsx("h2",{children:"Nothing Found"});const{data:i,loading:e}=n("news",r);return e?t.jsx(o,{}):!i&&!e?t.jsx("h2",{children:"No data"}):t.jsx(a,{children:t.jsx(d,{isEdit:!0,data:i})})};export{h as default};
