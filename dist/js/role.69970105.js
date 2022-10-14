"use strict";(self["webpackChunkedu_boss_fed_vue2"]=self["webpackChunkedu_boss_fed_vue2"]||[]).push([[647],{9054:function(e,t,l){l.r(t),l.d(t,{default:function(){return y}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"role"},[t("role-list")],1)},s=[],a=(l(7658),function(){var e=this,t=e._self._c;return t("div",{staticClass:"role-list"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("el-form",{ref:"form",attrs:{model:e.form}},[t("el-form-item",{attrs:{label:"角色名称"}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",[t("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")]),t("el-button",{on:{click:e.onReset}},[e._v("重置")])],1)],1)],1),t("el-button",{on:{click:e.handleAdd}},[e._v("添加角色")]),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:e.roles}},[t("el-table-column",{attrs:{prop:"id",label:"编号"}}),t("el-table-column",{attrs:{prop:"name",label:"角色名称"}}),t("el-table-column",{attrs:{prop:"description",label:"描述"}}),t("el-table-column",{attrs:{prop:"createdTime",label:"添加时间"}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("div",[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.$router.push({name:"alloc-menu",params:{roleId:l.row.id}})}}},[e._v("分配菜单")]),t("el-button",{attrs:{type:"text"}},[e._v("分配资源")])],1),t("div",[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(l.row)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(l.row)}}},[e._v("删除")])],1)]}}])})],1),t("el-dialog",{attrs:{title:e.isEdit?"编辑角色":"添加角色",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("create-or-edit",{attrs:{"is-edit":e.isEdit,"role-id":e.roleId},on:{success:e.handleSuccess,cancel:e.handleCancel}})],1)],1)],1)}),i=[],r=l(2854),n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"create-or-edit"},[t("el-form",[t("el-form-item",{attrs:{label:"角色名称"}},[t("el-input",{model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),t("el-form-item",{attrs:{label:"角色编码"}},[t("el-input",{model:{value:e.role.code,callback:function(t){e.$set(e.role,"code",t)},expression:"role.code"}})],1),t("el-form-item",{attrs:{label:"角色描述"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),t("el-form-item",[t("el-button",{on:{click:e.onCancel}},[e._v("取消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确认")])],1)],1)],1)},d=[],c={name:"CreateOrEdit",props:{isEdit:{type:Boolean,default:!1},roleId:{type:[Number,String]}},created(){this.isEdit&&this.loadRole()},data(){return{role:{name:"",code:"",description:""}}},methods:{async loadRole(){const{data:e}=await(0,r.xQ)(this.roleId);"000000"===e.code&&(this.role=e.data,this.role={})},onCancel(){this.$emit("cancel"),this.role={}},async onSubmit(){const{data:e}=await(0,r.T9)(this.role);"000000"===e.code&&(this.$emit("success"),this.$message.success("添加成功"),this.role={})}}},u=c,m=l(1001),h=(0,m.Z)(u,n,d,!1,null,"626ecbfd",null),b=h.exports,f={name:"RoleList",components:{CreateOrEdit:b},data(){return{form:{name:""},isLoading:!1,roles:[],dialogVisible:!1,isEdit:!1,roleId:""}},created(){this.loadRoles()},methods:{handleAdd(){this.dialogVisible=!0,this.isEdit=!1},handleCancel(){this.dialogVisible=!1},handleSuccess(){this.dialogVisible=!1,this.loadRoles()},onReset(){},onSubmit(){},handleEdit(e){this.dialogVisible=!0,this.isEdit=!0,this.roleId=e.id},handleDelete(e){this.$confirm(`确认删除角色：${e.name}？`,"删除提示").then((async()=>{await(0,r.Rd)(e.id),this.$message.success("删除成功"),this.loadRoles()})).catch((e=>{e&&e.response?this.$message.error("删除失败，请重试"):this.$message.info("取消删除")}))},async loadRoles(){const{data:e}=await(0,r.F3)(this.form);this.roles=e.data.recoreds}}},p=f,v=(0,m.Z)(p,a,i,!1,null,"d2ffce08",null),g=v.exports,_={name:"LoginIndex",components:{RoleList:g}},x=_,k=(0,m.Z)(x,o,s,!1,null,"815c7558",null),y=k.exports},2854:function(e,t,l){l.d(t,{F3:function(){return s},Jm:function(){return c},Rd:function(){return a},T9:function(){return i},uD:function(){return d},xJ:function(){return n},xQ:function(){return r}});var o=l(3139);const s=e=>(0,o.Z)({method:"POST",url:"/boss/role/getRolePages",data:e}),a=e=>(0,o.Z)({method:"DELETE",url:`/boss/role/${e}`}),i=e=>(0,o.Z)({method:"POST",url:"/boss/role/saveOrUpdate",data:e}),r=e=>(0,o.Z)({method:"GET",url:`/boss/role/${e}`}),n=()=>(0,o.Z)({method:"GET",url:"/boss/role/all"}),d=e=>(0,o.Z)({method:"POST",url:"/boss/role/allocateUserRoles",data:e}),c=e=>(0,o.Z)({method:"GET",url:`/boss/role/user/${e}`})}}]);
//# sourceMappingURL=role.69970105.js.map