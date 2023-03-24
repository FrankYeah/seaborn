import{_ as w}from"./nuxt-link.c7cf7d4f.js";import{c as S,d as A,e as $,u as C}from"./useAsset.1aa7ced5.js";import{a as g,y as h,o as u,b as p,e as s,f as i,w as d,u as f,B as K,p as y,i as x,C as l,K as b,D as k,E as H,G as v,H as I,S as T,l as B,I as j,T as N,R,J as P,L as V,M as L,r as F,A as O}from"./entry.9d46d3d2.js";import{u as E}from"./composables.5ecb6865.js";import"./mail_red.0bb0bc51.js";const c=e=>(y("data-v-fdd5d447"),e=e(),x(),e),M={class:"header"},D={class:"header-outer"},G=c(()=>s("img",{class:"header-logo",src:S,alt:"logo"},null,-1)),J={class:"header-row"},q={class:"header-item header-item-hover"},z=c(()=>s("img",{class:"header-item-img",src:A,alt:"arrow"},null,-1)),Q=c(()=>s("div",{class:"header-item-box-text"},"vol.01仰望北極星",-1)),U=c(()=>s("div",{class:"header-text"},"event",-1)),W=c(()=>s("div",{class:"header-text"},"｜",-1)),X=c(()=>s("div",{class:"header-text"},"about",-1)),Y=c(()=>s("div",{class:"header-text"},"｜",-1)),Z=c(()=>s("div",{class:"header-text"},"contact",-1)),ee={__name:"HeaderStatic",setup(e){const t=h(!1);function o(){t.value=!1}return(n,a)=>{const r=w;return u(),p("div",M,[s("div",D,[i(r,{class:"header-href",to:"/"},{default:d(()=>[G]),_:1}),s("div",J,[s("div",q,[s("div",{onClick:a[0]||(a[0]=_=>t.value=!f(t)),onMouseover:a[1]||(a[1]=_=>t.value=!f(t)),class:"header-item-title-hover"},"Vol.",32),z,f(t)?(u(),p("div",{key:0,onClick:o,class:"header-item-box"},[i(r,{to:"/vol-star"},{default:d(()=>[Q]),_:1})])):K("",!0)]),i(r,{class:"header-link",to:"/#acitivity"},{default:d(()=>[U]),_:1}),W,i(r,{class:"header-link",to:"/#about"},{default:d(()=>[X]),_:1}),Y,i(r,{class:"header-link",to:"/#contact"},{default:d(()=>[Z]),_:1})])])])}}},te=g(ee,[["__scopeId","data-v-fdd5d447"]]),oe=(e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,o=>{var n;return((n=e.params[o.slice(1)])==null?void 0:n.toString())||""}),ne=(e,t)=>{const o=e.route.matched.find(a=>{var r;return((r=a.components)==null?void 0:r.default)===e.Component.type}),n=t??(o==null?void 0:o.meta.key)??(o&&oe(e.route,o));return typeof n=="function"?n(e.route):n},ae=(e,t)=>({default:()=>e?l(b,e===!0?{}:e,t):t}),se=k({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t}){const o=H();return()=>l(R,{name:e.name,route:e.route,...t},{default:n=>{if(!n.Component)return;const a=ne(n,e.pageKey),r=o.deferHydration(),_=!!(e.transition??n.route.meta.pageTransition??v),m=_&&ie([e.transition,n.route.meta.pageTransition,v,{onAfterLeave:()=>{o.callHook("page:transition:finish",n.Component)}}].filter(Boolean));return I(N,_&&m,ae(e.keepalive??n.route.meta.keepalive??j,l(T,{onPending:()=>o.callHook("page:start",n.Component),onResolve:()=>{B(()=>o.callHook("page:finish",n.Component).finally(r))}},{default:()=>l(ce,{key:a,routeProps:n,pageKey:a,hasTransition:_})}))).default()}})}});function re(e){return Array.isArray(e)?e:e?[e]:[]}function ie(e){const t=e.map(o=>({...o,onAfterLeave:re(o.onAfterLeave)}));return P(...t)}const ce=k({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(e){const t=e.pageKey,o=e.routeProps.route,n={};for(const a in e.routeProps.route)n[a]=V(()=>t===e.pageKey?e.routeProps.route[a]:o[a]);return L("_route",F(n)),()=>l(e.routeProps.Component)}});const _e={},de=e=>(y("data-v-f286dcfd"),e=e(),x(),e),le={class:"footer"},ue=de(()=>s("a",{href:"https://www.ocam.org.tw/",target:"_blank"},[s("img",{class:"footer-icon",src:$,alt:"yangming"})],-1)),pe=[ue];function me(e,t){return u(),p("div",le,pe)}const fe=g(_e,[["render",me],["__scopeId","data-v-f286dcfd"]]);const ke={__name:"default",setup(e){const t=h("seaborn"),o=h("以這座海港城市作為起點與歸屬，航向世界、航向未知，以不怕犯難的冒險精神前行，這也是刊物取名《seaborn》的由來。");return E({title:t,meta:[{name:"description",content:o},{name:"og:description",content:o},{name:"og:title",content:t},{name:"og:img",content:C("img/star-main/1.jpg")}]}),(n,a)=>{const r=te,_=se,m=fe;return u(),p("div",null,[i(r),i(_),i(m),O(n.$slots,"default")])}}};export{ke as default};