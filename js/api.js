const getData=(t,e,r)=>{fetch(t).then((t=>{if(t.ok)return t.json();throw new Error})).then((t=>e(t))).catch((()=>r()))};export{getData};