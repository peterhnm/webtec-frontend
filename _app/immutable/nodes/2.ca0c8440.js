import{S as L,i as j,s as U,k as p,a as w,q as O,l as m,m as T,c as I,r as B,h as d,n as h,b as g,G as v,J,u as ie,H as y,g as k,v as ne,f as se,d as E,K as re,e as X,w as q,L as z,y as A,z as H,A as M,M as G,B as K,N as Y,O as oe,I as Z}from"../chunks/index.0860fdad.js";import{g as ue,p as $,t as x}from"../chunks/stores.f13b1a6b.js";import{e as fe}from"../chunks/singletons.2b5d4684.js";const de=!0,_e=!1,ge=async({fetch:i})=>({tags:(await(await i("https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/get_tags")).json()).tags}),Be=Object.freeze(Object.defineProperty({__proto__:null,load:ge,prerender:de,ssr:_e},Symbol.toStringTag,{value:"Module"}));function he(i){let t,c,l,s,r,e;return{c(){t=p("label"),c=p("input"),l=w(),s=O(i[0]),this.h()},l(n){t=m(n,"LABEL",{for:!0});var a=T(t);c=m(a,"INPUT",{id:!0,type:!0}),l=I(a),s=B(a,i[0]),a.forEach(d),this.h()},h(){c.checked=i[1],h(c,"id",i[0]),h(c,"type","checkbox"),h(t,"for",i[0])},m(n,a){g(n,t,a),v(t,c),v(t,l),v(t,s),r||(e=J(c,"click",i[2]),r=!0)},p(n,[a]){a&2&&(c.checked=n[1]),a&1&&h(c,"id",n[0]),a&1&&ie(s,n[0]),a&1&&h(t,"for",n[0])},i:y,o:y,d(n){n&&d(t),r=!1,e()}}}function pe(i,t,c){let{id:l}=t,{checked:s}=t,{checkedTags:r}=t;const e=n=>{const a=n.srcElement;a.checked&&!r.includes(a.id)?r.push(a.id):a.checked||c(3,r=r.filter(u=>u!==a.id))};return i.$$set=n=>{"id"in n&&c(0,l=n.id),"checked"in n&&c(1,s=n.checked),"checkedTags"in n&&c(3,r=n.checkedTags)},[l,s,e,r]}class ce extends L{constructor(t){super(),j(this,t,pe,he,U,{id:0,checked:1,checkedTags:3})}}function ee(i,t,c){const l=i.slice();return l[4]=t[c],l}function me(i){let t,c,l;function s(e){i[3](e)}let r={id:i[4],checked:!1};return i[0]!==void 0&&(r.checkedTags=i[0]),t=new ce({props:r}),q.push(()=>z(t,"checkedTags",s)),{c(){A(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,n){M(t,e,n),l=!0},p(e,n){const a={};n&2&&(a.id=e[4]),!c&&n&1&&(c=!0,a.checkedTags=e[0],G(()=>c=!1)),t.$set(a)},i(e){l||(k(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){K(t,e)}}}function ke(i){let t,c,l;function s(e){i[2](e)}let r={id:i[4],checked:!0};return i[0]!==void 0&&(r.checkedTags=i[0]),t=new ce({props:r}),q.push(()=>z(t,"checkedTags",s)),{c(){A(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,n){M(t,e,n),l=!0},p(e,n){const a={};n&2&&(a.id=e[4]),!c&&n&1&&(c=!0,a.checkedTags=e[0],G(()=>c=!1)),t.$set(a)},i(e){l||(k(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){K(t,e)}}}function te(i){let t,c,l,s,r;const e=[ke,me],n=[];function a(u,f){return f&3&&(t=null),t==null&&(t=!!u[0].includes(u[4])),t?0:1}return c=a(i,-1),l=n[c]=e[c](i),{c(){l.c(),s=X()},l(u){l.l(u),s=X()},m(u,f){n[c].m(u,f),g(u,s,f),r=!0},p(u,f){let b=c;c=a(u,f),c===b?n[c].p(u,f):(ne(),E(n[b],1,1,()=>{n[b]=null}),se(),l=n[c],l?l.p(u,f):(l=n[c]=e[c](u),l.c()),k(l,1),l.m(s.parentNode,s))},i(u){r||(k(l),r=!0)},o(u){E(l),r=!1},d(u){n[c].d(u),u&&d(s)}}}function be(i){let t,c,l=i[1],s=[];for(let e=0;e<l.length;e+=1)s[e]=te(ee(i,l,e));const r=e=>E(s[e],1,1,()=>{s[e]=null});return{c(){t=p("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=m(e,"DIV",{class:!0});var n=T(t);for(let a=0;a<s.length;a+=1)s[a].l(n);n.forEach(d),this.h()},h(){h(t,"class","tags")},m(e,n){g(e,t,n);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(t,null);c=!0},p(e,[n]){if(n&3){l=e[1];let a;for(a=0;a<l.length;a+=1){const u=ee(e,l,a);s[a]?(s[a].p(u,n),k(s[a],1)):(s[a]=te(u),s[a].c(),k(s[a],1),s[a].m(t,null))}for(ne(),a=l.length;a<s.length;a+=1)r(a);se()}},i(e){if(!c){for(let n=0;n<l.length;n+=1)k(s[n]);c=!0}},o(e){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)E(s[n]);c=!1},d(e){e&&d(t),re(s,e)}}}function Te(i,t,c){let{tags:l}=t,{checkedTags:s=[]}=t;function r(n){s=n,c(0,s)}function e(n){s=n,c(0,s)}return i.$$set=n=>{"tags"in n&&c(1,l=n.tags),"checkedTags"in n&&c(0,s=n.checkedTags)},[s,l,r,e]}class ve extends L{constructor(t){super(),j(this,t,Te,be,U,{tags:1,checkedTags:0})}}function Ee(i){let t,c;return{c(){t=p("p"),c=O("loading ...")},l(l){t=m(l,"P",{});var s=T(t);c=B(s,"loading ..."),s.forEach(d)},m(l,s){g(l,t,s),v(t,c)},p:y,i:y,o:y,d(l){l&&d(t)}}}function Se(i){let t,c,l;function s(e){i[6](e)}let r={tags:i[2]};return i[1]!==void 0&&(r.checkedTags=i[1]),t=new ve({props:r}),q.push(()=>z(t,"checkedTags",s)),{c(){A(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,n){M(t,e,n),l=!0},p(e,n){const a={};!c&&n&2&&(c=!0,a.checkedTags=e[1],G(()=>c=!1)),t.$set(a)},i(e){l||(k(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){K(t,e)}}}function ye(i){let t,c,l,s,r,e,n,a,u,f,b,S,P,N,C,V;const ae=[Se,Ee],D=[];function le(o,_){return o[2]?0:1}return u=le(i),f=D[u]=ae[u](i),{c(){t=p("section"),c=p("h1"),l=O("Jam Buddy"),s=w(),r=p("section"),e=p("input"),n=w(),a=p("section"),f.c(),b=w(),S=p("button"),P=O("Start Dreaming"),this.h()},l(o){t=m(o,"SECTION",{id:!0});var _=T(t);c=m(_,"H1",{});var F=T(c);l=B(F,"Jam Buddy"),F.forEach(d),_.forEach(d),s=I(o),r=m(o,"SECTION",{id:!0});var Q=T(r);e=m(Q,"INPUT",{placeholder:!0,type:!0}),Q.forEach(d),n=I(o),a=m(o,"SECTION",{id:!0});var R=T(a);f.l(R),R.forEach(d),b=I(o),S=m(o,"BUTTON",{});var W=T(S);P=B(W,"Start Dreaming"),W.forEach(d),this.h()},h(){h(t,"id","logo"),h(e,"placeholder","Jam Theme..."),h(e,"type","text"),h(r,"id","prompt"),h(a,"id","tags")},m(o,_){g(o,t,_),v(t,c),v(c,l),g(o,s,_),g(o,r,_),v(r,e),Y(e,i[0]),g(o,n,_),g(o,a,_),D[u].m(a,null),g(o,b,_),g(o,S,_),v(S,P),N=!0,C||(V=[J(e,"input",i[5]),J(S,"click",i[3])],C=!0)},p(o,[_]){_&1&&e.value!==o[0]&&Y(e,o[0]),f.p(o,_)},i(o){N||(k(f),N=!0)},o(o){E(f),N=!1},d(o){o&&d(t),o&&d(s),o&&d(r),o&&d(n),o&&d(a),D[u].d(),o&&d(b),o&&d(S),C=!1,oe(V)}}}function Ne(i,t,c){let l,s;Z(i,$,f=>c(0,l=f)),Z(i,x,f=>c(1,s=f));let{data:r}=t,{tags:e}=r;function n(){if(!prompt){console.error("No prompt given!");return}ue(`${fe}/result`)}function a(){l=this.value,$.set(l)}function u(f){s=f,x.set(s)}return i.$$set=f=>{"data"in f&&c(4,r=f.data)},[l,s,e,n,r,a,u]}class Pe extends L{constructor(t){super(),j(this,t,Ne,ye,U,{data:4})}}export{Pe as component,Be as universal};
