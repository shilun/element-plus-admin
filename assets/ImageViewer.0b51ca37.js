import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang.2ed35f46.js";import{cb as a,E as t,F as s,be as n,aJ as i,d as o,bh as l,cz as u,cA as c,S as r,bE as d,r as f,cB as m,a_ as p,H as v,v as b,N as g,C as w,o as k,h,g as _,w as x,e as y,n as I,a as C,a1 as z,av as O,Z as j,Q as T,b1 as N,c as L,a0 as A,b6 as E,aQ as D,cC as V,cD as B,$ as M,cE as Y,cF as F,ab as X,aG as R,aZ as $,z as S,i as G,bF as W,_ as H,K as Z,G as P,cG as Q,a2 as J,a9 as K,Y as q,cH as U,cu as ee,y as ae,t as te,k as se}from"./index.7afd9b66.js";import{i as ne}from"./browser.964ff89b.js";import{u as ie}from"./index.bab1746d.js";import{d as oe}from"./debounce.d6b0c3c6.js";import{E as le}from"./el-button.35bda1b7.js";import"./el-card.11874a73.js";import"./el-popper.427b6192.js";import"./index.91afac6e.js";import"./index.f681da9c.js";function ue(e,t,s){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(s)&&(n="leading"in s?!!s.leading:n,i="trailing"in s?!!s.trailing:i),oe(e,t,{leading:n,maxWait:t,trailing:i})}const ce=t({urlList:{type:s(Array),default:()=>n([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0}}),re={close:()=>!0,switch:e=>i(e)},de=["src"],fe=o({name:"ElImageViewer"});const me=J(H(o({...fe,props:ce,emits:re,setup(e,{expose:a,emit:t}){const s=e,n={CONTAIN:{name:"contain",icon:l(u)},ORIGINAL:{name:"original",icon:l(c)}},o=ne()?"DOMMouseScroll":"mousewheel",{t:H}=ie(),J=r("image-viewer"),{nextZIndex:K}=d(),q=f(),U=f([]),ee=m(),ae=f(!0),te=f(s.initialIndex),se=p(n.CONTAIN),oe=f({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),le=v((()=>{const{urlList:e}=s;return e.length<=1})),ce=v((()=>0===te.value)),re=v((()=>te.value===s.urlList.length-1)),fe=v((()=>s.urlList[te.value])),me=v((()=>{const{scale:e,deg:a,offsetX:t,offsetY:s,enableTransition:i}=oe.value;let o=t/e,l=s/e;switch(a%360){case 90:case-270:[o,l]=[l,-o];break;case 180:case-180:[o,l]=[-o,-l];break;case 270:case-90:[o,l]=[-l,o]}const u={transform:`scale(${e}) rotate(${a}deg) translate(${o}px, ${l}px)`,transition:i?"transform .3s":""};return se.value.name===n.CONTAIN.name&&(u.maxWidth=u.maxHeight="100%"),u})),pe=v((()=>i(s.zIndex)?s.zIndex:K()));function ve(){ee.stop(),t("close")}function be(){ae.value=!1}function ge(e){ae.value=!1,e.target.alt=H("el.image.error")}function we(e){if(ae.value||0!==e.button||!q.value)return;oe.value.enableTransition=!1;const{offsetX:a,offsetY:t}=oe.value,s=e.pageX,n=e.pageY,i=ue((e=>{oe.value={...oe.value,offsetX:a+e.pageX-s,offsetY:t+e.pageY-n}})),o=Z(document,"mousemove",i);Z(document,"mouseup",(()=>{o()})),e.preventDefault()}function ke(){oe.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function he(){if(ae.value)return;const e=Q(n),a=Object.values(n),t=se.value.name,s=(a.findIndex((e=>e.name===t))+1)%e.length;se.value=n[e[s]],ke()}function _e(e){const a=s.urlList.length;te.value=(e+a)%a}function xe(){ce.value&&!s.infinite||_e(te.value-1)}function ye(){re.value&&!s.infinite||_e(te.value+1)}function Ie(e,a={}){if(ae.value)return;const{zoomRate:t,rotateDeg:s,enableTransition:n}={zoomRate:1.4,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":oe.value.scale>.2&&(oe.value.scale=Number.parseFloat((oe.value.scale/t).toFixed(3)));break;case"zoomIn":oe.value.scale<7&&(oe.value.scale=Number.parseFloat((oe.value.scale*t).toFixed(3)));break;case"clockwise":oe.value.deg+=s;break;case"anticlockwise":oe.value.deg-=s}oe.value.enableTransition=n}return b(fe,(()=>{g((()=>{const e=U.value[0];(null==e?void 0:e.complete)||(ae.value=!0)}))})),b(te,(e=>{ke(),t("switch",e)})),w((()=>{var e,a;!function(){const e=ue((e=>{switch(e.code){case P.esc:s.closeOnPressEscape&&ve();break;case P.space:he();break;case P.left:xe();break;case P.up:Ie("zoomIn");break;case P.right:ye();break;case P.down:Ie("zoomOut")}})),a=ue((e=>{Ie((e.wheelDelta?e.wheelDelta:-e.detail)>0?"zoomIn":"zoomOut",{zoomRate:1.2,enableTransition:!1})}));ee.run((()=>{Z(document,"keydown",e),Z(document,o,a)}))}(),null==(a=null==(e=q.value)?void 0:e.focus)||a.call(e)})),a({setActiveItem:_e}),(e,a)=>(k(),h(W,{to:"body",disabled:!e.teleported},[_(G,{name:"viewer-fade",appear:""},{default:x((()=>[y("div",{ref_key:"wrapper",ref:q,tabindex:-1,class:I(C(J).e("wrapper")),style:z({zIndex:C(pe)})},[y("div",{class:I(C(J).e("mask")),onClick:a[0]||(a[0]=O((a=>e.hideOnClickModal&&ve()),["self"]))},null,2),j(" CLOSE "),y("span",{class:I([C(J).e("btn"),C(J).e("close")]),onClick:ve},[_(C(T),null,{default:x((()=>[_(C(N))])),_:1})],2),j(" ARROW "),C(le)?j("v-if",!0):(k(),L(A,{key:0},[y("span",{class:I([C(J).e("btn"),C(J).e("prev"),C(J).is("disabled",!e.infinite&&C(ce))]),onClick:xe},[_(C(T),null,{default:x((()=>[_(C(E))])),_:1})],2),y("span",{class:I([C(J).e("btn"),C(J).e("next"),C(J).is("disabled",!e.infinite&&C(re))]),onClick:ye},[_(C(T),null,{default:x((()=>[_(C(D))])),_:1})],2)],64)),j(" ACTIONS "),y("div",{class:I([C(J).e("btn"),C(J).e("actions")])},[y("div",{class:I(C(J).e("actions__inner"))},[_(C(T),{onClick:a[1]||(a[1]=e=>Ie("zoomOut"))},{default:x((()=>[_(C(V))])),_:1}),_(C(T),{onClick:a[2]||(a[2]=e=>Ie("zoomIn"))},{default:x((()=>[_(C(B))])),_:1}),y("i",{class:I(C(J).e("actions__divider"))},null,2),_(C(T),{onClick:he},{default:x((()=>[(k(),h(M(C(se).icon)))])),_:1}),y("i",{class:I(C(J).e("actions__divider"))},null,2),_(C(T),{onClick:a[3]||(a[3]=e=>Ie("anticlockwise"))},{default:x((()=>[_(C(Y))])),_:1}),_(C(T),{onClick:a[4]||(a[4]=e=>Ie("clockwise"))},{default:x((()=>[_(C(F))])),_:1})],2)],2),j(" CANVAS "),y("div",{class:I(C(J).e("canvas"))},[(k(!0),L(A,null,X(e.urlList,((e,a)=>R((k(),L("img",{ref_for:!0,ref:e=>U.value[a]=e,key:e,src:e,style:z(C(me)),class:I(C(J).e("img")),onLoad:be,onError:ge,onMousedown:we},null,46,de)),[[$,a===te.value]]))),128))],2),S(e.$slots,"default")],6)])),_:3})],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]])),pe=o({__name:"ImageViewer",props:{urlList:{type:Array,default:()=>[]},zIndex:K.number.def(200),initialIndex:K.number.def(0),infinite:K.bool.def(!0),hideOnClickModal:K.bool.def(!1),appendToBody:K.bool.def(!1),show:K.bool.def(!1)},setup(e){const a=e,t=v((()=>{const e={...a};return delete e.show,e})),s=f(a.show),n=()=>{s.value=!1};return(e,a)=>s.value?(k(),h(C(me),q({key:0},C(t),{onClose:n}),null,16)):j("v-if",!0)}});let ve=null;const be=o({__name:"ImageViewer",setup(a){const{t:t}=se(),s=()=>{!function(e){if(!U)return;const{urlList:a,initialIndex:t=0,infinite:s=!0,hideOnClickModal:n=!1,appendToBody:i=!1,zIndex:o=2e3,show:l=!0}=e,u={},c=document.createElement("div");u.urlList=a,u.initialIndex=t,u.infinite=s,u.hideOnClickModal=n,u.appendToBody=i,u.zIndex=o,u.show=l,document.body.appendChild(c),ve=_(pe,u),ee(ve,c)}({urlList:["https://img1.baidu.com/it/u=657828739,1486746195&fm=26&fmt=auto&gp=0.jpg","https://img0.baidu.com/it/u=3114228356,677481409&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=508846955,3814747122&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=3536647690,3616605490&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=4087287201,1148061266&fm=26&fmt=auto&gp=0.jpg","https://img2.baidu.com/it/u=3429163260,2974496379&fm=26&fmt=auto&gp=0.jpg"]})};return(a,n)=>(k(),h(C(e),{title:C(t)("imageViewerDemo.imageViewer"),message:C(t)("imageViewerDemo.imageViewerDes")},{default:x((()=>[_(C(le),{type:"primary",onClick:s},{default:x((()=>[ae(te(C(t)("imageViewerDemo.open")),1)])),_:1})])),_:1},8,["title","message"]))}});export{be as default};
