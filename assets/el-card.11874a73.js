import{E as a,F as e,d as s,S as t,o as r,c as d,n as l,a as o,z as n,y as c,t as y,Z as p,e as h,a1 as i,_ as u,a2 as f}from"./index.7afd9b66.js";const v=a({header:{type:String,default:""},bodyStyle:{type:e([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),m=s({name:"ElCard"});const b=f(u(s({...m,props:v,setup(a){const e=t("card");return(a,s)=>(r(),d("div",{class:l([o(e).b(),o(e).is(`${a.shadow}-shadow`)])},[a.$slots.header||a.header?(r(),d("div",{key:0,class:l(o(e).e("header"))},[n(a.$slots,"header",{},(()=>[c(y(a.header),1)]))],2)):p("v-if",!0),h("div",{class:l(o(e).e("body")),style:i(a.bodyStyle)},[n(a.$slots,"default")],6)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]));export{b as E};
