import{k as e}from"./index.4aa55768.js";const{t:r}=e(),n=()=>({required:e=>({required:!0,message:e||r("common.required")}),lengthRange:(e,r,n)=>{const{min:a,max:o,message:t}=n;e.length<a||e.length>o?r(new Error(t)):r()},notSpace:(e,r,n)=>{-1!==e.indexOf(" ")?r(new Error(n)):r()},notSpecialCharacters:(e,r,n)=>{/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/gi.test(e)?r(new Error(n)):r()},isEqual:(e,r,n,a)=>{e===r?n():n(new Error(a))}});export{n as u};
