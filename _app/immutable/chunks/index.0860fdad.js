function w(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function O(t){return t()}function q(){return Object.create(null)}function g(t){t.forEach(O)}function T(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function st(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function H(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(I(e,n))}function dt(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],l=Math.max(e.dirty.length,r.length);for(let o=0;o<l;o+=1)a[o]=e.dirty[o]|r[o];return a}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,a){if(r){const l=B(e,n,i,a);t.p(l,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const G=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in G;let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const c=e[u].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:Q(1,r,b=>e[n[b]].claim_order,c))-1;i[u]=n[f]+1;const s=f+1;n[s]=u,r=Math.max(s,r)}const a=[],l=[];let o=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(a.push(e[u-1]);o>=u;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);a.reverse(),l.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<l.length;u++){for(;c<a.length&&l[u].claim_order>=a[c].claim_order;)c++;const f=c<a.length?a[c]:null;t.insertBefore(l[u],f)}}function U(t,e){if(v){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){v&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function gt(){return M(" ")}function bt(){return M("")}function xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,i,r=!1){Z(t);const a=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const u=n(o);return u===void 0?t.splice(l,1):t[l]=u,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const u=n(o);return u===void 0?t.splice(l,1):t[l]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function tt(t,e,n,i){return L(t,r=>r.nodeName===e,r=>{const a=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];n[o.name]||a.push(o.name)}a.forEach(l=>r.removeAttribute(l))},()=>i(e))}function wt(t,e,n){return tt(t,e,n,X)}function et(t,e){return L(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>M(e),!0)}function vt(t){return et(t," ")}function Et(t,e){e=""+e,t.data!==e&&(t.data=e)}function Nt(t,e){t.value=e??""}function St(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function At(t,e){return new t(e)}let y;function p(t){y=t}function P(){if(!y)throw new Error("Function called outside component initialization");return y}function Mt(t){P().$$.on_mount.push(t)}function jt(t){P().$$.after_update.push(t)}const h=[],C=[];let m=[];const N=[],W=Promise.resolve();let S=!1;function z(){S||(S=!0,W.then(D))}function kt(){return z(),W}function A(t){m.push(t)}function qt(t){N.push(t)}const E=new Set;let _=0;function D(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),nt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;C.length;)C.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;N.length;)N.pop()();S=!1,E.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function it(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function Ct(){d={r:0,c:[],p:d}}function Ot(){d.r||g(d.c),d=d.p}function rt(t,e){t&&t.i&&($.delete(t),t.i(e))}function Tt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const lt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...lt];function Bt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Lt(t){t&&t.c()}function Pt(t,e){t&&t.l(e)}function ut(t,e,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),i||A(()=>{const l=t.$$.on_mount.map(O).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...l):g(l),t.$$.on_mount=[]}),a.forEach(A)}function ct(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,r,a,l,o=[-1]){const u=y;p(t);const c=t.$$={fragment:null,ctx:[],props:a,update:w,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:q(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};l&&l(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(s,b,...j)=>{const k=j.length?j[0]:b;return c.ctx&&r(c.ctx[s],c.ctx[s]=k)&&(!c.skip_bound&&c.bound[s]&&c.bound[s](k),f&&ot(t,s)),b}):[],c.update(),f=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){J();const s=Y(e.target);c.fragment&&c.fragment.l(s),s.forEach(V)}else c.fragment&&c.fragment.c();e.intro&&rt(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),K(),D()}p(u)}class zt{$destroy(){ct(this,1),this.$destroy=w}$on(e,n){if(!T(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!H(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ut as A,ct as B,dt as C,ht as D,mt as E,_t as F,U as G,w as H,ft as I,xt as J,yt as K,Bt as L,qt as M,Nt as N,g as O,st as P,zt as S,gt as a,pt as b,vt as c,Tt as d,bt as e,Ot as f,rt as g,V as h,Wt as i,jt as j,X as k,wt as l,Y as m,$t as n,Mt as o,St as p,M as q,et as r,at as s,kt as t,Et as u,Ct as v,C as w,At as x,Lt as y,Pt as z};
