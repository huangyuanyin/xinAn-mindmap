(function(e){function t(t){for(var a,o,l=t[0],r=t[1],s=t[2],d=0,m=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);u&&u(t);while(m.length)m.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},i={app:0},c=[];function l(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-6dc88caa":"4162b214","chunk-2d216214":"259cecad","chunk-2d216257":"69e90091","chunk-54ec08a8":"97014e7a"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n={"chunk-6dc88caa":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-6dc88caa":"c1f179e1","chunk-2d216214":"31d6cfe0","chunk-2d216257":"31d6cfe0","chunk-54ec08a8":"31d6cfe0"}[e]+".css",i=r.p+a,c=document.getElementsByTagName("link"),l=0;l<c.length;l++){var s=c[l],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===i))return t()}var m=document.getElementsByTagName("style");for(l=0;l<m.length;l++){s=m[l],d=s.getAttribute("data-href");if(d===a||d===i)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var a=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],u.parentNode.removeChild(u),n(c)},u.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(u)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.src=l(e);var m=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",m.name="ChunkLoadError",m.type=a,m.request=o,n[1](m)}i[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/mindmap/",r.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var u=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"021c":function(e,t,n){},1367:function(e,t,n){"use strict";n("021c")},"15fa":function(e,t,n){"use strict";n("6e57")},2192:function(e,t,n){"use strict";n("c51f")},"365c":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return p})),n.d(t,"b",(function(){return v})),n.d(t,"g",(function(){return b})),n.d(t,"c",(function(){return h}));var a=n("c581"),o=n("d056"),i=(n("7a23"),n("d8ad"));const c="SIMPLE_MIND_MAP_DATA",l="SIMPLE_MIND_MAP_LANG",r="SIMPLE_MIND_MAP_LOCAL_CONFIG",s=(e,t)=>(e.data=Object(o["Y"])(t.data),e.children=[],t.children&&t.children.length>0&&t.children.forEach((t,n)=>{e.children[n]=s({},t)}),e),d=()=>{let e=localStorage.getItem(c);if(null===e)return Object(o["Y"])(a["a"]);try{return JSON.parse(e)}catch(t){return Object(o["Y"])(a["a"])}},m=e=>{try{let t=d();t.root=s({},e),i["a"].emit("write_local_file",t);let n=JSON.stringify(t);localStorage.setItem(c,n)}catch(t){console.log(t)}},u=e=>{try{let t=d();t={...t,...e},i["a"].emit("write_local_file",t);let n=JSON.stringify(t);localStorage.setItem(c,n)}catch(t){console.log(t)}},p=e=>{localStorage.setItem(l,e)},v=()=>{let e=localStorage.getItem(l);return e||(p("zh"),"zh")},b=e=>{localStorage.setItem(r,JSON.stringify(e))},h=()=>{let e=localStorage.getItem(r);return e?JSON.parse(e):null}},"3d6b":function(e,t,n){},"3dc3":function(e,t,n){"use strict";n("e155")},"41cb":function(e,t,n){"use strict";var a=n("6605"),o=n("7a23");const i=e=>(Object(o["pushScopeId"])("data-v-5dfe251e"),e=e(),Object(o["popScopeId"])(),e),c={class:"headerContent"},l=i(()=>Object(o["createElementVNode"])("div",{class:"logoBox"},[Object(o["createElementVNode"])("span",{class:"logo"}),Object(o["createElementVNode"])("span",{class:"title"},"SimpleMindMap")],-1)),r={class:"nav"},s=i(()=>Object(o["createElementVNode"])("div",{class:"navItem"},[Object(o["createElementVNode"])("a",{href:"https://github.com/wanglin2/mind-map",target:"_blank"},"Github")],-1));var d={__name:"Header",setup(e){const t=Object(a["d"])(),n=Object(o["ref"])(!1),i=Object(o["ref"])("home"),d=Object(o["ref"])(null);Object(o["onMounted"])(()=>{window.addEventListener("scroll",m),d.value=document.querySelector(".block3Container")}),Object(o["onUnmounted"])(()=>{window.removeEventListener("scroll",m)});const m=()=>{n.value=window.scrollY>0;let e=d.value.offsetTop;window.scrollY+window.innerHeight>=e&&window.scrollY<=e+d.value.offsetHeight?i.value="client":i.value="home"},u=()=>{t.push("/")},p=()=>{t.push("/help/zh/")},v=()=>{t.push("/doc/zh/")},b=()=>{window.scrollTo(0,0)},h=()=>{window.scrollTo(0,d.value.offsetTop-76)};return(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["indexHeaderContainer",{active:n.value}])},[Object(o["createElementVNode"])("div",c,[l,Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["navItem",{active:"home"===i.value}]),onClick:b}," 首页 ",2),Object(o["createElementVNode"])("div",{class:"navItem",onClick:u},"在线使用"),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["navItem",{active:"client"===i.value}]),onClick:h}," 客户端 ",2),Object(o["createElementVNode"])("div",{class:"navItem",onClick:p},"使用文档"),Object(o["createElementVNode"])("div",{class:"navItem",onClick:v},"开发文档"),s])])],2))}},m=(n("bcff"),n("d959")),u=n.n(m);const p=u()(d,[["__scopeId","data-v-5dfe251e"]]);var v=p;const b={class:"splitContainer"};function h(e,t,n,a,i,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",b)}var f={};n("d30e");const g=u()(f,[["render",h],["__scopeId","data-v-58208bc0"]]);var O=g;const j=e=>(Object(o["pushScopeId"])("data-v-c2950932"),e=e(),Object(o["popScopeId"])(),e),k={class:"blockContent"},w={class:"infoBox"},y=j(()=>Object(o["createElementVNode"])("div",{class:"blockTitle"},"Simple mind map",-1)),N=Object(o["createStaticVNode"])('<div class="infoList" data-v-c2950932><p class="infoRow" data-v-c2950932>是一个思维导图库</p><p class="infoRow" data-v-c2950932>同时也是一个思维导图软件</p><p class="infoRow" data-v-c2950932>开源、免费、强大...</p></div><div class="desc" data-v-c2950932>无论你是开发者，还是使用者，只要喜欢思维导图，都能在这个项目里找到你需要的。</div>',2),x=Object(o["createStaticVNode"])('<div class="picBox" data-v-c2950932><div class="animation1" data-v-c2950932></div><div class="animation2" data-v-c2950932></div><div class="animation3" data-v-c2950932></div><div class="pic" data-v-c2950932></div></div>',1);var E={__name:"Block1",setup(e){const t=Object(a["d"])(),n=Object(o["ref"])(0);Object(o["onMounted"])(()=>{window.addEventListener("resize",i),i()}),Object(o["onUnmounted"])(()=>{window.removeEventListener("resize",i)});const i=()=>{n.value=window.innerHeight},c=()=>{t.push("/")},l=()=>{t.push("/doc/zh/")};return(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"block1Container",style:Object(o["normalizeStyle"])({height:n.value+"px"})},[Object(o["createElementVNode"])("div",k,[Object(o["createElementVNode"])("div",w,[y,Object(o["createVNode"])(O),N,Object(o["createElementVNode"])("div",{class:"btnBox"},[Object(o["createElementVNode"])("div",{class:"btn",onClick:c},"在线使用"),Object(o["createElementVNode"])("div",{class:"btn btn2",onClick:l},"开发文档")])]),x])],4))}};n("2192");const S=u()(E,[["__scopeId","data-v-c2950932"]]);var T=S;const C=e=>(Object(o["pushScopeId"])("data-v-2c13205d"),e=e(),Object(o["popScopeId"])(),e),I={class:"block2Container"},F={class:"blockContent"},L=C(()=>Object(o["createElementVNode"])("div",{class:"blockTitle"},"为什么选择Simple mind map？",-1)),V={class:"dataList"},B={class:"iconBox"},_={class:"dataValue"},M=C(()=>Object(o["createElementVNode"])("div",{class:"desc"}," 如果你是开发者：Simple mind map提供了一个功能完善的 js 思维导图库，不依赖任何框架，你可以使用它来快速完成Web思维导图产品的开发。 ",-1)),z=C(()=>Object(o["createElementVNode"])("div",{class:"desc"},"如果你是使用者：Simple mind map提供了一个完整的思维导图软件，支持在线和客户端两种使用方式，所有功能完全免费。",-1)),A={class:"functionList"},P={class:"info"},D={class:"name"},R={class:"value"};var W={__name:"Block2",setup(e){const t=[{icon:"iconstar",value:"Github star数量600+"},{icon:"iconfork",value:"Github fork数量150+"},{icon:"iconxiazai",value:"npm总下载次数10000+"},{icon:"iconteamwork",value:"代码贡献者8+"}],n=[{icon:"iconjingzi",name:"主题",value:"内置多种主题，允许高度自定义样式，支持注册新主题。"},{icon:"iconjiegou",name:"结构",value:"支持常见的逻辑结构图、思维导图、组织结构图、目录组织图、时间轴、鱼骨图结构。"},{icon:"iconjianpan",name:"快捷键",value:"常用操作支持快捷键，方便使用。"},{icon:"iconzitixiahuaxian",name:"富文本",value:"节点支持普通文本和富文本两种类型，通过富文本可以创建样式丰富的节点文本内容。"},{icon:"iconimage",name:"图片",value:"选中任一节点，选择上传图片，让内容达到图文并茂。"},{icon:"icongaikuozonglan",name:"概要",value:"补充表述几个节点之间的关系。"},{icon:"iconxiaolian",name:"图标",value:"通过添加图标来让节点内容更丰富。"},{icon:"iconchaolianjie",name:"超链接",value:"节点可插入超链接，鼠标点击即可实现跳转。"},{icon:"iconflow-Mark",name:"备注",value:"详细的内容可以放在备注中，节点内显得更简单明了。"},{icon:"iconbiaoqian",name:"标签",value:"如果添加带颜色的标签，来突出要表达的重点。"},{icon:"iconlianjiexian",name:"关联线",value:"通过添加关联线来表明节点之间的关联关系。"},{icon:"iconmouseL",name:"拖动",value:"画布和节点都可以进行拖动。"},{icon:"icondaohang",name:"导航器",value:"通过导航器可以方便知道当前画布处于思维导图的哪个部分。"},{icon:"icondaochu",name:"导入导出",value:"支持多种文件格式的导入和导出。"},{icon:"iconshuiyin",name:"水印",value:"内置支持水印功能，防止隐私泄露。"},{icon:"iconwithdraw",name:"前进后退",value:"不小心误操作删除或修改内容支持一键撤回或恢复。"},{icon:"iconfuhao-dagangshu",name:"大纲",value:"根据大纲编辑思维导图，让内容更详细也不容易出错。"},{icon:"iconshezhi",name:"丰富的设置",value:"提供了丰富的功能设置，可以选择合适你的操作行为。"}];return(e,a)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",I,[Object(o["createElementVNode"])("div",F,[L,Object(o["createElementVNode"])("div",V,[(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(t,(e,t)=>Object(o["createElementVNode"])("div",{class:"dataItem",key:t},[Object(o["createElementVNode"])("div",B,[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])(["icon iconfont",[e.icon]])},null,2)]),Object(o["createElementVNode"])("div",_,Object(o["toDisplayString"])(e.value),1)])),64))]),M,z,Object(o["createElementVNode"])("div",A,[(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n,(e,t)=>Object(o["createElementVNode"])("div",{class:"functionItem",key:t},[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["icon iconfont",[e.icon]])},null,2),Object(o["createElementVNode"])("div",P,[Object(o["createElementVNode"])("div",D,Object(o["toDisplayString"])(e.name),1),Object(o["createElementVNode"])("div",R,Object(o["toDisplayString"])(e.value),1)])])),64))])])]))}};n("1367");const H=u()(W,[["__scopeId","data-v-2c13205d"]]);var U=H;const Z={class:"block3Container"},Y=Object(o["createStaticVNode"])('<div class="blockContent" data-v-179c3001><div class="picBox" data-v-179c3001></div><div class="infoBox" data-v-179c3001><div class="infoTitle" data-v-179c3001>客户端</div><div class="info" data-v-179c3001>支持Windows、Mac、Linux平台。</div><div class="info" data-v-179c3001> 在线版数据默认保存在浏览器缓存里，同时也可以操作电脑本地文件，但是在线版受限于网络环境，访问可能比较慢，多个文件切换也不够方便，所以提供客户端版本，功能简单但不简陋。 </div><div class="btnList" data-v-179c3001><div class="btn" data-v-179c3001><a href="https://pan.baidu.com/s/1huasEbKsGNH2Af68dvWiOg?pwd=3bp3" target="_blank" data-v-179c3001>百度网盘下载</a></div><div class="btn btn2" data-v-179c3001><a href="https://github.com/wanglin2/mind-map/releases" target="_blank" data-v-179c3001>Github下载</a></div></div></div></div>',1),J=[Y];function G(e,t,n,a,i,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Z,J)}var K={methods:{}};n("15fa");const q=u()(K,[["render",G],["__scopeId","data-v-179c3001"]]);var X=q,Q=n("1020"),$=n.n(Q),ee=n("4dd1"),te=n.n(ee),ne=n("f0f8"),ae=n.n(ne);n("2c43");const oe=e=>(Object(o["pushScopeId"])("data-v-469d1efd"),e=e(),Object(o["popScopeId"])(),e),ie={class:"block4Container"},ce={class:"blockContent"},le={class:"infoBox"},re=oe(()=>Object(o["createElementVNode"])("div",{class:"infoTitle"},"JavaScript库",-1)),se=oe(()=>Object(o["createElementVNode"])("div",{class:"info"},"simple-mind-map是一个简单&强大的Web思维导图库，不依赖任何特定框架，可以帮助你快速开发思维导图产品。",-1)),de=oe(()=>Object(o["createElementVNode"])("div",{class:"info"},"使用非常简单，只需三步即可渲染出一个思维导图：",-1)),me=oe(()=>Object(o["createElementVNode"])("div",{class:"info"},"第一步：安装",-1)),ue={class:"codeBox"},pe=oe(()=>Object(o["createElementVNode"])("div",{class:"info"},"第二步：引入",-1)),ve={class:"codeBox"},be=oe(()=>Object(o["createElementVNode"])("div",{class:"info"},"第三步：实例化",-1)),he={class:"codeBox"},fe=oe(()=>Object(o["createElementVNode"])("div",{class:"picBox"},null,-1));var ge={__name:"Block4",setup(e){$.a.registerLanguage("javascript",te.a),$.a.registerLanguage("bash",ae.a);const t=Object(o["ref"])(null),n=Object(o["ref"])(null),a=Object(o["ref"])(null);Object(o["onMounted"])(()=>{$.a.highlightElement(t.value),$.a.highlightElement(n.value),$.a.highlightElement(a.value)});const i=()=>{router.push("/doc/zh/")};return(e,c)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ie,[Object(o["createElementVNode"])("div",ce,[Object(o["createElementVNode"])("div",le,[re,se,de,me,Object(o["createElementVNode"])("div",ue,[Object(o["createElementVNode"])("pre",null,[Object(o["createElementVNode"])("code",{class:"language-bash",ref_key:"code1",ref:t},"\r\nnpm i simple-mind-map\r\n            ",512)])]),pe,Object(o["createElementVNode"])("div",ve,[Object(o["createElementVNode"])("pre",null,[Object(o["createElementVNode"])("code",{class:"language-javascript",ref_key:"code2",ref:n},'\r\nimport MindMap from "simple-mind-map"\r\n            ',512)])]),be,Object(o["createElementVNode"])("div",he,[Object(o["createElementVNode"])("pre",null,[Object(o["createElementVNode"])("code",{class:"language-javascript",ref_key:"code3",ref:a},'\r\nconst mindMap = new MindMap({\r\n  // 提供一个宽高不为0的容器元素\r\n  el: document.getElementById(\'mindMapContainer\'),\r\n  // 思维导图数据\r\n  data: {\r\n    "data": {\r\n        "text": "根节点"\r\n    },\r\n    "children": []\r\n  }\r\n})\r\n            ',512)])]),Object(o["createElementVNode"])("div",{class:"btnList"},[Object(o["createElementVNode"])("div",{class:"btn",onClick:i},"查看更多")])]),fe])]))}};n("509a");const Oe=u()(ge,[["__scopeId","data-v-469d1efd"]]);var je=Oe;const ke=e=>(Object(o["pushScopeId"])("data-v-dbd28eae"),e=e(),Object(o["popScopeId"])(),e),we={class:"block5Container"},ye={class:"blockContent"},Ne=Object(o["createStaticVNode"])('<div class="infoBox" data-v-dbd28eae><div class="infoTitle" data-v-dbd28eae>理想青年实验室</div><div class="infoDesc" data-v-dbd28eae>专注前端、写作、开源。</div><div class="linkBtnList" data-v-dbd28eae><div class="linkBtn" data-v-dbd28eae><a href="https://github.com/wanglin2" target="_blank" data-v-dbd28eae><span class="linkBtnIcon iconfont icongithub" data-v-dbd28eae></span></a></div><div class="linkBtn" data-v-dbd28eae><a href="https://juejin.cn/user/325111170756279" target="_blank" data-v-dbd28eae><span class="linkBtnIcon text" data-v-dbd28eae>掘金</span></a></div><div class="linkBtn" data-v-dbd28eae><a href="https://segmentfault.com/u/jiejiaoxiaolin/articles" target="_blank" data-v-dbd28eae><span class="linkBtnIcon text" data-v-dbd28eae>思否</span></a></div><div class="linkBtn" data-v-dbd28eae><a href="http://lxqnsys.com/" target="_blank" data-v-dbd28eae><span class="linkBtnIcon iconfont iconwangzhan" data-v-dbd28eae></span></a></div><div class="linkBtn" data-v-dbd28eae><a href="https://www.zhihu.com/people/wang-lin-49-43-65" target="_blank" data-v-dbd28eae><span class="linkBtnIcon iconfont iconshejiaotubiao-10" data-v-dbd28eae></span></a></div><div class="linkBtn" data-v-dbd28eae><a href="https://blog.csdn.net/sinat_33488770?type=blog" target="_blank" data-v-dbd28eae><span class="linkBtnIcon iconfont iconcsdn" data-v-dbd28eae></span></a></div></div></div>',1),xe={class:"linkBox"},Ee=ke(()=>Object(o["createElementVNode"])("div",{class:"linkTitle"},"更多作品",-1)),Se={class:"linkList"},Te=["href"];var Ce={__name:"Block5",setup(e){const t=[{name:"CodeRun",url:"https://github.com/wanglin2/code-run",desc:"一个代码在线编辑预览工具，类似codepen、jsbin、jsfiddle等"},{name:"TinyWhiteboard",url:"https://github.com/wanglin2/tiny_whiteboard",desc:"一个在线小白板，类似excalidraw"},{name:"Mark.js",url:"https://github.com/wanglin2/markjs",desc:"一个插件化的多边形标注库"},{name:"WebMapEngine",url:"https://github.com/wanglin2/web_map_demo",desc:"一个简单的2D地图加载器"},{name:"SimpleNoviceGuide",url:"https://github.com/wanglin2/simple-novice-guide",desc:" 一个简洁的新手引导库"},{name:"CanvasEditor",url:"https://github.com/wanglin2/canvas-editor-demo",desc:"一个用Canvas做的富文本编辑器Demo"},{name:"JsonTreeView",url:"https://github.com/wanglin2/json-tree-view",desc:"一个简洁的json格式化插件"},{name:"SimpleFlowChart",url:"https://github.com/wanglin2/simple-flow-chart",desc:"一个用flex布局做的流程设计器"},{name:"VideoTimeLine",url:"https://github.com/wanglin2/VideoTimeLine",desc:"一个基于Vue2的视频时间轴组件"},{name:"MarkdownEditor",url:"https://github.com/wanglin2/markdown_editor_sync_scroll_demo",desc:"一个能精确同步滚动的Markdown编辑器"},{name:"AssociationLine",url:"https://github.com/wanglin2/AssociationLineDemo",desc:"关联线探究，如何连接流程图的两个节点"},{name:"HandPaintedStyle",url:"https://github.com/wanglin2/handPaintedStyle",desc:"手绘风格图形的简单实现"}];return(e,n)=>{const a=Object(o["resolveComponent"])("el-tooltip");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",we,[Object(o["createElementVNode"])("div",ye,[Ne,Object(o["createElementVNode"])("div",xe,[Ee,Object(o["createElementVNode"])("div",Se,[(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(t,e=>Object(o["createElementVNode"])("div",{class:"linkItem",key:e.name},[Object(o["createVNode"])(a,{content:e.desc,placement:"top"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("a",{href:e.url,target:"_blank"},Object(o["toDisplayString"])(e.name),9,Te)]),_:2},1032,["content"])])),64))])])])])}}};n("47b2");const Ie=u()(Ce,[["__scopeId","data-v-dbd28eae"]]);var Fe=Ie;const Le={class:"indexContainer"};var Ve={__name:"Index",setup(e){return(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Le,[Object(o["createVNode"])(v),Object(o["createVNode"])(T),Object(o["createVNode"])(U),Object(o["createVNode"])(X),Object(o["createVNode"])(je),Object(o["createVNode"])(Fe)]))}};n("3dc3");const Be=u()(Ve,[["__scopeId","data-v-35aaf6ce"]]);var _e=Be;const Me=[{path:"/index",name:"Index",component:_e},{path:"/",name:"Edit",component:()=>n.e("chunk-6dc88caa").then(n.bind(null,"5fca"))}],ze=Object(a["a"])({history:Object(a["b"])(),base:"/hyy-vue3-mindmap/",routes:Me});t["a"]=ze},"47b2":function(e,t,n){"use strict";n("65da")},"48c0":function(e,t,n){},"509a":function(e,t,n){"use strict";n("ea03")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const o={id:"app"};function i(e,t){const n=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(n)])}n("9fd5");var c=n("d959"),l=n.n(c);const r={},s=l()(r,[["render",i]]);var d=s,m=n("41cb"),u=n("c0d6"),p=n("c3a1"),v=(n("7437"),n("9c65"),n("0808"),n("c71c")),b=n("9225");const h=Object(a["createApp"])(d);h.config.productionTip=!1,h.use(p["a"]).use(v["a"]).use(u["a"]).use(m["a"]).use(b["a"]).mount("#app")},"65da":function(e,t,n){},"6e57":function(e,t,n){},9225:function(e,t,n){"use strict";var a=n("0251"),o={baseStyle:{title:"BaseStyle",background:"Background",color:"Color",image:"Image",imageRepeat:"Image repeat",imagePosition:"Image position",imageSize:"Image size",line:"Line",width:"Width",style:"Style",lineOfOutline:"Line of outline",nodePadding:"Node padding",nodeMargin:"Node margin",horizontal:"Horizontal",vertical:"Vertical",maximumWidth:"Max width",maximumHeight:"Max height",icon:"Icon",size:"Size",level2Node:"Level2 node",belowLevel2Node:"Below level2 node",nodeBorderType:"Node border style",nodeUseLineStyle:"Use only has bottom border style",otherConfig:"Other config",enableFreeDrag:"Enable node free drag",watermark:"Watermark",showWatermark:"Is show watermark",watermarkDefaultText:"Watermark text",watermarkText:"Watermark text",watermarkTextColor:"Text color",watermarkLineSpacing:"Line spacing",watermarkTextSpacing:"Text spacing",watermarkAngle:"Angle",watermarkTextOpacity:"Text opacity",watermarkTextFontSize:"Font size",isEnableNodeRichText:"Enable node rich text editing",mousewheelAction:"Mouse wheel behavior",zoomView:"Zoom view",moveViewUpDown:"Move view up and down",associativeLine:"Associative line",associativeLineWidth:"Width",associativeLineColor:"Color",associativeLineActiveWidth:"Active width",associativeLineActiveColor:"Active color",mousewheelZoomActionReverse:"Mouse Wheel Zoom",mousewheelZoomActionReverse1:"Zoom out forward and zoom in back",mousewheelZoomActionReverse2:"Zoom in forward and zoom out back",rootStyle:"Root Node",associativeLineText:"Associative line text",fontFamily:"Font family",fontSize:"Font size",isShowScrollbar:"Is show scrollbar"},color:{moreColor:"More color"},contextmenu:{insertSiblingNode:"Insert sibling node",insertChildNode:"Insert child node",insertParentNode:"Insert parent node",insertSummary:"Insert summary",moveUpNode:"Move up node",moveDownNode:"Move down node",deleteNode:"Delete node",deleteCurrentNode:"Only del cur node",copyNode:"Copy node",cutNode:"Cut node",pasteNode:"Paste node",backCenter:"Back root node",expandAll:"Expand all",unExpandAll:"Un expand all",expandTo:"Expand to",arrangeLayout:"Arrange layout",level1:"Level1",level2:"Level2",level3:"Level3",level4:"Level4",level5:"Level5",level6:"Level6",zenMode:"Zen mode",fitCanvas:"Fit canvas",removeImage:"Remove image",removeHyperlink:"Remove hyperlink",removeNote:"Remove note"},count:{words:"Words",nodes:"Nodes"},dialog:{cancel:"Cancel",confirm:"Confirm"},export:{title:"Export",filename:"Filename",include:"Is include config like theme and structure",dedicatedFile:"Dedicated file",jsonFile:"json file",imageFile:"Image file",svgFile:"svg file",pdfFile:"pdf file",markdownFile:"markdown file",tips:"tips：.smm and .json file can be import",isTransparent:"Background is transparent",pngTips:"tips: Exporting pictures in rich text mode is time-consuming. It is recommended to export to svg format",svgTips:"tips: Exporting pictures in rich text mode is time-consuming",transformingDomToImages:"Converting nodes: ",notifyTitle:"Info",notifyMessage:"If the download is not triggered, check whether it is blocked by the browser",paddingX:"Padding x",paddingY:"Padding y",useMultiPageExport:"Export multi page",defaultFileName:"Mind map"},fullscreen:{fullscreen:"Fullscreen",fullscreenShow:"Full screen show",fullscreenEdit:"Full screen edit"},import:{title:"Import",selectFile:"Select file",supportFile:"Support .smm、.json、.xmind、.xlsx、.md file",enableFileTip:"Please select .smm、.json、.xmind、.xlsx、.md file",maxFileNum:"At most one file can be selected",notSelectTip:"Please select the file to import",fileContentError:"The file content is incorrect",importSuccess:"Import success",fileParsingFailed:"File parsing failed"},navigatorToolbar:{openMiniMap:"Open mini map",closeMiniMap:"Close mini map",readonly:"Change to eadonly",edit:"Change to edit"},nodeHyperlink:{title:"Link",link:"Href",name:"Name"},nodeIcon:{title:"Icon"},nodeImage:{title:"Image",imgTitle:"Title"},nodeNote:{title:"Note"},nodeTag:{title:"Tag",addTip:"Press Enter to add"},outline:{title:"Outline",nodeDefaultText:"Branch node"},scale:{zoomIn:"Zoom in",zoomOut:"Zoom out"},shortcutKey:{title:"Shortcut key"},strusture:{title:"Strusture"},style:{title:"Node style",normal:"Normal",active:"Active",text:"Text",fontFamily:"Font family",fontSize:"Font size",lineHeight:"Line height",color:"color",addFontWeight:"add font weight",italic:"Italic",textDecoration:"Text decoration",underline:"Underline",none:"None",lineThrough:"Line through",overline:"Overline",border:"Border",style:"Style",width:"Width",borderRadius:"Border radius",background:"Background",shape:"Shape",line:"Line",nodePadding:"Node padding",horizontal:"Horizontal",vertical:"Vertical"},theme:{title:"Theme",classics:"Classics",dark:"Darkness",simple:"Simple",coverTip:"You have currently customized the basic style, do you want to overwrite it?",tip:"Tip",cover:"Cover",reserve:"Reserve"},toolbar:{undo:"Undo",redo:"Redo",insertSiblingNode:"Sibling node",insertChildNode:"Child node",deleteNode:"Delete node",image:"Image",icon:"Icon",link:"Link",note:"Note",tag:"Tag",summary:"Summary",displayOutline:"Display outline",baseStyle:"Base style",theme:"Theme",strusture:"Strusture",newFile:"New file",openFile:"Open file",saveAs:"Save as",import:"Import",export:"Export",shortcutKey:"Shortcut key",associativeLine:"Associative line",painter:"Painter",formula:"Formula",more:"More",selectFileTip:"Please select a file",notSupportTip:"Your browser does not support this feature, or the current page is not using the HTTPS protocol",tip:"Tip",editingLocalFileTipFront:"Currently editing your local【",editingLocalFileTipEnd:"】file",fileContentError:"File content error",fileOpenFailed:"File open failed",defaultFileName:"Mind map",creatingTip:"Creating file"},edit:{newFeatureNoticeTitle:"New feature reminder",newFeatureNoticeMessage:"This update supports node rich text editing, But there are some defects, The most important impact is that the time to export the image is proportional to the number of nodes, Therefore, if you are more dependent on export requirements, you can use【Base style】-【Other config】-【Enable node rich text editing】Set to turn off rich text editing mode.",root:"Root node",splitByWrap:"Is automatically split nodes based on line breaks?",tip:"Tip",yes:"Yes",no:"No"},mouseAction:{tip1:"Current: Left click to drag the canvas, right click to box select nodes",tip2:"Current: Left click to box select nodes, right click to drag the canvas"},search:{searchPlaceholder:"Please enter the search content",replacePlaceholder:"Please enter replacement content",replace:"Replace",replaceAll:"Replace all",cancel:"Cancel"},nodeIconSidebar:{title:"Icon/Sticker",icon:"Icon",sticker:"Sticker"},formulaSidebar:{title:"Formula",placeholder:"Please enter LaText syntax",confirm:"Confirm",common:"Common formulas",tip:"Inserting formulas is not supported in non rich text mode"},richTextToolbar:{bold:"Bold",italic:"Italic",underline:"Underline",strike:"Strike",fontFamily:"Font family",fontSize:"Font size",color:"Color",backgroundColor:"Background color",removeFormat:"Clear Style"},other:{loading:"Loading, please wait..."}},i={baseStyle:{title:"基础样式",background:"背景",color:"颜色",image:"图片",imageRepeat:"图片重复",imagePosition:"图片位置",imageSize:"图片大小",line:"连线",width:"粗细",style:"风格",lineOfOutline:"概要的连线",nodePadding:"节点内边距",nodeMargin:"节点外边距",horizontal:"水平",vertical:"垂直",maximumWidth:"显示的最大宽度",maximumHeight:"显示的最大高度",icon:"图标",size:"大小",level2Node:"二级节点",belowLevel2Node:"三级及以下节点",nodeBorderType:"节点边框风格",nodeUseLineStyle:"是否使用只有底边框的风格",otherConfig:"其他配置",enableFreeDrag:"是否开启节点自由拖拽",watermark:"水印",showWatermark:"是否显示水印",watermarkDefaultText:"水印文字",watermarkText:"水印文字",watermarkTextColor:"文字颜色",watermarkLineSpacing:"水印行间距",watermarkTextSpacing:"水印文字间距",watermarkAngle:"旋转角度",watermarkTextOpacity:"文字透明度",watermarkTextFontSize:"文字字号",isEnableNodeRichText:"是否开启节点富文本编辑",mousewheelAction:"鼠标滚轮行为",zoomView:"缩放视图",moveViewUpDown:"上下移动视图",associativeLine:"关联线",associativeLineWidth:"粗细",associativeLineColor:"颜色",associativeLineActiveWidth:"激活粗细",associativeLineActiveColor:"激活颜色",mousewheelZoomActionReverse:"鼠标滚轮缩放",mousewheelZoomActionReverse1:"向前缩小向后放大",mousewheelZoomActionReverse2:"向前放大向后缩小",rootStyle:"根节点",associativeLineText:"关联线文字",fontFamily:"字体",fontSize:"字号",isShowScrollbar:"是否显示滚动条"},color:{moreColor:"更多颜色"},contextmenu:{insertSiblingNode:"插入同级节点",insertChildNode:"插入子级节点",insertParentNode:"插入父节点",insertSummary:"插入概要",moveUpNode:"上移节点",moveDownNode:"下移节点",deleteNode:"删除节点",deleteCurrentNode:"仅删除当前节点",copyNode:"复制节点",cutNode:"剪切节点",pasteNode:"粘贴节点",backCenter:"回到根节点",expandAll:"展开所有",unExpandAll:"收起所有",expandTo:"展开到",arrangeLayout:"一键整理布局",level1:"一级主题",level2:"二级主题",level3:"三级主题",level4:"四级主题",level5:"五级主题",level6:"六级主题",zenMode:"禅模式",fitCanvas:"适应画布",removeImage:"移除图片",removeHyperlink:"移除超链接",removeNote:"移除备注"},count:{words:"字数",nodes:"节点"},dialog:{cancel:"取 消",confirm:"确 定"},export:{title:"导出",filename:"导出文件名称",include:"是否包含主题、结构等配置数据",dedicatedFile:"专有文件",jsonFile:"json文件",imageFile:"图片文件",svgFile:"svg文件",pdfFile:"pdf文件",markdownFile:"markdown文件",tips:"tips：.smm和.json文件可用于导入",isTransparent:"背景是否透明",pngTips:"tips：富文本模式导出图片非常耗时，建议导出为svg格式",svgTips:"tips：富文本模式导出图片非常耗时",transformingDomToImages:"正在转换节点：",notifyTitle:"消息",notifyMessage:"如果没有触发下载，请检查是否被浏览器拦截了",paddingX:"水平内边距",paddingY:"垂直内边距",useMultiPageExport:"是否多页导出",defaultFileName:"思维导图"},fullscreen:{fullscreen:"全屏",fullscreenShow:"全屏查看",fullscreenEdit:"全屏编辑"},import:{title:"导入",selectFile:"选取文件",supportFile:"支持.smm、.json、.xmind、.xlsx、.md文件",enableFileTip:"请选择.smm、.json、.xmind、.xlsx、.md文件",maxFileNum:"最多只能选择一个文件",notSelectTip:"请选择要导入的文件",fileContentError:"文件内容有误",importSuccess:"导入成功",fileParsingFailed:"文件解析失败"},navigatorToolbar:{openMiniMap:"开启小地图",closeMiniMap:"关闭小地图",readonly:"切换为只读模式",edit:"切换为编辑模式"},nodeHyperlink:{title:"超链接",link:"链接",name:"名称"},nodeIcon:{title:"图标"},nodeImage:{title:"图片",imgTitle:"图片标题"},nodeNote:{title:"备注"},nodeTag:{title:"标签",addTip:"请按回车键添加"},outline:{title:"大纲",nodeDefaultText:"分支节点"},scale:{zoomIn:"放大",zoomOut:"缩小"},shortcutKey:{title:"快捷键"},strusture:{title:"结构"},style:{title:"节点样式",normal:"常态",active:"选中状态",text:"文字",fontFamily:"字体",fontSize:"字号",lineHeight:"行高",color:"颜色",addFontWeight:"加粗",italic:"斜体",textDecoration:"划线",none:"无",underline:"下划线",lineThrough:"中划线",overline:"上划线",border:"边框",style:"样式",width:"宽度",borderRadius:"圆角",background:"背景",shape:"形状",line:"线条",nodePadding:"节点内边距",horizontal:"水平",vertical:"垂直"},theme:{title:"主题",classics:"经典",dark:"深色",simple:"朴素",coverTip:"你当前自定义过基础样式，是否覆盖？",tip:"提示",cover:"覆盖",reserve:"保留"},toolbar:{undo:"回退",redo:"前进",insertSiblingNode:"同级节点",insertChildNode:"子节点",deleteNode:"删除节点",image:"图片",icon:"图标",link:"超链接",note:"备注",tag:"标签",summary:"概要",displayOutline:"显示大纲",baseStyle:"基础样式",theme:"主题",strusture:"结构",newFile:"新建",openFile:"打开",saveAs:"另存为",import:"导入",export:"导出",shortcutKey:"快捷键",associativeLine:"关联线",painter:"格式刷",formula:"公式",more:"更多",selectFileTip:"请选择文件",notSupportTip:"你的浏览器不支持该功能，或者当前页面非https协议",tip:"提示",editingLocalFileTipFront:"当前正在编辑你本机的【",editingLocalFileTipEnd:"】文件",fileContentError:"文件内容有误",fileOpenFailed:"文件打开失败",defaultFileName:"思维导图",creatingTip:"正在创建文件"},edit:{newFeatureNoticeTitle:"新特性提醒",newFeatureNoticeMessage:"本次更新支持了节点富文本编辑，但是存在一定缺陷，最主要的影响是导出为图片的时间和节点数量成正比，所以对导出需求比较依赖的话可以通过【基础样式】-【其他配置】-【是否开启节点富文本编辑】设置关掉富文本编辑模式。",root:"根节点",splitByWrap:"是否按换行自动分割节点？",tip:"提示",yes:"是",no:"否"},mouseAction:{tip1:"当前：左键拖动画布，右键框选节点",tip2:"当前：左键框选节点，右键拖动画布"},search:{searchPlaceholder:"请输入查找内容",replacePlaceholder:"请输入替换内容",replace:"替换",replaceAll:"全部替换",cancel:"取消"},nodeIconSidebar:{title:"图标/贴纸",icon:"图标",sticker:"贴纸"},formulaSidebar:{title:"公式",placeholder:"请输入 LaText 语法",confirm:"完成",common:"常用公式",tip:"非富文本模式下不支持插入公式"},richTextToolbar:{bold:"加粗",italic:"斜体",underline:"下划线",strike:"删除线",fontFamily:"字体",fontSize:"字号",color:"字体颜色",backgroundColor:"背景颜色",removeFormat:"清除样式"},other:{loading:"正在加载，请稍后..."}},c={zh:i,en:o},l=n("365c");const r=Object(a["createI18n"])({legacy:!1,locale:Object(l["b"])(),messages:c});t["a"]=r},"9c65":function(e,t,n){},"9fd5":function(e,t,n){"use strict";n("48c0")},bcff:function(e,t,n){"use strict";n("3d6b")},c0d6:function(e,t,n){"use strict";var a=n("5502"),o=n("c581"),i=n("365c");const c=Object(a["a"])({state:{mindMapData:null,isHandleLocalFile:!1,localConfig:{isZenMode:!1,openNodeRichText:!0,useLeftKeySelectionRightKeyDrag:!1,isShowScrollbar:!1},activeSidebar:"",isDark:!1,isOutlineEdit:!1,isReadonly:!1},mutations:{setMindMapData(e,t){e.mindMapData=t},setIsHandleLocalFile(e,t){e.isHandleLocalFile=t},setLocalConfig(e,t){e.localConfig={...e.localConfig,...t},Object(i["g"])(e.localConfig)},setActiveSidebar(e,t){e.activeSidebar=t},setIsDark(e,t){e.isDark=t},setIsOutlineEdit(e,t){e.isOutlineEdit=t},setIsReadonly(e,t){e.isReadonly=t}},actions:{getUserMindMapData(e){try{let{data:t}={data:{data:{mindMapData:o["a"]}}};e.commit("setMindMapData",t.data)}catch(t){console.log(t)}}}});t["a"]=c},c51f:function(e,t,n){},d30e:function(e,t,n){"use strict";n("e7c4")},d8ad:function(e,t,n){"use strict";var a=n("1344");const o=Object(a["a"])();t["a"]=o},e155:function(e,t,n){},e7c4:function(e,t,n){},ea03:function(e,t,n){}});