(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[925],{69934:function(e,t,n){Promise.resolve().then(n.bind(n,58155)),Promise.resolve().then(n.bind(n,65469)),Promise.resolve().then(n.bind(n,53470)),Promise.resolve().then(n.t.bind(n,81749,23)),Promise.resolve().then(n.t.bind(n,29505,23)),Promise.resolve().then(n.t.bind(n,2727,23))},58155:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(57437),r=n(2265),s=n(63946),l=n(8792),o=n(70331),c=n.n(o),i=n(20703),d=n(37105),u=n(29505),x=n.n(u),m=n(2727),p=n.n(m),h=e=>{var t,n,s,l,o,u,m;let{item:h,products:g,setCart:b}=e,[v,f]=(0,r.useState)(h.quantity),[j,w]=(0,r.useState)(!1),[y,N]=(0,r.useState)(!1),k=null!==(m=null==h?void 0:null===(n=h.data)||void 0===n?void 0:null===(t=n.images)||void 0===t?void 0:t[0])&&void 0!==m?m:"",E=(0,r.useRef)(!1);(0,r.useEffect)(()=>(E.current=!0,()=>{E.current=!1}),[]);let q=(e,t)=>{e.stopPropagation(),E&&!j&&(0,d.GR)(t,b,N)},C=(e,t,n)=>{{let t;if(e.stopPropagation(),j||y||"decrement"===n&&1===v)return;f(t=c()(n)?e.target.value?parseInt(e.target.value):1:"increment"===n?v+1:v-1),g.length&&(0,d.xu)(null==h?void 0:h.key,t,b,w)}};return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"cart-item-wrap mb-5 flex justify-between gap-4 ",children:[(0,a.jsx)("div",{className:"cart-left-col",children:(0,a.jsx)("figure",{children:(0,a.jsx)(i.default,{className:"rounded-[8px]",width:"124",height:"124",alt:k.name,src:null==k?void 0:k.src})})}),(0,a.jsx)("div",{className:"cart-right-col grow",children:(0,a.jsxs)("div",{className:"flex h-full flex-col justify-between",children:[(0,a.jsxs)("div",{className:"cart-product-title-wrap relative flex w-full justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"".concat(x().className," cart-product-title text-brand-orange text-base font-bold lg:text-[20px]"),children:null==h?void 0:null===(s=h.data)||void 0===s?void 0:s.name}),(0,a.jsx)("p",{className:"".concat(p().className," w-[400px] text-[14px]"),children:(null==h?void 0:null===(l=h.data)||void 0===l?void 0:l.description)?(0,a.jsx)("p",{children:null==h?void 0:null===(o=h.data)||void 0===o?void 0:o.description}):""})]}),(0,a.jsx)("button",{className:"cart-remove-item text-22px leading-22px flex  bg-transparent px-4 py-2 ",onClick:e=>q(e,null==h?void 0:h.key),children:(0,a.jsx)("img",{src:"/carrito/trash.svg"})})]}),(0,a.jsxs)("footer",{className:"cart-product-footer flex justify-between",children:[(0,a.jsx)("div",{className:"precio flex flex-col justify-end",children:(0,a.jsxs)("span",{className:"cart-total-price text-[24px] text-base font-bold uppercase",children:[null==h?void 0:h.currency,null==h?void 0:h.line_subtotal]})}),j?(0,a.jsx)("img",{className:"woo-next-cart-item-spinner mt-4 h-[30px] w-[30px]",width:"24",height:"24",src:"/cart-spinner.gif",alt:"spinner"}):null,(0,a.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,a.jsxs)("div",{className:"btn-aumentarDisminuir flex  h-[44px] w-[100px] w-[126px] items-center gap-1 rounded-[62px] bg-[#F0F0F0] px-[20px] py-[12px]",children:[(0,a.jsx)("button",{className:"size-10 text-[25px] leading-10 text-gray-600 transition",onClick:e=>C(e,null==h?void 0:h.cartKey,"decrement"),children:"-"}),(0,a.jsx)("input",{type:"number",min:"1",style:{textAlign:"center",width:"50px",paddingRight:"0"},"data-cart-key":null==h?void 0:null===(u=h.data)||void 0===u?void 0:u.cartKey,className:"".concat(j?"disabled":"",' [&::-webkit-outer-spin-button]:appearance-none" h-10 w-2 bg-[#F0F0F0] text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0'),value:v,onChange:e=>C(e,null==h?void 0:h.cartKey,"")}),(0,a.jsx)("button",{className:"size-10 text-[25px] leading-10 text-gray-600 transition",onClick:e=>C(e,null==h?void 0:h.cartKey,"increment"),children:"+"})]})})]})]})})]}),(0,a.jsx)("hr",{className:"my-[24px]"})]})},g=()=>{var e,t,n,o,c,i,u,m;let[g,b]=(0,r.useContext)(s.AppContext),{cartItems:v,totalPrice:f,totalQty:j}=g||{},[w,y]=(0,r.useState)(!1),N=async e=>{e.stopPropagation(),w||await (0,d.LL)(b,y)};return(0,a.jsxs)("div",{className:"".concat(x().className," CarItemsContainer px-[100px] pb-[100px]"),children:[(0,a.jsx)("h2",{className:"mb-[20px] text-[24px] font-semibold lg:text-[40px]",children:"Resumen de compra"}),(0,a.jsx)("div",{className:"content-wrap-cart ",children:g?(0,a.jsxs)("div",{className:" grid gap-4 lg:grid-cols-3",children:[(0,a.jsx)("div",{className:"woo-next-cart-table mb-md-0 mb-5 w-[670px] rounded-[20px] border border-black/10 p-5 lg:col-span-2",children:v.length&&v.map(e=>(0,a.jsx)(h,{item:e,products:v,setCart:b},e.product_id))}),(0,a.jsxs)("div",{className:"woo-next-cart-total-container border-1 w-[450px] rounded-[20px] border border-black/10 p-5",children:[(0,a.jsx)("h2",{className:"".concat(x().className," text-base font-bold lg:text-[24px]"),children:"Cart Total"}),(0,a.jsxs)("div",{className:"mb-4 mt-4 flex items-center justify-between",children:[(0,a.jsx)("p",{className:"".concat(p().className," col-span-2 mb-0 p-2 text-base text-black/60 lg:text-[20px]"),children:"Subtotal"}),(0,a.jsxs)("p",{className:"".concat(x().className," col-span-1 mb-0 p-2 text-base font-bold lg:text-[20px]"),children:[null!==(c=null==v?void 0:null===(e=v[0])||void 0===e?void 0:e.currency)&&void 0!==c?c:"",f]})]}),(0,a.jsxs)("div",{className:"mb-4 mt-4 flex items-center justify-between",children:[(0,a.jsx)("p",{className:"".concat(p().className," col-span-2 mb-0 p-2 text-base text-black/60 lg:text-[20px]"),children:"Descuento (-15%)"}),(0,a.jsxs)("p",{className:"".concat(x().className," col-span-1 mb-0 p-2 text-base font-bold lg:text-[20px]"),children:[null!==(i=null==v?void 0:null===(t=v[0])||void 0===t?void 0:t.currency)&&void 0!==i?i:"",j-.15*j]})]}),(0,a.jsxs)("div",{className:"mb-4 mt-4 flex items-center justify-between",children:[(0,a.jsx)("p",{className:"".concat(p().className," col-span-2 mb-0 p-2 text-base text-black/60 lg:text-[20px]"),children:"Envio gratis"}),(0,a.jsxs)("p",{className:"".concat(x().className," col-span-1 mb-0 p-2 text-base font-bold lg:text-[20px]"),children:[null!==(u=null==v?void 0:null===(n=v[0])||void 0===n?void 0:n.currency)&&void 0!==u?u:"",0]})]}),(0,a.jsx)("hr",{className:"my-[20px]"}),(0,a.jsxs)("div",{className:"mb-4 mt-4 flex items-center justify-between",children:[(0,a.jsx)("p",{className:"".concat(p().className," col-span-2 mb-0 p-2 text-base text-black/60 lg:text-[20px]"),children:"Total"}),(0,a.jsxs)("p",{className:"".concat(x().className," col-span-1 mb-0 p-2 text-[20px] font-bold lg:text-[24px]"),children:[null!==(m=null==v?void 0:null===(o=v[0])||void 0===o?void 0:o.currency)&&void 0!==m?m:"",f]})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,a.jsxs)("div",{className:"cupon my-[24px] flex items-center justify-between gap-4",children:[(0,a.jsxs)("div",{className:"relative flex grow items-center",children:[(0,a.jsx)("img",{className:"absolute left-[4%] top-[25%]",src:"/carrito/ticket-descuento.svg",alt:"arrow-right"}),(0,a.jsx)("input",{type:"text",id:"text",placeholder:"A\xf1adir c\xf3digo de promoci\xf3n",className:"h-[50px] w-full rounded-[62px] border-none bg-[#F0F0F0] px-[16px] py-[12px] pl-[40px] focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"})]}),(0,a.jsx)("button",{className:"h-auto w-[119px] rounded-[62px] bg-[#111] px-[16px] py-[12px] text-white",children:"Aplicar"})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("div",{className:"clear-cart",children:(0,a.jsx)("button",{className:"mb-2 mr-2 rounded-[62px] border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-600 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 h-[48px]",onClick:e=>N(e),disabled:w,children:(0,a.jsx)("span",{className:"woo-next-cart",children:w?"Limpiando carrito...":"Limpiar carrito"})})}),(0,a.jsx)(l.default,{href:"/checkout",className:"grow",children:(0,a.jsx)("button",{className:"mb-2 mr-2 w-full h-[48px] rounded-[62px] bg-[#111] px-5 py-2.5 text-center text-sm font-medium text-white duration-500 hover:bg-black/70 focus:text-white focus:ring-4",children:(0,a.jsxs)("div",{className:"flex justify-center items-center gap-2",children:[(0,a.jsx)("span",{className:"woo-next-cart-checkout-txt",children:"Iniciar proceso de pago"}),(0,a.jsx)("img",{src:"/carrito/flecha-btn-carrito.png",className:""})]})})})]})]})]})]}):(0,a.jsxs)("div",{className:"my-14",children:[(0,a.jsx)("h2",{children:"No hay articulos en el carrito"}),(0,a.jsx)(l.default,{href:"/",children:(0,a.jsxs)("button",{className:"mb-2 mr-2 bg-black px-5 py-2.5 text-center text-sm font-medium text-white duration-500 hover:bg-black/70 rounded-[62px] h-[48px] mt-6",children:[(0,a.jsx)("span",{className:"woo-next-cart-checkout-txt",children:"Volver al inicio..."}),(0,a.jsx)("i",{className:"fas fa-long-arrow-alt-right"})]})})]})})]})}},53470:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(57437),r=n(2265),s=n(89901),l=n(10243);let o=()=>(0,a.jsx)("div",{className:"max-w-full animate-pulse h-[38px] flex justify-center items-center",children:(0,a.jsx)(l.Typography,{as:"div",variant:"h1",className:"h-3 w-[90%] lg:w-[28%]  rounded-full bg-gray-100/50 m-auto",children:"\xa0"})});var c=n(18592),i=e=>{let{marquee:t,ocultar:n}=e;return(0,a.jsxs)("div",{className:"banner-marquee text-white relative h-[38px] flex justify-between items-center overflow-x-hidden motion-safe:overflow-x-hidden pause-animations-on-children-on-hover",style:{backgroundColor:t.background},children:[(0,a.jsx)("div",{className:"w-[28%] flex justify-end"}),(0,a.jsx)("div",{className:"lg:w-[90%] overflow-x-hidden relative marquee-banner",children:(0,a.jsxs)("div",{className:"animate-marquee whitespace-nowrap motion-safe:animate:marquee",children:[(0,a.jsx)("span",{className:"text-[14px] mx-4",children:t.titleMarquee}),(0,a.jsx)("span",{className:"text-[14px] mx-4",children:t.titleMarquee}),(0,a.jsx)("span",{className:"text-[14px] mx-4",children:t.titleMarquee}),(0,a.jsx)("span",{className:"text-[14px] mx-4",children:t.titleMarquee}),(0,a.jsx)("span",{className:"text-[14px] mx-4",children:t.titleMarquee})]})}),(0,a.jsx)("div",{className:"w-[28%] flex justify-end",children:(0,a.jsx)("button",{onClick:n,"aria-label":"Dismiss",className:"rounded-lg bg-black/10 p-1 transition hover:bg-black/20 mr-[50px] hidden lg:block",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})})]})},d=()=>{let[e,t]=(0,r.useState)([]),[n,l]=(0,r.useState)(!0),d=(0,r.useRef)(),[u,x]=(0,c.u)();return(0,r.useEffect)(()=>{(async()=>{try{let e=await (0,s.Eg)();t(e[2].node.banner),l(!1)}catch(e){console.error("Error fetching banner data:",e),l(!1)}})()},[]),(0,a.jsx)("div",{ref:d,className:"bg-black text-white",children:(0,a.jsx)("div",{ref:u,children:n?(0,a.jsx)(o,{}):(0,a.jsx)(i,{marquee:e,ocultar:e=>{d.current.style.visibility="hidden"}})})})}},89901:function(e,t,n){"use strict";n.d(t,{Eg:function(){return l},ss:function(){return c},zJ:function(){return o}});let a=async e=>{let t=await fetch("".concat("https://test.mincaelectric.com/graphql","?query=").concat(encodeURIComponent(e)),{method:"GET",headers:{"Content-Type":"application/json"}}),{data:n}=await t.json();return n},r=async e=>{let t=await fetch("".concat("https://test.mincaelectric.com/graphql","?query=").concat(encodeURIComponent(e)),{method:"GET",headers:{"Content-Type":"application/json"}}),{data:n}=await t.json();return n.sliderProducts},s=async e=>{let t=await fetch("".concat("https://test.mincaelectric.com/graphql","?query=").concat(encodeURIComponent(e)),{method:"GET",headers:{"Content-Type":"application/json"},cache:"no-store"}),{data:n}=await t.json();return n.sliderProductsSec.edges},l=async()=>{try{let{banner:e}=await a("\n  query Banner {\n    banner {\n      edges {\n        node {\n          banner {\n            nombreBannerNegrita\n            titleMarquee\n            background\n            titleBanner\n            videoBannerPc {\n              altText\n              id\n              mediaItemUrl\n              mediaItemId\n            }\n          }\n        }\n      }\n    }\n  }\n    ");return e.edges.map(e=>e)}catch(e){throw console.error("Error fetching banner:",e),Error("Error fetching banner")}},o=async()=>{try{return await r("\n        query Scooter {\n          sliderProducts(where: {orderby: {field: NAME_IN, order: ASC}}) {\n            edges {\n              node {\n                sliderProductos {\n                  ampere\n                  bateria\n                  description\n                  descuento\n                  distancia\n                  fieldGroupName\n                  kg\n                  km\n                  kmh\n                  llanta\n                  motor\n                  nombreProducto\n                  peso\n                  pesoMaximo\n                  precioActual\n                  precioRebajado\n                  pulgadas\n                  slogan\n                  subtitulo\n                  tipo\n                  tipoAutonomia\n                  tipoBrushless\n                  vatios\n                  velocidadMaxima\n                  velocidadNum\n                  frenos\n                  tipofrenos\n                  imagen {\n                    altText\n                    sourceUrl\n                    id\n                  }\n                  frenosNulo\n                  pesoSc\n                  tpeso\n                  kgPesoScooter\n                  tipoRodamiento\n                }\n                contentType {\n                  node {\n                    id\n                  }\n                }\n              }\n            }\n          }\n        }\n    ")}catch(e){throw console.error("Error fetching scooters:",e),Error("Error fetching scooters")}},c=async()=>{try{return await s("\n        query Scootersecs {\n          sliderProductsSec {\n            edges {\n              node {\n                sliderProductos {\n                  nombreProducto\n                  ampere\n                  bateria\n                  description\n                  descuento\n                  distancia\n                  fieldGroupName\n                  frenos\n                  frenosNulo\n                  imagen {\n                    altText\n                    id\n                    sourceUrl\n                  }\n                  kg\n                  kgPesoScooter\n                  km\n                  kmh\n                  llanta\n                  motor\n                  peso\n                  pesoMaximo\n                  pesoSc\n                  precioActual\n                  precioRebajado\n                  pulgadas\n                  slogan\n                  subtitulo\n                  tipo\n                  tipoAutonomia\n                  tipoBrushless\n                  tipoRodamiento\n                  tipofrenos\n                  tpeso\n                  vatios\n                  velocidadMaxima\n                  velocidadNum\n                }\n              }\n            }\n          }\n        }\n    ")}catch(e){throw console.error("Error fetching scooters:",e),Error("Error fetching scooters")}};(async e=>{try{let e=await a("\n        query GetEntradas {\n          posts(where: {id: ".concat(395,"}) {\n            nodes {\n              postId\n              slug\n              entradas {\n                campoTexto\n                subtitulo\n              }\n              title\n              featuredImage {\n                node {\n                  altText\n                  mediaItemUrl\n                }\n              }\n              categories {\n                edges {\n                  node {\n                    name\n                  }\n                }\n              }\n              dateGmt\n              \n            }\n          }\n        }\n  "));return console.log(e),e}catch(e){throw console.error("Error fetching Entradas:",e),Error("Error fetching Entradas")}})(0)},37105:function(e,t,n){"use strict";n.d(t,{Xq:function(){return x},LL:function(){return g},GR:function(){return h},xu:function(){return p}});var a=n(70331),r=n.n(a);let s=e=>{if(r()(e))return null;localStorage.setItem("x-wc-session",e)},l=()=>localStorage.getItem("x-wc-session"),o=()=>{let e={headers:{"X-Headless-CMS":!0}},t=l();return r()(t)||(e.headers["x-wc-session"]=t),e};var c=n(7908),i=n(11582),d=n(95059),u=n.n(d);let x=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,d=arguments.length>4?arguments[4]:void 0,u=l(),x=o();d(!0),c.Z.post(i.Qw,{product_id:e,quantity:t},x).then(e=>{if(r()(u)){var t;s(null==e?void 0:null===(t=e.headers)||void 0===t?void 0:t["x-wc-session"])}a(!0),d(!1),m(n)}).catch(e=>{console.log("err",e)})},m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},n=o();c.Z.get(i.Qw,n).then(n=>{var a;e(b(null!==(a=null==n?void 0:n.data)&&void 0!==a?a:[])),t(!1)}).catch(e=>{console.log("err",e),t(!1)})},p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,r=o();a(!0),c.Z.put("".concat(i.Qw).concat(e),{quantity:t},r).then(e=>{m(n,a)}).catch(e=>{console.log("err",e),a(!1)})},h=(e,t,n)=>{let a=o();n(!0),c.Z.delete("".concat(i.Qw).concat(e),a).then(e=>{m(t,n)}).catch(e=>{console.log("err",e),n(!1)})},g=async(e,t)=>{t(!0);let n=o();try{await c.Z.delete(i.Qw,n),m(e,t)}catch(e){console.log("err",e),t(!1)}},b=e=>{if(!e.length)return null;let t=v(e||[]);return{cartItems:e||[],...t}},v=e=>{let t={totalQty:0,totalPrice:0};return u()(e)&&(null==e?void 0:e.length)&&e.forEach((e,n)=>{var a,r;t.totalQty+=null!==(a=null==e?void 0:e.quantity)&&void 0!==a?a:0,t.totalPrice+=null!==(r=null==e?void 0:e.line_total)&&void 0!==r?r:0}),t}},11582:function(e,t,n){"use strict";n.d(t,{Qw:function(){return a},yd:function(){return r}});let a="".concat("https://test.mincaelectric.com","/wp-json/rae/v1/cart/items/"),r="".concat("https://test.mincaelectric.com","/wp-json/rae/v1/wc/states")}},function(e){e.O(0,[384,32,393,908,331,469,971,69,744],function(){return e(e.s=69934)}),_N_E=e.O()}]);