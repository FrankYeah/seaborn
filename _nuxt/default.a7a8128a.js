import{_ as x}from"./nuxt-link.18d25205.js";import{_ as b,a as k}from"./yangming.1a9d1540.js";import{a as l,o as p,b as f,e as s,f as c,w as d,p as h,i as v,A as i,K as S,B as g,C as $,D as m,E as A,S as K,s as w,G as C,T as I,R as T,H as B,I as H,J as R,x as N,l as j}from"./entry.fc2b3916.js";const F={},r=e=>(h("data-v-813bec89"),e=e(),v(),e),L={class:"header"},O={class:"header-outer"},P=r(()=>s("img",{class:"header-logo",src:b,alt:"logo"},null,-1)),V={class:"header-row"},E=r(()=>s("div",{class:"header-text"},"活動",-1)),D=r(()=>s("div",{class:"header-text"},"｜",-1)),G=r(()=>s("div",{class:"header-text"},"關於",-1)),J=r(()=>s("div",{class:"header-text"},"｜",-1)),q=r(()=>s("div",{class:"header-text"},"聯絡",-1));function z(e,o){const t=x;return p(),f("div",L,[s("div",O,[c(t,{class:"header-href",to:"/"},{default:d(()=>[P]),_:1}),s("div",V,[c(t,{class:"header-link",to:"/#acitivity"},{default:d(()=>[E]),_:1}),D,c(t,{class:"header-link",to:"/#about"},{default:d(()=>[G]),_:1}),J,c(t,{class:"header-link",to:"/#contact"},{default:d(()=>[q]),_:1})])])])}const M=l(F,[["render",z],["__scopeId","data-v-813bec89"]]),Q=(e,o)=>o.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,t=>{var n;return((n=e.params[t.slice(1)])==null?void 0:n.toString())||""}),U=(e,o)=>{const t=e.route.matched.find(a=>{var _;return((_=a.components)==null?void 0:_.default)===e.Component.type}),n=o??(t==null?void 0:t.meta.key)??(t&&Q(e.route,t));return typeof n=="function"?n(e.route):n},W=(e,o)=>({default:()=>e?i(S,e===!0?{}:e,o):o}),X=g({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:o}){const t=$();return()=>i(T,{name:e.name,route:e.route,...o},{default:n=>{if(!n.Component)return;const a=U(n,e.pageKey),_=t.deferHydration(),u=!!(e.transition??n.route.meta.pageTransition??m),y=u&&Z([e.transition,n.route.meta.pageTransition,m,{onAfterLeave:()=>{t.callHook("page:transition:finish",n.Component)}}].filter(Boolean));return A(I,u&&y,W(e.keepalive??n.route.meta.keepalive??C,i(K,{onPending:()=>t.callHook("page:start",n.Component),onResolve:()=>{w(()=>t.callHook("page:finish",n.Component).finally(_))}},{default:()=>i(ee,{key:a,routeProps:n,pageKey:a,hasTransition:u})}))).default()}})}});function Y(e){return Array.isArray(e)?e:e?[e]:[]}function Z(e){const o=e.map(t=>({...t,onAfterLeave:Y(t.onAfterLeave)}));return B(...o)}const ee=g({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(e){const o=e.pageKey,t=e.routeProps.route,n={};for(const a in e.routeProps.route)n[a]=H(()=>o===e.pageKey?e.routeProps.route[a]:t[a]);return R("_route",N(n)),()=>i(e.routeProps.Component)}});const te={},ne=e=>(h("data-v-bb2decb8"),e=e(),v(),e),oe={class:"footer"},ae=ne(()=>s("img",{class:"footer-icon",src:k,alt:"yangming"},null,-1)),se=[ae];function ce(e,o){return p(),f("div",oe,se)}const re=l(te,[["render",ce],["__scopeId","data-v-bb2decb8"]]);const ie={};function _e(e,o){const t=M,n=X,a=re;return p(),f("div",null,[c(t),c(n),c(a),j(e.$slots,"default")])}const pe=l(ie,[["render",_e]]);export{pe as default};
