import{d as e,u as t,a as r,o as a,c as s}from"./index.7afd9b66.js";const p=e({__name:"Redirect",setup(e){const{currentRoute:p,replace:c}=t(),{params:o,query:d}=r(p),{path:n,_redirect_type:i="path"}=o;Reflect.deleteProperty(o,"_redirect_type"),Reflect.deleteProperty(o,"path");const u=Array.isArray(n)?n.join("/"):n;return c("name"===i?{name:u,query:d,params:o}:{path:u.startsWith("/")?u:"/"+u,query:d}),(e,t)=>(a(),s("div"))}});export{p as default};
