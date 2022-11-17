import{F as e}from"./Form.3d0d6003.js";import{_ as o}from"./ContentWrap.vue_vue_type_script_setup_true_lang.b54fe1b8.js";import{d as l,s as t,r as a,o as i,c as m,g as s,w as r,a as n,y as d,t as f,a0 as p,k as c,cj as u}from"./index.4aa55768.js";import{u as b}from"./useForm.ad1e56d4.js";import{E as _}from"./el-button.e24c48cc.js";import{u as D}from"./useValidator.b1f3e84a.js";import"./el-col.9945ce9c.js";import"./el-popper.108b1588.js";import"./index.6d5a662e.js";import"./el-input.dc48e643.js";import"./event.dc71bbc2.js";import"./index.13a1e699.js";import"./el-tag.078246e8.js";import"./tsxHelper.6f006e23.js";import"./index.0ffbbacb.js";import"./scroll.c13cd664.js";import"./debounce.055bd785.js";import"./validator.c3cd185b.js";import"./el-input-number.aa02565d.js";import"./el-switch.432bcaab.js";import"./el-divider.a586b75f.js";import"./InputPassword.afc615b7.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./style.css_vue_type_style_index_0_src_true_lang.30fc469d.js";import"./aria.73d9b7fc.js";import"./browser.c43edf4e.js";import"./el-card.b50fea5e.js";const v=l({__name:"UseFormDemo",setup(l){const{required:v}=D(),{t:j}=c(),h=t([{field:"field1",label:j("formDemo.input"),component:"Input",formItemProps:{rules:[v()]}},{field:"field2",label:j("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field3",label:j("formDemo.radio"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:j("formDemo.checkbox"),component:"Checkbox",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:j("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:j("formDemo.timeSelect")}]),{register:k,methods:C,elFormRef:P}=b({schema:h}),g=e=>{const{setProps:o}=C;o({labelWidth:e})},x=e=>{const{setProps:o}=C;o({size:e})},$=e=>{const{setProps:o}=C;o({disabled:e})},y=e=>{const{delSchema:o,addSchema:l}=C;e?o("field2"):e||"field2"===h[1].field||l({field:"field2",label:j("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},F=e=>{var o;const{setValues:l}=C;e?null==(o=n(P))||o.resetFields():l({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00"})},S=a(7),w=()=>{const{setSchema:e}=C;e([{field:"field2",path:"label",value:`${j("formDemo.select")} ${S.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),S.value++},I=()=>{const{addSchema:e}=C;n(S)%2==0?e({field:`field${n(S)}`,label:`${j("formDemo.input")}${n(S)}`,component:"Input"}):e({field:`field${n(S)}`,label:`${j("formDemo.input")}${n(S)}`,component:"Input"},n(S)),S.value++},R=()=>{n(P).validate((e=>{}))},V=()=>{var e;null==(e=n(P))||e.resetFields()},W=async()=>{const e=await u();if(e){const{setSchema:o}=C;o([{field:"field2",path:"componentProps.options",value:e.data}])}};return(l,t)=>(i(),m(p,null,[s(n(o),{title:`UseForm ${n(j)("formDemo.operate")}`},{default:r((()=>[s(n(_),{onClick:t[0]||(t[0]=e=>g(150))},{default:r((()=>[d(f(n(j)("formDemo.change"))+" labelWidth",1)])),_:1}),s(n(_),{onClick:t[1]||(t[1]=e=>g("auto"))},{default:r((()=>[d(f(n(j)("formDemo.restore"))+" labelWidth",1)])),_:1}),s(n(_),{onClick:t[2]||(t[2]=e=>x("large"))},{default:r((()=>[d(f(n(j)("formDemo.change"))+" size",1)])),_:1}),s(n(_),{onClick:t[3]||(t[3]=e=>x("default"))},{default:r((()=>[d(f(n(j)("formDemo.restore"))+" size",1)])),_:1}),s(n(_),{onClick:t[4]||(t[4]=e=>$(!0))},{default:r((()=>[d(f(n(j)("formDemo.disabled")),1)])),_:1}),s(n(_),{onClick:t[5]||(t[5]=e=>$(!1))},{default:r((()=>[d(f(n(j)("formDemo.disablement")),1)])),_:1}),s(n(_),{onClick:t[6]||(t[6]=e=>y(!0))},{default:r((()=>[d(f(n(j)("formDemo.delete"))+" "+f(n(j)("formDemo.select")),1)])),_:1}),s(n(_),{onClick:t[7]||(t[7]=e=>y(!1))},{default:r((()=>[d(f(n(j)("formDemo.add"))+" "+f(n(j)("formDemo.select")),1)])),_:1}),s(n(_),{onClick:t[8]||(t[8]=e=>F(!1))},{default:r((()=>[d(f(n(j)("formDemo.setValue")),1)])),_:1}),s(n(_),{onClick:t[9]||(t[9]=e=>F(!0))},{default:r((()=>[d(f(n(j)("formDemo.resetValue")),1)])),_:1}),s(n(_),{onClick:w},{default:r((()=>[d(f(n(j)("formDemo.set"))+" "+f(n(j)("formDemo.select"))+" label ",1)])),_:1}),s(n(_),{onClick:I},{default:r((()=>[d(f(n(j)("formDemo.add"))+" "+f(n(j)("formDemo.subitem")),1)])),_:1}),s(n(_),{onClick:R},{default:r((()=>[d(f(n(j)("formDemo.formValidation")),1)])),_:1}),s(n(_),{onClick:V},{default:r((()=>[d(f(n(j)("formDemo.verifyReset")),1)])),_:1}),s(n(_),{onClick:W},{default:r((()=>[d(f(n(j)("searchDemo.dynamicOptions")),1)])),_:1})])),_:1},8,["title"]),s(n(o),{title:`UseForm ${n(j)("formDemo.example")}`},{default:r((()=>[s(n(e),{onRegister:n(k)},null,8,["onRegister"])])),_:1},8,["title"])],64))}});export{v as default};
