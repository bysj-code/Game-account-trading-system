(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/maijiapingjia/add-or-update"],{"051c":function(e,n,a){"use strict";a.r(n);var i=a("fb04"),r=a("9ce2");for(var t in r)"default"!==t&&function(e){a.d(n,e,(function(){return r[e]}))}(t);a("7ab0");var o,u=a("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"605876e8",null,!1,i["a"],o);n["default"]=s.exports},"221f":function(e,n,a){},"517d":function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(a("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function t(e,n,a,i,r,t,o){try{var u=e[t](o),s=u.value}catch(c){return void a(c)}u.done?n(s):Promise.resolve(s).then(i,r)}function o(e){return function(){var n=this,a=arguments;return new Promise((function(i,r){var o=e.apply(n,a);function u(e){t(o,i,r,u,s,"next",e)}function s(e){t(o,i,r,u,s,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("138c"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{cross:"",ruleForm:{pingjiabianhao:this.getUUID(),maijiazhanghao:"",maijiaxingming:"",pingfen:"",pingjia:"",pingjiashijian:"",zhanghao:"",xingming:"",userid:""},maijiazhanghaoOptions:[],maijiazhanghaoIndex:0,pingfenOptions:[],pingfenIndex:0,user:{},ro:{pingjiabianhao:!1,maijiazhanghao:!1,maijiaxingming:!1,pingfen:!1,pingjia:!1,pingjiashijian:!1,zhanghao:!1,xingming:!1,userid:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return o(i.default.mark((function r(){var t,o,u,s;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a.ruleForm.pingjiashijian=a.$utils.getCurDateTime(),t=e.getStorageSync("nowTable"),r.next=4,a.$api.session(t);case 4:return o=r.sent,a.user=o.data,a.ruleForm.zhanghao=a.user.zhanghao,a.ro.zhanghao=!0,a.ruleForm.xingming=a.user.xingming,a.ro.xingming=!0,r.next=12,a.$api.option("maijia","maijiazhanghao",{});case 12:if(o=r.sent,a.maijiazhanghaoOptions=o.data,a.pingfenOptions="1,2,3,4,5".split(","),a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=23;break}return a.ruleForm.id=n.id,r.next=21,a.$api.info("maijiapingjia",a.ruleForm.id);case 21:o=r.sent,a.ruleForm=o.data;case 23:if(a.cross=n.cross,!n.cross){r.next=67;break}u=e.getStorageSync("crossObj"),r.t0=i.default.keys(u);case 27:if((r.t1=r.t0()).done){r.next=67;break}if(s=r.t1.value,"pingjiabianhao"!=s){r.next=33;break}return a.ruleForm.pingjiabianhao=u[s],a.ro.pingjiabianhao=!0,r.abrupt("continue",27);case 33:if("maijiazhanghao"!=s){r.next=37;break}return a.ruleForm.maijiazhanghao=u[s],a.ro.maijiazhanghao=!0,r.abrupt("continue",27);case 37:if("maijiaxingming"!=s){r.next=41;break}return a.ruleForm.maijiaxingming=u[s],a.ro.maijiaxingming=!0,r.abrupt("continue",27);case 41:if("pingfen"!=s){r.next=45;break}return a.ruleForm.pingfen=u[s],a.ro.pingfen=!0,r.abrupt("continue",27);case 45:if("pingjia"!=s){r.next=49;break}return a.ruleForm.pingjia=u[s],a.ro.pingjia=!0,r.abrupt("continue",27);case 49:if("pingjiashijian"!=s){r.next=53;break}return a.ruleForm.pingjiashijian=u[s],a.ro.pingjiashijian=!0,r.abrupt("continue",27);case 53:if("zhanghao"!=s){r.next=57;break}return a.ruleForm.zhanghao=u[s],a.ro.zhanghao=!0,r.abrupt("continue",27);case 57:if("xingming"!=s){r.next=61;break}return a.ruleForm.xingming=u[s],a.ro.xingming=!0,r.abrupt("continue",27);case 61:if("userid"!=s){r.next=65;break}return a.ruleForm.userid=u[s],a.ro.userid=!0,r.abrupt("continue",27);case 65:r.next=27;break;case 67:a.styleChange();case 68:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},maijiazhanghaoChange:function(e){var n=this;return o(i.default.mark((function a(){var r;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.maijiazhanghaoIndex=e.target.value,n.ruleForm.maijiazhanghao=n.maijiazhanghaoOptions[n.maijiazhanghaoIndex],a.next=4,n.$api.follow("maijia","maijiazhanghao",{columnValue:n.ruleForm.maijiazhanghao});case 4:r=a.sent,r.data.maijiaxingming&&(n.ruleForm.maijiaxingming=r.data.maijiaxingming);case 6:case"end":return a.stop()}}),a)})))()},pingjiashijianConfirm:function(e){console.log(e),this.ruleForm.pingjiashijian=e.result,this.$forceUpdate()},pingfenChange:function(e){this.pingfenIndex=e.target.value,this.ruleForm.pingfen=this.pingfenOptions[this.pingfenIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(i.default.mark((function a(){var r,t,o,u,s,c,g,m,f,l;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.ruleForm.pingjiabianhao){a.next=3;break}return n.$utils.msg("评价编号不能为空"),a.abrupt("return");case 3:if(n.ruleForm.pingfen){a.next=6;break}return n.$utils.msg("评分不能为空"),a.abrupt("return");case 6:if(!n.cross){a.next=22;break}if(u=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==u){a.next=22;break}if(c=e.getStorageSync("crossObj"),u.startsWith("[")){a.next=18;break}for(g in c)g==u&&(c[g]=s);return m=e.getStorageSync("crossTable"),a.next=16,n.$api.update("".concat(m),c);case 16:a.next=22;break;case 18:r=Number(e.getStorageSync("userid")),t=c["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 22:if(!t||!r){a.next=44;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=t,f={page:1,limit:10,crossuserid:r,crossrefid:t},a.next=28,n.$api.list("maijiapingjia",f);case 28:if(l=a.sent,!(l.data.total>=o)){a.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 34:if(!n.ruleForm.id){a.next=39;break}return a.next=37,n.$api.update("maijiapingjia",n.ruleForm);case 37:a.next=41;break;case 39:return a.next=41,n.$api.add("maijiapingjia",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:a.next=52;break;case 44:if(!n.ruleForm.id){a.next=49;break}return a.next=47,n.$api.update("maijiapingjia",n.ruleForm);case 47:a.next=51;break;case 49:return a.next=51,n.$api.add("maijiapingjia",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(a,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,a("543d")["default"])},"7ab0":function(e,n,a){"use strict";var i=a("221f"),r=a.n(i);r.a},"9ce2":function(e,n,a){"use strict";a.r(n);var i=a("517d"),r=a.n(i);for(var t in i)"default"!==t&&function(e){a.d(n,e,(function(){return i[e]}))}(t);n["default"]=r.a},c802:function(e,n,a){"use strict";(function(e){a("1078");i(a("66fd"));var n=i(a("051c"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},fb04:function(e,n,a){"use strict";a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return t})),a.d(n,"a",(function(){return i}));var i={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"138c"))}},r=function(){var e=this,n=e.$createElement;e._self._c},t=[]}},[["c802","common/runtime","common/vendor"]]]);