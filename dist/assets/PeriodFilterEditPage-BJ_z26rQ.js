import{v as o,j as r,L as s,B as a}from"./index-D4QZao9a.js";import{u as n}from"./useFetchGetSingleData-D8tBSWFx.js";import d from"./PeriodFilterCreatePage-BogZil9D.js";import"./settings-DtboB3m9.js";import"./input-SWzy2ybu.js";import"./apiUpdateCalls-CEM1YQVb.js";const f=()=>{const{id:t}=o();if(!t)return r.jsx("h2",{children:"Nothing Found"});const{data:i,loading:e}=n("period_filter",t);return e?r.jsx(s,{}):!i&&!e?r.jsx("h2",{children:"No data"}):r.jsx(a,{children:r.jsx(d,{isEdit:!0,data:i})})};export{f as default};
