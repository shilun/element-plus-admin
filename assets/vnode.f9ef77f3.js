import{aw as E,br as T,a$ as e,cx as r}from"./index.7afd9b66.js";var s=(E=>(E[E.TEXT=1]="TEXT",E[E.CLASS=2]="CLASS",E[E.STYLE=4]="STYLE",E[E.PROPS=8]="PROPS",E[E.FULL_PROPS=16]="FULL_PROPS",E[E.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",E[E.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",E[E.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",E[E.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",E[E.NEED_PATCH=512]="NEED_PATCH",E[E.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",E[E.HOISTED=-1]="HOISTED",E[E.BAIL=-2]="BAIL",E))(s||{});const S=E=>{if(!T(E))return{};const s=E.props||{},S=(T(E.type)?E.type.props:void 0)||{},A={};return Object.keys(S).forEach((E=>{e(S[E],"default")&&(A[E]=S[E].default)})),Object.keys(s).forEach((E=>{A[r(E)]=s[E]})),A},A=e=>{const r=E(e)?e:[e],s=[];return r.forEach((e=>{var r;E(e)?s.push(...A(e)):T(e)&&E(e.children)?s.push(...A(e.children)):(s.push(e),T(e)&&(null==(r=e.component)?void 0:r.subTree)&&s.push(...A(e.component.subTree)))})),s};export{s as P,A as f,S as g};
