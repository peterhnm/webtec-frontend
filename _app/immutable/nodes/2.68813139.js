import{S as le,i as re,s as se,e as W,b as P,D as A,h as d,k as b,q,a as B,L as V,l as w,m as _,r as G,c as D,M as J,n as i,C as f,N as te,u as Ae,g as k,v as Q,f as R,d as T,O as Be,E as ee,y as F,z as H,A as K,B as X,P as be,Q as je,R as Me,o as Ue,T as qe,U as Ge,w as fe}from"../chunks/index.262819fb.js";import{g as Ve}from"../chunks/navigation.5fd2e669.js";import{e as Je}from"../chunks/singletons.9198b58c.js";import{s as Y,h as we,p as ye}from"../chunks/stores.ddb2113e.js";const Oe=!0,Ce=!1,dt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Oe,ssr:Ce},Symbol.toStringTag,{value:"Module"}));function ze(a){let e,r,t,l,c,s,o,n,u,g,p;return{c(){e=b("label"),r=q(a[0]),t=B(),l=b("input"),c=B(),s=V("svg"),o=V("circle"),n=V("path"),u=V("path"),this.h()},l(h){e=w(h,"LABEL",{for:!0,class:!0});var m=_(e);r=G(m,a[0]),t=D(m),l=w(m,"INPUT",{id:!0,type:!0,class:!0}),c=D(m),s=J(m,"svg",{fill:!0,height:!0,viewBox:!0,width:!0,xmlns:!0,class:!0});var L=_(s);o=J(L,"circle",{cx:!0,cy:!0,fill:!0,r:!0}),_(o).forEach(d),n=J(L,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-width":!0}),_(n).forEach(d),u=J(L,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-width":!0}),_(u).forEach(d),L.forEach(d),m.forEach(d),this.h()},h(){l.checked=a[1],i(l,"id",a[0]),i(l,"type","checkbox"),i(l,"class","svelte-p0jntb"),i(o,"cx","10"),i(o,"cy","10"),i(o,"fill","white"),i(o,"r","10"),i(n,"d","M3 10L17 10"),i(n,"stroke","#999999"),i(n,"stroke-linecap","round"),i(n,"stroke-width","2"),i(u,"d","M10 3L10 17"),i(u,"stroke","#999999"),i(u,"stroke-linecap","round"),i(u,"stroke-width","2"),i(s,"fill","none"),i(s,"height","20"),i(s,"viewBox","0 0 20 20"),i(s,"width","20"),i(s,"xmlns","http://www.w3.org/2000/svg"),i(s,"class","svelte-p0jntb"),i(e,"for",a[0]),i(e,"class","unchecked svelte-p0jntb")},m(h,m){P(h,e,m),f(e,r),f(e,t),f(e,l),f(e,c),f(e,s),f(s,o),f(s,n),f(s,u),g||(p=te(l,"click",a[2]),g=!0)},p(h,m){m&1&&Ae(r,h[0]),m&2&&(l.checked=h[1]),m&1&&i(l,"id",h[0]),m&1&&i(e,"for",h[0])},d(h){h&&d(e),g=!1,p()}}}function We(a){let e,r,t,l,c,s,o,n,u,g;return{c(){e=b("label"),r=q(a[0]),t=B(),l=b("input"),c=B(),s=V("svg"),o=V("circle"),n=V("path"),this.h()},l(p){e=w(p,"LABEL",{for:!0,class:!0});var h=_(e);r=G(h,a[0]),t=D(h),l=w(h,"INPUT",{id:!0,type:!0,class:!0}),c=D(h),s=J(h,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,class:!0});var m=_(s);o=J(m,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),_(o).forEach(d),n=J(m,"path",{d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0}),_(n).forEach(d),m.forEach(d),h.forEach(d),this.h()},h(){l.checked=a[1],i(l,"id",a[0]),i(l,"type","checkbox"),i(l,"class","svelte-p0jntb"),i(o,"cx","10"),i(o,"cy","10"),i(o,"r","10"),i(o,"fill","white"),i(n,"d","M3 10L17 10"),i(n,"stroke","#999999"),i(n,"stroke-width","2"),i(n,"stroke-linecap","round"),i(s,"width","20"),i(s,"height","20"),i(s,"viewBox","0 0 20 20"),i(s,"fill","none"),i(s,"xmlns","http://www.w3.org/2000/svg"),i(s,"class","svelte-p0jntb"),i(e,"for",a[0]),i(e,"class","svelte-p0jntb")},m(p,h){P(p,e,h),f(e,r),f(e,t),f(e,l),f(e,c),f(e,s),f(s,o),f(s,n),u||(g=te(l,"click",a[2]),u=!0)},p(p,h){h&1&&Ae(r,p[0]),h&2&&(l.checked=p[1]),h&1&&i(l,"id",p[0]),h&1&&i(e,"for",p[0])},d(p){p&&d(e),u=!1,g()}}}function Qe(a){let e;function r(c,s){return c[1]?We:ze}let t=r(a),l=t(a);return{c(){l.c(),e=W()},l(c){l.l(c),e=W()},m(c,s){l.m(c,s),P(c,e,s)},p(c,[s]){t===(t=r(c))&&l?l.p(c,s):(l.d(1),l=t(c),l&&(l.c(),l.m(e.parentNode,e)))},i:A,o:A,d(c){l.d(c),c&&d(e)}}}function Re(a,e,r){let{id:t}=e,{checked:l}=e;const c=s=>{const o=s.srcElement;o.checked?Y.update(n=>(n.includes(o.id)||n.push(o.id),n)):Y.update(n=>(n=n.filter(u=>u!==o.id),n))};return a.$$set=s=>{"id"in s&&r(0,t=s.id),"checked"in s&&r(1,l=s.checked)},[t,l,c]}class De extends le{constructor(e){super(),re(this,e,Re,Qe,se,{id:0,checked:1})}}function Ee(a,e,r){const t=a.slice();return t[6]=e[r],t[8]=r,t}function Fe(a){let e,r;return e=new De({props:{id:a[1][a[8]],checked:!1}}),{c(){F(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){K(e,t,l),r=!0},p(t,l){const c={};l&2&&(c.id=t[1][t[8]]),e.$set(c)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){X(e,t)}}}function He(a){let e;return{c(){e=b("span"),this.h()},l(r){e=w(r,"SPAN",{class:!0}),_(e).forEach(d),this.h()},h(){i(e,"class","dropdownLoader svelte-nk24ac")},m(r,t){P(r,e,t)},p:A,i:A,o:A,d(r){r&&d(e)}}}function Le(a){let e,r,t,l,c;const s=[He,Fe],o=[];function n(u,g){return u[0]?0:1}return r=n(a),t=o[r]=s[r](a),{c(){e=b("li"),t.c(),l=B(),this.h()},l(u){e=w(u,"LI",{class:!0});var g=_(e);t.l(g),l=D(g),g.forEach(d),this.h()},h(){i(e,"class","svelte-nk24ac")},m(u,g){P(u,e,g),o[r].m(e,null),f(e,l),c=!0},p(u,g){let p=r;r=n(u),r===p?o[r].p(u,g):(Q(),T(o[p],1,1,()=>{o[p]=null}),R(),t=o[r],t?t.p(u,g):(t=o[r]=s[r](u),t.c()),k(t,1),t.m(e,l))},i(u){c||(k(t),c=!0)},o(u){T(t),c=!1},d(u){u&&d(e),o[r].d()}}}function Ke(a){let e,r,t={length:a[2]},l=[];for(let s=0;s<t.length;s+=1)l[s]=Le(Ee(a,t,s));const c=s=>T(l[s],1,1,()=>{l[s]=null});return{c(){e=b("ul");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=w(s,"UL",{class:!0});var o=_(e);for(let n=0;n<l.length;n+=1)l[n].l(o);o.forEach(d),this.h()},h(){i(e,"class","svelte-nk24ac")},m(s,o){P(s,e,o);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(e,null);r=!0},p(s,[o]){if(o&7){t={length:s[2]};let n;for(n=0;n<t.length;n+=1){const u=Ee(s,t,n);l[n]?(l[n].p(u,o),k(l[n],1)):(l[n]=Le(u),l[n].c(),k(l[n],1),l[n].m(e,null))}for(Q(),n=t.length;n<l.length;n+=1)c(n);R()}},i(s){if(!r){for(let o=0;o<t.length;o+=1)k(l[o]);r=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)T(l[o]);r=!1},d(s){s&&d(e),Be(l,s)}}}function Xe(a){if(a)return a.length>5?5:a.length}function Ye(a,e,r){let t;ee(a,Y,u=>r(4,t=u));let{tags:l}=e,{loading:c}=e,s=l,o=5;function n(u){if(l)return l.filter(g=>!u.includes(g))}return a.$$set=u=>{"tags"in u&&r(3,l=u.tags),"loading"in u&&r(0,c=u.loading)},a.$$.update=()=>{a.$$.dirty&16&&r(1,s=n(t)),a.$$.dirty&2&&r(2,o=Xe(s))},[c,s,o,l,t]}class Ne extends le{constructor(e){super(),re(this,e,Ye,Ke,se,{tags:3,loading:0})}}function Ze(a){let e,r;return e=new Ne({props:{tags:a[0],loading:!1}}),{c(){F(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){K(e,t,l),r=!0},p(t,l){const c={};l&1&&(c.tags=t[0]),e.$set(c)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){X(e,t)}}}function xe(a){let e,r;return e=new Ne({props:{loading:a[1]}}),{c(){F(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){K(e,t,l),r=!0},p(t,l){const c={};l&2&&(c.loading=t[1]),e.$set(c)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){X(e,t)}}}function et(a){let e,r,t,l;const c=[xe,Ze],s=[];function o(n,u){return n[1]?0:1}return r=o(a),t=s[r]=c[r](a),{c(){e=b("div"),t.c(),this.h()},l(n){e=w(n,"DIV",{class:!0});var u=_(e);t.l(u),u.forEach(d),this.h()},h(){i(e,"class","dropdown svelte-6q6an4")},m(n,u){P(n,e,u),s[r].m(e,null),l=!0},p(n,[u]){let g=r;r=o(n),r===g?s[r].p(n,u):(Q(),T(s[g],1,1,()=>{s[g]=null}),R(),t=s[r],t?t.p(n,u):(t=s[r]=c[r](n),t.c()),k(t,1),t.m(e,null))},i(n){l||(k(t),l=!0)},o(n){T(t),l=!1},d(n){n&&d(e),s[r].d()}}}function tt(a,e,r){let{tags:t}=e,{loading:l}=e;return a.$$set=c=>{"tags"in c&&r(0,t=c.tags),"loading"in c&&r(1,l=c.loading)},[t,l]}class Pe extends le{constructor(e){super(),re(this,e,tt,et,se,{tags:0,loading:1})}}function Te(a,e,r){const t=a.slice();return t[13]=e[r],t}function Se(a){let e,r,t={ctx:a,current:null,token:null,hasCatch:!1,pending:st,then:rt,catch:lt,value:16,blocks:[,,,]};return qe(a[7],t),{c(){e=W(),t.block.c()},l(l){e=W(),t.block.l(l)},m(l,c){P(l,e,c),t.block.m(l,t.anchor=c),t.mount=()=>e.parentNode,t.anchor=e,r=!0},p(l,c){a=l,Ge(t,a,c)},i(l){r||(k(t.block),r=!0)},o(l){for(let c=0;c<3;c+=1){const s=t.blocks[c];T(s)}r=!1},d(l){l&&d(e),t.block.d(l),t.token=null,t=null}}}function lt(a){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function rt(a){let e,r;return e=new Pe({props:{tags:a[16],loading:!1}}),{c(){F(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){K(e,t,l),r=!0},p:A,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){X(e,t)}}}function st(a){let e,r;return e=new Pe({props:{loading:!0}}),{c(){F(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){K(e,t,l),r=!0},p:A,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){X(e,t)}}}function $e(a){let e,r,t=a[5],l=[];for(let s=0;s<t.length;s+=1)l[s]=Ie(Te(a,t,s));const c=s=>T(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=W()},l(s){for(let o=0;o<l.length;o+=1)l[o].l(s);e=W()},m(s,o){for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(s,o);P(s,e,o),r=!0},p(s,o){if(o&32){t=s[5];let n;for(n=0;n<t.length;n+=1){const u=Te(s,t,n);l[n]?(l[n].p(u,o),k(l[n],1)):(l[n]=Ie(u),l[n].c(),k(l[n],1),l[n].m(e.parentNode,e))}for(Q(),n=t.length;n<l.length;n+=1)c(n);R()}},i(s){if(!r){for(let o=0;o<t.length;o+=1)k(l[o]);r=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)T(l[o]);r=!1},d(s){Be(l,s),s&&d(e)}}}function Ie(a){let e,r;return e=new De({props:{id:a[13],checked:!0}}),{c(){F(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){K(e,t,l),r=!0},p(t,l){const c={};l&32&&(c.id=t[13]),e.$set(c)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){X(e,t)}}}function nt(a){let e,r,t,l,c,s,o,n,u,g,p,h,m,L,j,v,$,N,ne,O,ae,oe,M,ce,C,ie,Z,ue,de,y=a[1]&&Se(a),E=a[5]&&$e(a);return{c(){e=b("div"),r=b("p"),t=q(`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`),l=B(),c=b("div"),s=b("input"),o=B(),n=b("small"),u=q("What is the theme of your Game Jam?"),g=B(),p=b("button"),h=q("Generate"),m=B(),L=b("div"),j=b("div"),y&&y.c(),v=B(),$=b("div"),N=b("input"),ne=B(),O=b("small"),ae=q("Add tags to specify what kind of game you want"),oe=B(),M=b("div"),E&&E.c(),ce=B(),C=b("small"),ie=q("Added Tags"),this.h()},l(S){e=w(S,"DIV",{class:!0});var I=_(e);r=w(I,"P",{class:!0});var he=_(r);t=G(he,`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`),he.forEach(d),l=D(I),c=w(I,"DIV",{class:!0});var z=_(c);s=w(z,"INPUT",{placeholder:!0,type:!0,class:!0}),o=D(z),n=w(z,"SMALL",{class:!0});var ge=_(n);u=G(ge,"What is the theme of your Game Jam?"),ge.forEach(d),g=D(z),p=w(z,"BUTTON",{class:!0});var pe=_(p);h=G(pe,"Generate"),pe.forEach(d),z.forEach(d),m=D(I),L=w(I,"DIV",{class:!0});var U=_(L);j=w(U,"DIV",{});var _e=_(j);y&&y.l(_e),_e.forEach(d),v=D(U),$=w(U,"DIV",{class:!0});var x=_($);N=w(x,"INPUT",{placeholder:!0,type:!0,class:!0}),ne=D(x),O=w(x,"SMALL",{class:!0});var me=_(O);ae=G(me,"Add tags to specify what kind of game you want"),me.forEach(d),x.forEach(d),oe=D(U),M=w(U,"DIV",{class:!0});var ke=_(M);E&&E.l(ke),ke.forEach(d),ce=D(U),C=w(U,"SMALL",{class:!0});var ve=_(C);ie=G(ve,"Added Tags"),ve.forEach(d),U.forEach(d),I.forEach(d),this.h()},h(){i(r,"class","svelte-4w8wga"),i(s,"placeholder","...enter Game Jam Theme here"),i(s,"type","text"),i(s,"class","svelte-4w8wga"),i(n,"class","svelte-4w8wga"),i(p,"class","svelte-4w8wga"),i(c,"class","prompt svelte-4w8wga"),i(N,"placeholder","...search for game tags"),i(N,"type","text"),i(N,"class","svelte-4w8wga"),i(O,"class","svelte-4w8wga"),i($,"class","search svelte-4w8wga"),i(M,"class","selectedTags svelte-4w8wga"),i(C,"class","svelte-4w8wga"),i(L,"class","tags svelte-4w8wga"),i(e,"class","main svelte-4w8wga")},m(S,I){P(S,e,I),f(e,r),f(r,t),f(e,l),f(e,c),f(c,s),be(s,a[4]),f(c,o),f(c,n),f(n,u),f(c,g),f(c,p),f(p,h),f(e,m),f(e,L),f(L,j),y&&y.m(j,null),a[9](j),f(L,v),f(L,$),f($,N),a[10](N),f($,ne),f($,O),f(O,ae),f(L,oe),f(L,M),E&&E.m(M,null),a[11](M),f(L,ce),f(L,C),f(C,ie),Z=!0,ue||(de=[te(s,"input",a[8]),te(p,"click",a[6])],ue=!0)},p(S,[I]){I&16&&s.value!==S[4]&&be(s,S[4]),S[1]?y?(y.p(S,I),I&2&&k(y,1)):(y=Se(S),y.c(),k(y,1),y.m(j,null)):y&&(Q(),T(y,1,1,()=>{y=null}),R()),S[5]?E?(E.p(S,I),I&32&&k(E,1)):(E=$e(S),E.c(),k(E,1),E.m(M,null)):E&&(Q(),T(E,1,1,()=>{E=null}),R())},i(S){Z||(k(y),k(E),Z=!0)},o(S){T(y),T(E),Z=!1},d(S){S&&d(e),y&&y.d(),a[9](null),a[10](null),E&&E.d(),a[11](null),ue=!1,je(de)}}}async function at(){return await(await fetch("https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/tags")).json()}function ot(a,e,r){let t,l,c;ee(a,we,v=>r(12,t=v)),ee(a,ye,v=>r(4,l=v)),ee(a,Y,v=>r(5,c=v)),Me(we,t="Generate your Game Jam Idea within minutes!",t);let s,o=!1,n,u;Ue(()=>{s.addEventListener("focusin",()=>{r(1,o=!0)}),window.addEventListener("click",v=>{const $=v.target;o&&!$.closest(".search")&&!$.closest(".dropdown")&&!($.tagName==="INPUT"&&$.type==="checkbox")&&r(1,o=!1)}),Y.subscribe(()=>{const v=n.querySelectorAll('input[type="checkbox"]');for(const N of v)N.checked=!0;const $=u.querySelectorAll('input[type="checkbox"]');for(const N of $)N.checked=!1})});function g(){if(!prompt){console.error("No prompt given!");return}Ve(`${Je}/result`)}const p=at();function h(){l=this.value,ye.set(l)}function m(v){fe[v?"unshift":"push"](()=>{u=v,r(3,u)})}function L(v){fe[v?"unshift":"push"](()=>{s=v,r(0,s)})}function j(v){fe[v?"unshift":"push"](()=>{n=v,r(2,n)})}return[s,o,n,u,l,c,g,p,h,m,L,j]}class ht extends le{constructor(e){super(),re(this,e,ot,nt,se,{})}}export{ht as component,dt as universal};
