"use strict";(()=>{var e={};e.id=574,e.ids=[574],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},6113:e=>{e.exports=require("crypto")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},48403:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>q,originalPathname:()=>R,patchFetch:()=>g,requestAsyncStorage:()=>x,routeModule:()=>m,serverHooks:()=>y,staticGenerationAsyncStorage:()=>h,staticGenerationBailout:()=>v});var s={};t.r(s),t.d(s,{POST:()=>l});var o=t(95419),a=t(69108),n=t(99678),u=t(98984),i=t(74946);let p=require("lodash/isEmpty");var c=t.n(p);let d=new i.ZP({url:"https://test.mincaelectric.com",consumerKey:process.env.WC_CONSUMER_KEY,consumerSecret:process.env.WC_CONSUMER_SECRET,version:"wc/v3"});async function l(e){let r={success:!1,orderId:"",total:"",currency:"",error:""},t=await e.json();if(c()(t))return r.error="Required data not sent",u.NextResponse.json(r,{status:400});t.status="pending",t.set_paid=!1;try{let e=await d.post("orders",t);if(201===e.status){let{data:t}=e;r.success=!0,t.number&&(r.orderId=t.number),t.total&&(r.total=t.total),t.currency&&(r.currency=t.currency),t.payment_url&&(r.paymentUrl=t.payment_url)}else r.error="Error creating order";return u.NextResponse.json(r)}catch(e){return r.error=e.message,u.NextResponse.json(r,{status:500})}}let m=new o.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/create-order/route",pathname:"/api/create-order",filename:"route",bundlePath:"app/api/create-order/route"},resolvedPagePath:"/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/api/create-order/route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:x,staticGenerationAsyncStorage:h,serverHooks:y,headerHooks:q,staticGenerationBailout:v}=m,R="/api/create-order/route";function g(){return(0,n.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:h})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,791,946],()=>t(48403));module.exports=s})();