import{S as G,i as J,s as M,k as g,a as S,q as C,l as h,m as p,h as d,c as x,r as R,n,C as j,b as T,D as a,E as k,u as Q,w as X,F as Y,G as Z,y as F,z as N,A as O,H as ee,I as se,J as te,K as ae,g as q,d as B,B as W,L as le}from"../chunks/index.f397b9af.js";import{b as z}from"../chunks/paths.c5200b51.js";import{h as K}from"../chunks/stores.eef69291.js";const re=""+new URL("../assets/logo_small.acfa2c39.svg",import.meta.url).href;function ne(u){let e,s,o,c,r,m,t,i,_,E,w,y,b,A;return{c(){e=g("header"),s=g("a"),o=g("img"),r=S(),m=g("nav"),t=g("ul"),i=g("li"),_=g("a"),E=C("Home"),w=S(),y=g("li"),b=g("p"),A=C("Contact"),this.h()},l($){e=h($,"HEADER",{class:!0});var H=p(e);s=h(H,"A",{href:!0,class:!0});var P=p(s);o=h(P,"IMG",{alt:!0,class:!0,src:!0}),P.forEach(d),r=x(H),m=h(H,"NAV",{class:!0});var D=p(m);t=h(D,"UL",{class:!0});var f=p(t);i=h(f,"LI",{class:!0});var l=p(i);_=h(l,"A",{href:!0,class:!0});var v=p(_);E=R(v,"Home"),v.forEach(d),l.forEach(d),w=x(f),y=h(f,"LI",{class:!0});var L=p(y);b=h(L,"P",{class:!0});var I=p(b);A=R(I,"Contact"),I.forEach(d),L.forEach(d),f.forEach(d),D.forEach(d),H.forEach(d),this.h()},h(){n(o,"alt","JamBuddy Logo Small"),n(o,"class","logo-small svelte-1ssbrbe"),j(o.src,c=re)||n(o,"src",c),n(s,"href",z+"/"),n(s,"class","svelte-1ssbrbe"),n(_,"href",z+"/"),n(_,"class","svelte-1ssbrbe"),n(i,"class","svelte-1ssbrbe"),n(b,"class","svelte-1ssbrbe"),n(y,"class","svelte-1ssbrbe"),n(t,"class","svelte-1ssbrbe"),n(m,"class","svelte-1ssbrbe"),n(e,"class","svelte-1ssbrbe")},m($,H){T($,e,H),a(e,s),a(s,o),a(e,r),a(e,m),a(m,t),a(t,i),a(i,_),a(_,E),a(t,w),a(t,y),a(y,b),a(b,A)},p:k,i:k,o:k,d($){$&&d(e)}}}class oe extends G{constructor(e){super(),J(this,e,null,ne,M,{})}}const ce=""+new URL("../assets/logo_big.c0d7ad54.svg",import.meta.url).href;function ie(u){let e,s,o,c,r,m;return{c(){e=g("div"),s=g("img"),c=S(),r=g("p"),m=C(u[0]),this.h()},l(t){e=h(t,"DIV",{class:!0});var i=p(e);s=h(i,"IMG",{alt:!0,class:!0,src:!0}),c=x(i),r=h(i,"P",{class:!0});var _=p(r);m=R(_,u[0]),_.forEach(d),i.forEach(d),this.h()},h(){n(s,"alt","JamBuddy Logo"),n(s,"class","logo svelte-lag7d"),j(s.src,o=ce)||n(s,"src",o),n(r,"class","svelte-lag7d"),n(e,"class","container svelte-lag7d")},m(t,i){T(t,e,i),a(e,s),a(e,c),a(e,r),a(r,m)},p(t,[i]){i&1&&Q(m,t[0])},i:k,o:k,d(t){t&&d(e)}}}function _e(u,e,s){let{text:o}=e;return u.$$set=c=>{"text"in c&&s(0,o=c.text)},[o]}class ue extends G{constructor(e){super(),J(this,e,_e,ie,M,{text:0})}}function fe(u){let e,s,o,c,r,m,t,i,_,E,w,y,b,A,$;s=new oe({});function H(l){u[3](l)}let P={};u[0]!==void 0&&(P.text=u[0]),r=new ue({props:P}),X.push(()=>Y(r,"text",H));const D=u[2].default,f=Z(D,u,u[1],null);return{c(){e=g("div"),F(s.$$.fragment),o=S(),c=g("main"),F(r.$$.fragment),t=S(),f&&f.c(),i=S(),_=g("footer"),E=g("p"),w=C("Webtechnologien Sommersemester 2023"),y=S(),b=g("p"),A=C("Dennis Hawran, Peter Heinemann, Anna Tribulowski"),this.h()},l(l){e=h(l,"DIV",{class:!0});var v=p(e);N(s.$$.fragment,v),o=x(v),c=h(v,"MAIN",{class:!0});var L=p(c);N(r.$$.fragment,L),t=x(L),f&&f.l(L),L.forEach(d),i=x(v),_=h(v,"FOOTER",{class:!0});var I=p(_);E=h(I,"P",{class:!0});var U=p(E);w=R(U,"Webtechnologien Sommersemester 2023"),U.forEach(d),y=x(I),b=h(I,"P",{class:!0});var V=p(b);A=R(V,"Dennis Hawran, Peter Heinemann, Anna Tribulowski"),V.forEach(d),I.forEach(d),v.forEach(d),this.h()},h(){n(c,"class","svelte-gdng11"),n(E,"class","left svelte-gdng11"),n(b,"class","right svelte-gdng11"),n(_,"class","svelte-gdng11"),n(e,"class","app svelte-gdng11")},m(l,v){T(l,e,v),O(s,e,null),a(e,o),a(e,c),O(r,c,null),a(c,t),f&&f.m(c,null),a(e,i),a(e,_),a(_,E),a(E,w),a(_,y),a(_,b),a(b,A),$=!0},p(l,[v]){const L={};!m&&v&1&&(m=!0,L.text=l[0],ee(()=>m=!1)),r.$set(L),f&&f.p&&(!$||v&2)&&se(f,D,l,l[1],$?ae(D,l[1],v,null):te(l[1]),null)},i(l){$||(q(s.$$.fragment,l),q(r.$$.fragment,l),q(f,l),$=!0)},o(l){B(s.$$.fragment,l),B(r.$$.fragment,l),B(f,l),$=!1},d(l){l&&d(e),W(s),W(r),f&&f.d(l)}}}function de(u,e,s){let o;le(u,K,t=>s(0,o=t));let{$$slots:c={},$$scope:r}=e;function m(t){o=t,K.set(o)}return u.$$set=t=>{"$$scope"in t&&s(1,r=t.$$scope)},[o,r,c,m]}class ve extends G{constructor(e){super(),J(this,e,de,fe,M,{})}}export{ve as component};
