webpackJsonp([23],{EVsu:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".addWechat[data-v-1ffc874e]{width:100%;height:100%;overflow:auto}.addWechat p[data-v-1ffc874e]{height:3.6rem;font-size:1.2rem;line-height:3.6rem;padding-left:1rem;padding-right:1rem;background:#ffebcc;color:#d17d00}.addWechat .cont[data-v-1ffc874e]{text-align:center}.addWechat .cont h3[data-v-1ffc874e]{margin-top:1.2rem;margin-bottom:2rem;font-size:1.4rem;line-height:2.2rem;color:#08090a}.addWechat .cont h2[data-v-1ffc874e]{margin-top:2rem;font-size:1.6rem;line-height:2.2rem;color:#08090a}.addWechat .cont img[data-v-1ffc874e]{display:inline-block;width:13.4rem;height:13.4rem}.addWechat .cont strong[data-v-1ffc874e]{line-height:3.4rem;font-size:2rem;margin-right:2rem;font-weight:700;color:#08090a;vertical-align:middle}.addWechat .cont span[data-v-1ffc874e]{display:inline-block;vertical-align:middle;border-radius:2px;width:4.8rem;height:3.3rem;line-height:3.3rem;text-align:center;font-size:1.4rem}.addWechat .footer[data-v-1ffc874e]{margin-top:4rem;padding:2rem 1.6rem}","",{version:3,sources:["D:/app/Buy-two/src/components/userCenter/addWechat.vue"],names:[],mappings:"AACA,4BACE,WAAY,AACZ,YAAa,AACb,aAAe,CAChB,AACD,8BACE,cAAe,AACf,iBAAkB,AAClB,mBAAoB,AACpB,kBAAmB,AACnB,mBAAoB,AACpB,mBAAoB,AACpB,aAAe,CAChB,AACD,kCACE,iBAAmB,CACpB,AACD,qCACE,kBAAmB,AACnB,mBAAoB,AACpB,iBAAkB,AAClB,mBAAoB,AACpB,aAAe,CAChB,AACD,qCACE,gBAAiB,AACjB,iBAAkB,AAClB,mBAAoB,AACpB,aAAe,CAChB,AACD,sCACE,qBAAsB,AACtB,cAAe,AACf,cAAgB,CACjB,AACD,yCACE,mBAAoB,AACpB,eAAgB,AAChB,kBAAmB,AACnB,gBAAkB,AAClB,cAAe,AACf,qBAAuB,CACxB,AACD,uCACE,qBAAsB,AACtB,sBAAuB,AACvB,kBAAmB,AACnB,aAAc,AACd,cAAe,AACf,mBAAoB,AACpB,kBAAmB,AACnB,gBAAkB,CACnB,AACD,oCACE,gBAAiB,AACjB,mBAAqB,CACtB",file:"addWechat.vue",sourcesContent:["\n.addWechat[data-v-1ffc874e] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n.addWechat p[data-v-1ffc874e] {\n  height: 3.6rem;\n  font-size: 1.2rem;\n  line-height: 3.6rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  background: #ffebcc;\n  color: #d17d00;\n}\n.addWechat .cont[data-v-1ffc874e] {\n  text-align: center;\n}\n.addWechat .cont h3[data-v-1ffc874e] {\n  margin-top: 1.2rem;\n  margin-bottom: 2rem;\n  font-size: 1.4rem;\n  line-height: 2.2rem;\n  color: #08090a;\n}\n.addWechat .cont h2[data-v-1ffc874e] {\n  margin-top: 2rem;\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  color: #08090a;\n}\n.addWechat .cont img[data-v-1ffc874e] {\n  display: inline-block;\n  width: 13.4rem;\n  height: 13.4rem;\n}\n.addWechat .cont strong[data-v-1ffc874e] {\n  line-height: 3.4rem;\n  font-size: 2rem;\n  margin-right: 2rem;\n  font-weight: bold;\n  color: #08090a;\n  vertical-align: middle;\n}\n.addWechat .cont span[data-v-1ffc874e] {\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 2px;\n  width: 4.8rem;\n  height: 3.3rem;\n  line-height: 3.3rem;\n  text-align: center;\n  font-size: 1.4rem;\n}\n.addWechat .footer[data-v-1ffc874e] {\n  margin-top: 4rem;\n  padding: 2rem 1.6rem;\n}"],sourceRoot:""}])},"UcK+":function(e,t,a){"use strict";function n(e){a("YPQs")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("Dd8w"),A=a.n(o),i=a("SJI6"),c=a("Au9i"),r=a("V33R"),d=a.n(r),s={name:"addWechat",data:function(){return{weChatObj:{}}},computed:A()({},Object(i.mapGetters)(["userInfo"])),methods:{getWechat:function(){var e=this;this.$ajax.post("/api/platform/wechat/getByOperatorWechatId",{operatorWechatId:this.userInfo.operateWechatId||this.userInfo.wechatNum}).then(function(t){"200"===t.data.code?e.weChatObj=t.data.data:Object(c.Toast)({message:t.data.message,position:"bottom"})}).catch(function(e){console.log(e)})},doCopy:function(){new d.a(".copy").on("success",function(e){Object(c.Toast)({message:"复制成功",position:"bottom"})})},toCenter:function(){var e=this;c.MessageBox.confirm("确认已经复制了备注并提交了微信添加申请?").then(function(t){e.$router.push({name:"submit",query:{addWechat:1}})}).catch(function(e){console.log(e)})}},mounted:function(){if(this.$route.query.weChatObj){var e=JSON.parse(sessionStorage.getItem("bindJdAccountObj"))||JSON.parse(sessionStorage.getItem("bindTbAccountObj"));this.weChatObj=e,this.weChatObj.memo=e.name,this.weChatObj.wechatPicId=e.wechatUrl,this.weChatObj.wechatNum=e.wechatId}else this.getWechat()}},h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addWechat"},[a("p",{staticClass:"common"},[e._v("备注：平台确认已添加您的微信号后您才可以接单")]),e._v(" "),a("ul",{staticClass:"cont"},[e._m(0),e._v(" "),a("li",[a("strong",[e._v(e._s(e.weChatObj.memo||"暂无备注"))]),e._v(" "),a("span",{staticClass:"border-1px copy",attrs:{"data-clipboard-text":e.weChatObj.memo},on:{click:e.doCopy}},[e._v("复制")])]),e._v(" "),a("li",[a("img",{attrs:{src:e.weChatObj.wechatPicId,alt:"erCode"}})]),e._v(" "),a("li",[a("h2",[e._v("微信号: "+e._s(e.weChatObj.wechatNum))]),e._v(" "),e._m(1)])]),e._v(" "),a("div",{staticClass:"footer"},[a("span",{staticClass:"btn",on:{click:e.toCenter}},[e._v("我已确认添加了微信")])])])},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("h3",[e._v("请您复制如下信息添加备注")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[e._v("扫码加好友或者\n        "),a("br"),e._v(" 复制添加该微信号为好友\n      ")])}],C={render:h,staticRenderFns:m},f=C,l=a("VU/8"),B=n,g=l(s,f,!1,B,"data-v-1ffc874e",null);t.default=g.exports},YPQs:function(e,t,a){var n=a("EVsu");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("39c8d37b",n,!0)}});
//# sourceMappingURL=23.fcd2fd2473f33a0f5932.js.map