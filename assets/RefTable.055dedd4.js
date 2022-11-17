import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang.2ed35f46.js";import{d as a,s as t,aO as l,r as o,o as i,c as s,g as n,w as r,a as d,y as m,t as p,e as b,a0 as c,k as u}from"./index.7afd9b66.js";import{_ as f}from"./Table.vue_vue_type_script_lang.34c0a333.js";import{g}from"./index.4d76eb98.js";import{E as _}from"./el-tag.1afcd80a.js";import{E as D}from"./el-button.35bda1b7.js";import{u as v}from"./useTable.1a661567.js";import"./el-card.11874a73.js";import"./el-popper.427b6192.js";import"./index.91afac6e.js";import"./tsxHelper.67f40a5c.js";import"./event.dc71bbc2.js";import"./index.f681da9c.js";import"./el-input.d94b3c8e.js";import"./index.bab1746d.js";import"./scroll.fe5b97df.js";import"./debounce.d6b0c3c6.js";import"./validator.377aaeb1.js";import"./el-message-box.59c495fa.js";import"./el-overlay.dce9643a.js";import"./vnode.f9ef77f3.js";import"./aria.73d9b7fc.js";const j={class:"ml-30px"},x=a({__name:"RefTable",setup(a){const{t:x}=u(),h=t([{field:"index",label:x("tableDemo.index"),type:"index"},{field:"content",label:x("tableDemo.header"),children:[{field:"title",label:x("tableDemo.title")},{field:"author",label:x("tableDemo.author")},{field:"display_time",label:x("tableDemo.displayTime")},{field:"importance",label:x("tableDemo.importance"),formatter:(e,a,t)=>l(_,{type:1===t?"success":2===t?"warning":"danger"},(()=>x(1===t?"tableDemo.important":2===t?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:x("tableDemo.pageviews")}]},{field:"action",label:x("tableDemo.action")}]),{register:k,tableObject:y,methods:C}=v({getListApi:g,response:{list:"list",total:"total"},props:{columns:h}}),{getList:w}=C;w();const R=o(),T=o(),P=e=>{T.value=e?{total:y.total}:void 0},S=e=>{var a;null==(a=d(R))||a.setProps({reserveIndex:e})},z=e=>{var a;null==(a=d(R))||a.setProps({selection:e})},E=o(1),$=()=>{var e;null==(e=d(R))||e.setColumn([{field:"title",path:"label",value:`${x("tableDemo.title")}${d(E)}`}]),E.value++},A=e=>{var a;null==(a=d(R))||a.setProps({expand:e})},I=()=>{var e,a;null==(a=null==(e=d(R))?void 0:e.elTableRef)||a.toggleAllSelection()};return(a,t)=>(i(),s(c,null,[n(d(e),{title:`RefTable ${d(x)("tableDemo.operate")}`},{default:r((()=>[n(d(D),{onClick:t[0]||(t[0]=e=>P(!0))},{default:r((()=>[m(p(d(x)("tableDemo.show"))+" "+p(d(x)("tableDemo.pagination")),1)])),_:1}),n(d(D),{onClick:t[1]||(t[1]=e=>P(!1))},{default:r((()=>[m(p(d(x)("tableDemo.hidden"))+" "+p(d(x)("tableDemo.pagination")),1)])),_:1}),n(d(D),{onClick:t[2]||(t[2]=e=>S(!0))},{default:r((()=>[m(p(d(x)("tableDemo.reserveIndex")),1)])),_:1}),n(d(D),{onClick:t[3]||(t[3]=e=>S(!1))},{default:r((()=>[m(p(d(x)("tableDemo.restoreIndex")),1)])),_:1}),n(d(D),{onClick:t[4]||(t[4]=e=>z(!0))},{default:r((()=>[m(p(d(x)("tableDemo.showSelections")),1)])),_:1}),n(d(D),{onClick:t[5]||(t[5]=e=>z(!1))},{default:r((()=>[m(p(d(x)("tableDemo.hiddenSelections")),1)])),_:1}),n(d(D),{onClick:$},{default:r((()=>[m(p(d(x)("tableDemo.changeTitle")),1)])),_:1}),n(d(D),{onClick:t[6]||(t[6]=e=>A(!0))},{default:r((()=>[m(p(d(x)("tableDemo.showExpandedRows")),1)])),_:1}),n(d(D),{onClick:t[7]||(t[7]=e=>A(!1))},{default:r((()=>[m(p(d(x)("tableDemo.hiddenExpandedRows")),1)])),_:1}),n(d(D),{onClick:I},{default:r((()=>[m(p(d(x)("tableDemo.selectAllNone")),1)])),_:1})])),_:1},8,["title"]),n(d(e),{title:`RefTable ${d(x)("tableDemo.example")}`},{default:r((()=>[n(d(f),{ref_key:"tableRef",ref:R,pageSize:d(y).pageSize,"onUpdate:pageSize":t[8]||(t[8]=e=>d(y).pageSize=e),currentPage:d(y).currentPage,"onUpdate:currentPage":t[9]||(t[9]=e=>d(y).currentPage=e),data:d(y).tableList,loading:d(y).loading,pagination:T.value,onRegister:d(k)},{action:r((e=>[n(d(D),{type:"primary",onClick:e=>{}},{default:r((()=>[m(p(d(x)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),expand:r((e=>[b("div",j,[b("div",null,p(d(x)("tableDemo.title"))+"："+p(e.row.title),1),b("div",null,p(d(x)("tableDemo.author"))+"："+p(e.row.author),1),b("div",null,p(d(x)("tableDemo.displayTime"))+"："+p(e.row.display_time),1)])])),_:1},8,["pageSize","currentPage","data","loading","pagination","onRegister"])])),_:1},8,["title"])],64))}});export{x as default};
