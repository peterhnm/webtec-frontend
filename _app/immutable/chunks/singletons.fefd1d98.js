import{w as c}from"./index.d53ccf4a.js";var _;const b=((_=globalThis.__sveltekit_jta6xf)==null?void 0:_.base)??"/webtec-frontend";var g;const v=((g=globalThis.__sveltekit_jta6xf)==null?void 0:g.assets)??b,k="1683722457685",A="sveltekit:snapshot",R="sveltekit:scroll",S="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function T(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function x(){return{x:pageXOffset,y:pageYOffset}}function i(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function h(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function y(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=h(e)}}function I(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,l=!n||!!s||m(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),r=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:l,target:s,download:r}}function O(e){let t=null,n=null,s=null,l=null,r=null,o=null,a=e;for(;a&&a!==document.documentElement;)s===null&&(s=i(a,"preload-code")),l===null&&(l=i(a,"preload-data")),t===null&&(t=i(a,"keepfocus")),n===null&&(n=i(a,"noscroll")),r===null&&(r=i(a,"reload")),o===null&&(o=i(a,"replacestate")),a=h(a);return{preload_code:d[s??"off"],preload_data:d[l??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:r==="off"?!1:r===""?!0:null,replace_state:o==="off"?!1:o===""?!0:null}}function p(e){const t=c(e);let n=!0;function s(){n=!0,t.update(o=>o)}function l(o){n=!1,t.set(o)}function r(o){let a;return t.subscribe(u=>{(a===void 0||n&&u!==a)&&o(a=u)})}return{notify:s,set:l,subscribe:r}}function w(){const{set:e,subscribe:t}=c(!1);let n;async function s(){clearTimeout(n);try{const l=await fetch(`${v}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!l.ok)return!1;const o=(await l.json()).version!==k;return o&&(e(!0),clearTimeout(n)),o}catch{return!1}}return{subscribe:t,check:s}}function m(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function U(e){e.client}const L={url:p({}),page:p({}),navigating:c(null),updated:w()};export{S as I,f as P,R as S,A as a,I as b,O as c,x as d,b as e,y as f,T as g,U as h,m as i,L as s};
