webpackJsonp([0],{0:function(t,i){},"4cRq":function(t,i,s){"use strict";var e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};i.a=e},"A/GH":function(t,i){},M93x:function(t,i,s){"use strict";var e=s("xJD8"),a=s.n(e),n=s("4cRq"),r=function(t){s("jOIC")},o=s("VU/8")(a.a,n.a,!1,r,null,null);i.default=o.exports},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("7+uW"),a=s("M93x"),n=s("/ocq"),r=s("nnEF"),o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticStyle:{width:"100%",height:"100%"}},[t._m(0),t._v(" "),s("div",{staticStyle:{width:"100%",height:"240px"}}),t._v(" "),s("form",{staticClass:"layui-form",attrs:{action:""}},[s("input",{staticClass:"layui-input",staticStyle:{width:"60%","border-radius":"5px",margin:"0 auto",background:"url(/lib/layui/images/tubiao/lo.png) 5px center no-repeat","text-indent":"2em"},attrs:{type:"text",name:"phone","lay-verify":"title",placeholder:"请输入手机号"}}),t._v(" "),s("div",{staticStyle:{width:"100%",height:"15px"}}),t._v(" "),s("input",{staticClass:"layui-input",staticStyle:{width:"60%","border-radius":"5px",margin:"0 auto",background:"url(/lib/layui/images/tubiao/mi.png) 5px center no-repeat","text-indent":"2em"},attrs:{type:"text",name:"pass","lay-verify":"title",placeholder:"请输入密码"}}),t._v(" "),s("div",{staticStyle:{width:"100%",height:"15px"}}),t._v(" "),s("div",{staticClass:"layui-form-item",staticStyle:{"text-align":"center"}},[s("span",{staticClass:"layui-btn",staticStyle:{margin:"0 auto"},attrs:{"lay-submit":"","lay-filter":"demo1"},on:{click:function(i){t.dologin()}}},[t._v("登  陆")])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("header",[this._v("打卡器登录"),i("span",{staticClass:"icon-mobile"})])}]},l=function(t){s("p9cV")},c=s("VU/8")(r.a,o,!1,l,null,null).exports,d={data:function(){return{aall:[],workercarda:[],newid:"",imgur:""}},mounted:function(){this.maninfo(),this.getgongdan()},methods:{maninfo:function(){var t={};t.url="index.php/person/PerInfo/get_worker",t.data={};var i=getFaceInfo(t);this.aall=i.worker,this.newid=i.worker.worker_id,""==i.worker.img_url?this.imgur="/lib/img/public/cropmode/rentu.jpg":this.imgur=i.worker.img_url},getgongdan:function(){var t={},i={};t.worker_id=this.newid,i.url="index.php/Worker/Workercard/workercarda",i.data=t;var s=getFaceInfo(i);1==s.status&&(this.workercarda=s.data,console.log(this.workercarda))}}},h={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticStyle:{width:"100%",height:"100%"}},[t._m(0),t._v(" "),s("div",{staticStyle:{width:"90%","padding-top":"70px",margin:"0 5%"}},[s("div",{staticClass:"divleft"},[s("img",{staticStyle:{width:"80px",height:"80px","border-top":"1px solid #ccc","border-radius":"40px","box-shadow":"0px 1px 3px #e2e2e2"},attrs:{src:t.imgur}})]),t._v(" "),s("div",{staticClass:"divright"},[s("p",[t._v("姓名:"),s("span",[t._v(t._s(t.aall.worker_name))])]),t._v(" "),s("p",[t._v("部门:"),s("span",[t._v(t._s(t.aall.group_name))])]),t._v(" "),s("p",[t._v("职务:"),s("span",[t._v(t._s(t.aall.role_name))])])])]),t._v(" "),s("div",{staticStyle:{clear:"both"}}),t._v(" "),s("div",{staticStyle:{width:"100%",padding:"10px 0px","text-align":"center","font-size":"20px","line-height":"50px"}}),t._v(" "),s("div",{staticStyle:{width:"100%",height:"auto"}},[s("ul",{staticClass:"abcde"},t._l(t.workercarda,function(i){return s("li",{staticClass:"centern"},[s("p",[t._v("姓名："+t._s(i.worker_name))]),t._v(" "),s("p",[t._v("工序："+t._s(i.skill_name))]),t._v(" "),s("p",[t._v("工作区域："+t._s(i.area_name))]),t._v(" "),s("p",[t._v("工作量："+t._s(i.num))]),t._v(" "),s("p",[t._v("工作时间："+t._s(i.work_date)+" "+t._s(i.require_time_1)+" "+t._s(i.require_time_2))]),t._v(" "),s("p",[t._v("开始时间："+t._s(i.s_time))]),t._v(" "),s("p",[t._v("结束时间："+t._s(i.e_time))])])})),t._v(" "),s("p",{staticStyle:{"line-height":"50px","font-size":"16px","text-align":"center"}},[t._v("请扫码进行相关操作")]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("header",[this._v("工人信息"),i("span",{staticClass:"icon-mobile"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",{staticStyle:{"line-height":"50px","font-size":"16px","text-align":"center"}},[i("a",{attrs:{href:"/#/worker/ulist"}},[this._v("工单列表-示例")])])}]},v=s("VU/8")(d,h,!1,function(t){s("c5rH")},null,null).exports,_={data:function(){return{newchangea:1,aball:[],type:0,work_date:"",area_id:"67",aalla:[]}},mounted:function(){this.getabc(),this.getnew(),this.maninfoall()},methods:{getabc:function(){var t={},i={};t.url="index.php/product/WorkerManage/gd_check_list_daka",t.data=i,i.area_id=this.area_id,i.work_date=this.work_date,i.type=this.type;var s=getFaceInfo(t);this.aball=s.data},maninfoall:function(){var t=localStorage.getItem("mf_token"),i=localStorage.getItem("mf_account"),s={},e={};s.newphone=i,s.atoken=t,e.url="index.php/person/PerInfo/get_worker",e.data=s;var a=getFaceInfo(e);this.aalla=a.worker,this.newid=a.worker.worker_id},do3:function(){this.type=0,this.getabc()},do0:function(){this.type=1,this.getabc()},do1:function(){this.type=2,this.getabc()},dodaka:function(t){var i={},s={};i.url="index.php/product/WorkerManage/gd_check_list_daka_go",s.gd_id=t,i.data=s;var e=getFaceInfo(i);e.status,layer.msg(e.msg)},overdaka:function(t){var i={},s={};i.url="index.php/product/WorkerManage/gd_check_list_daka_over",s.gd_id=t,i.data=s;var e=getFaceInfo(i);e.status,layer.msg(e.msg)},getnew:function(){var t=this;layui.use(["form","layedit","laydate"],function(){layui.form,layui.layer,layui.layedit;layui.laydate.render({elem:"#date",done:function(i,s,e){t.work_date=i,t.getabc()}})})}}},p={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticStyle:{width:"100%",height:"100%"}},[t._m(0),t._v(" "),s("div",{staticStyle:{width:"90%","padding-top":"70px",margin:"0 5%"}},[s("div",{staticClass:"layui-row",staticStyle:{"text-align":"center"}},[s("div",{staticClass:"layui-col-xs4"},[s("div",{staticClass:"grid-demo grid-demo-bg1",staticStyle:{cursor:"pointer",height:"40px",width:"70%","line-height":"40px",border:"1px solid #e3e3e3",margin:"0 auto","border-radius":"5px"},style:{background:0==t.type?"#e2e2e2":""},on:{click:t.do3}},[t._v("\n              进行中\n            ")])]),t._v(" "),s("div",{staticClass:"layui-col-xs4",on:{click:t.do0}},[s("div",{staticClass:"grid-demo cursor",staticStyle:{cursor:"pointer",height:"40px",width:"70%","line-height":"40px",border:"1px solid #e3e3e3",margin:"0 auto","border-radius":"5px"},style:{background:1==t.type?"#e2e2e2":""}},[t._v("\n              待核查\n            ")])]),t._v(" "),s("div",{staticClass:"layui-col-xs4"},[s("div",{staticClass:"grid-demo grid-demo-bg1",staticStyle:{cursor:"pointer",height:"40px",width:"70%","line-height":"40px",border:"1px solid #e3e3e3",margin:"0 auto","border-radius":"5px"},style:{background:2==t.type?"#e2e2e2":""},on:{click:t.do1}},[t._v("\n              已完成\n            ")])])]),t._v(" "),s("div",{staticStyle:{height:"30px"}}),t._v(" "),s("form",{staticClass:"layui-form",attrs:{action:""}},[s("input",{staticClass:"layui-input",staticStyle:{width:"90%",height:"40px",border:"1px solid #e3e3e3","border-radius":"5px",margin:"0 5%"},attrs:{type:"text",name:"date",id:"date","lay-verify":"date",placeholder:"日期搜索"},on:{change:function(i){t.changeCount()}}})])]),t._v(" "),s("div",{staticStyle:{width:"90%","padding-top":"20px",margin:"0 5%"}},[s("div",{staticClass:"layui-row",staticStyle:{"text-align":"center"}},[s("div",{staticClass:"layui-col-xs4"},[s("div",{staticClass:"grid-demo grid-demo-bg1",staticStyle:{height:"40px",overflow:"hidden",width:"70%","line-height":"40px",margin:"0 auto"}},[t._v("姓名："),s("span",[t._v(t._s(t.aalla.worker_name))])])]),t._v(" "),s("div",{staticClass:"layui-col-xs4"},[s("div",{staticClass:"grid-demo",staticStyle:{height:"40px",width:"70%",overflow:"hidden","line-height":"40px",margin:"0 auto"}},[t._v("部门："),s("span",[t._v(t._s(t.aalla.group_name))])])]),t._v(" "),s("div",{staticClass:"layui-col-xs4"},[s("div",{staticClass:"grid-demo grid-demo-bg1",staticStyle:{height:"40px",overflow:"hidden",width:"70%","line-height":"40px",margin:"0 auto"}},[t._v("职务："),s("span",[t._v(t._s(t.aalla.role_name))])])])])]),t._v(" "),s("div",{staticStyle:{width:"100%",height:"auto","margin-top":"12px"}},[s("ul",{staticClass:"abcde"},t._l(t.aball,function(i){return s("li",{staticClass:"centern"},[s("p",[t._v("姓名："+t._s(i.worker_name))]),t._v(" "),s("p",[t._v("工序："+t._s(i.skill_name))]),t._v(" "),s("p",[t._v("工作区域："+t._s(i.area_name))]),t._v(" "),s("p",[t._v("工作量："+t._s(i.num))]),t._v(" "),s("p",[t._v("工作时间："+t._s(i.work_date)+" "+t._s(i.require_time_1)+" "+t._s(i.require_time_2))]),t._v(" "),s("p",[t._v("开始时间："+t._s(i.s_time))]),t._v(" "),s("p",[t._v("结束时间："+t._s(i.e_time))]),t._v(" "),0==i.status?s("div",{staticClass:"ben",on:{click:function(s){t.dodaka(i.gd_id)}}},[t._v("  \n                  开始打卡 \n                ")]):1==i.status?s("div",{staticClass:"ben",on:{click:function(s){t.overdaka(i.gd_id)}}},[t._v("  \n                  结束打卡 \n                ")]):t._e()])}))])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("header",[this._v("工人工单列表"),i("span",{staticClass:"icon-mobile"})])}]},u=s("VU/8")(_,p,!1,function(t){s("A/GH")},null,null).exports,g={data:function(){return{alldata:[]}},mounted:function(){this.getgongdan()},methods:{getgongdan:function(){var t={};t.url="index.php/workerwages/workerwages/workerwages_list",t.data={};var i=getFaceInfo(t);console.log(i),this.alldata=i.data}}},m={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticStyle:{width:"100%",height:"100%","padding-bottom":"90px"}},[s("div",{staticClass:"header"},[s("a",{staticClass:"headerspan",staticStyle:{width:"30%",display:"inline-block","text-align":"left",background:"url(/lib/img/public/cropmode/leftjiantou.png) 16px center no-repeat"}},[t._v("  ")]),s("span",{staticClass:"headerspan",staticStyle:{"font-size":"17px"}},[t._v("工人工资")]),s("span",{staticClass:"headerspan",staticStyle:{"text-indent":"3em","font-size":"15px"}},[s("A",{attrs:{href:"#/worker/query"}},[t._v("搜索")])],1)]),t._v(" "),s("div",{staticStyle:{height:"70px",width:"100%"}}),t._v(" "),s("div",{staticClass:"gundong",staticStyle:{width:"100%",height:"100%","overflow-y":"scroll"}},[s("div",{staticClass:"wages"},[s("ul",[t._m(0),t._v(" "),t._l(t.alldata,function(i){return s("li",[s("a",{attrs:{href:"#/worker/workerdetails"}},[s("p",{staticClass:"tubiaop"},[t._v("姓名："),s("span",[t._v(t._s(i.worker_name))])]),t._v(" "),s("p",[t._v("结算工单数："),s("span",[t._v(t._s(i.count)+"单")])]),t._v(" "),t._m(1,!0)])])})],2),t._v(" "),s("div",{staticStyle:{clear:"both"}})])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("a",{attrs:{href:"#/worker/workerdetails"}},[i("p",{staticClass:"tubiaop"},[this._v("姓名："),i("span",[this._v("样板数据")])]),this._v(" "),i("p",[this._v("结算工单数："),i("span",[this._v("2单")])]),this._v(" "),i("p",[this._v("结算金额："),i("span",[this._v("55.6元")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("结算金额："),i("span",{staticStyle:{color:"red"}},[this._v("55.6元")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"bottom"},[i("div",{staticClass:"bottodiv"},[i("span",{staticClass:"bottodivleft"},[this._v("今日结算工资总额：76.2元")]),this._v(" "),i("span",{staticClass:"bottodivright"},[this._v("2018-04-16")])]),this._v(" "),i("div",{staticClass:"bottodivtwo"},[i("span",{staticClass:"bottodivtwoleft"},[i("a",{attrs:{href:"#/worker/wages"}},[this._v("工人工资")])]),this._v(" "),i("span",{staticClass:"bottodivtworight"},[i("a",{attrs:{href:"#/worker/set"}},[this._v("工资设置")])])])])}]},f=s("VU/8")(g,m,!1,function(t){s("TQgD")},null,null).exports,b={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"100%",height:"100%","padding-bottom":"50px"}},[this._m(0),this._v(" "),i("div",{staticStyle:{height:"70px",width:"100%"}}),this._v(" "),i("div",{staticStyle:{width:"100%",height:"100%"}},[i("Div",{staticClass:"details"},[i("ul",[i("li",[i("p",{staticClass:"tubiaopa"},[this._v("姓名："),i("span",[this._v("刘苗苗")])]),this._v(" "),i("p",[this._v("工序："),i("span",[this._v("定植")])]),this._v(" "),i("p",[this._v("工作区域："),i("span",[this._v("6号玻璃温室")])]),this._v(" "),i("p",[this._v("实际完成量："),i("span",[this._v("666株")])]),this._v(" "),i("p",[this._v("工作时间："),i("span",[this._v("2018-05-01 07：00-12:00")])]),this._v(" "),i("p",[this._v("打卡时间："),i("span",[this._v("2018-05-01 08：00 "),i("br"),this._v(" "),i("font",{staticStyle:{display:"block","text-indent":"7em"}},[this._v("2018-05-01 12：00")])],1)]),this._v(" "),i("p",[this._v("审核人："),i("span",[this._v("李腾")])]),this._v(" "),i("p",[this._v("核查时间："),i("span",[this._v("2018-05-01 14:00")])]),this._v(" "),i("p",[this._v("评分："),i("span",[this._v("90分")])]),this._v(" "),i("p",[this._v("备注："),i("span")]),this._v(" "),i("p",[this._v("图片："),i("span",[this._v("查看")])]),this._v(" "),i("p",[this._v("结算金额："),i("span",[this._v("20.6元")])])]),this._v(" "),i("li",[i("p",{staticClass:"tubiaopa"},[this._v("姓名："),i("span",[this._v("刘苗苗")])]),this._v(" "),i("p",[this._v("工序："),i("span",[this._v("定植")])]),this._v(" "),i("p",[this._v("工作区域："),i("span",[this._v("6号玻璃温室")])]),this._v(" "),i("p",[this._v("实际完成量："),i("span",[this._v("666株")])]),this._v(" "),i("p",[this._v("工作时间："),i("span",[this._v("2018-05-01 07：00-12:00")])]),this._v(" "),i("p",[this._v("打卡时间："),i("span",[this._v("2018-05-01 08：00"),i("br"),this._v(" "),i("font",{staticStyle:{display:"block","text-indent":"7em"}},[this._v("2018-05-01 12：00")])],1)]),this._v(" "),i("p",[this._v("审核人："),i("span",[this._v("李腾")])]),this._v(" "),i("p",[this._v("核查时间："),i("span",[this._v("2018-05-01 14:00")])]),this._v(" "),i("p",[this._v("评分："),i("span",[this._v("90分")])]),this._v(" "),i("p",[this._v("备注："),i("span")]),this._v(" "),i("p",[this._v("图片："),i("span",[this._v("查看")])]),this._v(" "),i("p",[this._v("结算金额："),i("span",[this._v("20.6元")])])]),this._v(" "),i("li",[i("p",{staticClass:"tubiaopa"},[this._v("姓名："),i("span",[this._v("刘苗苗")])]),this._v(" "),i("p",[this._v("工序："),i("span",[this._v("定植")])]),this._v(" "),i("p",[this._v("工作区域："),i("span",[this._v("6号玻璃温室")])]),this._v(" "),i("p",[this._v("实际完成量："),i("span",[this._v("666株")])]),this._v(" "),i("p",[this._v("工作时间："),i("span",[this._v("2018-05-01 07：00-12:00")])]),this._v(" "),i("p",[this._v("打卡时间："),i("span",[this._v("2018-05-01 08：00"),i("br"),this._v(" "),i("font",{staticStyle:{display:"block","text-indent":"7em"}},[this._v("2018-05-01 12：00")])],1)]),this._v(" "),i("p",[this._v("审核人："),i("span",[this._v("李腾")])]),this._v(" "),i("p",[this._v("核查时间："),i("span",[this._v("2018-05-01 14:00")])]),this._v(" "),i("p",[this._v("评分："),i("span",[this._v("90分")])]),this._v(" "),i("p",[this._v("备注："),i("span")]),this._v(" "),i("p",[this._v("图片："),i("span",[this._v("查看")])]),this._v(" "),i("p",[this._v("结算金额："),i("span",[this._v("20.6元")])])])])])],1),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header",staticStyle:{"font-size":"17px"}},[i("a",{staticClass:"headerspana",staticStyle:{width:"10%",position:"absolute",left:"16px",background:"url(/lib/img/public/cropmode/leftjiantou.png) 16px center no-repeat"}},[this._v(" ")]),i("span",{staticClass:"headerspana"},[this._v("工人工资详情")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"bottomc"},[i("div",{staticClass:"bottodivc"},[i("span",{staticClass:"bottodivleftc"},[this._v("今日结算工资总额：76.2元")]),this._v(" "),i("span",{staticClass:"bottodivrightc"},[this._v("2018-04-16")])])])}]},x=s("VU/8")({data:function(){return{shuju:[]}},mounted:function(){},methods:{}},b,!1,function(t){s("TxFC")},null,null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"100%",height:"100%"}},[i("div",{staticClass:"header",staticStyle:{"font-size":"17px"}},[i("a",{staticClass:"headerspana",staticStyle:{width:"10%",position:"absolute",left:"16px",background:"url(/lib/img/public/cropmode/leftjiantou.png) 16px center no-repeat"}},[this._v(" ")]),this._v("筛选")]),this._v(" "),i("div",{staticStyle:{height:"70px",width:"100%"}}),this._v(" "),i("div",{staticStyle:{width:"100%",height:"100%"}},[i("form",[i("div",{staticClass:"form-group"},[i("select",{staticStyle:{width:"90%",margin:"0 auto",height:"40px","border-radius":"5px","line-height":"40px","text-indent":"1em",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:""}},[i("option",{attrs:{value:""}},[this._v("请选择工人姓名")])])]),this._v(" "),i("div",{staticClass:"form-group"},[i("select",{staticStyle:{width:"90%",margin:"0 auto",height:"40px","border-radius":"5px","line-height":"40px","text-indent":"1em",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:""}},[i("option",{attrs:{value:""}},[this._v("请选择工序")])])]),this._v(" "),i("div",{staticClass:"form-group"},[i("div",{staticStyle:{width:"95%",height:"40px","line-height":"40px","text-indent":"1em"}},[i("input",{staticClass:"startinput",staticStyle:{"border-radius":"5px",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:"",value:"开始时间"}}),i("label",{staticClass:"henginput"},[this._v("----")]),this._v(" "),i("input",{staticClass:"endinput",staticStyle:{"border-radius":"5px",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:"",value:"结束时间"}})])]),this._v(" "),i("div",{staticClass:"form-group"},[i("select",{staticStyle:{width:"90%",margin:"0 auto",height:"40px","border-radius":"5px","line-height":"40px","text-indent":"1em",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:""}},[i("option",{attrs:{value:""}},[this._v("全部结算历史")])])])])]),this._v(" "),i("div",{staticClass:"bottomshai"},[i("div",{staticClass:"bottodivtwoshai"},[i("span",{staticClass:"bottodivtwoleftshai"},[this._v("取消")]),this._v(" "),i("span",{staticClass:"bottodivtworightshai"},[this._v("确定")])])])])}]},w=s("VU/8")({data:function(){return{shuju:[]}},mounted:function(){},methods:{}},y,!1,function(t){s("fcmJ")},null,null).exports,C=s("brLB"),k={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticStyle:{width:"100%",height:"100%","padding-bottom":"90px"}},[t._m(0),t._v(" "),s("div",{staticStyle:{height:"110px",width:"100%"}}),t._v(" "),s("div",{staticStyle:{width:"100%",height:"100%"}},[s("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[s("div",{staticClass:"tab-pane fade in active",staticStyle:{border:"none",height:"100%","padding-bottom":"0px"},attrs:{id:"setting"}},[s("div",{staticClass:"setting"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"form-group",staticStyle:{"text-align":"center"}},[s("Span",{staticClass:"thissave"},[t._v("保 存")])],1)]),t._v(" "),s("div",{staticStyle:{height:"16px"}}),t._v(" "),s("div",{staticClass:"setting"},[s("p",[s("font",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" 工资核算规则")],1),t._v(" "),s("p",[t._v("工人工资=核查实际工作量X工序单价X评分系数")]),t._v(" "),s("p",[t._v("注：")]),t._v(" "),s("p",[t._v("1、核查实际工作量为核查工单时的实际工作量")]),t._v(" "),s("p",[t._v("2、评分系数为核查工单时评出的分数/100")]),t._v(" "),s("p",[t._v("例：100x0.5x0.96=48")])])]),t._v(" "),s("div",{staticClass:"tab-pane fade",staticStyle:{border:"none",height:"100%"},attrs:{id:"setted"}},[s("div",{staticClass:"settingtwo"},[s("p",[t._v("工序单价一览表")]),t._v(" "),s("table",{staticClass:"changetable"},[t._m(4),t._v(" "),s("tr",[s("td",[t._v("打扫")]),s("td",[t._v("平方米")]),s("td",[t._v("0.8 "),s("img",{staticStyle:{"margin-left":"8px"},attrs:{src:"/lib/img/public/cropmode/z-add-edit-fff.jpg"},on:{click:function(i){t.imgclcik()}}})]),s("td",[s("span",{staticClass:"tdspan",on:{click:function(i){t.dodel()}}},[t._v("删除")])])]),t._v(" "),s("tr",[s("td",[t._v("打杈")]),s("td",[t._v("株")]),s("td",[t._v("0.1 "),s("img",{staticStyle:{"margin-left":"8px"},attrs:{src:"/lib/img/public/cropmode/z-add-edit-fff.jpg"},on:{click:function(i){t.imgclcik()}}})]),s("td",[s("span",{staticClass:"tdspan",on:{click:function(i){t.dodel()}}},[t._v("删除")])])]),t._v(" "),s("tr",[s("td",[t._v("缠头")]),s("td",[t._v("株")]),s("td",[t._v("0.2 "),s("img",{staticStyle:{"margin-left":"8px"},attrs:{src:"/lib/img/public/cropmode/z-add-edit-fff.jpg"},on:{click:function(i){t.imgclcik()}}})]),s("td",[s("span",{staticClass:"tdspan",on:{click:function(i){t.dodel()}}},[t._v("删除")])])]),t._v(" "),s("tr",[s("td",[t._v("授粉")]),s("td",[t._v("株")]),s("td",[t._v("0.2 "),s("img",{staticStyle:{"margin-left":"8px"},attrs:{src:"/lib/img/public/cropmode/z-add-edit-fff.jpg"},on:{click:function(i){t.imgclcik()}}})]),s("td",[s("span",{staticClass:"tdspan",on:{click:function(i){t.dodel()}}},[t._v("删除")])])])])])]),t._v(" "),t._m(5)])]),t._v(" "),t._m(6),t._v(" "),t._m(7)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"headerb",staticStyle:{"font-size":"17px"}},[i("a",{staticClass:"headerspana",staticStyle:{width:"10%",position:"absolute",left:"16px",background:"url(/lib/img/public/cropmode/leftjiantou.png) 16px center no-repeat"}},[this._v(" ")]),i("span",{staticClass:"headerspana"},[this._v("工资设置")]),this._v(" "),i("p",[i("ul",{staticStyle:{border:"none"},attrs:{id:"myTab"}},[i("li",{staticClass:"active"},[i("a",{attrs:{href:"#setting","data-toggle":"tab"}},[this._v("设置")])]),this._v(" "),i("li",[i("a",{staticStyle:{"margin-top":"20x"},attrs:{href:"#setted","data-toggle":"tab"}},[this._v("已设置工序")])]),this._v(" "),i("li",[i("a",{staticStyle:{"margin-top":"20x"},attrs:{href:"#noset","data-toggle":"tab"}},[this._v("未设置工序")])])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("label",{staticClass:"form-grouplab"},[this._v("工序")]),this._v(" "),i("select",{staticStyle:{width:"70%","margin-left":"12px",height:"40px","border-radius":"5px","line-height":"40px","text-indent":"1em",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:""}},[i("option",{attrs:{value:""}},[this._v("请选择工序")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("label",{staticClass:"form-grouplab"},[this._v("单位")]),this._v(" "),i("select",{staticStyle:{width:"70%","margin-left":"12px",height:"40px","border-radius":"5px","line-height":"40px","text-indent":"1em",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:""}},[i("option",{attrs:{value:""}},[this._v("请选择工序单位")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("label",{staticClass:"form-grouplab"},[this._v("单价")]),this._v(" "),i("input",{staticClass:"newdanjia",attrs:{name:"",id:"",value:"请输入工序单价"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("tr",[i("td",[this._v("工序")]),i("td",[this._v("单位")]),i("td",[this._v("单价（元）")]),i("td",[this._v("状态")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"tab-pane fade",staticStyle:{border:"none",height:"100%"},attrs:{id:"noset"}},[i("div",{staticClass:"settingtwo"},[i("p",[this._v("未设置单价的工序")]),this._v(" "),i("table",{staticClass:"changetable"},[i("tr",[i("td",[this._v("工序")]),i("td",[this._v("单位")]),i("td",[this._v("单价(元)")])]),this._v(" "),i("tr",[i("td",[this._v("打扫打扫")]),i("td",[this._v("平方米")]),i("td",[i("span",[this._v("去完善")])])]),this._v(" "),i("tr",[i("td",[this._v("打杈")]),i("td",[this._v("株")]),i("td",[i("span",[this._v("去完善")])])]),this._v(" "),i("tr",[i("td",[this._v("缠头")]),i("td",[this._v("株")]),i("td",[i("span",[this._v("去完善")])])]),this._v(" "),i("tr",[i("td",[this._v("授粉")]),i("td",[this._v("株")]),i("td",[i("span",[this._v("去完善")])])])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"bottomb"},[i("div",{staticClass:"bottodivtwo"},[i("span",{staticClass:"bottodivtwoleft"},[i("a",{attrs:{href:"#/worker/wages"}},[this._v("工人工资")])]),this._v(" "),i("span",{staticClass:"bottodivtworight"},[i("a",{attrs:{href:"#/worker/set"}},[this._v("工资设置")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{display:"none",overflow:"hidden"},attrs:{id:"test"}},[i("div",{staticStyle:{width:"100%","text-align":"center"}},[i("div",{staticStyle:{height:"22px"}}),this._v(" "),i("input",{staticClass:"newtanchuang",attrs:{type:"text",value:""}}),this._v(" "),i("span",{staticClass:"newspan"},[this._v("保存")])])])}]},S=function(t){s("V4vb")},E=s("VU/8")(C.a,k,!1,S,null,null).exports;e.a.use(n.a);var $=new n.a({routes:[{path:"/",name:"udenglu",component:c},{path:"/worker/ulogin",name:"udenglu",component:c},{path:"/worker/ucenter",name:"ucenter",component:v},{path:"/worker/ulist",name:"ulist",component:u},{path:"/worker/wages",name:"wages",component:f},{path:"/worker/workerdetails",name:"detail",component:x},{path:"/worker/query",name:"select",component:w},{path:"/worker/set",name:"setting",component:E}]}),F=s("8+8L");e.a.use(F.a),e.a.config.productionTip=!1,new e.a({el:"#app",router:$,template:"<App/>",components:{App:a.default}})},TQgD:function(t,i){},TxFC:function(t,i){},V4vb:function(t,i){},brLB:function(t,i,s){"use strict";(function(t){i.a={data:function(){return{}},mounted:function(){this.getprocedure()},methods:{getprocedure:function(){},imgclcik:function(){layer.open({type:1,title:"价格编辑",area:["70%","140px"],closeBtn:1,shadeClose:!1,skin:"layer-add-form",content:t("#test")})},dodel:function(){layer.confirm("删除这个工序？",{btn:["确定","取消"]},function(){layer.msg("删除")})}}}}).call(i,s("7t+N"))},c5rH:function(t,i){},fcmJ:function(t,i){},jOIC:function(t,i){},nnEF:function(t,i,s){"use strict";(function(t){i.a={data:function(){return{shuju:[]}},mounted:function(){},methods:{dologin:function(){var i={},s={};if(i.phone=t("input[name='phone']").val(),i.password=t("input[name='pass']").val(),i.password&&i.phone){i.is_login=1,s.url="http://mfhost.mfarmers.com/index.php/User/UserInfo/do_login",s.data=i;var e=getLoginInfo(s);1==e.status?(localStorage.setItem("mf_token",e.token),localStorage.setItem("mf_account",i.phone),layer.msg(e.info,{time:2e3},function(){window.location.href="#/worker/ucenter"})):layer.msg(e.info)}else layer.msg("张号或者密码不能为空")}}}}).call(i,s("7t+N"))},p9cV:function(t,i){},xJD8:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.25c8183d908647eb1dac.js.map