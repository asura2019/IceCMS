(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subPage-my-account-login"],{"43e1":function(t,a,n){"use strict";var e=n("f422"),i=n.n(e);i.a},4412:function(t,a,n){"use strict";(function(t){var e=n("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n("4bc8")),r={data:function(){return{cur:0,loginForm:{username:"",password:""},userName:"",zhanghao:"",password:"",user:{name:"",user:"",password:"",password1:"",markcode:"",app:1e4}}},onLoad:function(){this.user.markcode=Math.round(1e7*Math.random())},methods:{wjmm:function(){},userLogin:function(){var a=this;if(0==this.cur)uni.showLoading({title:"登录中..."}),uni.request({url:i.default.Login(),data:this.loginForm,method:"get",success:function(t){200==t.data.code&&(uni.setStorageSync("access-admin",JSON.stringify(t.data.data)),uni.setStorageSync("SET_ISLOGIN",!0),uni.switchTab({url:"../my"}),uni.hideLoading(),uni.showToast({title:"登录成功",icon:"success"})),400==t.data.code&&(uni.hideLoading(),uni.showToast({title:t.msg,icon:"none"}))}});else{var n=this.user.password,e=this.user.password1;t.log(this.password1),n==e?(uni.showLoading({title:"注册中..."}),user.actions.zhuce(this.cur,this.user).then((function(n){t.log(n.data),200==n.code?(uni.hideLoading(),uni.showToast({title:"注册成功！",icon:"success"}),a.cur=0):(uni.hideLoading(),uni.showToast({title:n.msg,icon:"none"}))}))):""==e?uni.showToast({title:"请重复输入密码！",icon:"none"}):uni.showToast({title:"两次密码不一致！",icon:"none"})}}}};a.default=r}).call(this,n("5a52")["default"])},"4bc8":function(t,a,n){(function(a){n("fb6a"),n("d3b7"),n("e25e"),n("25f0");var e="175.178.237.96:8181/",i="http://"+e;t.exports={GetArctivelist:function(t,a){return i+"/WebArticle/getAllArticle/"+t+"/"+a},Login:function(){return i+"/User/login"},GetDomain:function(){return"https://"+e+"/"},GetPosts:function(t,a){return i+"/WebArticle/getAllArticle/"+t+"/"+a},GetSwiperPost:function(){return i+"/WebSitting/getCarousel"},GetCat:function(){return i+"/WebResourceClass/getResourceClasslist"},GetPostsbyClassID:function(t){return i+"/WebResource/getResourceByClassId/"+t},GetPostsbyID:function(t){return i+"/WebArticle/getArticleById/"+t},GetAllSquare:function(t,a,n){return i+"/Websquare/getAllSquare/"+t+"/"+a+"/"+n},GetSquareById:function(t){return i+"/Websquare/getSquareById/"+t},GetPlanetIdComment:function(t){return i+"/WebSquareComment/getPlanetIdComment/"+t},CreateSquare:function(t){return i+"/Websquare/create/"+t},AddPlanetComment:function(){return i+"/WebSquareComment/addPlanetComment"},LikeClickComments:function(t){return i+"/Websquare/likeClickComment/"+t},LikeClickComment:function(t){return i+"/WebSquareComment/likeClickComment/"+t},GetUserInfoByid:function(t){return i+"/User/GetUserInfoByid/"+t},GetAllResource:function(t,a){return i+"/WebResource/getAllResource/"+t+"/"+a},GetResourceById:function(t){return i+"/WebResource/getResourceById/"+t},IsNull:function(t){return null!=t&&void 0!=t},randomHexColor:function(){var t=Math.floor(16777216*Math.random()).toString(16);while(t.length<6)t="0"+t;return"#"+t},getcreatedtime:function(t){var n=Date.parse(new Date)/1e3;a.log(n);var e=n-t>0?n-t:0;if(e<=3600){var i=Math.round(e/60);return i+"分钟前"}if(e<86400){i=Math.round(e/3600);return i+"小时前"}i=Math.round(e/86400);return i+"天前"},formatDate:function(t){t=new Date(parseInt(1e3*t));var a=t.getFullYear(),n=("0"+(t.getMonth()+1)).slice(-2),e=("0"+t.getDate()).slice(-2),i=("0"+t.getHours()).slice(-2),r=("0"+t.getMinutes()).slice(-2),o=a+"-"+n+"-"+e+" "+i+":"+r;return o}}}).call(this,n("5a52")["default"])},"59b3":function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/* 主题颜色 */.margin-b5[data-v-06140693]{margin-bottom:%?5?%}.margin-b10[data-v-06140693]{margin-bottom:%?10?%}.margin-b15[data-v-06140693]{margin-bottom:%?15?%}.margin-b20[data-v-06140693]{margin-bottom:%?20?%}.margin-b25[data-v-06140693]{margin-bottom:%?25?%}.margin-b30[data-v-06140693]{margin-bottom:%?30?%}.margin-b40[data-v-06140693]{margin-bottom:%?40?%}.margin-b60[data-v-06140693]{margin-bottom:%?60?%}.margin-b80[data-v-06140693]{margin-bottom:%?80?%}.margin-b100[data-v-06140693]{margin-bottom:%?100?%}.margin-r5[data-v-06140693]{margin-right:%?5?%}.margin-r10[data-v-06140693]{margin-right:%?10?%}.margin-r15[data-v-06140693]{margin-right:%?15?%}.margin-r20[data-v-06140693]{margin-right:%?20?%}.margin-r25[data-v-06140693]{margin-right:%?25?%}.margin-r30[data-v-06140693]{margin-right:%?30?%}.margin-r40[data-v-06140693]{margin-right:%?40?%}.margin-r60[data-v-06140693]{margin-right:%?60?%}.font-18[data-v-06140693]{font-style:normal;font-size:%?18?%;font-family:Droid Sans Fallback}.font-20[data-v-06140693]{font-style:normal;font-size:%?20?%;font-family:Droid Sans Fallback}.font-22[data-v-06140693]{font-style:normal;font-size:%?22?%;font-family:Droid Sans Fallback}.font-24[data-v-06140693]{font-style:normal;font-size:%?24?%;font-family:Droid Sans Fallback}.font-26[data-v-06140693]{font-style:normal;font-size:%?26?%;font-family:Droid Sans Fallback}.font-28[data-v-06140693]{font-style:normal;font-size:%?28?%;font-family:Droid Sans Fallback}.font-30[data-v-06140693]{font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.font-32[data-v-06140693]{font-style:normal;font-size:%?32?%;font-family:Droid Sans Fallback}.font-34[data-v-06140693]{font-style:normal;font-size:%?34?%;font-family:Droid Sans Fallback}.font-36[data-v-06140693]{font-style:normal;font-size:%?36?%;font-family:Droid Sans Fallback}.font-38[data-v-06140693]{font-style:normal;font-size:%?38?%;font-family:Droid Sans Fallback}.font-40[data-v-06140693]{font-style:normal;font-size:%?40?%;font-family:Droid Sans Fallback}.font-46[data-v-06140693]{font-style:normal;font-size:%?46?%;font-family:Droid Sans Fallback}.font-50[data-v-06140693]{font-style:normal;font-size:%?50?%;font-family:Droid Sans Fallback}.font-60[data-v-06140693]{font-style:normal;font-size:%?60?%;font-family:Droid Sans Fallback}.font-80[data-v-06140693]{font-style:normal;font-size:%?80?%;font-family:Droid Sans Fallback}.text-left[data-v-06140693]{text-align:left}.text-center[data-v-06140693]{text-align:center}.text-right[data-v-06140693]{text-align:right}.color-white[data-v-06140693]{color:#fff}.color-red[data-v-06140693]{color:#dc0000}.font-weight-400[data-v-06140693]{font-weight:400}.font-weight-500[data-v-06140693]{font-weight:700}.spacing-20[data-v-06140693]{width:%?750?%;height:%?20?%;background-color:#f8f8f8}.radius-10[data-v-06140693]{border-radius:%?10?%}.radius-20[data-v-06140693]{border-radius:%?20?%}.radius-30[data-v-06140693]{border-radius:%?30?%}.radius-circle[data-v-06140693]{border-radius:50%}.radius-height[data-v-06140693]{border-radius:10000px}.vs-flex-item[data-v-06140693]{flex:1}.vs-space-between[data-v-06140693]{justify-content:space-between}.vs-space-around[data-v-06140693]{justify-content:space-around}.vs-space-center[data-v-06140693]{justify-content:center}.vs-space-end[data-v-06140693]{justify-content:flex-end}.vs-row[data-v-06140693]{flex-direction:row}.vs-column[data-v-06140693]{flex-direction:column}.vs-align-end[data-v-06140693]{align-items:flex-end}.vs-align-center[data-v-06140693]{align-items:center}.vs-align-start[data-v-06140693]{align-items:flex-start}.vs-item-hover[data-v-06140693]{background-color:rgba(0,0,0,.05)}.vs-btn-hover[data-v-06140693]{opacity:.8}.color-base[data-v-06140693]{color:#50a1ff}.bg-color-base[data-v-06140693]{background-color:#50a1ff}\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-06140693]{position:relative}.bg[data-v-06140693]{position:relative;width:%?750?%;height:%?400?%}.ts[data-v-06140693]{color:#ff2326;font-size:10px;margin-top:-15px;margin-bottom:10px;margin-left:10px}.tab[data-v-06140693]{position:absolute;top:%?250?%;left:%?20?%;right:%?20?%;height:%?150?%;padding:0 %?50?%;background-color:#fff;border-top-left-radius:%?20?%;border-top-right-radius:%?20?%}.tab-bg[data-v-06140693]{position:absolute;top:%?-200?%;right:%?-50?%;width:%?440?%;height:%?285?%}.line[data-v-06140693]{width:%?25?%;height:%?7?%}.login[data-v-06140693],\n.register[data-v-06140693]{padding:0 %?60?%}.input[data-v-06140693]{width:%?630?%;height:%?90?%;padding:0 %?30?%;background-color:rgba(80,100,235,.1);border-radius:8px}.input-icon[data-v-06140693]{width:%?38?%;height:%?38?%}.button[data-v-06140693]{width:%?630?%;height:%?90?%;margin-left:%?60?%;border-radius:18px}.separator[data-v-06140693]{height:%?2?%;margin:0 %?30?%;background-color:#f5f5f5}.other-items[data-v-06140693]{padding:0 %?200?%}.other-icon[data-v-06140693]{width:%?50?%;height:%?50?%}',""]),t.exports=a},c56f:function(t,a,n){"use strict";n.r(a);var e=n("d93b"),i=n("ddf9");for(var r in i)"default"!==r&&function(t){n.d(a,t,(function(){return i[t]}))}(r);n("43e1");var o,s=n("f0c5"),l=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"06140693",null,!1,e["a"],o);a["default"]=l.exports},d93b:function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return e}));var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"bg bg-color-base margin-b20"}),n("v-uni-view",{staticClass:"tab vs-row vs-align-center"},[n("v-uni-image",{staticClass:"tab-bg",attrs:{src:"/static/banner-icon.png",mode:""}}),n("v-uni-view",{staticClass:"vs-row vs-align-center"},[n("v-uni-view",{staticClass:"vs-column vs-align-center margin-r40",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cur=0}}},[n("v-uni-text",{staticClass:"font-50 margin-b20",class:[t.cur?"color-black-3":"color-base"]},[t._v("登录")]),t.cur?t._e():n("v-uni-view",{staticClass:"line bg-color-base"})],1),n("v-uni-view",{staticClass:"vs-column vs-align-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cur=1}}},[n("v-uni-text",{staticClass:"font-46 margin-b20",class:[t.cur?"color-base":"color-black-3"]},[t._v("注册")]),t.cur?n("v-uni-view",{staticClass:"line bg-color-base"}):t._e()],1)],1)],1),t.cur?t._e():n("v-uni-view",{staticClass:"login margin-b80"},[n("v-uni-view",{staticClass:"input vs-row vs-align-center margin-b40"},[n("v-uni-image",{staticClass:"input-icon margin-r20",attrs:{src:"/static/common/account.png",mode:"widthFix"}}),n("u--input",{attrs:{placeholder:"请输入您的账号或昵称",border:"none",clearable:!0,placeholderStyle:"color:#625d59;",maxlength:11},model:{value:t.loginForm.username,callback:function(a){t.$set(t.loginForm,"username",a)},expression:"loginForm.username"}})],1),n("v-uni-view",{staticClass:"input vs-row vs-align-center margin-b40"},[n("v-uni-image",{staticClass:"input-icon margin-r20",attrs:{src:"/static/common/pass.png",mode:"widthFix"}}),n("u--input",{attrs:{placeholder:"请输入您的登录密码",border:"none",clearable:!0,password:!0,placeholderStyle:"color:#625d59;",maxlength:18},model:{value:t.loginForm.password,callback:function(a){t.$set(t.loginForm,"password",a)},expression:"loginForm.password"}})],1)],1),t.cur?n("v-uni-view",{staticClass:"register margin-b80"},[n("v-uni-view",{staticClass:"input vs-row vs-align-center margin-b40"},[n("v-uni-image",{staticClass:"input-icon margin-r20",attrs:{src:"/static/common/account.png",mode:""}}),n("u--input",{attrs:{placeholder:"请输入您的昵称",border:"none",clearable:!0,placeholderStyle:"color:#625d59;",maxlength:11},model:{value:t.user.name,callback:function(a){t.$set(t.user,"name",a)},expression:"user.name"}})],1),n("v-uni-text",{staticClass:"ts"},[t._v("* 可任意混合")]),n("v-uni-view",{staticClass:"input vs-row vs-align-center margin-b40"},[n("v-uni-image",{staticClass:"input-icon margin-r20",attrs:{src:"/static/common/account.png",mode:""}}),n("u--input",{attrs:{placeholder:"请输入您的账号",border:"none",clearable:!0,placeholderStyle:"color:#625d59;",maxlength:11},model:{value:t.user.user,callback:function(a){t.$set(t.user,"user",a)},expression:"user.user"}})],1),n("v-uni-text",{staticClass:"ts"},[t._v("* 账号长度5~11位，不支持中文和特殊字符")]),n("v-uni-view",{staticClass:"input vs-row vs-align-center margin-b40"},[n("v-uni-image",{staticClass:"input-icon margin-r20",attrs:{src:"/static/common/pass.png",mode:""}}),n("u--input",{attrs:{placeholder:"请输入您的登录密码",border:"none",clearable:!0,password:!0,placeholderStyle:"color:#625d59;",maxlength:18},model:{value:t.user.password,callback:function(a){t.$set(t.user,"password",a)},expression:"user.password"}})],1),n("v-uni-text",{staticClass:"ts"},[t._v("* 密码长度最少6位,最长18位，不支持中文以及.-*_以外特殊字符")]),n("v-uni-view",{staticClass:"input vs-row vs-align-center margin-b40"},[n("v-uni-image",{staticClass:"input-icon margin-r20",attrs:{src:"/static/common/pass.png",mode:""}}),n("u--input",{attrs:{placeholder:"请再次输入密码",border:"none",clearable:!0,password:!0,placeholderStyle:"color:#625d59;",maxlength:18},model:{value:t.user.password1,callback:function(a){t.$set(t.user,"password1",a)},expression:"user.password1"}})],1),n("v-uni-text",{staticClass:"ts"},[t._v("* 重复密码")])],1):t._e(),n("v-uni-view",{staticClass:"button bg-color-base vs-row vs-align-center vs-space-center margin-b20",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.userLogin()}}},[n("v-uni-text",{staticClass:"color-white font-34"},[t._v("立即"+t._s(t.cur?"注册":"登录"))])],1),n("v-uni-view",{staticClass:"vs-row vs-align-center vs-space-center margin-b100"},[n("v-uni-text",{staticClass:"color-base font-28",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.wjmm()}}},[t._v("忘记密码？")])],1)],1)},r=[]},ddf9:function(t,a,n){"use strict";n.r(a);var e=n("4412"),i=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(a,t,(function(){return e[t]}))}(r);a["default"]=i.a},f422:function(t,a,n){var e=n("59b3");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("3007ae87",e,!0,{sourceMap:!1,shadowMode:!1})}}]);