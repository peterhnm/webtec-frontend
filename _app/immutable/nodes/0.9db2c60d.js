import{S as w,i as B,s as J,k as v,q as H,a as x,l as h,m,r as I,h as u,c as z,n as _,b as U,C as a,D as j,E as G,u as K,w as T,F as Q,G as X,y as N,z as O,A as R,H as Z,I as ee,J as te,K as se,g as M,d as C,B as W}from"../chunks/index.262819fb.js";import{p as ae}from"../chunks/stores.24c882fb.js";import{h as Y}from"../chunks/stores.f5617f02.js";function le(r){let e,s,o,n,c,f,t,i,g,$,D,y,b,L;return{c(){e=v("header"),s=v("p"),o=H("JAMBUDDY"),n=x(),c=v("nav"),f=v("ul"),t=v("li"),i=v("a"),g=H("Home"),D=x(),y=v("li"),b=v("p"),L=H("Contact"),this.h()},l(E){e=h(E,"HEADER",{class:!0});var k=m(e);s=h(k,"P",{class:!0});var S=m(s);o=I(S,"JAMBUDDY"),S.forEach(u),n=z(k),c=h(k,"NAV",{class:!0});var P=m(c);f=h(P,"UL",{class:!0});var d=m(f);t=h(d,"LI",{"aria-current":!0,class:!0});var l=m(t);i=h(l,"A",{href:!0,class:!0});var p=m(i);g=I(p,"Home"),p.forEach(u),l.forEach(u),D=z(d),y=h(d,"LI",{class:!0});var q=m(y);b=h(q,"P",{class:!0});var A=m(b);L=I(A,"Contact"),A.forEach(u),q.forEach(u),d.forEach(u),P.forEach(u),k.forEach(u),this.h()},h(){_(s,"class","svelte-3qf48k"),_(i,"href","/"),_(i,"class","svelte-3qf48k"),_(t,"aria-current",$=r[0].url.pathname==="/"?"page":void 0),_(t,"class","svelte-3qf48k"),_(b,"class","svelte-3qf48k"),_(y,"class","svelte-3qf48k"),_(f,"class","svelte-3qf48k"),_(c,"class","svelte-3qf48k"),_(e,"class","svelte-3qf48k")},m(E,k){U(E,e,k),a(e,s),a(s,o),a(e,n),a(e,c),a(c,f),a(f,t),a(t,i),a(i,g),a(f,D),a(f,y),a(y,b),a(b,L)},p(E,[k]){k&1&&$!==($=E[0].url.pathname==="/"?"page":void 0)&&_(t,"aria-current",$)},i:j,o:j,d(E){E&&u(e)}}}function ne(r,e,s){let o;return G(r,ae,n=>s(0,o=n)),[o]}class oe extends w{constructor(e){super(),B(this,e,ne,le,J,{})}}function re(r){let e,s,o,n,c,f;return{c(){e=v("div"),s=v("p"),o=H("Logo"),n=x(),c=v("p"),f=H(r[0]),this.h()},l(t){e=h(t,"DIV",{class:!0});var i=m(e);s=h(i,"P",{class:!0});var g=m(s);o=I(g,"Logo"),g.forEach(u),n=z(i),c=h(i,"P",{class:!0});var $=m(c);f=I($,r[0]),$.forEach(u),i.forEach(u),this.h()},h(){_(s,"class","svelte-12ddnnv"),_(c,"class","svelte-12ddnnv"),_(e,"class","logo svelte-12ddnnv")},m(t,i){U(t,e,i),a(e,s),a(s,o),a(e,n),a(e,c),a(c,f)},p(t,[i]){i&1&&K(f,t[0])},i:j,o:j,d(t){t&&u(e)}}}function ce(r,e,s){let{text:o}=e;return r.$$set=n=>{"text"in n&&s(0,o=n.text)},[o]}class ie extends w{constructor(e){super(),B(this,e,ce,re,J,{text:0})}}function fe(r){let e,s,o,n,c,f,t,i,g,$,D,y,b,L,E;s=new oe({});function k(l){r[3](l)}let S={};r[0]!==void 0&&(S.text=r[0]),n=new ie({props:S}),T.push(()=>Q(n,"text",k));const P=r[2].default,d=X(P,r,r[1],null);return{c(){e=v("div"),N(s.$$.fragment),o=x(),N(n.$$.fragment),f=x(),t=v("main"),d&&d.c(),i=x(),g=v("footer"),$=v("p"),D=H("Webtechnologien"),y=x(),b=v("p"),L=H("Social Media"),this.h()},l(l){e=h(l,"DIV",{class:!0});var p=m(e);O(s.$$.fragment,p),o=z(p),O(n.$$.fragment,p),f=z(p),t=h(p,"MAIN",{class:!0});var q=m(t);d&&d.l(q),q.forEach(u),i=z(p),g=h(p,"FOOTER",{class:!0});var A=m(g);$=h(A,"P",{class:!0});var V=m($);D=I(V,"Webtechnologien"),V.forEach(u),y=z(A),b=h(A,"P",{class:!0});var F=m(b);L=I(F,"Social Media"),F.forEach(u),A.forEach(u),p.forEach(u),this.h()},h(){_(t,"class","svelte-3fjzve"),_($,"class","left svelte-3fjzve"),_(b,"class","right svelte-3fjzve"),_(g,"class","svelte-3fjzve"),_(e,"class","app svelte-3fjzve")},m(l,p){U(l,e,p),R(s,e,null),a(e,o),R(n,e,null),a(e,f),a(e,t),d&&d.m(t,null),a(e,i),a(e,g),a(g,$),a($,D),a(g,y),a(g,b),a(b,L),E=!0},p(l,[p]){const q={};!c&&p&1&&(c=!0,q.text=l[0],Z(()=>c=!1)),n.$set(q),d&&d.p&&(!E||p&2)&&ee(d,P,l,l[1],E?se(P,l[1],p,null):te(l[1]),null)},i(l){E||(M(s.$$.fragment,l),M(n.$$.fragment,l),M(d,l),E=!0)},o(l){C(s.$$.fragment,l),C(n.$$.fragment,l),C(d,l),E=!1},d(l){l&&u(e),W(s),W(n),d&&d.d(l)}}}function _e(r,e,s){let o;G(r,Y,t=>s(0,o=t));let{$$slots:n={},$$scope:c}=e;function f(t){o=t,Y.set(o)}return r.$$set=t=>{"$$scope"in t&&s(1,c=t.$$scope)},[o,c,n,f]}class ve extends w{constructor(e){super(),B(this,e,_e,fe,J,{})}}export{ve as component};
