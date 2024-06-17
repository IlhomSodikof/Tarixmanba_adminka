async function a(t,n){const e=await(await fetch(t)).blob();return new File([e],n,{type:e.type})}export{a as g};
