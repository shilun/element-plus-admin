import{C as e,b0 as t,D as o,U as n,aM as s,ax as a,S as u,cv as c,am as d,b3 as l,v as m,cd as r,cq as i,cw as v,cr as p,an as f,E as y,F as M,d as b,g as h,z as x,aO as E}from"./index.4aa55768.js";import{g}from"./scroll.c13cd664.js";import{P as w}from"./vnode.7fa5dac1.js";const k=(s,a,u)=>{let c={offsetX:0,offsetY:0};const d=e=>{const t=e.clientX,o=e.clientY,{offsetX:a,offsetY:u}=c,d=s.value.getBoundingClientRect(),l=d.left,m=d.top,r=d.width,i=d.height,v=document.documentElement.clientWidth,p=document.documentElement.clientHeight,f=-l+a,y=-m+u,M=v-l-r+a,b=p-m-i+u,h=e=>{const d=Math.min(Math.max(a+e.clientX-t,f),M),l=Math.min(Math.max(u+e.clientY-o,y),b);c={offsetX:d,offsetY:l},s.value.style.transform=`translate(${n(d)}, ${n(l)})`},x=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",x)},l=()=>{a.value&&s.value&&a.value.removeEventListener("mousedown",d)};e((()=>{t((()=>{u.value?a.value&&s.value&&a.value.addEventListener("mousedown",d):l()}))})),o((()=>{l()}))},C=e=>{s(e)||a("[useLockscreen]","You need to pass a ref param to this function");const t=u("popup"),o=c((()=>t.bm("parent","hidden")));if(!d||l(document.body,o.value))return;let n=0,f=!1,y="0";const M=()=>{setTimeout((()=>{p(document.body,o.value),f&&(document.body.style.width=y)}),200)};m(e,(e=>{if(!e)return void M();f=!l(document.body,o.value),f&&(y=document.body.style.width),n=g(t.namespace.value);const s=document.documentElement.clientHeight<document.body.scrollHeight,a=r(document.body,"overflowY");n>0&&(s||"scroll"===a)&&f&&(document.body.style.width=`calc(100% - ${n}px)`),i(document.body,o.value)})),v((()=>M()))},L=e=>{if(!e)return{onClick:f,onMousedown:f,onMouseup:f};let t=!1,o=!1;return{onClick:n=>{t&&o&&e(n),t=o=!1},onMousedown:e=>{t=e.target===e.currentTarget},onMouseup:e=>{o=e.target===e.currentTarget}}};const Y=b({name:"ElOverlay",props:y({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:M([String,Array,Object])},zIndex:{type:M([String,Number])}}),emits:{click:e=>e instanceof MouseEvent},setup(e,{slots:t,emit:o}){const n=u("overlay"),{onClick:s,onMousedown:a,onMouseup:c}=L(e.customMaskEvent?void 0:e=>{o("click",e)});return()=>e.mask?h("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:a,onMouseup:c},[x(t,"default")],w.STYLE|w.CLASS|w.PROPS,["onClick","onMouseup","onMousedown"]):E("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[x(t,"default")])}});export{Y as E,C as a,L as b,k as u};
