if(!self.define){let e,i={};const n=(n,a)=>(n=new URL(n+".js",a).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let p={};const r=e=>n(e,s),c={module:{uri:s},exports:p,require:r};i[s]=Promise.all(a.map((e=>c[e]||r(e)))).then((e=>(o(...e),p)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mktapp"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/mktapp/css/app.7b6c34e7.css",revision:null},{url:"/mktapp/css/chunk-vendors.fc58545c.css",revision:null},{url:"/mktapp/fonts/HarmonyOS_Sans_Bold.526d8a76.ttf",revision:null},{url:"/mktapp/fonts/HarmonyOS_Sans_Medium.20390302.ttf",revision:null},{url:"/mktapp/fonts/HarmonyOS_Sans_Regular.cd23cd05.ttf",revision:null},{url:"/mktapp/img/discord.3cd12622.svg",revision:null},{url:"/mktapp/img/icons_副本/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/mktapp/img/icons_副本/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/mktapp/img/icons_副本/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/mktapp/img/icons_副本/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/mktapp/img/icons_副本/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/mktapp/img/icons_副本/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/mktapp/img/icons_副本/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/mktapp/img/icons_副本/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/mktapp/img/icons_副本/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/mktapp/img/icons_副本/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/mktapp/img/icons_副本/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/mktapp/img/icons_副本/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/mktapp/img/icons_副本/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/mktapp/img/icons_副本/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/mktapp/img/icons_副本/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"/mktapp/img/logow.4693e444.png",revision:null},{url:"/mktapp/img/telegram.85306e1d.svg",revision:null},{url:"/mktapp/img/twitter.97151571.svg",revision:null},{url:"/mktapp/index.html",revision:"740a7e67229fd0b3ee2f101141f6b638"},{url:"/mktapp/js/app.8ed4509d.js",revision:null},{url:"/mktapp/js/chunk-vendors.cf371eae.js",revision:null},{url:"/mktapp/manifest.json",revision:"db135afdccc111afc4eed5de19ead047"},{url:"/mktapp/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
