function w(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function q(){return Object.create(null)}function g(t){t.forEach(T)}function O(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function ft(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function I(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function dt(t,e,n){t.$$.on_destroy.push(G(e,n))}function _t(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?H(n.ctx.slice(),t[1](i(e))):n.ctx}function ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],l=Math.max(e.dirty.length,r.length);for(let o=0;o<l;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function mt(t,e,n,i,r,s){if(r){const l=B(e,n,i,s);t.p(l,r)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function yt(t,e,n){return t.set(n),e}const J=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in J;let v=!1;function K(){v=!0}function Q(){v=!1}function R(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const c=e[u].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:R(1,r,b=>e[n[b]].claim_order,c))-1;i[u]=n[f]+1;const a=f+1;n[a]=u,r=Math.max(a,r)}const s=[],l=[];let o=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(s.push(e[u-1]);o>=u;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);s.reverse(),l.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<l.length;u++){for(;c<s.length&&l[u].claim_order>=s[c].claim_order;)c++;const f=c<s.length?s[c]:null;t.insertBefore(l[u],f)}}function V(t,e){if(v){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){v&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function xt(){return M(" ")}function $t(){return M("")}function wt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,i,r=!1){et(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const u=n(o);return u===void 0?t.splice(l,1):t[l]=u,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const u=n(o);return u===void 0?t.splice(l,1):t[l]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function P(t,e,n,i){return L(t,r=>r.nodeName===e,r=>{const s=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];n[o.name]||s.push(o.name)}s.forEach(l=>r.removeAttribute(l))},()=>i(e))}function Et(t,e,n){return P(t,e,n,Y)}function Nt(t,e,n){return P(t,e,n,Z)}function nt(t,e){return L(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>M(e),!0)}function St(t){return nt(t," ")}function At(t,e){e=""+e,t.data!==e&&(t.data=e)}function Mt(t,e){t.value=e??""}function jt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function kt(t,e){return new t(e)}let y;function p(t){y=t}function W(){if(!y)throw new Error("Function called outside component initialization");return y}function qt(t){W().$$.on_mount.push(t)}function Ct(t){W().$$.after_update.push(t)}const h=[],C=[];let m=[];const N=[],z=Promise.resolve();let S=!1;function D(){S||(S=!0,z.then(F))}function Tt(){return D(),z}function A(t){m.push(t)}function Ot(t){N.push(t)}const E=new Set;let _=0;function F(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),it(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;C.length;)C.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;N.length;)N.pop()();S=!1,E.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function rt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function Bt(){d={r:0,c:[],p:d}}function Lt(){d.r||g(d.c),d=d.p}function lt(t,e){t&&t.i&&($.delete(t),t.i(e))}function Pt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ut=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ut];function Wt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function zt(t){t&&t.c()}function Dt(t,e){t&&t.l(e)}function ct(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||A(()=>{const l=t.$$.on_mount.map(T).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...l):g(l),t.$$.on_mount=[]}),s.forEach(A)}function ot(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(h.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ft(t,e,n,i,r,s,l,o=[-1]){const u=y;p(t);const c=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:q(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};l&&l(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,b,...j)=>{const k=j.length?j[0]:b;return c.ctx&&r(c.ctx[a],c.ctx[a]=k)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](k),f&&st(t,a)),b}):[],c.update(),f=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){K();const a=tt(e.target);c.fragment&&c.fragment.l(a),a.forEach(X)}else c.fragment&&c.fragment.c();e.intro&&lt(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),Q(),F()}p(u)}class Ht{$destroy(){ot(this,1),this.$destroy=w}$on(e,n){if(!O(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ct as A,ot as B,V as C,w as D,dt as E,Wt as F,_t as G,Ot as H,mt as I,pt as J,ht as K,wt as L,bt as M,Mt as N,g as O,yt as P,Z as Q,Nt as R,Ht as S,ft as T,xt as a,gt as b,St as c,Pt as d,$t as e,Lt as f,lt as g,X as h,Ft as i,Ct as j,Y as k,Et as l,tt as m,vt as n,qt as o,jt as p,M as q,nt as r,at as s,Tt as t,At as u,Bt as v,C as w,kt as x,zt as y,Dt as z};