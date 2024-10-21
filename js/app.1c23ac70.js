(function(){var e={3857:function(e,t,s){"use strict";var a=s(5130),r=s(6768);function n(e,t){const s=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(s)}var i=s(1241);const o={},d=(0,i.A)(o,[["render",n]]);var c=d,u=s(2261),l=s(5283),v=(s(4188),s(4458));(0,v.k)("/mktapp/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=s(5384);const _={en:{reward:"Rewards",participants:"Participants",step:"Steps",rank:"Rank",interaction:"Interaction",verify:"Verify",verifyMsg:"*After completing all tasks, click Verify Pass to receive the reward",myShare:"My Share",registeredUsers:"Registered Users",myEstimatedRewards:"My Est. Rewards",inProgress:"In Progress",pendingDistribution:"Pending Distribution",distributed:"Distributed",ranking:"Rank",Address:"Address",numberOfShares:"Shares",numberOfRegistrations:"Registrations",estimatedRewards:"Est. Rewards"},zh:{reward:"奖励",participants:"参与人数",step:"交互步骤",rank:"排行榜",interaction:"去交互",verify:"验证",verifyMsg:"*完成全部任务后，点击验证通过即可领取奖励",myShare:"我的分享",registeredUsers:"已注册人数",myEstimatedRewards:"我的预估奖励",inProgress:"进行中",pendingDistribution:"待发放",ranking:"排名",distributed:"已发放",Address:"地址",numberOfShares:"分享人数",numberOfRegistrations:"注册人数",estimatedRewards:"预估奖励"}},m=(0,f.hU)({legacy:!1,locale:"en",fallbackLocale:"en",messages:_});var k=m,p=s(1387),g=s(4232),b=s(144),h=s.p+"img/logow.4693e444.png",w=s.p+"img/twitter.97151571.svg",y=s.p+"img/discord.3cd12622.svg",L=s.p+"img/telegram.85306e1d.svg";function R(e,t="yyyy-MM-dd HH:mm:ss"){let s,a;if("now"===e)s=new Date;else if("string"===typeof e&&1===e.length)s=new Date,a=e,t=`yyyy${a}MM${a}dd HH:mm:ss`;else if(void 0===e&&1===t.length)s=new Date,a=t,t=`yyyy${a}MM${a}dd HH:mm:ss`;else if(s=e instanceof Date?e:new Date(e),isNaN(s.getTime()))throw new Error("Invalid date");if("timestamp"===t)return s.getTime();if("timestamp-seconds"===t)return Math.floor(s.getTime()/1e3);const r=e=>String(e).padStart(2,"0"),n={yyyy:s.getFullYear().toString(),MM:r(s.getMonth()+1),dd:r(s.getDate()),HH:r(s.getHours()),mm:r(s.getMinutes()),ss:r(s.getSeconds())};return t.replace(/yyyy|MM|dd|HH|mm|ss/g,(e=>n[e]))}const M=()=>{"undefined"===typeof window.ethereum&&alert("请安装 MetaMask 钱包!")},S=async e=>{console.log("window._tw_",window),M();try{const[t]=await window.ethereum.request({method:"eth_requestAccounts"});e.setAddress(t),e.setConnect(!0),window.ethereum.on("accountsChanged",(t=>{e.setAddress(t[0])})),window.ethereum.on("chainChanged",(()=>{window.location.reload()}))}catch(t){console.error("connect MetaMask failed:",t)}},x=(0,u.nY)("user",{state:()=>({walletName:"",connected:!1,netName:"",address:"",code:""}),getters:{},actions:{setConnect(e){this.connected=e},setAddress(e){this.address=e},setWalletName(e){this.walletName=e},setNetName(e){this.netName=e},setCode(e){this.code=e}}});var $=s(7081),C=s(4373);const E=C.A.create({baseURL:"https://0ftrfsdb.xyz/mkt/api/v1/",timeout:1e4});E.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(e=>Promise.reject(e))),E.interceptors.response.use((e=>e),(e=>Promise.reject(e)));var A=E;const j={class:"steps"},O={class:"no"},F={class:"stepName"},P={class:"desc"},T={class:"project"},X={class:"desc"};var D=(0,r.pM)({__name:"stepView",props:{steps:Array,project:Object,status:Number},setup(e){new $.GE;const t=x();(0,r.sV)((async()=>{await A.get("/user/getcode/0x0d29bb364c79965e18bf1d044099c50173ea4cfb"),await A.get("/activity/1")}));const s=(0,b.KR)([0]),a=async()=>{await S(t),console.log("userStore.$state.address",t.$state.address);try{const e={user_address:t.$state.address,invite_code:"y1HuMg",project_id:1},s={user_address:t.$state.address,project_id:1},a={user_address:t.$state.address,project_id:1,steps_status:[1,2]},r=await A.post("/user/jointask",e),n=(await A.post("/user/verifytask",s),await A.post("/user/dotask",a),await A.get("/user/getcode/"+t.$state.address));1===n.status&&t.setCode(n.data),console.log("userStore",t),console.log(r.data)}catch(e){console.error("Request failed:",e)}};return(t,n)=>{const i=(0,r.g2)("el-collapse-item"),o=(0,r.g2)("el-collapse");return(0,r.uX)(),(0,r.CE)("div",j,[(0,r.bF)(o,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=e=>s.value=e),onChange:t.handleChange},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.steps,((e,s)=>((0,r.uX)(),(0,r.Wv)(i,{title:e.title,class:"item",key:s,name:s},{title:(0,r.k6)((()=>[(0,r.Lk)("span",O,(0,g.v_)(e.id),1),(0,r.Lk)("span",F,(0,g.v_)(e.title),1)])),default:(0,r.k6)((()=>[(0,r.Lk)("div",P,(0,g.v_)(e.desc),1),(0,r.Lk)("div",{class:"operate-btn",onClick:n[0]||(n[0]=e=>a())},(0,g.v_)(t.$t("interaction")),1)])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue","onChange"]),(0,r.Lk)("div",T,[(0,r.Lk)("div",X,(0,g.v_)(e.project.desc),1),n[2]||(n[2]=(0,r.Lk)("div",{class:"social"},[(0,r.Lk)("img",{src:w}),(0,r.Lk)("img",{src:y}),(0,r.Lk)("img",{src:L})],-1))])])}}});const N=(0,i.A)(D,[["__scopeId","data-v-cfa26b9e"]]);var H=N;const Q={Id:1,Title:"Giveaway: Four.Meme",Desc:"使用Ave Wallet 链接登陆Four.Meme参加活动，充值加密货币、导入钱包和完成Swap交易还可以领取奖励，奖励有限，先到先得",Bonus:"1000",BonusTokenAddress:"0x3E14602186DD9dE538F729547B3918D24c823546",BonusTokenSymbol:"bnb",Sponsors:["ave1","ave2"],StartTime:"2024-09-12T00:00:00Z",EndTime:"2024-09-14T00:00:00Z",Steps:[{desc:"链接钱包，即可获得奖励",id:1,title:"链接钱包"},{desc:"分享图片+文字去推特，邀请越多，奖励越多",id:2,title:"分享"}],Participants:0,Status:0,Phase:"第二期",project:{desc:"我们是 Four.Meme，BSC 链上首个 Meme 公平启动平台。Four Meme 是一家致力于创造和传播互联网文化的领先品牌，专注于打造幽默、有趣且富有创意的内容。通过结合社交媒体和潮流元素，Four Meme 已成为年轻人群中广受欢迎的文化符号。感谢 Four Meme 对我们活动的支持，期待与他们一同为大家带来更多欢乐与惊喜！",x:"x.com",tg:"x.com",dc:"x.com"}},V={me:{share_count:1,invitor_count:1,final_status:1,estimate_rewards:"0"},rank:[{rank:1,user_address:"0x82c5796907e684c28f4a0579ff4908ecaf8e0f17",share_count:100,invitor_count:95,estimate_rewards:"0"},{rank:2,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:60,invitor_count:43,estimate_rewards:"0"},{rank:3,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:50,invitor_count:32,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"},{rank:4,user_address:"0x05ac03da19b90fef06e117d71bffa0793004110f",share_count:49,invitor_count:31,estimate_rewards:"0"}]},I={class:"rank"},q={class:"data"},B={class:"item"},U={class:"title"},W={class:"value"},z={class:"item"},K={class:"title"},G={class:"value"},Y={class:"item"},Z={class:"title"},J={class:"value"},ee={key:0,class:"status1 status"},te={key:1,class:"status2 status"},se={key:2,class:"status3 status"},ae={class:"table"},re={key:0,class:"first"},ne={key:1,class:"second"},ie={key:2,class:"third"},oe={key:3,class:"other"},de={class:"right"},ce={class:"right"},ue={class:"right"},le={class:"right"},ve={class:"right"},fe={class:"right"};var _e=(0,r.pM)({__name:"rankView",setup(e){const t=e=>{const t=e.substr(0,5),s=e.split("").reverse().join("").substr(0,4).split("").reverse().join("").substr(0,4).split("").join(""),a=t+"..."+s;return a};return(e,s)=>{const a=(0,r.g2)("el-table-column"),n=(0,r.g2)("el-table");return(0,r.uX)(),(0,r.CE)("div",I,[(0,r.Lk)("div",q,[(0,r.Lk)("div",B,[(0,r.Lk)("div",U,(0,g.v_)(e.$t("myShare")),1),(0,r.Lk)("div",W,(0,g.v_)((0,b.R1)(V).me.share_count),1)]),(0,r.Lk)("div",z,[(0,r.Lk)("div",K,(0,g.v_)(e.$t("registeredUsers")),1),(0,r.Lk)("div",G,(0,g.v_)((0,b.R1)(V).me.invitor_count),1)]),(0,r.Lk)("div",Y,[(0,r.Lk)("div",Z,(0,g.v_)(e.$t("myEstimatedRewards")),1),(0,r.Lk)("div",J,(0,g.v_)((0,b.R1)(V).me.estimate_rewards),1)]),1===(0,b.R1)(V).me.final_status?((0,r.uX)(),(0,r.CE)("div",ee,[(0,r.Lk)("span",null,(0,g.v_)(e.$t("inProgress")),1)])):(0,r.Q3)("",!0),2===(0,b.R1)(V).me.final_status?((0,r.uX)(),(0,r.CE)("div",te,[(0,r.Lk)("span",null,(0,g.v_)(e.$t("pendingDistribution")),1)])):(0,r.Q3)("",!0),3===(0,b.R1)(V).me.final_status?((0,r.uX)(),(0,r.CE)("div",se,[(0,r.Lk)("span",null,(0,g.v_)(e.$t("distributed")),1)])):(0,r.Q3)("",!0)]),(0,r.Lk)("div",ae,[(0,r.bF)(n,{data:(0,b.R1)(V).rank,style:{width:"100%"},height:"calc(100vh - 500px)"},{default:(0,r.k6)((()=>[(0,r.bF)(a,{prop:"rank",label:e.$t("ranking"),width:"30"},{default:(0,r.k6)((e=>[1===e.row.rank?((0,r.uX)(),(0,r.CE)("div",re,(0,g.v_)(e.row.rank),1)):(0,r.Q3)("",!0),2===e.row.rank?((0,r.uX)(),(0,r.CE)("div",ne,(0,g.v_)(e.row.rank),1)):(0,r.Q3)("",!0),3===e.row.rank?((0,r.uX)(),(0,r.CE)("div",ie,(0,g.v_)(e.row.rank),1)):(0,r.Q3)("",!0),e.row.rank>3?((0,r.uX)(),(0,r.CE)("div",oe,(0,g.v_)(e.row.rank),1)):(0,r.Q3)("",!0)])),_:1},8,["label"]),(0,r.bF)(a,{prop:"user_address",label:e.$t("Address"),width:"80"},{default:(0,r.k6)((e=>[(0,r.eW)((0,g.v_)(t(e.row.user_address)),1)])),_:1},8,["label"]),(0,r.bF)(a,{prop:"share_count",label:e.$t("numberOfShares"),width:"55"},{header:(0,r.k6)((()=>[(0,r.Lk)("div",de,(0,g.v_)(e.$t("numberOfShares")),1)])),default:(0,r.k6)((e=>[(0,r.Lk)("div",ce,(0,g.v_)(e.row.share_count),1)])),_:1},8,["label"]),(0,r.bF)(a,{prop:"invitor_count",class:"right",label:e.$t("numberOfRegistrations"),width:"85"},{header:(0,r.k6)((()=>[(0,r.Lk)("div",ue,(0,g.v_)(e.$t("numberOfRegistrations")),1)])),default:(0,r.k6)((e=>[(0,r.Lk)("div",le,(0,g.v_)(e.row.invitor_count),1)])),_:1},8,["label"]),(0,r.bF)(a,{prop:"estimate_rewards",label:e.$t("estimatedRewards")},{header:(0,r.k6)((()=>[(0,r.Lk)("div",ve,(0,g.v_)(e.$t("estimatedRewards")),1)])),default:(0,r.k6)((e=>[(0,r.Lk)("div",fe,"$"+(0,g.v_)(e.row.estimate_rewards),1)])),_:1},8,["label"])])),_:1},8,["data"])])])}}});const me=(0,i.A)(_e,[["__scopeId","data-v-def6b632"]]);var ke=me;const pe={class:"home"},ge={class:"info"},be={class:"title"},he={class:"name"},we={class:"text"},ye={class:"time"},Le={class:"phase"},Re={class:"sp"},Me={class:"desc"},Se={class:"status"},xe={class:"rewards item"},$e={class:"title"},Ce={class:"number"},Ee={class:"totalJoined item"},Ae={class:"title"},je={class:"number"},Oe={class:"data"},Fe={class:"switch-btn"},Pe={class:"final"},Te={class:"desc"},Xe={key:0,class:"verify btn"},De={key:1,class:"finished btn"};var Ne=(0,r.pM)({__name:"indexView",setup(e){const t=(0,p.lq)(),s=((0,p.rd)(),(0,b.KR)(0)),{t:a,locale:n}=(0,f.s9)(),i=e=>{n.value=e};return(0,r.sV)((()=>{t.query.lang&&"zh"===t.query.lang&&i("zh");const e=navigator.userAgent,s=e.indexOf("Ave.ai")>-1;console.log(s?"is Ave.ai":"Please open in Ave.ai"),document.title=Q.Title})),(e,t)=>((0,r.uX)(),(0,r.CE)("div",pe,[(0,r.Lk)("div",ge,[(0,r.Lk)("div",be,[t[2]||(t[2]=(0,r.Lk)("div",{class:"img"},[(0,r.Lk)("img",{alt:"Vue logo",src:h})],-1)),(0,r.Lk)("div",he,[(0,r.Lk)("div",we,(0,g.v_)((0,b.R1)(Q).Title),1),(0,r.Lk)("div",ye,(0,g.v_)((0,b.R1)(R)((0,b.R1)(Q).StartTime,"yyyy/MM/dd"))+"-"+(0,g.v_)((0,b.R1)(R)((0,b.R1)(Q).EndTime,"yyyy/MM/dd")),1)]),(0,r.Lk)("div",Le,[(0,r.Lk)("div",Re,(0,g.v_)((0,b.R1)(Q).Phase),1)])]),(0,r.Lk)("div",Me,(0,g.v_)((0,b.R1)(Q).Desc),1),(0,r.Lk)("div",Se,[(0,r.Lk)("div",xe,[(0,r.Lk)("div",$e,(0,g.v_)(e.$t("reward")),1),(0,r.Lk)("div",Ce,(0,g.v_)((0,b.R1)(Q).Bonus),1)]),(0,r.Lk)("div",Ee,[(0,r.Lk)("div",Ae,(0,g.v_)(e.$t("participants")),1),(0,r.Lk)("div",je,(0,g.v_)((0,b.R1)(Q).Participants),1)])])]),(0,r.Lk)("div",Oe,[(0,r.Lk)("div",Fe,[(0,r.Lk)("div",{onClick:t[0]||(t[0]=e=>s.value=0),class:(0,g.C4)(0==s.value?"item active":"item")},[(0,r.Lk)("div",null,(0,g.v_)(e.$t("step")),1),t[3]||(t[3]=(0,r.Lk)("div",{class:"line"},null,-1))],2),(0,r.Lk)("div",{onClick:t[1]||(t[1]=e=>s.value=1),class:(0,g.C4)(1==s.value?"item active":"item")},[(0,r.Lk)("div",null,(0,g.v_)(e.$t("rank")),1),t[4]||(t[4]=(0,r.Lk)("div",{class:"line"},null,-1))],2)]),0===s.value?((0,r.uX)(),(0,r.Wv)(H,{key:0,steps:(0,b.R1)(Q).Steps,project:(0,b.R1)(Q).project,status:(0,b.R1)(Q).Status},null,8,["steps","project","status"])):(0,r.Q3)("",!0),1===s.value?((0,r.uX)(),(0,r.Wv)(ke,{key:1})):(0,r.Q3)("",!0),(0,r.Lk)("div",Pe,[(0,r.Lk)("div",Te,(0,g.v_)(e.$t("verifyMsg")),1),0===(0,b.R1)(Q).Status?((0,r.uX)(),(0,r.CE)("div",Xe,(0,g.v_)(e.$t("verify")),1)):(0,r.Q3)("",!0),1===(0,b.R1)(Q).Status?((0,r.uX)(),(0,r.CE)("div",De,"已参加")):(0,r.Q3)("",!0)])])]))}});const He=(0,i.A)(Ne,[["__scopeId","data-v-cc773ce8"]]);var Qe=He;const Ve=[{path:"/",name:"home",component:Qe}],Ie=(0,p.aE)({history:(0,p.LA)("/mktapp/"),routes:Ve});var qe=Ie;const Be=(0,u.Ey)();(0,u.oO)(Be);const Ue=(0,a.Ef)(c);Ue.use(Be).use(qe).use(l.A).use(k).mount("#app")},2543:function(){}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,a,r,n){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],n=e[u][2];for(var o=!0,d=0;d<a.length;d++)(!1&n||i>=n)&&Object.keys(s.O).every((function(e){return s.O[e](a[d])}))?a.splice(d--,1):(o=!1,n<i&&(i=n));if(o){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,r,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/mktapp/"}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,n,i=a[0],o=a[1],d=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(d)var u=d(s)}for(t&&t(a);c<i.length;c++)n=i[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(u)},a=self["webpackChunkmktapp"]=self["webpackChunkmktapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(3857)}));a=s.O(a)})();
//# sourceMappingURL=app.1c23ac70.js.map