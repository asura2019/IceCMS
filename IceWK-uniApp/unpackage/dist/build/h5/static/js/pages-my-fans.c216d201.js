(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-fans"],{"18b5":function(t,e,a){"use strict";a.r(e);var n=a("5810"),s=a("708f");for(var u in s)"default"!==u&&function(t){a.d(e,t,(function(){return s[t]}))}(u);var r,i=a("f0c5"),o=Object(i["a"])(s["default"],n["b"],n["c"],!1,null,"6eb309e7",null,!1,n["a"],r);e["default"]=o.exports},"261f":function(t,e,a){"use strict";var n=a("4ea4");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(a("926d")),u={components:{userList:s.default},data:function(){return{userList:[],page:1,loadStatus:"loadmore"}},onLoad:function(){this.getUserList()},onReachBottom:function(){this.page++,this.getUserList()},methods:{getUserList:function(){var t=this;this.loadStatus="loading",this.$H.get("user/userFans",{page:this.page}).then((function(e){t.userList=t.userList.concat(e.result.data),e.result.current_page===e.result.last_page||0===e.result.last_page?t.loadStatus="nomore":t.loadStatus="loadmore"}))}}};e.default=u},5810:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var n={userList:a("926d").default},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("user-list",{attrs:{list:t.userList,loadStatus:t.loadStatus}})],1)},u=[]},"708f":function(t,e,a){"use strict";a.r(e);var n=a("261f"),s=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=s.a}}]);