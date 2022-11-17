import{c3 as e,d as t,r as s,s as a,x as l,o as i,h as n,w as o,g as d,a as c,e as r,n as x,t as u,k as _,j as m}from"./index.7afd9b66.js";import{a as p,E as f}from"./el-col.6aabc6d9.js";import{E as g}from"./el-card.11874a73.js";import{E as v}from"./el-skeleton-item.0630a178.js";import{_ as y}from"./CountTo.vue_vue_type_script_setup_true_lang.4947c0c8.js";import{_ as b}from"./_plugin-vue_export-helper.cdc0426e.js";const h=()=>e.get({url:"/analysis/userAccessSource"}),w=()=>e.get({url:"/analysis/weeklyUserActivity"}),j=()=>e.get({url:"/analysis/monthlySales"}),$={class:"flex flex-col justify-between"},k={class:"flex flex-col justify-between"},z={class:"flex flex-col justify-between"},S={class:"flex flex-col justify-between"},P=b(t({__name:"PanelGroup",setup(t){const{t:b}=_(),{getPrefixCls:h}=m(),w=h("panel"),j=s(!0);let P=a({users:0,messages:0,moneys:0,shoppings:0});return(async()=>{const t=await e.get({url:"/analysis/total"}).catch((()=>{})).finally((()=>{j.value=!1}));P=Object.assign(P,(null==t?void 0:t.data)||{})})(),(e,t)=>{const s=l("Icon");return i(),n(c(f),{gutter:20,justify:"space-between",class:x(c(w))},{default:o((()=>[d(c(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(c(g),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(c(v),{loading:j.value,animated:"",rows:2},{default:o((()=>[r("div",{class:x(`${c(w)}__item flex justify-between`)},[r("div",null,[r("div",{class:x(`${c(w)}__item--icon ${c(w)}__item--peoples p-16px inline-block rounded-6px`)},[d(s,{icon:"svg-icon:peoples",size:40})],2)]),r("div",$,[r("div",{class:x(`${c(w)}__item--text text-16px text-gray-500 text-right`)},u(c(b)("analysis.newUser")),3),d(c(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":102400,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),d(c(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(c(g),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(c(v),{loading:j.value,animated:"",rows:2},{default:o((()=>[r("div",{class:x(`${c(w)}__item flex justify-between`)},[r("div",null,[r("div",{class:x(`${c(w)}__item--icon ${c(w)}__item--message p-16px inline-block rounded-6px`)},[d(s,{icon:"svg-icon:message",size:40})],2)]),r("div",k,[r("div",{class:x(`${c(w)}__item--text text-16px text-gray-500 text-right`)},u(c(b)("analysis.unreadInformation")),3),d(c(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":81212,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),d(c(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(c(g),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(c(v),{loading:j.value,animated:"",rows:2},{default:o((()=>[r("div",{class:x(`${c(w)}__item flex justify-between`)},[r("div",null,[r("div",{class:x(`${c(w)}__item--icon ${c(w)}__item--money p-16px inline-block rounded-6px`)},[d(s,{icon:"svg-icon:money",size:40})],2)]),r("div",z,[r("div",{class:x(`${c(w)}__item--text text-16px text-gray-500 text-right`)},u(c(b)("analysis.transactionAmount")),3),d(c(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":9280,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),d(c(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(c(g),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(c(v),{loading:j.value,animated:"",rows:2},{default:o((()=>[r("div",{class:x(`${c(w)}__item flex justify-between`)},[r("div",null,[r("div",{class:x(`${c(w)}__item--icon ${c(w)}__item--shopping p-16px inline-block rounded-6px`)},[d(s,{icon:"svg-icon:shopping",size:40})],2)]),r("div",S,[r("div",{class:x(`${c(w)}__item--text text-16px text-gray-500 text-right`)},u(c(b)("analysis.totalShopping")),3),d(c(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":13600,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-843cc555"]]),A=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{P,w as a,j as b,A as c,h as g};
