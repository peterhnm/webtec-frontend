import{S as R,i as q,s as B,k as m,a as I,q as M,l as p,m as v,h,c as z,r as C,n as r,C as T,b as G,D as a,E as w,u as Q,w as X,F as Y,G as Z,y as V,z as F,A as N,H as ee,I as te,J as se,K as ae,g as D,d as P,B as O,L as le}from"../chunks/index.f397b9af.js";import{b as W}from"../chunks/paths.b424e233.js";import{h as K}from"../chunks/stores.eef69291.js";const oe=""+new URL("../assets/logo_small.acfa2c39.svg",import.meta.url).href;function re(u){let e,t,n,c,o,d,s,i,_,b,x,j,$,S;return{c(){e=m("header"),t=m("a"),n=m("img"),o=I(),d=m("nav"),s=m("ul"),i=m("li"),_=m("a"),b=M("Home"),x=I(),j=m("li"),$=m("p"),S=M("Contact"),this.h()},l(E){e=p(E,"HEADER",{class:!0});var k=v(e);t=p(k,"A",{href:!0,class:!0});var H=v(t);n=p(H,"IMG",{alt:!0,class:!0,src:!0}),H.forEach(h),o=z(k),d=p(k,"NAV",{class:!0});var A=v(d);s=p(A,"UL",{class:!0});var f=v(s);i=p(f,"LI",{class:!0});var l=v(i);_=p(l,"A",{href:!0,class:!0});var g=v(_);b=C(g,"Home"),g.forEach(h),l.forEach(h),x=z(f),j=p(f,"LI",{class:!0});var y=v(j);$=p(y,"P",{class:!0});var L=v($);S=C(L,"Contact"),L.forEach(h),y.forEach(h),f.forEach(h),A.forEach(h),k.forEach(h),this.h()},h(){r(n,"alt","JamBuddy Logo Small"),r(n,"class","logo-small svelte-h4o2jk"),T(n.src,c=oe)||r(n,"src",c),r(t,"href",W+"/"),r(t,"class","svelte-h4o2jk"),r(_,"href",W+"/"),r(_,"class","svelte-h4o2jk"),r(i,"class","svelte-h4o2jk"),r($,"class","svelte-h4o2jk"),r(j,"class","svelte-h4o2jk"),r(s,"class","svelte-h4o2jk"),r(d,"class","svelte-h4o2jk"),r(e,"class","svelte-h4o2jk")},m(E,k){G(E,e,k),a(e,t),a(t,n),a(e,o),a(e,d),a(d,s),a(s,i),a(i,_),a(_,b),a(s,x),a(s,j),a(j,$),a($,S)},p:w,i:w,o:w,d(E){E&&h(e)}}}class ne extends R{constructor(e){super(),q(this,e,null,re,B,{})}}const ce=""+new URL("../assets/logo_big.c0d7ad54.svg",import.meta.url).href;function ie(u){let e,t,n,c,o,d;return{c(){e=m("div"),t=m("img"),c=I(),o=m("p"),d=M(u[0]),this.h()},l(s){e=p(s,"DIV",{class:!0});var i=v(e);t=p(i,"IMG",{alt:!0,class:!0,src:!0}),c=z(i),o=p(i,"P",{class:!0});var _=v(o);d=C(_,u[0]),_.forEach(h),i.forEach(h),this.h()},h(){r(t,"alt","JamBuddy Logo"),r(t,"class","logo svelte-lag7d"),T(t.src,n=ce)||r(t,"src",n),r(o,"class","svelte-lag7d"),r(e,"class","container svelte-lag7d")},m(s,i){G(s,e,i),a(e,t),a(e,c),a(e,o),a(o,d)},p(s,[i]){i&1&&Q(d,s[0])},i:w,o:w,d(s){s&&h(e)}}}function _e(u,e,t){let{text:n}=e;return u.$$set=c=>{"text"in c&&t(0,n=c.text)},[n]}class ue extends R{constructor(e){super(),q(this,e,_e,ie,B,{text:0})}}function fe(u){let e,t,n,c,o,d,s,i,_,b,x,j,$,S,E;t=new ne({});function k(l){u[3](l)}let H={};u[0]!==void 0&&(H.text=u[0]),o=new ue({props:H}),X.push(()=>Y(o,"text",k));const A=u[2].default,f=Z(A,u,u[1],null);return{c(){e=m("div"),V(t.$$.fragment),n=I(),c=m("main"),V(o.$$.fragment),s=I(),f&&f.c(),i=I(),_=m("footer"),b=m("p"),x=M("Webtechnologien SS 2023"),j=I(),$=m("p"),S=M("Social Media"),this.h()},l(l){e=p(l,"DIV",{class:!0});var g=v(e);F(t.$$.fragment,g),n=z(g),c=p(g,"MAIN",{class:!0});var y=v(c);F(o.$$.fragment,y),s=z(y),f&&f.l(y),y.forEach(h),i=z(g),_=p(g,"FOOTER",{class:!0});var L=v(_);b=p(L,"P",{class:!0});var J=v(b);x=C(J,"Webtechnologien SS 2023"),J.forEach(h),j=z(L),$=p(L,"P",{class:!0});var U=v($);S=C(U,"Social Media"),U.forEach(h),L.forEach(h),g.forEach(h),this.h()},h(){r(c,"class","svelte-zjph2x"),r(b,"class","left svelte-zjph2x"),r($,"class","right svelte-zjph2x"),r(_,"class","svelte-zjph2x"),r(e,"class","app svelte-zjph2x")},m(l,g){G(l,e,g),N(t,e,null),a(e,n),a(e,c),N(o,c,null),a(c,s),f&&f.m(c,null),a(e,i),a(e,_),a(_,b),a(b,x),a(_,j),a(_,$),a($,S),E=!0},p(l,[g]){const y={};!d&&g&1&&(d=!0,y.text=l[0],ee(()=>d=!1)),o.$set(y),f&&f.p&&(!E||g&2)&&te(f,A,l,l[1],E?ae(A,l[1],g,null):se(l[1]),null)},i(l){E||(D(t.$$.fragment,l),D(o.$$.fragment,l),D(f,l),E=!0)},o(l){P(t.$$.fragment,l),P(o.$$.fragment,l),P(f,l),E=!1},d(l){l&&h(e),O(t),O(o),f&&f.d(l)}}}function he(u,e,t){let n;le(u,K,s=>t(0,n=s));let{$$slots:c={},$$scope:o}=e;function d(s){n=s,K.set(n)}return u.$$set=s=>{"$$scope"in s&&t(1,o=s.$$scope)},[n,o,c,d]}class ge extends R{constructor(e){super(),q(this,e,he,fe,B,{})}}export{ge as component};
