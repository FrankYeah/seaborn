import{_ as w}from"./nuxt-link.188d1da4.js";import{c as b,d as S,e as A,f as $,u as C}from"./useAsset.70885090.js";import{a as g,y as v,o as u,e as p,f as a,b as c,w as d,u as f,B as K,p as y,i as x,C as l,K as H,D as k,E as I,G as h,H as T,S as B,l as V,I as j,T as N,R,J as F,L as P,M as L,r as M,k as O,A as E}from"./entry.613ead20.js";import{u as D}from"./composables.ff8a4072.js";import"./cover.15b0e199.js";const i=e=>(y("data-v-34f7f950"),e=e(),x(),e),G={class:"header"},J={class:"header-outer"},q=i(()=>a("img",{class:"header-logo",src:b,alt:"logo"},null,-1)),z={class:"header-row"},Q={class:"header-item header-item-hover"},U=i(()=>a("img",{class:"header-item-img",src:S,alt:"arrow"},null,-1)),W=i(()=>a("div",{class:"header-item-box-text"},"vol.01",-1)),X=i(()=>a("div",{class:"header-item-box-text"},"vol.02",-1)),Y=i(()=>a("div",{class:"header-item-box-text"},"vol.03",-1)),Z=i(()=>a("div",{class:"header-text"},"event",-1)),ee=i(()=>a("div",{class:"header-text"},"｜",-1)),te=i(()=>a("div",{class:"header-text"},"about",-1)),oe=i(()=>a("div",{class:"header-text"},"｜",-1)),ne=i(()=>a("div",{class:"header-text"},"contact",-1)),ae=i(()=>a("a",{class:"header-link",href:"https://www.ocam.org.tw/",target:"_blank"},[a("img",{class:"header-img",src:A,alt:""})],-1)),se={__name:"HeaderStatic",setup(e){const t=v(!1);function o(){t.value=!1}return(n,s)=>{const r=w;return u(),p("div",G,[a("div",J,[c(r,{class:"header-href",to:"/"},{default:d(()=>[q]),_:1}),a("div",z,[a("div",Q,[a("div",{onClick:s[0]||(s[0]=_=>t.value=!f(t)),onMouseover:s[1]||(s[1]=_=>t.value=!f(t)),class:"header-item-title-hover"},"Vol.",32),U,f(t)?(u(),p("div",{key:0,onClick:o,class:"header-item-box"},[c(r,{to:"/vol-star"},{default:d(()=>[W]),_:1}),c(r,{to:"/vol-flavor"},{default:d(()=>[X]),_:1}),c(r,{to:"/vol-travel"},{default:d(()=>[Y]),_:1})])):K("",!0)]),c(r,{class:"header-link",to:"/#acitivity"},{default:d(()=>[Z]),_:1}),ee,c(r,{class:"header-link",to:"/#about"},{default:d(()=>[te]),_:1}),oe,c(r,{class:"header-link",to:"/#contact"},{default:d(()=>[ne]),_:1}),ae])])])}}},re=g(se,[["__scopeId","data-v-34f7f950"]]),ie=(e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,o=>{var n;return((n=e.params[o.slice(1)])==null?void 0:n.toString())||""}),ce=(e,t)=>{const o=e.route.matched.find(s=>{var r;return((r=s.components)==null?void 0:r.default)===e.Component.type}),n=t??(o==null?void 0:o.meta.key)??(o&&ie(e.route,o));return typeof n=="function"?n(e.route):n},_e=(e,t)=>({default:()=>e?l(H,e===!0?{}:e,t):t}),de=k({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t}){const o=I();return()=>l(R,{name:e.name,route:e.route,...t},{default:n=>{if(!n.Component)return;const s=ce(n,e.pageKey),r=o.deferHydration(),_=!!(e.transition??n.route.meta.pageTransition??h),m=_&&ue([e.transition,n.route.meta.pageTransition,h,{onAfterLeave:()=>{o.callHook("page:transition:finish",n.Component)}}].filter(Boolean));return T(N,_&&m,_e(e.keepalive??n.route.meta.keepalive??j,l(B,{onPending:()=>o.callHook("page:start",n.Component),onResolve:()=>{V(()=>o.callHook("page:finish",n.Component).finally(r))}},{default:()=>l(pe,{key:s,routeProps:n,pageKey:s,hasTransition:_})}))).default()}})}});function le(e){return Array.isArray(e)?e:e?[e]:[]}function ue(e){const t=e.map(o=>({...o,onAfterLeave:le(o.onAfterLeave)}));return F(...t)}const pe=k({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(e){const t=e.pageKey,o=e.routeProps.route,n={};for(const s in e.routeProps.route)n[s]=P(()=>t===e.pageKey?e.routeProps.route[s]:o[s]);return L("_route",M(n)),()=>l(e.routeProps.Component)}});const me={},fe=e=>(y("data-v-f9db3981"),e=e(),x(),e),ve={class:"footer"},he=fe(()=>a("a",{href:"https://www.ocam.org.tw/",target:"_blank"},[a("img",{class:"footer-icon",src:$,alt:"yangming"})],-1)),ge=[he];function ye(e,t){return u(),p("div",ve,ge)}const xe=g(me,[["render",ye],["__scopeId","data-v-f9db3981"]]);const $e={__name:"default",setup(e){const t=v("seaborn"),o=v("以這座海港城市作為起點與歸屬，航向世界、航向未知，以不怕犯難的冒險精神前行，這也是刊物取名《seaborn》的由來。");return O(()=>{document.oncontextmenu=new Function("event.returnValue=false"),document.onselectstart=new Function("event.returnValue=false")}),D({title:t,meta:[{name:"description",content:o},{name:"og:description",content:o},{name:"og:title",content:t},{name:"og:img",content:C("img/star-main/1.jpg")}]}),(n,s)=>{const r=re,_=de,m=xe;return u(),p("div",null,[c(r),c(_),c(m),E(n.$slots,"default")])}}};export{$e as default};