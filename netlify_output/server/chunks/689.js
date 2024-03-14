"use strict";exports.id=689,exports.ids=[689],exports.modules={21919:(e,t)=>{t.M=void 0;let o="https://sdk.mercadopago.com/js/v2",n=/^https:\/\/sdk\.mercadopago\.com\/js\/v2\/?(\?.*)?$/,r="MercadoPago has already been initialized in your window, please remove the duplicate import",a=()=>{for(var e=document.querySelectorAll(`script[src^="${o}"`),t=0;t<e.length;t++){var r=e[t];if(n.test(r.src))return r}return null},c=()=>{let e=document.createElement("script");e.src=o;let t=document.head||document.body;if(!t)throw Error("Expected document.body or document.head not to be null. MercadoPago requires a <body> or a <head> element, please add on your project.");return t.appendChild(e),e},i=null;t.M=()=>null!==i?i:i=new Promise((e,t)=>{if("undefined"==typeof window){e(null);return}if(window.MercadoPago){console.warn(r),e(window.MercadoPago);return}try{let o=a();o?console.warn(r):o||(o=c()),o.addEventListener("load",()=>{window.MercadoPago?e(window.MercadoPago):t(Error("MercadoPago.js not available"))}),o.addEventListener("error",()=>{t(Error("Failed to load MercadoPago.js"))})}catch(e){t(e);return}})},8689:(e,t,o)=>{o.d(t,{w5:()=>w,R6:()=>a});var n=o(21919);class r{static getInstance(){var e,t,o,r;return e=this,t=void 0,o=void 0,r=function*(){if(this.publicKey)return this.loadedInstanceMercadoPago||(yield(0,n.M)(),this.loadedInstanceMercadoPago=!0),this.instanceMercadoPago||(this.instanceMercadoPago=new window.MercadoPago(this.publicKey,this.options)),this.instanceMercadoPago;console.error("Expected the PUBLIC_KEY to render the MercadoPago SDK React")},new(o||(o=Promise))(function(n,a){function c(e){try{d(r.next(e))}catch(e){a(e)}}function i(e){try{d(r.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?n(e.value):((t=e.value)instanceof o?t:new o(function(e){e(t)})).then(c,i)}d((r=r.apply(e,t||[])).next())})}}r.publicKey=null,r.options={},r.instanceMercadoPago=void 0,r.loadedInstanceMercadoPago=!1;let a=(e,t)=>{let o=Object.assign(Object.assign({},t),{frontEndStack:"react"}),n=!function(e,t){return Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every(o=>Object.prototype.hasOwnProperty.call(t,o)&&e[o]===t[o])}(r.options,o);(e!==r.publicKey||n)&&(r.publicKey=e,r.options=o,r.instanceMercadoPago=void 0)};var c=o(3729),i=o.n(c);let d=()=>(function(e,t,o,n){return new(o||(o=Promise))(function(r,a){function c(e){try{d(n.next(e))}catch(e){a(e)}}function i(e){try{d(n.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?r(e.value):((t=e.value)instanceof o?t:new o(function(e){e(t)})).then(c,i)}d((n=n.apply(e,t||[])).next())})})(void 0,void 0,void 0,function*(){}),l=()=>{},s=e=>{console.error(e)},u=({settings:e,name:t,divId:o,controller:n})=>(function(e,t,o,n){return new(o||(o=Promise))(function(r,a){function c(e){try{d(n.next(e))}catch(e){a(e)}}function i(e){try{d(n.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?r(e.value):((t=e.value)instanceof o?t:new o(function(e){e(t)})).then(c,i)}d((n=n.apply(e,t||[])).next())})})(void 0,void 0,void 0,function*(){let a=yield r.getInstance(),c=null==a?void 0:a.bricks();window[n]=yield null==c?void 0:c.create(t,o,e)}),w=({onReady:e=l,onError:t=s,onSubmit:o=d,customization:n,initialization:r,brand:a,locale:w})=>((0,c.useEffect)(()=>{let c;let i={settings:{brand:a,initialization:r,customization:n,locale:w,callbacks:{onReady:e,onSubmit:o,onError:t}},name:"wallet",divId:"walletBrick_container",controller:"walletBrickController"};return c=setTimeout(()=>{u(i)},200),()=>{var e;clearTimeout(c),null===(e=window.walletBrickController)||void 0===e||e.unmount()}},[n,r,e,t,o]),i().createElement("div",{id:"walletBrick_container"}))}};