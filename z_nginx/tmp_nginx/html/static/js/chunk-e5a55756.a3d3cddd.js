(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5a55756"],{"79f0":function(e,t,r){e.exports=r.p+"static/img/beian.d0289dc0.png"},"9bf0":function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"b",(function(){return a}));var s=r("b775");function n(e){return Object(s["a"])({url:"/public/website/record",method:"get",params:e})}function o(e){return Object(s["a"])({url:"/website/setting",method:"get",params:e})}function i(e){return Object(s["a"])({url:"/website/setting/update",method:"put",data:e})}function a(e){return Object(s["a"])({url:"/website/heartwings",method:"get",params:e})}t["a"]={sync:function(e){return Object(s["a"])({url:"/user/setting/sync",method:"get",params:e})},isSync:function(e){return Object(s["a"])({url:"/user/setting/isSync",method:"get",params:e})},updateNetdiskName:function(e){return Object(s["a"])({url:"/user/setting/update_netdisk_name",method:"put",params:e})},getWebp:function(e){return Object(s["a"])({url:"/user/setting/get/webp",method:"get",params:e})},disabledWebp:function(e){return Object(s["a"])({url:"/user/setting/disabled/webp",method:"put",params:e})},getAccessTokenList:function(e){return Object(s["a"])({url:"/user/setting/accessTokenList",method:"get",params:e})},generateAccessToken:function(e){return Object(s["a"])({url:"/user/setting/generateAccessToken",method:"put",params:e})},deleteAccessToken:function(e){return Object(s["a"])({url:"/user/setting/deleteAccessToken",method:"delete",params:e})},resetMenuAndRole:function(){return Object(s["a"])({url:"/user/setting/resetMenuAndRole",method:"put"})}}},"9ed6":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-container"},[t("div",{attrs:{id:"stars"}}),e._v(" "),t("div",{attrs:{id:"stars2"}}),e._v(" "),t("div",{attrs:{id:"stars3"}}),e._v(" "),t("el-card",{staticClass:"box-card"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[e.initialize?e._e():t("h3",[t("div",{staticClass:"title"},[t("Logo",{attrs:{width:"65"},model:{value:e.webstieRecord.netdiskLogo,callback:function(t){e.$set(e.webstieRecord,"netdiskLogo",t)},expression:"webstieRecord.netdiskLogo"}}),e._v(" "),t("div",{staticClass:"jmal-cloud-name"},[t("div",[e._v(e._s(e.webstieRecord.netdiskName?e.webstieRecord.netdiskName:"DSCloud"))])])],1)]),e._v(" "),e.initialize?t("h3",{staticClass:"title"},[e._v("创建管理员")]):e._e()]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),t("el-input",{ref:"username",attrs:{placeholder:"用户名",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin.apply(null,arguments)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),e.initialize?e._e():t("el-form-item",{staticClass:"remember"},[t("el-checkbox",{attrs:{label:"记住我"},model:{value:e.loginForm.rememberMe,callback:function(t){e.$set(e.loginForm,"rememberMe",t)},expression:"loginForm.rememberMe"}})],1),e._v(" "),e.initialize?t("el-form-item",{attrs:{prop:"confirmPassword"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"确认密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin.apply(null,arguments)}},model:{value:e.loginForm.confirmPassword,callback:function(t){e.$set(e.loginForm,"confirmPassword",t)},expression:"loginForm.confirmPassword"}}),e._v(" "),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1):e._e(),e._v(" "),t("el-button",{staticStyle:{width:"100%",margin:"30px 0"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin.apply(null,arguments)}}},[e._v(e._s(e.initialize?"创建":"登录"))])],1)],1),e._v(" "),t("footer",{staticClass:"clearfix",attrs:{id:"footer"}},[t("br"),t("br"),t("br"),e._v(" "),t("div",{staticClass:"copyright"},[t("p",[t("span",[e._v(e._s(e.webstieRecord.copyright))])]),e._v(" "),t("p",[t("a",{attrs:{target:"_blank",href:"https://beian.miit.gov.cn"}},[e._v(e._s(e.webstieRecord.recordPermissionNum))]),e._v(" "),t("a",{attrs:{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode="+e.webstieRecord.networkRecordNumber}},[e.webstieRecord.networkRecordNumberStr?t("img",{attrs:{src:r("79f0")}}):e._e(),e._v(e._s(e.webstieRecord.networkRecordNumberStr))])])]),e._v(" "),t("br")])],1)},n=[],o=r("9bf0"),i=r("c24f"),a=r("5f87"),c=r("1383"),d=(r("9dce"),{name:"Login",components:{Logo:c["a"]},data:function(){var e=this,t=function(t,r,s){e.validUsername(r)?s():s(new Error("请输入正确的用户名"))},s=function(e,t,r){t.length<6||r()},n=function(t,r,s){r.length<6||(e.loginForm.password!==r?s(new Error("密码不一致")):s())};return{beianUrl:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=",webstieRecord:{copyright:"Copyright © 2013 technical.help.darcy.zhang@Outlook.com",recordPermissionNum:"",netdiskName:"dscloud",netdiskLogo:""},loginForm:{username:"",password:"",rememberMe:!1,confirmPassword:""},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:s}],confirmPassword:[{required:!0,trigger:"blur",validator:n}]},loading:!1,passwordType:"password",redirect:void 0,initialize:!1,backgroundImg:{background:"url("+r("a598")+")",width:"100%",height:"100%",position:"absolute"}}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect,e.query.path&&(this.redirect+="&path=".concat(e.query.path))},immediate:!0}},mounted:function(){var e=this;Object(i["d"])().then((function(t){t.count<1&&(e.initialize=!0)}));var t=Object(a["b"])();t&&(this.loginForm.username=t,this.loginForm.rememberMe=!0),Object(o["d"])().then((function(t){e.webstieRecord=t.data,(e.webstieRecord.netdiskName||e.webstieRecord.netdiskLogo)&&e.$store.dispatch("user/setLogo",{netdiskName:e.webstieRecord.netdiskName,netdiskLogo:e.webstieRecord.netdiskLogo})}))},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return!1;if(e.initialize){var r=new FormData;r.append("username",e.loginForm.username),r.append("password",e.loginForm.password),Object(i["e"])(r).then((function(){e.initialize=!1,e.$message.success("创建成功")}))}else e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$store.dispatch("user/setMenuList").then((function(t){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1}))})).catch((function(){e.loading=!1}))}))},validUsername:function(){return!0}}}),l=d,u=(r("e0e4"),r("b878"),r("2877")),p=Object(u["a"])(l,s,n,!1,null,"cfde679c",null);t["default"]=p.exports},a598:function(e,t,r){e.exports=r.p+"static/img/login-bg.72db061a.png"},b878:function(e,t,r){"use strict";r("ec04")},e0e4:function(e,t,r){"use strict";r("fd2c")},ec04:function(e,t,r){},fd2c:function(e,t,r){}}]);