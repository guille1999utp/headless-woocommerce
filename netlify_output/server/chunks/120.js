exports.id=120,exports.ids=[120],exports.modules={14295:e=>{e.exports={style:{fontFamily:"'__Manrope_1e8cc3', '__Manrope_Fallback_1e8cc3'",fontStyle:"normal"},className:"__className_1e8cc3"}},16014:e=>{e.exports={style:{fontFamily:"'__Ubuntu_1110a5', '__Ubuntu_Fallback_1110a5'",fontStyle:"normal"},className:"__className_1110a5"}},70854:(e,t,n)=>{"use strict";let o,i,r;n.d(t,{u:()=>B});var l=n(3729);let a=new Set,s=new WeakMap,d=new WeakMap,c=new WeakMap,u=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap,h=new WeakSet,g=0,w=0,y="__aa_tgt",b="__aa_del",v="__aa_new";function _(e){clearTimeout(m.get(e));let t=k(e),n=$(t)?500:t.duration;m.set(e,setTimeout(async()=>{let t=c.get(e);try{await (null==t?void 0:t.finished),s.set(e,N(e)),function(e){let t=u.get(e);null==t||t.disconnect();let n=s.get(e),i=0;n||(n=N(e),s.set(e,n));let{offsetWidth:r,offsetHeight:l}=o,a=[n.top-5,r-(n.left+5+n.width),l-(n.top+5+n.height),n.left-5].map(e=>`${-1*Math.floor(e)}px`).join(" "),d=new IntersectionObserver(()=>{++i>1&&_(e)},{root:o,threshold:1,rootMargin:a});d.observe(e),u.set(e,d)}(e)}catch{}},n))}function E(e){setTimeout(()=>{f.set(e,setInterval(()=>x(_.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function x(e){"function"==typeof requestIdleCallback?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function M(e,t){t||y in e?!t||y in t||Object.defineProperty(t,y,{value:e}):Object.defineProperty(e,y,{value:e})}function W(e){return Number(e.replace(/[^0-9.\-]/g,""))}function N(e){let t=e.getBoundingClientRect(),{x:n,y:o}=function(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}(e);return{top:t.top+o,left:t.left+n,width:t.width,height:t.height}}function T(e,t,n){let o=t.width,i=t.height,r=n.width,l=n.height,a=getComputedStyle(e);if("content-box"===a.getPropertyValue("box-sizing")){let e=W(a.paddingTop)+W(a.paddingBottom)+W(a.borderTopWidth)+W(a.borderBottomWidth),t=W(a.paddingLeft)+W(a.paddingRight)+W(a.borderRightWidth)+W(a.borderLeftWidth);o-=t,r-=t,i-=e,l-=e}return[o,r,i,l].map(Math.round)}function k(e){return y in e&&p.has(e[y])?p.get(e[y]):{duration:250,easing:"ease-in-out"}}function C(e){if(y in e)return e[y]}function L(e){let t=C(e);return!!t&&h.has(t)}function S(e,...t){t.forEach(t=>t(e,p.has(e)));for(let n=0;n<e.children.length;n++){let o=e.children.item(n);o&&t.forEach(e=>e(o,p.has(o)))}}function O(e){return Array.isArray(e)?e:[e]}function $(e){return"function"==typeof e}function j(e){let t;v in e&&delete e[v];let n=N(e);s.set(e,n);let o=k(e);if(L(e)){if("function"!=typeof o)t=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*o.duration,easing:"ease-in"});else{let[i]=O(o(e,"add",n));(t=new Animation(i)).play()}c.set(e,t),t.addEventListener("finish",_.bind(null,e))}}function A(e,t){var n;e.remove(),s.delete(e),d.delete(e),c.delete(e),null===(n=u.get(e))||void 0===n||n.disconnect(),setTimeout(()=>{if(b in e&&delete e[b],Object.defineProperty(e,v,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(let n in t)e.style[n]=""},0)}function B(e){let[t,n]=(0,l.useState)(),o=(0,l.useMemo)(()=>e,[]);return[(0,l.useCallback)(e=>{e instanceof HTMLElement?n(function(e,t={}){return i&&r&&!(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!$(t)&&!t.disrespectUserMotionPreference)&&(h.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),S(e,_,E,e=>null==r?void 0:r.observe(e)),$(t)?p.set(e,t):p.set(e,{duration:250,easing:"ease-in-out",...t}),i.observe(e,{childList:!0}),a.add(e)),Object.freeze({parent:e,enable:()=>{h.add(e)},disable:()=>{h.delete(e)},isEnabled:()=>h.has(e)})}(e,o)):n(void 0)},[o]),(0,l.useCallback)(e=>{t&&(e?t.enable():t.disable())},[t])]}"undefined"!=typeof window&&(o=document.documentElement,i=new MutationObserver(e=>{let t=function(e){return!e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]).every(e=>"#comment"===e.nodeName)&&e.reduce((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(M(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){let o=t.target.children.item(n);if(o){if(b in o)return!1;M(t.target,o),e.add(o)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){let o=t.removedNodes[n];if(b in o)return!1;o instanceof Element&&(e.add(o),M(t.target,o),d.set(o,[t.previousSibling,t.nextSibling]))}}return e},new Set)}(e);t&&t.forEach(e=>(function(e){var t;let n=e.isConnected,i=s.has(e);n&&d.has(e)&&d.delete(e),c.has(e)&&(null===(t=c.get(e))||void 0===t||t.cancel()),v in e?j(e):i&&n?function(e){let t;let n=s.get(e),o=N(e);if(!L(e))return s.set(e,o);if(!n)return;let i=k(e);if("function"!=typeof i){let r=n.left-o.left,l=n.top-o.top,[a,s,d,c]=T(e,n,o),u={transform:`translate(${r}px, ${l}px)`},f={transform:"translate(0, 0)"};a!==s&&(u.width=`${a}px`,f.width=`${s}px`),d!==c&&(u.height=`${d}px`,f.height=`${c}px`),t=e.animate([u,f],{duration:i.duration,easing:i.easing})}else{let[r]=O(i(e,"remain",n,o));(t=new Animation(r)).play()}c.set(e,t),s.set(e,o),t.addEventListener("finish",_.bind(null,e))}(e):i&&!n?function(e){var t;let n;if(!d.has(e)||!s.has(e))return;let[i,r]=d.get(e);Object.defineProperty(e,b,{value:!0,configurable:!0});let l=window.scrollX,a=window.scrollY;if(r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):i&&i.parentNode?i.parentNode.appendChild(e):null===(t=C(e))||void 0===t||t.appendChild(e),!L(e))return A(e);let[u,f,p,m]=function(e){let t=s.get(e),[n,,o]=T(e,t,N(e)),i=e.parentElement;for(;i&&("static"===getComputedStyle(i).position||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);let r=getComputedStyle(i),l=s.get(i)||N(i);return[Math.round(t.top-l.top)-W(r.borderTopWidth),Math.round(t.left-l.left)-W(r.borderLeftWidth),n,o]}(e),h=k(e),y=s.get(e);(l!==g||a!==w)&&function(e,t,n,i){let r=g-t,l=w-n,a=document.documentElement.style.scrollBehavior;if("smooth"===getComputedStyle(o).scrollBehavior&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+r,window.scrollY+l),!e.parentElement)return;let s=e.parentElement,d=s.clientHeight,c=s.clientWidth,u=performance.now();!function e(){requestAnimationFrame(()=>{if(!$(i)){let t=d-s.clientHeight,n=c-s.clientWidth;u+i.duration>performance.now()?(window.scrollTo({left:window.scrollX-n,top:window.scrollY-t}),d=s.clientHeight,c=s.clientWidth,e()):document.documentElement.style.scrollBehavior=a}})}()}(e,l,a,h);let v={position:"absolute",top:`${u}px`,left:`${f}px`,width:`${p}px`,height:`${m}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if($(h)){let[t,o]=O(h(e,"remove",y));(null==o?void 0:o.styleReset)!==!1&&(v=(null==o?void 0:o.styleReset)||v,Object.assign(e.style,v)),(n=new Animation(t)).play()}else Object.assign(e.style,v),n=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:h.duration,easing:"ease-out"});c.set(e,n),n.addEventListener("finish",A.bind(null,e,v))}(e):j(e)})(e))}),r=new ResizeObserver(e=>{e.forEach(e=>{e.target===o&&(clearTimeout(m.get(o)),m.set(o,setTimeout(()=>{a.forEach(e=>S(e,e=>x(()=>_(e))))},100))),s.has(e.target)&&_(e.target)})}),window.addEventListener("scroll",()=>{w=window.scrollY,g=window.scrollX}),r.observe(o))}};