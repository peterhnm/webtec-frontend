function $(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function B(t){return t()}function T(){return Object.create(null)}function g(t){t.forEach(B)}function L(t){return typeof t=="function"}function ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function mt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function J(t){return Object.keys(t).length===0}function K(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pt(t,e,n){t.$$.on_destroy.push(K(e,n))}function yt(t,e,n,r){if(t){const i=P(t,e,n,r);return t[0](i)}}function P(t,e,n,r){return t[1]&&r?I(n.ctx.slice(),t[1](r(e))):n.ctx}function bt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],c=Math.max(e.dirty.length,i.length);for(let a=0;a<c;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function gt(t,e,n,r,i,s){if(i){const c=P(e,n,r,s);t.p(c,i)}}function xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function wt(t,e,n){return t.set(n),e}const Q=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in Q;let v=!1;function R(){v=!0}function U(){v=!1}function V(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=u?i+1:V(1,i,_=>e[n[_]].claim_order,u))-1;r[l]=n[f]+1;const o=f+1;n[o]=l,i=Math.max(o,i)}const s=[],c=[];let a=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(s.push(e[l-1]);a>=l;a--)c.push(e[a]);a--}for(;a>=0;a--)c.push(e[a]);s.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<s.length&&c[l].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(c[l],f)}}function Y(t,e){if(v){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function $t(t,e,n){v&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function kt(){return j(" ")}function Et(){return j("")}function Nt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function St(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function nt(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,r,i=!1){rt(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const a=t[c];if(e(a)){const l=n(a);return l===void 0?t.splice(c,1):t[c]=l,i||(t.claim_info.last_index=c),a}}for(let c=t.claim_info.last_index-1;c>=0;c--){const a=t[c];if(e(a)){const l=n(a);return l===void 0?t.splice(c,1):t[c]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,a}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function z(t,e,n,r){return W(t,i=>i.nodeName===e,i=>{const s=[];for(let c=0;c<i.attributes.length;c++){const a=i.attributes[c];n[a.name]||s.push(a.name)}s.forEach(c=>i.removeAttribute(c))},()=>r(e))}function jt(t,e,n){return z(t,e,n,tt)}function At(t,e,n){return z(t,e,n,et)}function it(t,e){return W(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>j(e),!0)}function Mt(t){return it(t," ")}function Ct(t,e){e=""+e,t.data!==e&&(t.data=e)}function qt(t,e){t.value=e??""}function Tt(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Ot(t,e){return new t(e)}let b;function d(t){b=t}function A(){if(!b)throw new Error("Function called outside component initialization");return b}function Bt(t){A().$$.on_mount.push(t)}function Lt(t){A().$$.after_update.push(t)}const p=[],O=[];let y=[];const E=[],D=Promise.resolve();let N=!1;function F(){N||(N=!0,D.then(M))}function Pt(){return F(),D}function S(t){y.push(t)}function Wt(t){E.push(t)}const k=new Set;let m=0;function M(){if(m!==0)return;const t=b;do{try{for(;m<p.length;){const e=p[m];m++,d(e),ct(e.$$)}}catch(e){throw p.length=0,m=0,e}for(d(null),p.length=0,m=0;O.length;)O.pop()();for(let e=0;e<y.length;e+=1){const n=y[e];k.has(n)||(k.add(n),n())}y.length=0}while(p.length);for(;E.length;)E.pop()();N=!1,k.clear(),d(t)}function ct(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function lt(t){const e=[],n=[];y.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),y=e}const w=new Set;let h;function ut(){h={r:0,c:[],p:h}}function st(){h.r||g(h.c),h=h.p}function H(t,e){t&&t.i&&(w.delete(t),t.i(e))}function at(t,e,n,r){if(t&&t.o){if(w.has(t))return;w.add(t),h.c.push(()=>{w.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function zt(t,e){const n=e.token={};function r(i,s,c,a){if(e.token!==n)return;e.resolved=a;let l=e.ctx;c!==void 0&&(l=l.slice(),l[c]=a);const u=i&&(e.current=i)(l);let f=!1;e.block&&(e.blocks?e.blocks.forEach((o,_)=>{_!==s&&o&&(ut(),at(o,1,1,()=>{e.blocks[_]===o&&(e.blocks[_]=null)}),st())}):e.block.d(1),u.c(),H(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[s]=u),f&&M()}if(G(t)){const i=A();if(t.then(s=>{d(i),r(e.then,1,e.value,s),d(null)},s=>{if(d(i),r(e.catch,2,e.error,s),d(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Dt(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}const ot=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ot];function Ft(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Ht(t){t&&t.c()}function It(t,e){t&&t.l(e)}function ft(t,e,n,r){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),r||S(()=>{const c=t.$$.on_mount.map(B).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),s.forEach(S)}function dt(t,e){const n=t.$$;n.fragment!==null&&(lt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(p.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Gt(t,e,n,r,i,s,c,a=[-1]){const l=b;d(t);const u=t.$$={fragment:null,ctx:[],props:s,update:$,not_equal:i,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:T(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};c&&c(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(o,_,...C)=>{const q=C.length?C[0]:_;return u.ctx&&i(u.ctx[o],u.ctx[o]=q)&&(!u.skip_bound&&u.bound[o]&&u.bound[o](q),f&&_t(t,o)),_}):[],u.update(),f=!0,g(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){R();const o=nt(e.target);u.fragment&&u.fragment.l(o),o.forEach(Z)}else u.fragment&&u.fragment.c();e.intro&&H(t.$$.fragment),ft(t,e.target,e.anchor,e.customElement),U(),M()}d(l)}class Jt{$destroy(){dt(this,1),this.$destroy=$}$on(e,n){if(!L(n))return $;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ft as A,dt as B,mt as C,Y as D,$ as E,Ft as F,yt as G,Wt as H,gt as I,xt as J,bt as K,pt as L,et as M,At as N,Nt as O,vt as P,qt as Q,g as R,Jt as S,wt as T,zt as U,Dt as V,kt as a,$t as b,Mt as c,at as d,Et as e,st as f,H as g,Z as h,Gt as i,Lt as j,tt as k,jt as l,nt as m,St as n,Bt as o,Tt as p,j as q,it as r,ht as s,Pt as t,Ct as u,ut as v,O as w,Ot as x,Ht as y,It as z};