import{s as e,H as a,v as t,r as n,a as s,bl as o,c8 as i,k as r,N as l}from"./index.7afd9b66.js";import{E as c}from"./el-message-box.59c495fa.js";import"./el-button.35bda1b7.js";import"./el-input.d94b3c8e.js";import"./el-overlay.dce9643a.js";const{t:g}=r(),u=r=>{const u=e({pageSize:10,currentPage:1,total:10,tableList:[],params:{},loading:!0,currentRow:null}),d=a((()=>({...u.params,pageSize:u.pageSize,pageIndex:u.currentPage})));t((()=>u.currentPage),(()=>{w.getList()})),t((()=>u.pageSize),(()=>{1===u.currentPage||(u.currentPage=1),w.getList()}));const p=n(),m=n(),v=async()=>{await l();const e=s(p);return e},P=async e=>{if(await((null==r?void 0:r.delListApi)&&(null==r?void 0:r.delListApi(e)))){i.success(g("common.delSuccess"));const a=(u.total%u.pageSize===e.length||1===u.pageSize)&&u.currentPage>1?u.currentPage-1:u.currentPage;u.currentPage=a,w.getList()}},w={getList:async()=>{var e;u.loading=!0;const a=await(null==r?void 0:r.getListApi(s(d)).finally((()=>{u.loading=!1})));a&&(u.tableList=o(a.data||{},null==r?void 0:r.response.list),u.total=o(a.data||{},null==(e=null==r?void 0:r.response)?void 0:e.total)||0)},setProps:async(e={})=>{const a=await v();null==a||a.setProps(e)},setColumn:async e=>{const a=await v();null==a||a.setColumn(e)},getSelections:async()=>{const e=await v();return(null==e?void 0:e.selections)||[]},setSearchParams:e=>{u.currentPage=1,u.params=Object.assign(u.params,{pageSize:u.pageSize,pageIndex:u.currentPage,...e}),w.getList()},delList:async(e,a,t=!0)=>{const n=await v();if(a){if(!(null==n?void 0:n.selections.length))return void i.warning(g("common.delNoData"))}else if(!u.currentRow)return void i.warning(g("common.delNoData"));t?c.confirm(g("common.delMessage"),g("common.delWarning"),{confirmButtonText:g("common.delOk"),cancelButtonText:g("common.delCancel"),type:"warning"}).then((async()=>{await P(e)})):await P(e)}};return(null==r?void 0:r.props)&&w.setProps(r.props),{register:(e,a)=>{p.value=e,m.value=s(a)},elTableRef:m,tableObject:u,methods:w}};export{u};
