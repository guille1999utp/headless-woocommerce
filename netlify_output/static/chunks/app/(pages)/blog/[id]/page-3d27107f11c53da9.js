(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[317,174,718,910,711],{24069:function(e,n,t){Promise.resolve().then(t.bind(t,65469)),Promise.resolve().then(t.bind(t,53470)),Promise.resolve().then(t.t.bind(t,81749,23)),Promise.resolve().then(t.t.bind(t,29505,23)),Promise.resolve().then(t.t.bind(t,2727,23))},53470:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(57437),o=t(2265),a=t(89901),s=t(10243);let i=()=>(0,r.jsx)("div",{className:"max-w-full animate-pulse h-[38px] flex justify-center items-center",children:(0,r.jsx)(s.Typography,{as:"div",variant:"h1",className:"h-3 w-[90%] lg:w-[28%]  rounded-full bg-gray-100/50 m-auto",children:"\xa0"})});var c=t(18592),l=e=>{let{marquee:n,ocultar:t}=e;return(0,r.jsxs)("div",{className:"banner-marquee text-white relative h-[38px] flex justify-between items-center overflow-x-hidden motion-safe:overflow-x-hidden pause-animations-on-children-on-hover",style:{backgroundColor:n.background},children:[(0,r.jsx)("div",{className:"w-[28%] flex justify-end"}),(0,r.jsx)("div",{className:"lg:w-[90%] overflow-x-hidden relative marquee-banner",children:(0,r.jsxs)("div",{className:"animate-marquee whitespace-nowrap motion-safe:animate:marquee",children:[(0,r.jsx)("span",{className:"text-[14px] mx-4",children:n.titleMarquee}),(0,r.jsx)("span",{className:"text-[14px] mx-4",children:n.titleMarquee}),(0,r.jsx)("span",{className:"text-[14px] mx-4",children:n.titleMarquee}),(0,r.jsx)("span",{className:"text-[14px] mx-4",children:n.titleMarquee}),(0,r.jsx)("span",{className:"text-[14px] mx-4",children:n.titleMarquee})]})}),(0,r.jsx)("div",{className:"w-[28%] flex justify-end",children:(0,r.jsx)("button",{onClick:t,"aria-label":"Dismiss",className:"rounded-lg bg-black/10 p-1 transition hover:bg-black/20 mr-[50px] hidden lg:block",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})})]})},d=()=>{let[e,n]=(0,o.useState)([]),[t,s]=(0,o.useState)(!0),d=(0,o.useRef)(),[u,m]=(0,c.u)();return(0,o.useEffect)(()=>{(async()=>{try{let e=await (0,a.Eg)();n(e[2].node.banner),s(!1)}catch(e){console.error("Error fetching banner data:",e),s(!1)}})()},[]),(0,r.jsx)("div",{ref:d,className:"bg-black text-white",children:(0,r.jsx)("div",{ref:u,children:t?(0,r.jsx)(i,{}):(0,r.jsx)(l,{marquee:e,ocultar:e=>{d.current.style.visibility="hidden"}})})})}},89901:function(e,n,t){"use strict";t.d(n,{Eg:function(){return s},ss:function(){return c},zJ:function(){return i}});let r=async e=>{let n=await fetch("".concat("https://test.mincaelectric.com/graphql","?query=").concat(encodeURIComponent(e)),{method:"GET",headers:{"Content-Type":"application/json"}}),{data:t}=await n.json();return t},o=async e=>{let n=await fetch("".concat("https://test.mincaelectric.com/graphql","?query=").concat(encodeURIComponent(e)),{method:"GET",headers:{"Content-Type":"application/json"}}),{data:t}=await n.json();return t.sliderProducts},a=async e=>{let n=await fetch("".concat("https://test.mincaelectric.com/graphql","?query=").concat(encodeURIComponent(e)),{method:"GET",headers:{"Content-Type":"application/json"},cache:"no-store"}),{data:t}=await n.json();return t.sliderProductsSec.edges},s=async()=>{try{let{banner:e}=await r("\n  query Banner {\n    banner {\n      edges {\n        node {\n          banner {\n            nombreBannerNegrita\n            titleMarquee\n            background\n            titleBanner\n            videoBannerPc {\n              altText\n              id\n              mediaItemUrl\n              mediaItemId\n            }\n          }\n        }\n      }\n    }\n  }\n    ");return e.edges.map(e=>e)}catch(e){throw console.error("Error fetching banner:",e),Error("Error fetching banner")}},i=async()=>{try{return await o("\n        query Scooter {\n          sliderProducts(where: {orderby: {field: NAME_IN, order: ASC}}) {\n            edges {\n              node {\n                sliderProductos {\n                  ampere\n                  bateria\n                  description\n                  descuento\n                  distancia\n                  fieldGroupName\n                  kg\n                  km\n                  kmh\n                  llanta\n                  motor\n                  nombreProducto\n                  peso\n                  pesoMaximo\n                  precioActual\n                  precioRebajado\n                  pulgadas\n                  slogan\n                  subtitulo\n                  tipo\n                  tipoAutonomia\n                  tipoBrushless\n                  vatios\n                  velocidadMaxima\n                  velocidadNum\n                  frenos\n                  tipofrenos\n                  imagen {\n                    altText\n                    sourceUrl\n                    id\n                  }\n                  frenosNulo\n                  pesoSc\n                  tpeso\n                  kgPesoScooter\n                  tipoRodamiento\n                }\n                contentType {\n                  node {\n                    id\n                  }\n                }\n              }\n            }\n          }\n        }\n    ")}catch(e){throw console.error("Error fetching scooters:",e),Error("Error fetching scooters")}},c=async()=>{try{return await a("\n        query Scootersecs {\n          sliderProductsSec {\n            edges {\n              node {\n                sliderProductos {\n                  nombreProducto\n                  ampere\n                  bateria\n                  description\n                  descuento\n                  distancia\n                  fieldGroupName\n                  frenos\n                  frenosNulo\n                  imagen {\n                    altText\n                    id\n                    sourceUrl\n                  }\n                  kg\n                  kgPesoScooter\n                  km\n                  kmh\n                  llanta\n                  motor\n                  peso\n                  pesoMaximo\n                  pesoSc\n                  precioActual\n                  precioRebajado\n                  pulgadas\n                  slogan\n                  subtitulo\n                  tipo\n                  tipoAutonomia\n                  tipoBrushless\n                  tipoRodamiento\n                  tipofrenos\n                  tpeso\n                  vatios\n                  velocidadMaxima\n                  velocidadNum\n                }\n              }\n            }\n          }\n        }\n    ")}catch(e){throw console.error("Error fetching scooters:",e),Error("Error fetching scooters")}};(async e=>{try{let e=await r("\n        query GetEntradas {\n          posts(where: {id: ".concat(395,"}) {\n            nodes {\n              postId\n              slug\n              entradas {\n                campoTexto\n                subtitulo\n              }\n              title\n              featuredImage {\n                node {\n                  altText\n                  mediaItemUrl\n                }\n              }\n              categories {\n                edges {\n                  node {\n                    name\n                  }\n                }\n              }\n              dateGmt\n              \n            }\n          }\n        }\n  "));return console.log(e),e}catch(e){throw console.error("Error fetching Entradas:",e),Error("Error fetching Entradas")}})(0)}},function(e){e.O(0,[384,32,393,469,971,69,744],function(){return e(e.s=24069)}),_N_E=e.O()}]);