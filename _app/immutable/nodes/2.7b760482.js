import{S as Y,i as Z,s as x,k as w,a as T,q as M,l as y,m,c as S,r as P,h as _,n as i,b as D,C as d,L as ie,u as Ie,D as L,M as G,N as U,g as p,v as J,f as O,d as b,O as Se,E as ue,y as C,z as W,A as Q,B as R,e as K,P as De,Q as Be,R as ve,T as Ne,U as Ae,o as Me,w as Pe}from"../chunks/index.603fd7e3.js";import{g as Ge}from"../chunks/navigation.7eb663db.js";import{e as Ue}from"../chunks/singletons.c09b15e9.js";import{s as X,h as ke,p as be}from"../chunks/stores.df291e4b.js";const ze=!0,Ve=!1,je=async({fetch:o})=>({tags:await(await o("https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/tags")).json()}),ut=Object.freeze(Object.defineProperty({__proto__:null,load:je,prerender:ze,ssr:Ve},Symbol.toStringTag,{value:"Module"}));function qe(o){let e,r,t,l;return{c(){e=G("svg"),r=G("circle"),t=G("path"),l=G("path"),this.h()},l(n){e=U(n,"svg",{fill:!0,height:!0,viewBox:!0,width:!0,xmlns:!0,class:!0});var s=m(e);r=U(s,"circle",{cx:!0,cy:!0,fill:!0,r:!0}),m(r).forEach(_),t=U(s,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-width":!0}),m(t).forEach(_),l=U(s,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-width":!0}),m(l).forEach(_),s.forEach(_),this.h()},h(){i(r,"cx","10"),i(r,"cy","10"),i(r,"fill","white"),i(r,"r","10"),i(t,"d","M3 10L17 10"),i(t,"stroke","#999999"),i(t,"stroke-linecap","round"),i(t,"stroke-width","2"),i(l,"d","M10 3L10 17"),i(l,"stroke","#999999"),i(l,"stroke-linecap","round"),i(l,"stroke-width","2"),i(e,"fill","none"),i(e,"height","20"),i(e,"viewBox","0 0 20 20"),i(e,"width","20"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"class","svelte-1p7ae9z")},m(n,s){D(n,e,s),d(e,r),d(e,t),d(e,l)},d(n){n&&_(e)}}}function Je(o){let e,r,t;return{c(){e=G("svg"),r=G("circle"),t=G("path"),this.h()},l(l){e=U(l,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,class:!0});var n=m(e);r=U(n,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),m(r).forEach(_),t=U(n,"path",{d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0}),m(t).forEach(_),n.forEach(_),this.h()},h(){i(r,"cx","10"),i(r,"cy","10"),i(r,"r","10"),i(r,"fill","white"),i(t,"d","M3 10L17 10"),i(t,"stroke","#999999"),i(t,"stroke-width","2"),i(t,"stroke-linecap","round"),i(e,"width","20"),i(e,"height","20"),i(e,"viewBox","0 0 20 20"),i(e,"fill","none"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"class","svelte-1p7ae9z")},m(l,n){D(l,e,n),d(e,r),d(e,t)},d(l){l&&_(e)}}}function Oe(o){let e,r,t,l,n,s,c;function a(f,g){return f[1]?Je:qe}let u=a(o),h=u(o);return{c(){e=w("label"),r=w("input"),t=T(),l=M(o[0]),n=T(),h.c(),this.h()},l(f){e=y(f,"LABEL",{for:!0,class:!0});var g=m(e);r=y(g,"INPUT",{id:!0,type:!0,class:!0}),t=S(g),l=P(g,o[0]),n=S(g),h.l(g),g.forEach(_),this.h()},h(){r.checked=o[1],i(r,"id",o[0]),i(r,"type","checkbox"),i(r,"class","svelte-1p7ae9z"),i(e,"for",o[0]),i(e,"class","svelte-1p7ae9z")},m(f,g){D(f,e,g),d(e,r),d(e,t),d(e,l),d(e,n),h.m(e,null),s||(c=ie(r,"click",o[2]),s=!0)},p(f,[g]){g&2&&(r.checked=f[1]),g&1&&i(r,"id",f[0]),g&1&&Ie(l,f[0]),u!==(u=a(f))&&(h.d(1),h=u(f),h&&(h.c(),h.m(e,null))),g&1&&i(e,"for",f[0])},i:L,o:L,d(f){f&&_(e),h.d(),s=!1,c()}}}function Ce(o,e,r){let{id:t}=e,{checked:l}=e;const n=s=>{const c=s.srcElement;c.checked?X.update(a=>(a.includes(c.id)||a.push(c.id),a)):X.update(a=>(a=a.filter(u=>u!==c.id),a))};return o.$$set=s=>{"id"in s&&r(0,t=s.id),"checked"in s&&r(1,l=s.checked)},[t,l,n]}class ee extends Y{constructor(e){super(),Z(this,e,Ce,Oe,x,{id:0,checked:1})}}function we(o,e,r){const t=o.slice();return t[2]=e[r],t[4]=r,t}function We(o){let e,r;return e=new ee({props:{id:o[0][o[4]],checked:!1}}),{c(){C(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){Q(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.id=t[0][t[4]]),e.$set(n)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){R(e,t)}}}function Qe(o){let e,r,t,l,n;const s=[Fe,Re],c=[];function a(u,h){return h&3&&(e=null),e==null&&(e=!!u[1].includes(u[0][u[4]])),e?0:1}return r=a(o,-1),t=c[r]=s[r](o),{c(){t.c(),l=K()},l(u){t.l(u),l=K()},m(u,h){c[r].m(u,h),D(u,l,h),n=!0},p(u,h){let f=r;r=a(u,h),r===f?c[r].p(u,h):(J(),b(c[f],1,1,()=>{c[f]=null}),O(),t=c[r],t?t.p(u,h):(t=c[r]=s[r](u),t.c()),p(t,1),t.m(l.parentNode,l))},i(u){n||(p(t),n=!0)},o(u){b(t),n=!1},d(u){c[r].d(u),u&&_(l)}}}function Re(o){let e,r;return e=new ee({props:{id:o[0][o[4]],checked:!1}}),{c(){C(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){Q(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.id=t[0][t[4]]),e.$set(n)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){R(e,t)}}}function Fe(o){let e,r;return e=new ee({props:{id:o[0][o[4]],checked:!0}}),{c(){C(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){Q(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.id=t[0][t[4]]),e.$set(n)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){R(e,t)}}}function ye(o){let e,r,t,l,n;const s=[Qe,We],c=[];function a(u,h){return u[1]?0:1}return r=a(o),t=c[r]=s[r](o),{c(){e=w("li"),t.c(),l=T(),this.h()},l(u){e=y(u,"LI",{class:!0});var h=m(e);t.l(h),l=S(h),h.forEach(_),this.h()},h(){i(e,"class","svelte-1813ksv")},m(u,h){D(u,e,h),c[r].m(e,null),d(e,l),n=!0},p(u,h){let f=r;r=a(u),r===f?c[r].p(u,h):(J(),b(c[f],1,1,()=>{c[f]=null}),O(),t=c[r],t?t.p(u,h):(t=c[r]=s[r](u),t.c()),p(t,1),t.m(e,l))},i(u){n||(p(t),n=!0)},o(u){b(t),n=!1},d(u){u&&_(e),c[r].d()}}}function He(o){let e,r,t={length:5},l=[];for(let s=0;s<t.length;s+=1)l[s]=ye(we(o,t,s));const n=s=>b(l[s],1,1,()=>{l[s]=null});return{c(){e=w("ul");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=y(s,"UL",{class:!0});var c=m(e);for(let a=0;a<l.length;a+=1)l[a].l(c);c.forEach(_),this.h()},h(){i(e,"class","svelte-1813ksv")},m(s,c){D(s,e,c);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null);r=!0},p(s,[c]){if(c&3){t={length:5};let a;for(a=0;a<t.length;a+=1){const u=we(s,t,a);l[a]?(l[a].p(u,c),p(l[a],1)):(l[a]=ye(u),l[a].c(),p(l[a],1),l[a].m(e,null))}for(J(),a=t.length;a<l.length;a+=1)n(a);O()}},i(s){if(!r){for(let c=0;c<t.length;c+=1)p(l[c]);r=!0}},o(s){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)b(l[c]);r=!1},d(s){s&&_(e),Se(l,s)}}}function Ke(o,e,r){let t;ue(o,X,n=>r(1,t=n));let{tags:l}=e;return o.$$set=n=>{"tags"in n&&r(0,l=n.tags)},[l,t]}class Xe extends Y{constructor(e){super(),Z(this,e,Ke,He,x,{tags:0})}}function Ye(o){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function Ze(o){let e,r;return e=new Xe({props:{tags:o[1]}}),{c(){C(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){Q(e,t,l),r=!0},p:L,i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){R(e,t)}}}function xe(o){let e,r;return{c(){e=w("p"),r=M("loading ...")},l(t){e=y(t,"P",{});var l=m(e);r=P(l,"loading ..."),l.forEach(_)},m(t,l){D(t,e,l),d(e,r)},p:L,i:L,o:L,d(t){t&&_(e)}}}function et(o){let e,r,t={ctx:o,current:null,token:null,hasCatch:!1,pending:xe,then:Ze,catch:Ye,value:1,blocks:[,,,]};return De(o[0],t),{c(){e=w("div"),t.block.c(),this.h()},l(l){e=y(l,"DIV",{class:!0});var n=m(e);t.block.l(n),n.forEach(_),this.h()},h(){i(e,"class","dropdown svelte-3l38dh")},m(l,n){D(l,e,n),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null,r=!0},p(l,[n]){o=l,Be(t,o,n)},i(l){r||(p(t.block),r=!0)},o(l){for(let n=0;n<3;n+=1){const s=t.blocks[n];b(s)}r=!1},d(l){l&&_(e),t.block.d(),t.token=null,t=null}}}async function tt(){return await(await fetch("https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/tags")).json()}function lt(o){return[tt()]}class rt extends Y{constructor(e){super(),Z(this,e,lt,et,x,{})}}function $e(o,e,r){const t=o.slice();return t[8]=e[r],t}function Ee(o){let e,r,t=o[2],l=[];for(let s=0;s<t.length;s+=1)l[s]=Le($e(o,t,s));const n=s=>b(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=K()},l(s){for(let c=0;c<l.length;c+=1)l[c].l(s);e=K()},m(s,c){for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(s,c);D(s,e,c),r=!0},p(s,c){if(c&4){t=s[2];let a;for(a=0;a<t.length;a+=1){const u=$e(s,t,a);l[a]?(l[a].p(u,c),p(l[a],1)):(l[a]=Le(u),l[a].c(),p(l[a],1),l[a].m(e.parentNode,e))}for(J(),a=t.length;a<l.length;a+=1)n(a);O()}},i(s){if(!r){for(let c=0;c<t.length;c+=1)p(l[c]);r=!0}},o(s){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)b(l[c]);r=!1},d(s){Se(l,s),s&&_(e)}}}function Le(o){let e,r;return e=new ee({props:{id:o[8],checked:!0}}),{c(){C(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){Q(e,t,l),r=!0},p(t,l){const n={};l&4&&(n.id=t[8]),e.$set(n)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){R(e,t)}}}function Te(o){let e,r;return e=new rt({}),{c(){C(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){Q(e,t,l),r=!0},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){R(e,t)}}}function st(o){let e,r,t,l,n,s,c,a,u,h,f,g,te,I,B,N,le,z,re,se,A,ne,V,ae,oe,F,ce,fe,v=o[2]&&Ee(o),k=o[1]&&Te();return{c(){e=w("div"),r=w("p"),t=M(`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`),l=T(),n=w("div"),s=w("input"),c=T(),a=w("small"),u=M("What is the theme of your Game Jam?"),h=T(),f=w("button"),g=M("Generate"),te=T(),I=w("div"),B=w("div"),N=w("input"),le=T(),z=w("small"),re=M("Add tags to specify what kind of game you want"),se=T(),A=w("div"),v&&v.c(),ne=T(),V=w("small"),ae=M("Added Tags"),oe=T(),k&&k.c(),this.h()},l(E){e=y(E,"DIV",{class:!0});var $=m(e);r=y($,"P",{class:!0});var de=m(r);t=P(de,`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`),de.forEach(_),l=S($),n=y($,"DIV",{class:!0});var j=m(n);s=y(j,"INPUT",{placeholder:!0,type:!0,class:!0}),c=S(j),a=y(j,"SMALL",{class:!0});var he=m(a);u=P(he,"What is the theme of your Game Jam?"),he.forEach(_),h=S(j),f=y(j,"BUTTON",{class:!0});var _e=m(f);g=P(_e,"Generate"),_e.forEach(_),j.forEach(_),te=S($),I=y($,"DIV",{class:!0});var q=m(I);B=y(q,"DIV",{class:!0});var H=m(B);N=y(H,"INPUT",{placeholder:!0,type:!0,class:!0}),le=S(H),z=y(H,"SMALL",{class:!0});var ge=m(z);re=P(ge,"Add tags to specify what kind of game you want"),ge.forEach(_),H.forEach(_),se=S(q),A=y(q,"DIV",{class:!0});var pe=m(A);v&&v.l(pe),pe.forEach(_),ne=S(q),V=y(q,"SMALL",{class:!0});var me=m(V);ae=P(me,"Added Tags"),me.forEach(_),q.forEach(_),oe=S($),k&&k.l($),$.forEach(_),this.h()},h(){i(r,"class","svelte-1gg4rys"),i(s,"placeholder","...enter Game Jam Theme here"),i(s,"type","text"),i(s,"class","svelte-1gg4rys"),i(a,"class","svelte-1gg4rys"),i(f,"class","svelte-1gg4rys"),i(n,"class","prompt svelte-1gg4rys"),i(N,"placeholder","...search for game tags"),i(N,"type","text"),i(N,"class","svelte-1gg4rys"),i(z,"class","svelte-1gg4rys"),i(B,"class","search svelte-1gg4rys"),i(A,"class","selectedTags svelte-1gg4rys"),i(V,"class","svelte-1gg4rys"),i(I,"class","tags svelte-1gg4rys"),i(e,"class","main svelte-1gg4rys")},m(E,$){D(E,e,$),d(e,r),d(r,t),d(e,l),d(e,n),d(n,s),ve(s,o[3]),d(n,c),d(n,a),d(a,u),d(n,h),d(n,f),d(f,g),d(e,te),d(e,I),d(I,B),d(B,N),o[6](N),d(B,le),d(B,z),d(z,re),d(I,se),d(I,A),v&&v.m(A,null),d(I,ne),d(I,V),d(V,ae),d(e,oe),k&&k.m(e,null),F=!0,ce||(fe=[ie(s,"input",o[5]),ie(f,"click",o[4])],ce=!0)},p(E,[$]){$&8&&s.value!==E[3]&&ve(s,E[3]),E[2]?v?(v.p(E,$),$&4&&p(v,1)):(v=Ee(E),v.c(),p(v,1),v.m(A,null)):v&&(J(),b(v,1,1,()=>{v=null}),O()),E[1]?k?$&2&&p(k,1):(k=Te(),k.c(),p(k,1),k.m(e,null)):k&&(J(),b(k,1,1,()=>{k=null}),O())},i(E){F||(p(v),p(k),F=!0)},o(E){b(v),b(k),F=!1},d(E){E&&_(e),o[6](null),v&&v.d(),k&&k.d(),ce=!1,Ne(fe)}}}function nt(o,e,r){let t,l;ue(o,ke,f=>r(7,t=f)),ue(o,be,f=>r(3,l=f)),Ae(ke,t="Generate your Game Jam Idea within minutes!",t);let n,s=!1;Me(()=>{n.addEventListener("focusin",()=>{r(1,s=!0)}),window.addEventListener("click",f=>{const g=f.target;s&&!g.closest(".search")&&!g.closest(".dropdown")&&!(g.tagName==="INPUT"&&g.type==="checkbox")&&r(1,s=!1)})});function c(){if(!prompt){console.error("No prompt given!");return}Ge(`${Ue}/result`)}let a;X.subscribe(f=>{r(2,a=f)});function u(){l=this.value,be.set(l)}function h(f){Pe[f?"unshift":"push"](()=>{n=f,r(0,n)})}return[n,s,a,l,c,u,h]}class ft extends Y{constructor(e){super(),Z(this,e,nt,st,x,{})}}export{ft as component,ut as universal};
