(function(t){function e(e){for(var n,u,s=e[0],l=e[1],i=e[2],v=0,f=[];v<s.length;v++)u=s[v],a[u]&&f.push(a[u][0]),a[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(o.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},a={1:0},o=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var c=l;o.push([2,0]),r()})({"/asr":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),r("br"),t._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],o=(r("VRzm"),{name:"HelloWorld",props:{msg:String}}),u=o,s=(r("ld/3"),r("KHd+")),l=Object(s["a"])(u,n,a,!1,null,"0bd3424a",null);e["a"]=l.exports},"0EDd":function(t,e,r){},2:function(t,e,r){t.exports=r("6xO9")},"6xO9":function(t,e,r){"use strict";r.r(e);r("VRzm");var n=r("Kw5r"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),r("router-view")],1)},o=[],u=(r("MRX1"),r("KHd+")),s={},l=Object(u["a"])(s,a,o,!1,null,null,null),i=l.exports,c=r("jE9Z"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{src:r("zwU1")}}),n("HelloWorld",{attrs:{msg:"多页面测试页"}})],1)},f=[],p=r("/asr"),h={name:"home",components:{HelloWorld:p["a"]},mounted:function(){console.log("这个是多页面测试页的主页：".concat(this.$store.state.myname))}},_=h,m=Object(u["a"])(_,v,f,!1,null,null,null),g=m.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("This is an about page")])])}],j={},w=Object(u["a"])(j,b,d,!1,null,null,null),k=w.exports;n["a"].use(c["a"]);var y=new c["a"]({routes:[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:k}]}),x=r("wNa6");n["a"].config.productionTip=!1,new n["a"]({router:y,store:x["a"],render:function(t){return t(i)}}).$mount("#app")},MRX1:function(t,e,r){"use strict";var n=r("0EDd"),a=r.n(n);a.a},Ut8G:function(t,e,r){},"ld/3":function(t,e,r){"use strict";var n=r("Ut8G"),a=r.n(n);a.a},wNa6:function(t,e,r){"use strict";var n=r("Kw5r"),a=r("L2JU");n["a"].use(a["a"]),e["a"]=new a["a"].Store({state:{myname:"sunxiaochuan"},mutations:{},actions:{}})},zwU1:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=subpage.37dfbe37.js.map