if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let l={};const o=e=>i(e,n),c={module:{uri:n},exports:l,require:o};s[n]=Promise.all(r.map((e=>c[e]||o(e)))).then((e=>(t(...e),l)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mktapp"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/mktapp/css/app.e5cb1d62.css",revision:null},{url:"/mktapp/css/chunk-vendors.fc58545c.css",revision:null},{url:"/mktapp/img/discord.3cd12622.svg",revision:null},{url:"/mktapp/img/telegram.85306e1d.svg",revision:null},{url:"/mktapp/img/twitter.97151571.svg",revision:null},{url:"/mktapp/index.html",revision:"6a03c0176aeb8ec728761b301502fd8c"},{url:"/mktapp/js/app.f5a3d344.js",revision:null},{url:"/mktapp/js/chunk-vendors.6d501802.js",revision:null},{url:"/mktapp/manifest.json",revision:"db135afdccc111afc4eed5de19ead047"},{url:"/mktapp/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
