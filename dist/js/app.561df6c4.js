(function(t){function a(a){for(var n,c,r=a[0],o=a[1],p=a[2],l=0,d=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&d.push(s[c][0]),s[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);g&&g(a);while(d.length)d.shift()();return i.push.apply(i,p||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,c=1;c<e.length;c++){var o=e[c];0!==s[o]&&(n=!1)}n&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},s={app:0},i=[];function c(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"bd907dad"}[t]+".js"}function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var a=[],e=s[t];if(0!==e)if(e)a.push(e[2]);else{var n=new Promise((function(a,n){e=s[t]=[a,n]}));a.push(e[2]=n);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.src=c(t);var p=new Error;i=function(a){o.onerror=o.onload=null,clearTimeout(l);var e=s[t];if(0!==e){if(e){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",p.name="ChunkLoadError",p.type=n,p.request=i,e[1](p)}s[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(a)},r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/",r.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],p=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var g=p;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0ca1":function(t,a,e){t.exports=e.p+"img/1.4d0dc037.png"},1389:function(t,a,e){"use strict";e("4fdd")},"202d":function(t,a,e){},"46dd":function(t,a,e){},"48f6":function(t,a,e){},"4fdd":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("7a23");function s(t,a,e,s,i,c){var r=Object(n["w"])("app-header"),o=Object(n["w"])("router-view"),p=Object(n["w"])("app-footer");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(r),Object(n["g"])(o),Object(n["g"])(p)],64)}e("b059"),e("b0c0");var i=e("a346"),c=e.n(i),r=Object(n["D"])("data-v-1cf92350");Object(n["s"])("data-v-1cf92350");var o={class:"header"},p={class:"top"},l={class:"header-left"},g=Object(n["g"])("div",{class:"header-center"},[Object(n["g"])("img",{class:"logo",src:c.a,alt:""})],-1),d=Object(n["g"])("div",{class:"header-right"},[Object(n["g"])("div",{class:"language"},[Object(n["g"])("span",{class:"active"},"中"),Object(n["f"])(" / "),Object(n["g"])("span",null,"EN")]),Object(n["g"])("i",{class:"iconfont icon-index"})],-1);Object(n["q"])();var b=r((function(t,a,e,s,i,c){var b=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])("div",o,[Object(n["g"])("div",p,[Object(n["g"])("div",l,[Object(n["g"])("i",{class:"iconfont icon-list",onClick:a[1]||(a[1]=function(){return c.switchNav.apply(c,arguments)})})]),g,d]),Object(n["C"])(Object(n["g"])("nav",{class:"nav",onClick:a[2]||(a[2]=function(){return c.switchNav.apply(c,arguments)})},[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.routers,(function(t,a){return Object(n["p"])(),Object(n["d"])(b,{key:a,tag:"div",to:t.path,class:"nav-item","active-class":"active"},{default:r((function(){return[Object(n["f"])(Object(n["y"])(t.name),1)]})),_:2},1032,["to"])})),128))],512),[[n["A"],i.showNav]]),Object(n["C"])(Object(n["g"])("div",{class:"mask",onClick:a[3]||(a[3]=function(){return c.switchNav.apply(c,arguments)})},null,512),[[n["A"],i.showMask]])])})),m={components:{},props:{},data:function(){return{showNav:!1,showMask:!1,routers:[{name:"首页",path:"/"},{name:"专题赛",path:"/spec-contest"},{name:"定制赛",path:"/custom-contest"},{name:"加速赛",path:"/acceleration-camp"},{name:"导师与顾问",path:"/advisor"},{name:"赛事动态",path:"/acceleration-camp"},{name:"关于夯邦",path:"/about"}]}},computed:{},methods:{switchNav:function(){this.showNav=!this.showNav,this.showMask=!this.showMask}}};e("d5b3");m.render=b,m.__scopeId="data-v-1cf92350";var v=m,h=Object(n["D"])("data-v-0085ce24");Object(n["s"])("data-v-0085ce24");var u={class:"footer"},f=Object(n["e"])('<div class="title" data-v-0085ce24><span data-v-0085ce24>赞助 合作</span></div><div class="box" data-v-0085ce24><div class="left" data-v-0085ce24><div class="internal" data-v-0085ce24><p data-v-0085ce24>联系人(中国)</p><p data-v-0085ce24>韩老师</p><p data-v-0085ce24>18958323273</p><p data-v-0085ce24>xiaoxiahan@polydt.com.com</p></div><div class="internationnal" data-v-0085ce24><p data-v-0085ce24>联系人（国际）</p><p data-v-0085ce24>LUNA</p><p data-v-0085ce24>18657495805</p><p data-v-0085ce24>luna@carbontchlobal.cn</p></div></div><div class="right" data-v-0085ce24><div class="net" data-v-0085ce24><p data-v-0085ce24>官网</p><p data-v-0085ce24>http://www.hangbangdt.com/</p></div><div class="code" data-v-0085ce24><p data-v-0085ce24>公众号</p><img src="http://img.polydt.com/hangbang/二维码.png" alt="code" data-v-0085ce24></div></div></div><div class="bottom" data-v-0085ce24><div class="copyright" data-v-0085ce24>Copyri 2020 浙ICP备 10036275号 -2</div></div>',3);Object(n["q"])();var O=h((function(t,a,e,s,i,c){return Object(n["p"])(),Object(n["d"])("div",u,[f])})),j={};e("1389");j.render=O,j.__scopeId="data-v-0085ce24";var y=j,P={components:{AppHeader:v,AppFooter:y}};P.render=s;var I=P,w=(e("d3b7"),e("6c02")),x=Object(n["D"])("data-v-602a0b6a");Object(n["s"])("data-v-602a0b6a");var C={class:"index"},E=Object(n["g"])("div",{class:"banner"},[Object(n["g"])("img",{class:"img",src:"http://img.polydt.com/hangbang/1.index/banner.png"})],-1),k={class:"introduce"},D=Object(n["e"])('<div class="text" data-v-602a0b6a><p class="title" data-v-602a0b6a>挑战赛介绍</p><p class="small-title" data-v-602a0b6a>Introduction to the challenge</p><span class="titleBar" data-v-602a0b6a></span><p class="description" data-v-602a0b6a> 夯邦国际制造创新挑战赛(拟),基于夯邦国际服务团队,集智攻关中国制造关键材料与技术“卡脖子”问题，全球招募有意愿、有 潜力在中国发展的创新项目，借助顾问甄选、路演对接、导师辅导等5个月加速服务，帮助中国新材料产业园区实现国际高水平项目 和团队的落地招商、帮助中国制造企业、投资机构，一战获得优质项目合作和投资机会。 </p></div>',1),B={class:"video"},_=Object(n["g"])("p",{class:"title"},"大赛视频",-1),N=Object(n["g"])("p",{class:"small-title"},"Competition video",-1),S=Object(n["g"])("span",{class:"titleBar"},null,-1),T=Object(n["g"])("img",{class:"video-skin",src:"http://img.polydt.com/hangbang/视频封面.png"},null,-1),M=Object(n["g"])("video",{id:"descriptions",class:"description",controls:"controls"},[Object(n["g"])("source",{src:"http://img.polydt.com/hangbang/video/hb.mp4"})],-1),A=Object(n["e"])('<div class="context" data-v-602a0b6a><div class="titleDiv" data-v-602a0b6a><p class="title" data-v-602a0b6a>专题挑战赛</p><p class="small-title" data-v-602a0b6a>Thematic Challenge</p><span class="titleBar" data-v-602a0b6a></span></div><div class="iconDiv" data-v-602a0b6a><div class="box1" data-v-602a0b6a><a href="/frontStage/specContestLvsebaozhuang" data-v-602a0b6a><img id="lvse" src="http://img.polydt.com/hangbang/1.index/ThematicChallenge-1.png" data-v-602a0b6a><p data-v-602a0b6a>绿色包装</p></a><a href="/frontStage/toSpecContestXianJin" data-v-602a0b6a><img id="xianjin" src="http://img.polydt.com/hangbang/1.index/ThematicChallenge-2.png" data-v-602a0b6a><p data-v-602a0b6a>先进半导体</p></a></div><div class="box2" data-v-602a0b6a><a href="/frontStage/specContestQinneng" data-v-602a0b6a><img id="qinneng" src="http://img.polydt.com/hangbang/1.index/ThematicChallenge-3.png" data-v-602a0b6a><p data-v-602a0b6a>氢能及燃料电池</p></a><a href="/frontStage/toSpecContestDianZi" data-v-602a0b6a><img id="dianzi" src="http://img.polydt.com/hangbang/1.index/ThematicChallenge-4.png" data-v-602a0b6a><p data-v-602a0b6a>电子产品热管理</p></a><a href="/frontStage/specContestGaonengliangmiducunchu" data-v-602a0b6a><img id="gaoneng" src="http://img.polydt.com/hangbang/1.index/ThematicChallenge-5.png" data-v-602a0b6a><p data-v-602a0b6a>高能量密度储能</p></a></div><div class="icon" data-v-602a0b6a></div></div></div>',1),q={class:"processes"},z=Object(n["g"])("div",{class:"titleDiv"},[Object(n["g"])("p",{class:"title"},"赛事流程"),Object(n["g"])("p",{class:"small-title"},"Event flow"),Object(n["g"])("span",{class:"titleBar"})],-1),H={class:"wrap"},L={class:"processImg",ref:"picUl"},J=Object(n["e"])('<li class="process" data-v-602a0b6a><p class="pTitle" data-v-602a0b6a>全球项目招募</p><p class="pDate" data-v-602a0b6a>全年</p></li><li class="process" data-v-602a0b6a><p class="pTitle" data-v-602a0b6a>项目甄选</p><p class="pDate" data-v-602a0b6a>2020.10-2021.3</p></li><li class="process" data-v-602a0b6a><p class="pTitle" data-v-602a0b6a>路演及走访</p><p class="pDate" data-v-602a0b6a>2020.10-2021.3</p></li><li class="process" data-v-602a0b6a><p class="pTitle" data-v-602a0b6a>加速营</p><p class="pDate" data-v-602a0b6a>2021.4-2021.8</p></li><li class="process" data-v-602a0b6a><p class="pTitle" data-v-602a0b6a>投资峰会暨总结赛</p><p class="pDate" data-v-602a0b6a>2021.9</p></li>',5),X=Object(n["e"])('<div class="institution" data-v-602a0b6a><div class="titleDiv" data-v-602a0b6a><p class="title" data-v-602a0b6a>组织机构</p><p class="small-title" data-v-602a0b6a>Organization</p><span class="titleBar" data-v-602a0b6a></span></div><p class="host" data-v-602a0b6a>主办单位:</p><div class="hostDiv" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/1.index/Organization-1.1.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/1.index/Organization-1.2.png" data-v-602a0b6a></div></div>',1),U={class:"partner"},V=Object(n["g"])("div",{class:"titleDiv"},[Object(n["g"])("p",{class:"title"},"合作伙伴(企业)"),Object(n["g"])("p",{class:"small-title"},"Partner(enterprise)"),Object(n["g"])("span",{class:"titleBar"})],-1),F={id:"logo"},G=Object(n["e"])('<span class="enterprise show" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-2.4.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-2.5.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-2.6.png" data-v-602a0b6a></span><span class="enterprise show" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-3.1.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-3.2.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-3.3.png" data-v-602a0b6a></span><span class="enterprise show" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-3.4.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-3.5.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-3.6.png" data-v-602a0b6a></span>',3),Q=Object(n["g"])("button",{class:"more",id:"ent-more"},"更多>>",-1),Y={class:"partner"},Z=Object(n["g"])("div",{class:"titleDiv"},[Object(n["g"])("p",{class:"title"},"合作伙伴(平台)"),Object(n["g"])("p",{class:"small-title"},"Partner(platform)"),Object(n["g"])("span",{class:"titleBar"})],-1),$={id:"logo2"},K=Object(n["e"])('<span class="enterprise show2" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-2.5.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-3.1.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-3.2.png" data-v-602a0b6a></span><span class="enterprise show2" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-3.3.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-3.4.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-3.5.png" data-v-602a0b6a></span>',2),R=Object(n["g"])("button",{class:"more",id:"ent-more"},"更多>>",-1),W={class:"partner"},tt=Object(n["g"])("div",{class:"titleDiv"},[Object(n["g"])("p",{class:"title"},"投资机构"),Object(n["g"])("p",{class:"small-title"},"Investment institutions"),Object(n["g"])("span",{class:"titleBar"})],-1),at={id:"logo3"},et=Object(n["e"])('<span class="enterprise show3" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-2.2.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-2.3.png" data-v-602a0b6a></span><span class="enterprise show3" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-2.4.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-2.5.png" data-v-602a0b6a></span><span class="enterprise show3" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-3.1.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-3.2.png" data-v-602a0b6a></span><span class="enterprise show3" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-3.3.png" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-3.4.png" data-v-602a0b6a></span><span class="enterprise show3" data-v-602a0b6a><img src="http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-3.5.png" data-v-602a0b6a></span>',5),nt=Object(n["g"])("button",{class:"more",id:"ent-more"},"更多>>",-1);Object(n["q"])();var st=x((function(t,a,e,s,i,c){return Object(n["p"])(),Object(n["d"])("div",C,[E,Object(n["g"])("div",k,[D,Object(n["g"])("div",B,[_,N,S,Object(n["g"])("div",{class:"video-titleBar",onClick:a[1]||(a[1]=function(){return c.showVideo.apply(c,arguments)})},[T,M])])]),A,Object(n["g"])("div",q,[z,Object(n["g"])("div",H,[Object(n["g"])("ul",L,[J],512)])]),X,Object(n["g"])("div",U,[V,Object(n["g"])("div",F,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.logos,(function(t){return Object(n["p"])(),Object(n["d"])("span",{class:"enterprise",key:t},[Object(n["g"])("img",{src:t},null,8,["src"])])})),128)),G,Object(n["g"])("div",{class:"btnDiv",onClick:a[2]||(a[2]=function(){return c.showMore.apply(c,arguments)})},[Q])])]),Object(n["g"])("div",Y,[Z,Object(n["g"])("div",$,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.logos2,(function(t){return Object(n["p"])(),Object(n["d"])("span",{class:"enterprise",key:t},[Object(n["g"])("img",{src:t},null,8,["src"])])})),128)),K,Object(n["g"])("div",{class:"btnDiv2",onClick:a[3]||(a[3]=function(){return c.showMore2.apply(c,arguments)})},[R])])]),Object(n["g"])("div",W,[tt,Object(n["g"])("div",at,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.companion,(function(t){return Object(n["p"])(),Object(n["d"])("span",{class:"enterprise",key:t},[Object(n["g"])("img",{src:t},null,8,["src"])])})),128)),et,Object(n["g"])("div",{class:"btnDiv3",onClick:a[4]||(a[4]=function(){return c.showMore3.apply(c,arguments)})},[nt])])])])})),it=e("f40f"),ct={components:{},props:{},data:function(){return{logos:["http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-1.1.png","http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-1.2.png","http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-1.3.png","http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-1.4.png","http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-1.5.png","http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-1.6.png","http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-2.1.png","http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-2.2.png","http://img.polydt.com/hangbang/PartnerEnterprise/Partner(enterprise)-2.3.png"],logos2:["http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-1.1.png","http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-1.2.png","http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-1.3.png","http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-1.4.png","http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-1.5.png","http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-2.1.png","http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-2.2.png","http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-2.3.png","http://img.polydt.com/hangbang/PartnerPlatform/Partner(platform)-2.4.png"],companion:["http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-1.1.png","http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-1.2.png","http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-1.3.png","http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-1.4.png","http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-1.5.png","http://img.polydt.com/hangbang/InvestmentInstitutions/InvestmentInstitutions-2.1.png"],index:0,index1:0,index2:0}},computed:{},mounted:function(){var t=this;this.$nextTick((function(){t._initScroll()}))},methods:{_initScroll:function(){new it["a"](".wrap",{startX:0,scrollX:!0,scrollY:!1,eventPassthrough:"vertical"})},showVideo:function(){var t=document.getElementById("descriptions");t.style.display="block",t.play()},showMore:function(){var t=document.getElementById("logo"),a=document.getElementsByClassName("show"),e=document.getElementsByClassName("btnDiv");this.index<3&&(a[this.index++].style.display="block",t.style.height=t.clientHeight+55+"px"),console.log(e[0]),3===this.index&&(e[0].style.display="none")},showMore2:function(){var t=document.getElementById("logo2"),a=document.getElementsByClassName("show2"),e=document.getElementsByClassName("btnDiv2");this.index1<3&&(a[this.index1++].style.display="block",t.style.height=t.clientHeight+55+"px"),console.log(e[0].style),2===this.index1&&(e[0].style.display="none")},showMore3:function(){var t=document.getElementById("logo3"),a=document.getElementsByClassName("show3"),e=document.getElementsByClassName("btnDiv3");this.index2<5&&(a[this.index2++].style.display="block",t.style.height=t.clientHeight+55+"px"),5===this.index2&&(e[0].style.display="none")}}};e("e91a");ct.render=st,ct.__scopeId="data-v-602a0b6a";var rt=ct,ot=e("fcb2"),pt=e.n(ot),lt=e("0ca1"),gt=e.n(lt),dt=Object(n["D"])("data-v-ff8a3876");Object(n["s"])("data-v-ff8a3876");var bt=Object(n["g"])("div",{class:"banner"},[Object(n["g"])("img",{src:pt.a,alt:""})],-1),mt=Object(n["g"])("div",{class:"bg-introduce"},[Object(n["g"])("div",{class:"head"},[Object(n["g"])("h1",null,"背景介绍"),Object(n["g"])("span",null,"Background"),Object(n["g"])("div",{class:"context"},[Object(n["g"])("p",null," 在复杂国际环境下，从业界到大众，围绕着一些企业“缺芯”问题展开了深入的思考，也看到了目前中国对于半导体芯片及材料国产替代的大量需求，然而中国半导体芯片技术和国外差距仍然巨大。但是由于目前摩尔定律的放缓，对于材料及技术的升级需求相对放缓，中国厂商具备了该赛道上追赶甚至超车的机会。 虽然中国在芯片产业链建设上已经取得了一定的成果，但要推动芯片产业的长线发展，不仅仅是政策支持与走姿的问题。为了推动中国芯片产业发展，需进一步探索科研与企业联动的发展模式。 "),Object(n["g"])("p",{style:{"margin-top":"-10px"}},"先进半导体创新赛将以打造“中国芯”为重点方向，面向全球招募优秀项目与团队，协助国内优秀项目与投资对接，实现落地合作。"),Object(n["g"])("div",{class:"pic"}),Object(n["g"])("img",{src:gt.a})])])],-1);Object(n["q"])();var vt=dt((function(t,a,e,s,i,c){return Object(n["p"])(),Object(n["d"])("div",null,[bt,mt])})),ht={};e("f164");ht.render=vt,ht.__scopeId="data-v-ff8a3876";var ut=ht,ft=[{path:"/",name:"Index",component:rt},{path:"/spec-contest",name:"SpecContest",component:ut},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],Ot=Object(w["a"])({history:Object(w["b"])("/"),routes:ft}),jt=Ot;e("202d");Object(n["c"])(I).use(jt).mount("#app")},a346:function(t,a,e){t.exports=e.p+"img/logo.dba2ced1.png"},b059:function(t,a,e){},d5b3:function(t,a,e){"use strict";e("46dd")},e91a:function(t,a,e){"use strict";e("48f6")},f164:function(t,a,e){"use strict";e("fcb4")},fcb2:function(t,a,e){t.exports=e.p+"img/SpecialCompetition-banner1.73f5c7ce.png"},fcb4:function(t,a,e){}});
//# sourceMappingURL=app.561df6c4.js.map