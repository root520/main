webpackJsonp([1],{0:function(t,e){},"4cRq":function(t,e,i){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};e.a=a},M93x:function(t,e,i){"use strict";var a=i("xJD8"),s=i.n(a),n=i("4cRq"),r=function(t){i("jOIC")},o=i("VU/8")(s.a,n.a,!1,r,null,null);e.default=o.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s=i("M93x"),n=i("/ocq"),r=i("nnEF"),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"}},[t._m(0),t._v(" "),i("div",{staticStyle:{width:"100%",height:"240px"}}),t._v(" "),i("form",{staticClass:"layui-form",attrs:{action:""}},[i("input",{staticClass:"layui-input",staticStyle:{width:"60%","border-radius":"5px",margin:"0 auto",background:"url(/lib/layui/images/tubiao/lo.png) 5px center no-repeat","text-indent":"2em"},attrs:{type:"text",name:"phone","lay-verify":"title",placeholder:"请输入手机号"}}),t._v(" "),i("div",{staticStyle:{width:"100%",height:"15px"}}),t._v(" "),i("input",{staticClass:"layui-input",staticStyle:{width:"60%","border-radius":"5px",margin:"0 auto",background:"url(/lib/layui/images/tubiao/mi.png) 5px center no-repeat","text-indent":"2em"},attrs:{type:"text",name:"pass","lay-verify":"title",placeholder:"请输入密码"}}),t._v(" "),i("div",{staticStyle:{width:"100%",height:"15px"}}),t._v(" "),i("div",{staticClass:"layui-form-item",staticStyle:{"text-align":"center"}},[i("span",{staticClass:"layui-btn",staticStyle:{margin:"0 auto"},attrs:{"lay-submit":"","lay-filter":"demo1"},on:{click:function(e){t.dologin()}}},[t._v("登  陆")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[this._v("打卡器登录"),e("span",{staticClass:"icon-mobile"})])}]},l=function(t){i("p9cV")},c=i("VU/8")(r.a,o,!1,l,null,null).exports,d={data:function(){return{aall:[],workercarda:[],newid:"",imgur:""}},mounted:function(){this.maninfo(),this.getgongdan()},methods:{maninfo:function(){var t={};t.url="27.221.53.90:881/index.php/person/PerInfo/get_worker",t.data={};var e=getFaceInfo(t);this.aall=e.worker,this.newid=e.worker.worker_id,""==e.worker.img_url?this.imgur="/lib/img/public/cropmode/rentu.jpg":this.imgur=e.worker.img_url},getgongdan:function(){var t={},e={};t.worker_id=this.newid,e.url="27.221.53.90:881/index.php/Worker/Workercard/workercarda",e.data=t;var i=getFaceInfo(e);1==i.status&&(this.workercarda=i.data,console.log(this.workercarda))}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"}},[t._m(0),t._v(" "),i("div",{staticStyle:{width:"90%","padding-top":"70px",margin:"0 5%"}},[i("div",{staticClass:"divleft"},[i("img",{staticStyle:{width:"80px",height:"80px","border-top":"1px solid #ccc","border-radius":"40px","box-shadow":"0px 1px 3px #e2e2e2"},attrs:{src:t.imgur}})]),t._v(" "),i("div",{staticClass:"divright"},[i("p",[t._v("姓名:"),i("span",[t._v(t._s(t.aall.worker_name))])]),t._v(" "),i("p",[t._v("部门:"),i("span",[t._v(t._s(t.aall.group_name))])]),t._v(" "),i("p",[t._v("职务:"),i("span",[t._v(t._s(t.aall.role_name))])])])]),t._v(" "),i("div",{staticStyle:{clear:"both"}}),t._v(" "),i("div",{staticStyle:{width:"100%",padding:"10px 0px","text-align":"center","font-size":"20px","line-height":"50px"}}),t._v(" "),i("div",{staticStyle:{width:"100%",height:"auto"}},[i("ul",{staticClass:"abcde"},t._l(t.workercarda,function(e){return i("li",{staticClass:"centern"},[i("p",[t._v("姓名："+t._s(e.worker_name))]),t._v(" "),i("p",[t._v("工序："+t._s(e.skill_name))]),t._v(" "),i("p",[t._v("工作区域："+t._s(e.area_name))]),t._v(" "),i("p",[t._v("工作量："+t._s(e.num))]),t._v(" "),i("p",[t._v("工作时间："+t._s(e.work_date)+" "+t._s(e.require_time_1)+" "+t._s(e.require_time_2))]),t._v(" "),i("p",[t._v("开始时间："+t._s(e.s_time))]),t._v(" "),i("p",[t._v("结束时间："+t._s(e.e_time))])])})),t._v(" "),i("p",{staticStyle:{"line-height":"50px","font-size":"16px","text-align":"center"}},[t._v("请扫码进行相关操作")]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[this._v("工人信息"),e("span",{staticClass:"icon-mobile"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"line-height":"50px","font-size":"16px","text-align":"center"}},[e("a",{attrs:{href:"/#/worker/ulist"}},[this._v("工单列表-示例")])])}]},h=i("VU/8")(d,p,!1,function(t){i("gVH9")},null,null).exports,_={data:function(){return{newchangea:1,aball:[],type:0,work_date:"",area_id:"67",aalla:[]}},mounted:function(){this.getabc(),this.getnew(),this.maninfoall()},methods:{getabc:function(){var t={},e={};t.url="27.221.53.90:881/index.php/product/WorkerManage/gd_check_list_daka",t.data=e,e.area_id=this.area_id,e.work_date=this.work_date,e.type=this.type;var i=getFaceInfo(t);this.aball=i.data},maninfoall:function(){var t=localStorage.getItem("mf_token"),e=localStorage.getItem("mf_account"),i={},a={};i.newphone=e,i.atoken=t,a.url="27.221.53.90:881/index.php/person/PerInfo/get_worker",a.data=i;var s=getFaceInfo(a);this.aalla=s.worker,this.newid=s.worker.worker_id},do3:function(){this.type=0,this.getabc()},do0:function(){this.type=1,this.getabc()},do1:function(){this.type=2,this.getabc()},dodaka:function(t){var e={},i={};e.url="27.221.53.90:881/index.php/product/WorkerManage/gd_check_list_daka_go",i.gd_id=t,e.data=i;var a=getFaceInfo(e);a.status,layer.msg(a.msg)},overdaka:function(t){var e={},i={};e.url="27.221.53.90:881/index.php/product/WorkerManage/gd_check_list_daka_over",i.gd_id=t,e.data=i;var a=getFaceInfo(e);a.status,layer.msg(a.msg)},getnew:function(){var t=this;layui.use(["form","layedit","laydate"],function(){layui.form,layui.layer,layui.layedit;layui.laydate.render({elem:"#date",done:function(e,i,a){t.work_date=e,t.getabc()}})})}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"}},[t._m(0),t._v(" "),i("div",{staticStyle:{width:"90%","padding-top":"70px",margin:"0 5%"}},[i("div",{staticClass:"layui-row",staticStyle:{"text-align":"center"}},[i("div",{staticClass:"layui-col-xs4"},[i("div",{staticClass:"grid-demo grid-demo-bg1",staticStyle:{cursor:"pointer",height:"40px",width:"70%","line-height":"40px",border:"1px solid #e3e3e3",margin:"0 auto","border-radius":"5px"},style:{background:0==t.type?"#e2e2e2":""},on:{click:t.do3}},[t._v("\n              进行中\n            ")])]),t._v(" "),i("div",{staticClass:"layui-col-xs4",on:{click:t.do0}},[i("div",{staticClass:"grid-demo cursor",staticStyle:{cursor:"pointer",height:"40px",width:"70%","line-height":"40px",border:"1px solid #e3e3e3",margin:"0 auto","border-radius":"5px"},style:{background:1==t.type?"#e2e2e2":""}},[t._v("\n              待核查\n            ")])]),t._v(" "),i("div",{staticClass:"layui-col-xs4"},[i("div",{staticClass:"grid-demo grid-demo-bg1",staticStyle:{cursor:"pointer",height:"40px",width:"70%","line-height":"40px",border:"1px solid #e3e3e3",margin:"0 auto","border-radius":"5px"},style:{background:2==t.type?"#e2e2e2":""},on:{click:t.do1}},[t._v("\n              已完成\n            ")])])]),t._v(" "),i("div",{staticStyle:{height:"30px"}}),t._v(" "),i("form",{staticClass:"layui-form",attrs:{action:""}},[i("input",{staticClass:"layui-input",staticStyle:{width:"90%",height:"40px",border:"1px solid #e3e3e3","border-radius":"5px",margin:"0 5%"},attrs:{type:"text",name:"date",id:"date","lay-verify":"date",placeholder:"日期搜索"},on:{change:function(e){t.changeCount()}}})])]),t._v(" "),i("div",{staticStyle:{width:"90%","padding-top":"20px",margin:"0 5%"}},[i("div",{staticClass:"layui-row",staticStyle:{"text-align":"center"}},[i("div",{staticClass:"layui-col-xs4"},[i("div",{staticClass:"grid-demo grid-demo-bg1",staticStyle:{height:"40px",overflow:"hidden",width:"70%","line-height":"40px",margin:"0 auto"}},[t._v("姓名："),i("span",[t._v(t._s(t.aalla.worker_name))])])]),t._v(" "),i("div",{staticClass:"layui-col-xs4"},[i("div",{staticClass:"grid-demo",staticStyle:{height:"40px",width:"70%",overflow:"hidden","line-height":"40px",margin:"0 auto"}},[t._v("部门："),i("span",[t._v(t._s(t.aalla.group_name))])])]),t._v(" "),i("div",{staticClass:"layui-col-xs4"},[i("div",{staticClass:"grid-demo grid-demo-bg1",staticStyle:{height:"40px",overflow:"hidden",width:"70%","line-height":"40px",margin:"0 auto"}},[t._v("职务："),i("span",[t._v(t._s(t.aalla.role_name))])])])])]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"auto","margin-top":"12px"}},[i("ul",{staticClass:"abcde"},t._l(t.aball,function(e){return i("li",{staticClass:"centern"},[i("p",[t._v("姓名："+t._s(e.worker_name))]),t._v(" "),i("p",[t._v("工序："+t._s(e.skill_name))]),t._v(" "),i("p",[t._v("工作区域："+t._s(e.area_name))]),t._v(" "),i("p",[t._v("工作量："+t._s(e.num))]),t._v(" "),i("p",[t._v("工作时间："+t._s(e.work_date)+" "+t._s(e.require_time_1)+" "+t._s(e.require_time_2))]),t._v(" "),i("p",[t._v("开始时间："+t._s(e.s_time))]),t._v(" "),i("p",[t._v("结束时间："+t._s(e.e_time))]),t._v(" "),0==e.status?i("div",{staticClass:"ben",on:{click:function(i){t.dodaka(e.gd_id)}}},[t._v("  \n                  开始打卡 \n                ")]):1==e.status?i("div",{staticClass:"ben",on:{click:function(i){t.overdaka(e.gd_id)}}},[t._v("  \n                  结束打卡 \n                ")]):t._e()])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[this._v("工人工单列表"),e("span",{staticClass:"icon-mobile"})])}]},u=i("VU/8")(_,v,!1,function(t){i("b4YG")},null,null).exports,g={data:function(){return{num:0,alldata:[],gentle:"",date:"",time:""}},mounted:function(){this.getgongdan()},methods:{getgongdan:function(){var t=new Date;this.time=t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日";var e={};e.url="27.221.53.90:881/index.php/workerwages/workerwages/workerwages_list",e.data={};var i=getFaceInfo(e);this.alldata=i.data;for(var a=i.data,s=0,n=0;n<a.length;n++)s+=a[n].cmoney;this.gentle=s}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%","padding-bottom":"90px"}},[i("div",{staticClass:"header"},[i("span",{staticClass:"headerspan",staticStyle:{width:"30%",position:"absolute",left:"3%",display:"inline-block","text-align":"left",background:"url(/lib/img/public/cropmode/leftjiantou.png) 16px center no-repeat"},attrs:{onclick:"window.history.go(-1)"}},[t._v("  ")]),i("span",{staticClass:"headerspan",staticStyle:{"font-size":"17px"}},[t._v("工人工资")]),i("span",{staticClass:"headerspan",staticStyle:{position:"absolute",right:"5%",top:"25px","text-indent":"3em","font-size":"15px"}},[i("A",{attrs:{href:"#/worker/query"}},[t._v("搜索")])],1)]),t._v(" "),i("div",{staticStyle:{height:"50px",width:"100%"}}),t._v(" "),i("div",{staticClass:"gundong",staticStyle:{width:"100%",height:"100%","overflow-y":"scroll"}},[i("div",{staticClass:"wages"},[i("ul",t._l(t.alldata,function(e){return i("li",[i("a",{attrs:{href:"#/worker/workerdetails?id="+e.worker_id}},[i("p",{staticClass:"tubiaop"},[t._v("姓名："),i("span",[t._v(t._s(e.worker_name))])]),t._v(" "),i("p",[t._v("结算工单数："),i("span",[t._v(t._s(e.count)+"单")])]),t._v(" "),i("p",[t._v("结算金额："+t._s(e.cmoney)+" 元 ")])])])})),t._v(" "),i("div",{staticStyle:{clear:"both",height:"20px"}})])]),t._v(" "),i("div",{staticClass:"bottom"},[i("div",{staticClass:"bottodiv"},[i("span",{staticClass:"bottodivleft"},[t._v("今日结算工资总额："+t._s(t.gentle)+" 元")]),t._v(" "),i("span",{staticClass:"bottodivright"},[t._v(t._s(t.time))])]),t._v(" "),i("div",{staticClass:"bottodivtwo"},[0==t.num?i("span",{staticClass:"bottodivtwoleft"},[t._m(0)]):i("span",{staticClass:"bottodivtwoleft"},[t._m(1)]),t._v(" "),1==t.num?i("span",{staticClass:"bottodivtworight"},[t._m(2)]):i("span",{staticClass:"bottodivtworight"},[t._m(3)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#/worker/wages"}},[e("p",{staticStyle:{height:"20px","margin-top":"3px","line-height":"20px"}},[e("img",{staticStyle:{heiht:"20px"},attrs:{src:"/lib/img/public/cropmode/wages.png"}})]),this._v(" "),e("span",{staticStyle:{display:"block","margin-top":"-6px",color:"#5c9260"}},[this._v("工人工资")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#/worker/wages"}},[e("p",{staticStyle:{height:"20px","margin-top":"3px","line-height":"20px"}},[e("img",{staticStyle:{heiht:"20px"},attrs:{src:"/lib/img/public/cropmode/wagesed.png"}})]),this._v(" "),e("span",{staticStyle:{display:"block","margin-top":"-6px"}},[this._v("工人工资")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#/worker/set"}},[e("p",{staticStyle:{height:"20px","margin-top":"3px","line-height":"20px"}},[e("img",{staticStyle:{heiht:"20px"},attrs:{src:"/lib/img/public/cropmode/setting.png"}})]),this._v(" "),e("span",{staticStyle:{display:"block","margin-top":"-6px",color:"#5c9260"}},[this._v("工资设置")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#/worker/set"}},[e("p",{staticStyle:{height:"20px","margin-top":"3px","line-height":"20px"}},[e("img",{staticStyle:{heiht:"20px"},attrs:{src:"/lib/img/public/cropmode/setted.png"}})]),this._v(" "),e("span",{staticStyle:{display:"block","margin-top":"-6px"}},[this._v("工资设置")])])}]},f=i("VU/8")(g,m,!1,function(t){i("dHdl")},null,null).exports,w={data:function(){return{details:[],getwid:""}},mounted:function(){this.getwid=this.$route.query.id,this.getdetails()},methods:{getdetails:function(){var t={},e={};e.url="27.221.53.90:881/index.php/workerwages/workerwages/workerwages_list_details",t.worker_id=this.getwid,e.data=t;var i=getFaceInfo(e);this.details=i.data}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%","padding-bottom":"50px"}},[t._m(0),t._v(" "),i("div",{staticStyle:{height:"70px",width:"100%"}}),t._v(" "),i("div",{staticStyle:{width:"100%",height:"100%"}},[i("Div",{staticClass:"details"},[i("ul",t._l(t.details,function(e){return i("li",[i("p",{staticClass:"tubiaopa"},[t._v("姓名："),i("span",[t._v(t._s(e.worker_name))])]),t._v(" "),i("p",[t._v("工序："),i("span",[t._v(t._s(e.skill_name))])]),t._v(" "),i("p",[t._v("工作区域："),i("span",[t._v(t._s(e.area_name))])]),t._v(" "),i("p",[t._v("实际完成量："),i("span",[t._v(t._s(e.num))])]),t._v(" "),i("p",[t._v("工作时间："),i("span",[t._v(t._s(e.worker_date)+" "+t._s(e.require_time_1)+" "+t._s(e.require_time_2))])]),t._v(" "),i("p",[t._v("打卡时间："),i("span",[t._v(t._s(e.s_time)),i("br"),t._v(" "),i("font",{staticStyle:{display:"block","text-indent":"7em"}},[t._v(t._s(e.e_time))])],1)]),t._v(" "),i("p",[t._v("审核人："),i("span",[t._v(t._s(e.check_worker_name))])]),t._v(" "),i("p",[t._v("核查时间："),i("span",[t._v(t._s(e.check_time))])]),t._v(" "),i("p",[t._v("评分："),i("span",[t._v(t._s(e.score)+"分")])]),t._v(" "),i("p",[t._v("备注："),i("span",[t._v(t._s(e.beizhu))])]),t._v(" "),i("p",[t._v("图片："),i("span",[t._v("查看")])]),t._v(" "),i("p",[t._v("结算金额："),i("span",[t._v(t._s(e.money)+"元")])])])}))])],1),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header",staticStyle:{"font-size":"17px"}},[e("span",{staticClass:"headerspana",staticStyle:{width:"10%",position:"absolute",left:"3%",background:"url(/lib/img/public/cropmode/leftjiantou.png) 16px center no-repeat"},attrs:{onclick:"window.history.go(-1)"}},[this._v(" ")]),e("span",{staticClass:"headerspana"},[this._v("工人工资详情")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottomc"},[e("div",{staticClass:"bottodivc"},[e("span",{staticClass:"bottodivleftc"},[this._v("今日结算工资总额：76.2元")]),this._v(" "),e("span",{staticClass:"bottodivrightc"},[this._v("2018-04-16")])])])}]},b=i("VU/8")(w,x,!1,function(t){i("ZWz9")},null,null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"100%",height:"100%"}},[e("div",{staticClass:"header",staticStyle:{"font-size":"17px"}},[e("span",{staticClass:"headerspana",staticStyle:{width:"10%",position:"absolute",left:"3%",background:"url(/lib/img/public/cropmode/leftjiantou.png) 16px center no-repeat"},attrs:{onclick:"window.history.go(-1)"}},[this._v(" ")]),this._v("筛选")]),this._v(" "),e("div",{staticStyle:{height:"70px",width:"100%"}}),this._v(" "),e("div",{staticStyle:{width:"100%",height:"100%"}},[e("form",[e("div",{staticClass:"form-group"},[e("select",{staticStyle:{width:"90%",margin:"0 auto",height:"40px","border-radius":"5px","line-height":"40px","text-indent":"1em",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:""}},[e("option",{attrs:{value:""}},[this._v("请选择工人姓名")])])]),this._v(" "),e("div",{staticClass:"form-group"},[e("select",{staticStyle:{width:"90%",margin:"0 auto",height:"40px","border-radius":"5px","line-height":"40px","text-indent":"1em",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:""}},[e("option",{attrs:{value:""}},[this._v("请选择工序")])])]),this._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticStyle:{width:"95%",height:"40px","line-height":"40px","text-indent":"1em"}},[e("input",{staticClass:"startinput",staticStyle:{"border-radius":"5px",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:"",value:"开始时间"}}),e("label",{staticClass:"henginput"},[this._v("----")]),this._v(" "),e("input",{staticClass:"endinput",staticStyle:{"border-radius":"5px",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:"",value:"结束时间"}})])]),this._v(" "),e("div",{staticClass:"form-group"},[e("select",{staticStyle:{width:"90%",margin:"0 auto",height:"40px","border-radius":"5px","line-height":"40px","text-indent":"1em",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:""}},[e("option",{attrs:{value:""}},[this._v("全部结算历史")])])])])]),this._v(" "),e("div",{staticClass:"bottomshai"},[e("div",{staticClass:"bottodivtwoshai"},[e("span",{staticClass:"bottodivtwoleftshai"},[this._v("取消")]),this._v(" "),e("span",{staticClass:"bottodivtworightshai"},[this._v("确定")])])])])}]},k=i("VU/8")({data:function(){return{shuju:[]}},mounted:function(){},methods:{}},y,!1,function(t){i("NrrE")},null,null).exports,C=i("brLB"),S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%","padding-bottom":"90px"}},[t._m(0),t._v(" "),i("div",{staticStyle:{height:"110px",width:"100%"}}),t._v(" "),i("div",{staticStyle:{width:"100%",height:"100%"}},[i("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[i("div",{staticClass:"tab-pane fade in active",staticStyle:{border:"none",height:"100%","padding-bottom":"0px"},attrs:{id:"setting"}},[i("div",{staticClass:"setting"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"form-grouplab"},[t._v("工序")]),t._v(" "),i("select",{staticStyle:{width:"70%","margin-left":"12px",height:"40px","border-radius":"5px","line-height":"40px","text-indent":"1em",border:"1px solid #bbb",color:"#aaa"},attrs:{id:"skillid"},on:{change:function(e){t.chooseid(e.target)}}},[i("option",[t._v("请选择工序")]),t._v(" "),t._l(t.skillchoose,function(e){return i("option",{domProps:{value:e.skill_id}},[t._v(t._s(e.skill_name))])})],2)]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"form-grouplab"},[t._v("单位")]),t._v(" "),i("select",{staticStyle:{width:"70%","margin-left":"12px",height:"40px","border-radius":"5px","line-height":"40px","text-indent":"1em",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:"dselect"},on:{change:function(e){t.choosedid(e.target)}}},t._l(t.skillchoosemore,function(e){return i("option",{domProps:{value:e.p_id}},[t._v(t._s(e.unit_str))])}))]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"form-grouplab",staticStyle:{height:"40px","line-height":"40px",float:"left"}},[t._v("单价")]),t._v(" "),i("span",{staticClass:"newdanjiaspan",staticStyle:{display:"inline-block","margin-left":"16px"}},t._l(t.skillprice,function(t){return i("input",{staticClass:"newdanjia",attrs:{id:"pinput",type:"text"},domProps:{value:t.price}})}))]),t._v(" "),i("div",{staticClass:"form-group",staticStyle:{"text-align":"center"}},[i("Span",{staticClass:"thissave",on:{click:function(e){t.dosave()}}},[t._v("保 存")])],1)]),t._v(" "),i("div",{staticStyle:{height:"16px"}}),t._v(" "),i("div",{staticClass:"setting"},[i("p",[i("font",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" 工资核算规则")],1),t._v(" "),i("p",[t._v("工人工资=核查实际工作量X工序单价X评分系数")]),t._v(" "),i("p",[t._v("注：")]),t._v(" "),i("p",[t._v("1、核查实际工作量为核查工单时的实际工作量")]),t._v(" "),i("p",[t._v("2、评分系数为核查工单时评出的分数/100")]),t._v(" "),i("p",[t._v("例：100x0.5x0.96=48")])])]),t._v(" "),i("div",{staticClass:"tab-pane fade",staticStyle:{border:"none",height:"100%"},attrs:{id:"setted"}},[i("div",{staticClass:"settingtwo"},[i("p",[t._v("工序单价一览表")]),t._v(" "),i("table",{staticClass:"changetable"},[t._m(1),t._v(" "),t._l(t.setted,function(e){return i("tr",[i("td",[t._v(t._s(e.skill_name))]),t._v(" "),i("td",[t._v(t._s(e.unit_str))]),t._v(" "),i("td",[t._v(t._s(e.price)+" "),i("img",{staticStyle:{"margin-left":"8px"},attrs:{src:"/lib/img/public/cropmode/z-add-edit-fff.jpg"},on:{click:function(i){t.imgclcik(e.p_id)}}})]),t._v(" "),i("td",[i("span",{staticClass:"tdspan",on:{click:function(i){t.dodel(e.p_id)}}},[t._v("删除")])])])})],2)])]),t._v(" "),i("div",{staticClass:"tab-pane fade",staticStyle:{border:"none",height:"100%"},attrs:{id:"noset"}},[i("div",{staticClass:"settingtwo"},[i("p",[t._v("未设置单价的工序")]),t._v(" "),i("table",{staticClass:"changetable"},[t._m(2),t._v(" "),t._l(t.set,function(e){return i("tr",[i("td",[t._v(t._s(e.skill_name))]),t._v(" "),i("td",[t._v(t._s(e.unit_str))]),t._v(" "),i("td",[i("span",{on:{click:function(i){t.doedit(e.p_id)}}},[t._v("去完善")])])])})],2)])]),t._v(" "),i("div",{staticClass:"tab-pane fade",staticStyle:{border:"none",height:"100%"},attrs:{id:"cangset"}},[i("div",{staticClass:"setting"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"form-grouplab"},[t._v("工序")]),t._v(" "),i("select",{staticStyle:{width:"70%","margin-left":"12px",height:"40px","border-radius":"5px","line-height":"40px","text-indent":"1em",border:"1px solid #bbb",color:"#aaa"},attrs:{id:"skillida",readonly:"readonly"},on:{change:function(e){t.chooseid(e.target)}}},t._l(t.cang,function(e){return i("option",{domProps:{value:e.skill_id}},[t._v(t._s(e.skill_name))])}))]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"form-grouplab"},[t._v("单位")]),t._v(" "),i("select",{staticStyle:{width:"70%","margin-left":"12px",height:"40px","border-radius":"5px","line-height":"40px","text-indent":"1em",border:"1px solid #bbb",color:"#aaa"},attrs:{name:"",id:"dselecta",readonly:"readonly"},on:{change:function(e){t.choosedid(e.target)}}},t._l(t.cang,function(e){return i("option",{domProps:{value:e.p_id}},[t._v(t._s(e.unit_str))])}))]),t._v(" "),t._m(3),t._v(" "),i("div",{staticClass:"form-group",staticStyle:{"text-align":"center"}},[i("Span",{staticClass:"thissave",on:{click:function(e){t.dosavea()}}},[t._v("保 存")])],1)])])])]),t._v(" "),i("div",{staticClass:"bottomb"},[i("div",{staticClass:"bottodivtwo"},[0==t.num?i("span",{staticClass:"bottodivtwoleft"},[t._m(4)]):i("span",{staticClass:"bottodivtwoleft"},[t._m(5)]),t._v(" "),1==t.num?i("span",{staticClass:"bottodivtworight"},[t._m(6)]):i("span",{staticClass:"bottodivtworight"},[t._m(7)])])]),t._v(" "),i("div",{staticStyle:{display:"none",overflow:"hidden"},attrs:{id:"test"}},[i("div",{staticStyle:{width:"100%","text-align":"center"}},[i("div",{staticStyle:{height:"22px"}}),t._v(" "),t._l(t.setted,function(e){return e.p_id==t.kid?i("input",{staticClass:"newtanchuang",attrs:{id:"inputida",type:"text"},domProps:{value:e.price}}):t._e()}),t._v(" "),i("span",{staticClass:"newspan",on:{click:function(e){t.madesave(t.kid)}}},[t._v("保存")])],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headerb",staticStyle:{"font-size":"17px"}},[e("span",{staticClass:"headerspana",staticStyle:{width:"10%",position:"absolute",left:"3%",background:"url(/lib/img/public/cropmode/leftjiantou.png) 16px center no-repeat"},attrs:{onclick:"window.history.go(-1)"}},[this._v(" ")]),e("span",{staticClass:"headerspana"},[this._v("工资设置")]),this._v(" "),e("p",[e("ul",{staticStyle:{border:"none"},attrs:{id:"myTab"}},[e("li",{staticClass:"active",attrs:{id:"doactive"}},[e("a",{attrs:{href:"#setting","data-toggle":"tab"}},[this._v("设置")])]),this._v(" "),e("li",[e("a",{staticStyle:{"margin-top":"20x"},attrs:{href:"#setted","data-toggle":"tab"}},[this._v("已设置工序")])]),this._v(" "),e("li",{attrs:{id:"doactivea"}},[e("a",{staticStyle:{"margin-top":"20x"},attrs:{href:"#noset","data-toggle":"tab"}},[this._v("未设置工序")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("工序")]),e("td",[this._v("单位")]),e("td",[this._v("单价（元）")]),e("td",[this._v("状态")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("工序")]),e("td",[this._v("单位")]),e("td",[this._v("单价(元)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-grouplab"},[this._v("单价")]),this._v(" "),e("input",{staticClass:"newdanjiaa",attrs:{id:"pinputa",type:"text",value:"价格"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#/worker/wages"}},[e("p",{staticStyle:{height:"20px","margin-top":"3px","line-height":"20px"}},[e("img",{staticStyle:{heiht:"20px"},attrs:{src:"/lib/img/public/cropmode/wages.png"}})]),this._v(" "),e("span",{staticStyle:{display:"block","margin-top":"-6px",color:"#5c9260"}},[this._v("工人工资")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#/worker/wages"}},[e("p",{staticStyle:{height:"20px","margin-top":"3px","line-height":"20px"}},[e("img",{staticStyle:{heiht:"20px"},attrs:{src:"/lib/img/public/cropmode/wagesed.png"}})]),this._v(" "),e("span",{staticStyle:{display:"block","margin-top":"-6px"}},[this._v("工人工资")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#/worker/set"}},[e("p",{staticStyle:{height:"20px","margin-top":"3px","line-height":"20px"}},[e("img",{staticStyle:{heiht:"20px"},attrs:{src:"/lib/img/public/cropmode/setting.png"}})]),this._v(" "),e("span",{staticStyle:{display:"block","margin-top":"-6px",color:"#5c9260"}},[this._v("工资设置")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#/worker/set"}},[e("p",{staticStyle:{height:"20px","margin-top":"3px","line-height":"20px"}},[e("img",{staticStyle:{heiht:"20px"},attrs:{src:"/lib/img/public/cropmode/setted.png"}})]),this._v(" "),e("span",{staticStyle:{display:"block","margin-top":"-6px"}},[this._v("工资设置")])])}]},E=function(t){i("h5ft")},F=i("VU/8")(C.a,S,!1,E,null,null).exports;a.a.use(n.a);var I=new n.a({routes:[{path:"/",name:"udenglu",component:c},{path:"/worker/ulogin",name:"udenglu",component:c},{path:"/worker/ucenter",name:"ucenter",component:h},{path:"/worker/ulist",name:"ulist",component:u},{path:"/worker/wages",name:"wages",component:f},{path:"/worker/workerdetails",name:"detail",component:b},{path:"/worker/query",name:"select",component:k},{path:"/worker/set",name:"setting",component:F}]}),$=i("8+8L");a.a.use($.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:I,template:"<App/>",components:{App:s.default}})},NrrE:function(t,e){},ZWz9:function(t,e){},b4YG:function(t,e){},brLB:function(t,e,i){"use strict";(function(t){var a,s=i("bOdI"),n=i.n(s);e.a={data:function(){return{num:1,setted:[],set:[],skillchoose:[],skillchoosemore:[],skillprice:[],kid:"",cang:[],abid:""}},mounted:function(){this.getsetted(),this.getset(),this.getskillchoose()},methods:(a={getsetted:function(){var t={};t.url="27.221.53.90:881/index.php/workerwages/workerwages/workerwages_setted",t.data={};var e=getFaceInfo(t);this.setted=e.data},getset:function(){var t={};t.url="27.221.53.90:881/index.php/workerwages/workerwages/workerwages_set",t.data={};var e=getFaceInfo(t);this.set=e.data},getskillchoose:function(){var t={};t.url="27.221.53.90:881/index.php/workerwages/workerwages/skill_choose",t.data={};var e=getFaceInfo(t);this.skillchoose=e.data},chooseid:function(t){var e={},i={};i.url="27.221.53.90:881/index.php/workerwages/workerwages/skill_choose_more",e.skill_id=t.value,i.data=e;var a=getFaceInfo(i);this.skillchoosemore=a.data},choosedid:function(t){var e={},i={};i.url="27.221.53.90:881/index.php/workerwages/workerwages/skill_choose_mon",e.p_id=t.value,i.data=e;var a=getFaceInfo(i);this.skillprice=a.data},imgclcik:function(e){this.kid=e,layer.open({type:1,title:"价格编辑",area:["70%","140px"],closeBtn:1,shadeClose:!1,skin:"layer-add-form",content:t("#test")})},madesave:function(e){var i=t("#inputida").val(),a=e,s={},n={};n.url="27.221.53.90:881/index.php/workerwages/workerwages/workerwages_setting",s.p_id=a,s.mon=i,n.data=s;var r=getFaceInfo(n);r.status,layer.msg(r.msg)},dodel:function(){layer.confirm("删除这个工序？",{btn:["确定","取消"]},function(){layer.msg("删除")})},dosave:function(){var e=t("#dselect").val(),i=t("#pinput").val(),a={},s={};s.url="27.221.53.90:881/index.php/workerwages/workerwages/workerwages_setting",a.p_id=e,a.mon=i,s.data=a;var n=getFaceInfo(s);n.status,layer.msg(n.msg)}},n()(a,"dodel",function(t){var e={},i={};i.url="27.221.53.90:881/index.php/workerwages/workerwages/workerwages_set_del",e.p_id=t,i.data=e;var a=getFaceInfo(i);a.status,layer.msg(a.msg)}),n()(a,"doedit",function(e){this.abid=e;var i={},a={};a.url="27.221.53.90:881/index.php/workerwages/workerwages/workerwages_set_over",i.p_id=e,a.data=i;var s=getFaceInfo(a);1==s.status?(t("#doactivea").removeClass("active"),t("#doactive").addClass("active"),t("#noset").removeClass("active"),t("#cangset").addClass("tab-pane fade in active"),this.cang=s.data):layer.msg(s.msg)}),n()(a,"dosavea",function(){var e=t("#pinputa").val(),i={},a={};a.url="27.221.53.90:881/index.php/workerwages/workerwages/workerwages_setting",i.p_id=this.abid,i.mon=e,a.data=i;var s=getFaceInfo(a);s.status,layer.msg(s.msg)}),a)}}).call(e,i("7t+N"))},dHdl:function(t,e){},gVH9:function(t,e){},h5ft:function(t,e){},jOIC:function(t,e){},nnEF:function(t,e,i){"use strict";(function(t){e.a={data:function(){return{shuju:[]}},mounted:function(){},methods:{dologin:function(){var e={},i={};if(e.phone=t("input[name='phone']").val(),e.password=t("input[name='pass']").val(),e.password&&e.phone){e.is_login=1,i.url="http://mfhost.mfarmers.com/index.php/User/UserInfo/do_login",i.data=e;var a=getLoginInfo(i);1==a.status?(localStorage.setItem("mf_token",a.token),localStorage.setItem("mf_account",e.phone),layer.msg(a.info,{time:2e3},function(){window.location.href="#/worker/ucenter"})):layer.msg(a.info)}else layer.msg("张号或者密码不能为空")}}}}).call(e,i("7t+N"))},p9cV:function(t,e){},xJD8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ed2c945e6c22ca7293ee.js.map