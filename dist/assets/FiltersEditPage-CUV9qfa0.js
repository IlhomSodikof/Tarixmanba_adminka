import{v as e,j as t,L as s,B as a}from"./index-D4QZao9a.js";import{u as m}from"./useFetchGetSingleData-D8tBSWFx.js";import n from"./FiltersCreatePage-dYDYIqcQ.js";import"./settings-DtboB3m9.js";import"./input-SWzy2ybu.js";import"./select-Bm0LgXwg.js";import"./index-CGmBuFWw.js";import"./IconButton-BSwcrY0J.js";import"./apiUpdateCalls-CEM1YQVb.js";import"./useFetchGetAllDatas-CzEXS4OH.js";import"./apiGetCalls-BRT45bd3.js";const E=()=>{const{id:r}=e();if(!r)return t.jsx("h2",{children:"Nothing Found"});const{data:i,loading:o}=m("filters",r);return o?t.jsx(s,{}):!i&&!o?t.jsx("h2",{children:"No data"}):t.jsx(a,{children:t.jsx(n,{isEdit:!0,data:i})})};export{E as default};
