import{S as X,i as Y,s as Z,k as v,a as T,q as B,l as b,m as w,c as I,r as U,h as m,n as _,b as D,C as f,L as ae,u as ye,D as M,g as d,v as P,f as j,d as h,M as $e,E as re,y as J,z as O,A as z,B as C,e as Q,N as de,O as we,P as Le,o as Ee,w as Se}from"../chunks/index.08a97d2f.js";import{g as Te}from"../chunks/navigation.6c9af8ff.js";import{e as Ie}from"../chunks/singletons.e6e9b06c.js";import{s as R,h as me,p as _e}from"../chunks/stores.9429585d.js";const De=!0,Ae=!1,Ne=async({fetch:i})=>({tags:(await(await i("https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/get_tags")).json()).tags}),Ze=Object.freeze(Object.defineProperty({__proto__:null,load:Ne,prerender:De,ssr:Ae},Symbol.toStringTag,{value:"Module"}));function Pe(i){let t,l,e,s,n,c;return{c(){t=v("label"),l=v("input"),e=T(),s=B(i[0]),this.h()},l(r){t=b(r,"LABEL",{for:!0});var a=w(t);l=b(a,"INPUT",{id:!0,type:!0}),e=I(a),s=U(a,i[0]),a.forEach(m),this.h()},h(){l.checked=i[1],_(l,"id",i[0]),_(l,"type","checkbox"),_(t,"for",i[0])},m(r,a){D(r,t,a),f(t,l),f(t,e),f(t,s),n||(c=ae(l,"click",i[2]),n=!0)},p(r,[a]){a&2&&(l.checked=r[1]),a&1&&_(l,"id",r[0]),a&1&&ye(s,r[0]),a&1&&_(t,"for",r[0])},i:M,o:M,d(r){r&&m(t),n=!1,c()}}}function je(i,t,l){let{id:e}=t,{checked:s}=t;const n=c=>{const r=c.srcElement;r.checked?R.update(a=>(a.includes(r.id)||a.push(r.id),a)):R.update(a=>(a=a.filter(o=>o!==r.id),a))};return i.$$set=c=>{"id"in c&&l(0,e=c.id),"checked"in c&&l(1,s=c.checked)},[e,s,n]}class x extends X{constructor(t){super(),Y(this,t,je,Pe,Z,{id:0,checked:1})}}function pe(i,t,l){const e=i.slice();return e[2]=t[l],e}function Ge(i){let t,l;return t=new x({props:{id:i[2],checked:!1}}),{c(){J(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,s){z(t,e,s),l=!0},p(e,s){const n={};s&1&&(n.id=e[2]),t.$set(n)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){C(t,e)}}}function Ve(i){let t,l,e,s,n;const c=[Be,qe],r=[];function a(o,u){return u&3&&(t=null),t==null&&(t=!!o[1].includes(o[2])),t?0:1}return l=a(i,-1),e=r[l]=c[l](i),{c(){e.c(),s=Q()},l(o){e.l(o),s=Q()},m(o,u){r[l].m(o,u),D(o,s,u),n=!0},p(o,u){let $=l;l=a(o,u),l===$?r[l].p(o,u):(P(),h(r[$],1,1,()=>{r[$]=null}),j(),e=r[l],e?e.p(o,u):(e=r[l]=c[l](o),e.c()),d(e,1),e.m(s.parentNode,s))},i(o){n||(d(e),n=!0)},o(o){h(e),n=!1},d(o){r[l].d(o),o&&m(s)}}}function qe(i){let t,l;return t=new x({props:{id:i[2],checked:!1}}),{c(){J(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,s){z(t,e,s),l=!0},p(e,s){const n={};s&1&&(n.id=e[2]),t.$set(n)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){C(t,e)}}}function Be(i){let t,l;return t=new x({props:{id:i[2],checked:!0}}),{c(){J(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,s){z(t,e,s),l=!0},p(e,s){const n={};s&1&&(n.id=e[2]),t.$set(n)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){C(t,e)}}}function ge(i){let t,l,e,s,n;const c=[Ve,Ge],r=[];function a(o,u){return o[1]?0:1}return l=a(i),e=r[l]=c[l](i),{c(){t=v("li"),e.c(),s=T()},l(o){t=b(o,"LI",{});var u=w(t);e.l(u),s=I(u),u.forEach(m)},m(o,u){D(o,t,u),r[l].m(t,null),f(t,s),n=!0},p(o,u){let $=l;l=a(o),l===$?r[l].p(o,u):(P(),h(r[$],1,1,()=>{r[$]=null}),j(),e=r[l],e?e.p(o,u):(e=r[l]=c[l](o),e.c()),d(e,1),e.m(t,s))},i(o){n||(d(e),n=!0)},o(o){h(e),n=!1},d(o){o&&m(t),r[l].d()}}}function Ue(i){let t,l,e,s=i[0],n=[];for(let r=0;r<s.length;r+=1)n[r]=ge(pe(i,s,r));const c=r=>h(n[r],1,1,()=>{n[r]=null});return{c(){t=v("div"),l=v("ul");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){t=b(r,"DIV",{class:!0});var a=w(t);l=b(a,"UL",{class:!0});var o=w(l);for(let u=0;u<n.length;u+=1)n[u].l(o);o.forEach(m),a.forEach(m),this.h()},h(){_(l,"class","svelte-yegjlm"),_(t,"class","tags")},m(r,a){D(r,t,a),f(t,l);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(l,null);e=!0},p(r,[a]){if(a&3){s=r[0];let o;for(o=0;o<s.length;o+=1){const u=pe(r,s,o);n[o]?(n[o].p(u,a),d(n[o],1)):(n[o]=ge(u),n[o].c(),d(n[o],1),n[o].m(l,null))}for(P(),o=s.length;o<n.length;o+=1)c(o);j()}},i(r){if(!e){for(let a=0;a<s.length;a+=1)d(n[a]);e=!0}},o(r){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)h(n[a]);e=!1},d(r){r&&m(t),$e(n,r)}}}function Me(i,t,l){let e;re(i,R,n=>l(1,e=n));let{tags:s}=t;return i.$$set=n=>{"tags"in n&&l(0,s=n.tags)},[s,e]}class Je extends X{constructor(t){super(),Y(this,t,Me,Ue,Z,{tags:0})}}function Oe(i){let t,l;return{c(){t=v("p"),l=B("loading ...")},l(e){t=b(e,"P",{});var s=w(t);l=U(s,"loading ..."),s.forEach(m)},m(e,s){D(e,t,s),f(t,l)},p:M,i:M,o:M,d(e){e&&m(t)}}}function ze(i){let t,l;return t=new Je({props:{tags:i[0]}}),{c(){J(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,s){z(t,e,s),l=!0},p(e,s){const n={};s&1&&(n.tags=e[0]),t.$set(n)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){C(t,e)}}}function Ce(i){let t,l,e,s;const n=[ze,Oe],c=[];function r(a,o){return a[0]?0:1}return l=r(i),e=c[l]=n[l](i),{c(){t=v("div"),e.c(),this.h()},l(a){t=b(a,"DIV",{class:!0});var o=w(t);e.l(o),o.forEach(m),this.h()},h(){_(t,"class","dropdown svelte-mcnb3j")},m(a,o){D(a,t,o),c[l].m(t,null),s=!0},p(a,[o]){let u=l;l=r(a),l===u?c[l].p(a,o):(P(),h(c[u],1,1,()=>{c[u]=null}),j(),e=c[l],e?e.p(a,o):(e=c[l]=n[l](a),e.c()),d(e,1),e.m(t,null))},i(a){s||(d(e),s=!0)},o(a){h(e),s=!1},d(a){a&&m(t),c[l].d()}}}function We(i,t,l){let{tags:e}=t;return i.$$set=s=>{"tags"in s&&l(0,e=s.tags)},[e]}class Fe extends X{constructor(t){super(),Y(this,t,We,Ce,Z,{tags:0})}}function he(i,t,l){const e=i.slice();return e[10]=t[l],e}function ke(i){let t,l;return t=new Fe({props:{tags:i[4]}}),{c(){J(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,s){z(t,e,s),l=!0},p:M,i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){C(t,e)}}}function ve(i){let t,l,e=i[2],s=[];for(let c=0;c<e.length;c+=1)s[c]=be(he(i,e,c));const n=c=>h(s[c],1,1,()=>{s[c]=null});return{c(){for(let c=0;c<s.length;c+=1)s[c].c();t=Q()},l(c){for(let r=0;r<s.length;r+=1)s[r].l(c);t=Q()},m(c,r){for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(c,r);D(c,t,r),l=!0},p(c,r){if(r&4){e=c[2];let a;for(a=0;a<e.length;a+=1){const o=he(c,e,a);s[a]?(s[a].p(o,r),d(s[a],1)):(s[a]=be(o),s[a].c(),d(s[a],1),s[a].m(t.parentNode,t))}for(P(),a=e.length;a<s.length;a+=1)n(a);j()}},i(c){if(!l){for(let r=0;r<e.length;r+=1)d(s[r]);l=!0}},o(c){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)h(s[r]);l=!1},d(c){$e(s,c),c&&m(t)}}}function be(i){let t,l;return t=new x({props:{id:i[10],checked:!0}}),{c(){J(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,s){z(t,e,s),l=!0},p(e,s){const n={};s&4&&(n.id=e[10]),t.$set(n)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){C(t,e)}}}function He(i){let t,l,e,s,n,c,r,a,o,u,$,W,k,E,S,F,A,ee,G,te,le,N,H,se,ne,p=i[1]&&ke(i),g=i[2]&&ve(i);return{c(){t=v("div"),l=v("p"),e=B(`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet.`),s=T(),n=v("div"),c=v("input"),r=T(),a=v("small"),o=B("What is the theme of your Game Jam?"),u=T(),$=v("button"),W=B("Generate"),k=T(),E=v("div"),S=v("div"),p&&p.c(),F=T(),A=v("input"),ee=T(),G=v("small"),te=B("Add tags to specify what kind of game you want"),le=T(),N=v("div"),g&&g.c(),this.h()},l(y){t=b(y,"DIV",{class:!0});var L=w(t);l=b(L,"P",{});var oe=w(l);e=U(oe,`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet.`),oe.forEach(m),s=I(L),n=b(L,"DIV",{class:!0});var V=w(n);c=b(V,"INPUT",{placeholder:!0,type:!0,class:!0}),r=I(V),a=b(V,"SMALL",{class:!0});var ie=w(a);o=U(ie,"What is the theme of your Game Jam?"),ie.forEach(m),u=I(V),$=b(V,"BUTTON",{});var ce=w($);W=U(ce,"Generate"),ce.forEach(m),V.forEach(m),k=I(L),E=b(L,"DIV",{class:!0});var K=w(E);S=b(K,"DIV",{class:!0});var q=w(S);p&&p.l(q),F=I(q),A=b(q,"INPUT",{placeholder:!0,type:!0,class:!0}),ee=I(q),G=b(q,"SMALL",{class:!0});var ue=w(G);te=U(ue,"Add tags to specify what kind of game you want"),ue.forEach(m),q.forEach(m),le=I(K),N=b(K,"DIV",{class:!0});var fe=w(N);g&&g.l(fe),fe.forEach(m),K.forEach(m),L.forEach(m),this.h()},h(){_(c,"placeholder","...enter Game Jam Theme here"),_(c,"type","text"),_(c,"class","svelte-1wl7mko"),_(a,"class","svelte-1wl7mko"),_(n,"class","prompt svelte-1wl7mko"),_(A,"placeholder","...search for game tags"),_(A,"type","text"),_(A,"class","svelte-1wl7mko"),_(G,"class","svelte-1wl7mko"),_(S,"class","search svelte-1wl7mko"),_(N,"class","selectedTags svelte-1wl7mko"),_(E,"class","tags svelte-1wl7mko"),_(t,"class","main")},m(y,L){D(y,t,L),f(t,l),f(l,e),f(t,s),f(t,n),f(n,c),de(c,i[3]),f(n,r),f(n,a),f(a,o),f(n,u),f(n,$),f($,W),f(t,k),f(t,E),f(E,S),p&&p.m(S,null),f(S,F),f(S,A),i[8](A),f(S,ee),f(S,G),f(G,te),f(E,le),f(E,N),g&&g.m(N,null),H=!0,se||(ne=[ae(c,"input",i[7]),ae($,"click",i[5])],se=!0)},p(y,[L]){L&8&&c.value!==y[3]&&de(c,y[3]),y[1]?p?(p.p(y,L),L&2&&d(p,1)):(p=ke(y),p.c(),d(p,1),p.m(S,F)):p&&(P(),h(p,1,1,()=>{p=null}),j()),y[2]?g?(g.p(y,L),L&4&&d(g,1)):(g=ve(y),g.c(),d(g,1),g.m(N,null)):g&&(P(),h(g,1,1,()=>{g=null}),j())},i(y){H||(d(p),d(g),H=!0)},o(y){h(p),h(g),H=!1},d(y){y&&m(t),p&&p.d(),i[8](null),g&&g.d(),se=!1,we(ne)}}}function Ke(i,t,l){let e,s;re(i,me,k=>l(9,e=k)),re(i,_e,k=>l(3,s=k));let{data:n}=t,{tags:c}=n;Le(me,e="Generate your Game Jam Idea within minutes!",e);let r,a=!1;Ee(()=>{r.addEventListener("focusin",()=>{l(1,a=!0)}),window.addEventListener("click",k=>{const E=k.target;a&&!E.closest(".search")&&!(E.tagName==="INPUT"&&E.type==="checkbox")&&(l(1,a=!1),k.stopPropagation(),k.preventDefault())})});function o(){if(!prompt){console.error("No prompt given!");return}Te(`${Ie}/result`)}let u;R.subscribe(k=>{l(2,u=k)});function $(){s=this.value,_e.set(s)}function W(k){Se[k?"unshift":"push"](()=>{r=k,l(0,r)})}return i.$$set=k=>{"data"in k&&l(6,n=k.data)},[r,a,u,s,c,o,n,$,W]}class xe extends X{constructor(t){super(),Y(this,t,Ke,He,Z,{data:6})}}export{xe as component,Ze as universal};
