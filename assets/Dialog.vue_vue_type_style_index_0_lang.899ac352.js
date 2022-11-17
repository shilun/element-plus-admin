import{d as e,B as s,H as o,o as a,c as l,e as t,z as n,n as r,a as i,t as d,g as c,w as u,h as f,$ as m,Q as p,Z as g,a1 as b,_ as v,cI as y,b4 as h,S as x,r as k,A as C,aG as $,Y as _,X as R,aZ as A,i as w,bF as F,a2 as I,a9 as H,c9 as j,v as z,x as E,y as M,P as L,aq as S,N as D}from"./index.7afd9b66.js";import{u as T,b as q,E as B}from"./el-overlay.dce9643a.js";import{d as P,a as O,b as N,c as U,u as Z}from"./use-dialog.b745e58c.js";import{u as G}from"./index.bab1746d.js";import{F as K,d as Q}from"./el-popper.427b6192.js";import{c as V}from"./refs.d97a75c3.js";import{u as X}from"./el-button.35bda1b7.js";const Y=Symbol("dialogInjectionKey"),J=["aria-label"],W=["id"],ee=e({name:"ElDialogContent"});var se=v(e({...ee,props:P,emits:O,setup(e){const v=e,{t:h}=G(),{Close:x}=y,{dialogRef:k,headerRef:C,bodyId:$,ns:_,style:R}=s(Y),{focusTrapRef:A}=s(K),w=V(A,k),F=o((()=>v.draggable));return T(k,C,F),(e,s)=>(a(),l("div",{ref:i(w),class:r([i(_).b(),i(_).is("fullscreen",e.fullscreen),i(_).is("draggable",i(F)),i(_).is("align-center",e.alignCenter),{[i(_).m("center")]:e.center},e.customClass]),style:b(i(R)),tabindex:"-1"},[t("header",{ref_key:"headerRef",ref:C,class:r(i(_).e("header"))},[n(e.$slots,"header",{},(()=>[t("span",{role:"heading",class:r(i(_).e("title"))},d(e.title),3)])),e.showClose?(a(),l("button",{key:0,"aria-label":i(h)("el.dialog.close"),class:r(i(_).e("headerbtn")),type:"button",onClick:s[0]||(s[0]=s=>e.$emit("close"))},[c(i(p),{class:r(i(_).e("close"))},{default:u((()=>[(a(),f(m(e.closeIcon||i(x))))])),_:1},8,["class"])],10,J)):g("v-if",!0)],2),t("div",{id:i($),class:r(i(_).e("body"))},[n(e.$slots,"default")],10,W),e.$slots.footer?(a(),l("footer",{key:0,class:r(i(_).e("footer"))},[n(e.$slots,"footer")],2)):g("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const oe=["aria-label","aria-labelledby","aria-describedby"],ae=e({name:"ElDialog",inheritAttrs:!1});const le=I(v(e({...ae,props:N,emits:U,setup(e,{expose:s}){const l=e,d=h();X({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},o((()=>!!d.title))),X({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},o((()=>!!l.customClass)));const m=x("dialog"),p=k(),v=k(),y=k(),{visible:I,titleId:H,bodyId:j,style:z,overlayDialogStyle:E,rendered:M,zIndex:L,afterEnter:S,afterLeave:D,beforeLeave:T,handleClose:P,onModalClick:O,onOpenAutoFocus:N,onCloseAutoFocus:U,onCloseRequested:G,onFocusoutPrevented:K}=Z(l,p);C(Y,{dialogRef:p,headerRef:v,bodyId:j,ns:m,rendered:M,style:z});const V=q(O),J=o((()=>l.draggable&&!l.fullscreen));return s({visible:I,dialogContentRef:y}),(e,s)=>(a(),f(F,{to:"body",disabled:!e.appendToBody},[c(w,{name:"dialog-fade",onAfterEnter:i(S),onAfterLeave:i(D),onBeforeLeave:i(T),persisted:""},{default:u((()=>[$(c(i(B),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":i(L)},{default:u((()=>[t("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:i(H),"aria-describedby":i(j),class:r(`${i(m).namespace.value}-overlay-dialog`),style:b(i(E)),onClick:s[0]||(s[0]=(...e)=>i(V).onClick&&i(V).onClick(...e)),onMousedown:s[1]||(s[1]=(...e)=>i(V).onMousedown&&i(V).onMousedown(...e)),onMouseup:s[2]||(s[2]=(...e)=>i(V).onMouseup&&i(V).onMouseup(...e))},[c(i(Q),{loop:"",trapped:i(I),"focus-start-el":"container",onFocusAfterTrapped:i(N),onFocusAfterReleased:i(U),onFocusoutPrevented:i(K),onReleaseRequested:i(G)},{default:u((()=>[i(M)?(a(),f(se,_({key:0,ref_key:"dialogContentRef",ref:y},e.$attrs,{"custom-class":e.customClass,center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:i(J),fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,onClose:i(P)}),R({header:u((()=>[e.$slots.title?n(e.$slots,"title",{key:1}):n(e.$slots,"header",{key:0,close:i(P),titleId:i(H),titleClass:i(m).e("title")})])),default:u((()=>[n(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:u((()=>[n(e.$slots,"footer")]))}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):g("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,oe)])),_:3},8,["mask","overlay-class","z-index"]),[[A,i(I)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]])),te={class:"flex justify-between"},ne=e({__name:"Dialog",props:{modelValue:H.bool.def(!1),title:H.string.def("Dialog"),fullscreen:H.bool.def(!0),maxHeight:H.oneOfType([String,Number]).def("500px")},setup(e){const s=e,l=h(),r=o((()=>{const e=["fullscreen","title","maxHeight"],o={...S(),...s};for(const s in o)-1!==e.indexOf(s)&&delete o[s];return o})),m=k(!1),p=()=>{m.value=!i(m)},v=k(j(s.maxHeight)?`${s.maxHeight}px`:s.maxHeight);z((()=>m.value),(async e=>{if(await D(),e){const e=document.documentElement.offsetHeight;v.value=e-55-60-(l.footer?63:0)+"px"}else v.value=j(s.maxHeight)?`${s.maxHeight}px`:s.maxHeight}),{immediate:!0});const y=o((()=>({height:i(v)})));return(s,o)=>{const v=E("Icon");return a(),f(i(le),_(i(r),{fullscreen:m.value,"destroy-on-close":"","lock-scroll":"",draggable:"","close-on-click-modal":!1}),R({header:u((()=>[t("div",te,[n(s.$slots,"title",{},(()=>[M(d(e.title),1)])),e.fullscreen?(a(),f(v,{key:0,class:"mr-18px cursor-pointer is-hover mt-2px z-10",icon:m.value?"zmdi:fullscreen-exit":"zmdi:fullscreen",color:"var(--el-color-info)",onClick:p},null,8,["icon"])):g("v-if",!0)])])),default:u((()=>[c(i(L),{style:b(i(y))},{default:u((()=>[n(s.$slots,"default")])),_:3},8,["style"])])),_:2},[i(l).footer?{name:"footer",fn:u((()=>[n(s.$slots,"footer")])),key:"0"}:void 0]),1040,["fullscreen"])}}});export{ne as _};
