(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3338aaac"],{2735:function(e,t,n){},"34c3":function(e,t,n){"use strict";var a=n("2735"),r=n.n(a);r.a},"3e10":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"serverTest"},[n("h4",[e._v("用户列表")]),n("el-button",{attrs:{size:"small"},on:{click:function(t){return e.showDialog()}}},[e._v("新增")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.userList}},[n("el-table-column",{attrs:{prop:"id",label:"id",width:"180"}}),n("el-table-column",{attrs:{prop:"userName",label:"用户名",width:"180"}}),n("el-table-column",{attrs:{prop:"loginName",label:"登录名"}}),n("el-table-column",{attrs:{prop:"phone",label:"电话"}}),n("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.delData(t.row)}}},[e._v("删除")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.showDialog(t.row)}}},[e._v("修改")])]}}])})],1),n("el-dialog",{attrs:{title:"操作",visible:e.operateDialog,width:"30%"},on:{"update:visible":function(t){e.operateDialog=t}}},[n("span",{staticClass:"body"},[n("el-form",{attrs:{model:e.userModel,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:e.userModel.userName,callback:function(t){e.$set(e.userModel,"userName",t)},expression:"userModel.userName"}})],1),n("el-form-item",{attrs:{label:"登录名"}},[n("el-input",{model:{value:e.userModel.loginName,callback:function(t){e.$set(e.userModel,"loginName",t)},expression:"userModel.loginName"}})],1),n("el-form-item",{attrs:{label:"手机号"}},[n("el-input",{model:{value:e.userModel.phone,callback:function(t){e.$set(e.userModel,"phone",t)},expression:"userModel.phone"}})],1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.operateDialog=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.confirmOperate}},[e._v("确 定")])],1)]),n("page-component",{attrs:{"page-config":e.pageConfig},on:{changeCurrentPage:e.changeCurrentPage}})],1)},r=[],o=n("4e2d"),s={name:"serverTest",data:function(){return{userList:[],selectIndex:0,activeIndex2:"1",operateDialog:!1,userModel:{},operateType:"add",pageConfig:{pageNo:1,pageSize:10}}},components:{"page-component":o["a"]},mounted:function(){},methods:{delData:function(e){var t=this;this.$confirm("此操作将永久删除该用户？, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$del("/users/del",{id:e.id},(function(e){e.success?(t.getUserList(),t.showAlert()):t.showAlert("error",e.message)}))}))},showDialog:function(e){e?(this.operateType="edit",this.userModel=Object.assign(e,{})):(this.operateType="add",this.userModel={}),this.operateDialog=!0},confirmOperate:function(){var e=this,t=function(t){t.success?(e.showAlert(),e.getUserList()):e.showAlert("error",t.message),e.operateDialog=!1};"add"===this.operateType?this.$post("/users/add",this.userModel,t):this.$put("/users/update",this.userModel,t)},changeCurrentPage:function(e){this.pageConfig.pageNo=e,this.getUserList()},getUserList:function(){var e=this;this.$get("/users/list",this.pageConfig,(function(t){t.success&&(e.userList=t.data.data,e.pageConfig=e.getPageConfig(t,e.pageConfig))}))}},computed:{},created:function(){this.getUserList()}},i=s,u=(n("34c3"),n("2877")),c=Object(u["a"])(i,a,r,!1,null,null,null);t["default"]=c.exports},"4e2d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.pageConfig.total?n("div",{staticClass:"pageComponent"},[n("button",{attrs:{disabled:1===e.currentPage},on:{click:e.prePage}},[e._v("上一页")]),e.pageTotal<=e.showPageNo?e._l(e.pageTotal,(function(t){return n("button",{key:t,class:{active:t===e.currentPage},on:{click:function(n){return e.changeCurrentPage(t)}}},[e._v(e._s(t))])})):e.currentPage<4?[e._l(6,(function(t){return n("button",{key:t,class:{active:t===e.currentPage},on:{click:function(n){return e.changeCurrentPage(t)}}},[e._v(e._s(t))])})),n("button",{attrs:{disabled:!0}},[e._v("···")]),n("button",{on:{click:function(t){return e.changeCurrentPage(e.pageTotal)}}},[e._v(e._s(e.pageTotal))])]:e.currentPage>e.pageTotal-4?[n("button",{on:{click:function(t){return e.changeCurrentPage(1)}}},[e._v("1")]),n("button",{attrs:{disabled:!0}},[e._v("···")]),e._l(6,(function(t){return n("button",{key:t,class:{active:t+(e.pageTotal-6)===e.currentPage},on:{click:function(n){e.changeCurrentPage(t+(e.pageTotal-6))}}},[e._v(e._s(t+(e.pageTotal-6)))])}))]:[n("button",{on:{click:function(t){return e.changeCurrentPage(1)}}},[e._v("1")]),n("button",{attrs:{disabled:!0}},[e._v("···")]),n("button",{on:{click:function(t){return e.changeCurrentPage(e.currentPage-2)}}},[e._v(e._s(e.currentPage-2))]),n("button",{on:{click:function(t){return e.changeCurrentPage(e.currentPage-1)}}},[e._v(e._s(e.currentPage-1))]),n("button",{staticClass:"active"},[e._v(e._s(e.currentPage))]),n("button",{on:{click:function(t){return e.changeCurrentPage(e.currentPage+1)}}},[e._v(e._s(e.currentPage+1))]),n("button",{on:{click:function(t){return e.changeCurrentPage(e.currentPage+2)}}},[e._v(e._s(e.currentPage+2))]),n("button",{attrs:{disabled:!0}},[e._v("···")]),n("button",{on:{click:function(t){return e.changeCurrentPage(e.pageTotal)}}},[e._v(e._s(e.pageTotal))])],n("button",{attrs:{disabled:e.currentPage===e.pageTotal},on:{click:e.nextPage}},[e._v("下一页")])],2):e._e()},r=[],o={name:"pageComponent",props:{pageConfig:{type:Object,require:!0,default:function(){return{pageSize:10,pageNo:0,total:0,pageTotal:0}}}},data:function(){return{showPageNo:8,currentPage:0}},methods:{prePage:function(){this.currentPage-=1,this.$emit("changeCurrentPage",this.currentPage)},nextPage:function(){this.currentPage+=1,this.$emit("changeCurrentPage",this.currentPage)},changeCurrentPage:function(e){this.currentPage=e,this.$emit("changeCurrentPage",this.currentPage)}},computed:{pageTotal:function(){var e=this.pageConfig;return e.pageTotal?e.pageTotal:e.pageSize&&e.total?Math.ceil(e.total/e.pageSize):0}},created:function(){this.currentPage=this.pageConfig.pageNo||0}},s=o,i=(n("d430"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,null,null);t["a"]=u.exports},5393:function(e,t,n){},d430:function(e,t,n){"use strict";var a=n("5393"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-3338aaac.fa34a155.js.map