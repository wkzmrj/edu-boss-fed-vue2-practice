"use strict";(self["webpackChunkedu_boss_fed_vue2"]=self["webpackChunkedu_boss_fed_vue2"]||[]).push([[893],{2206:function(e,t,s){s.r(t),s.d(t,{default:function(){return l}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"alloc-menu"},[t("el-card",[t("el-tree",{ref:"menu-tree",attrs:{"node-key":"id",data:e.menus,props:e.defaultProps,"default-checked-keys":e.checkedKeys,"show-checkbox":"","default-expand-all":""}}),t("div",{staticStyle:{margin:"20px"}},[t("el-button",{on:{click:e.onReset}},[e._v("清空")]),t("el-button",{attrs:{type:"primary"},on:{click:e.onSave}},[e._v("保存")])],1)],1)],1)},u=[],o=(s(7658),s(5216)),r={name:"AllocMenu",props:{roleId:{type:[Number,String],required:!0}},created(){this.loadMenus(),this.loadRoleMenus()},data(){return{menus:[],defaultProps:{children:"subMenuList",label:"name"},checkedKeys:[]}},methods:{onReset(){this.$refs["menu-tree"].setCheckedKeys([])},getCheckedKeys(e){e.forEach((e=>{if(e.selected)return e.subMenuList?this.getCheckedKeys(e.subMenuList):void(this.checkedKeys=[...this.checkedKeys,e.id])}))},async loadRoleMenus(){const{data:e}=await(0,o._L)(this.roleId);"000000"===e.code&&this.getCheckedKeys(e.data)},async onSave(){const{data:e}=await(0,o.nv)({roleId:this.roleId,menuIdList:this.$refs["menu-tree"].getCheckedKeys()});"000000"===e.code&&(this.$message.success("分配菜单成功"),this.$router.push({name:"role"}))},async loadMenus(){const{data:e}=await(0,o.Wr)();"000000"===e.code&&(this.menus=e.data)}}},a=r,d=s(1001),c=(0,d.Z)(a,n,u,!1,null,"11ffccac",null),l=c.exports},5216:function(e,t,s){s.d(t,{RD:function(){return a},Wr:function(){return d},_L:function(){return l},kJ:function(){return u},lj:function(){return o},nv:function(){return c},xz:function(){return r}});var n=s(3139);const u=(e=-1)=>(0,n.Z)({method:"GET",url:"/boss/menu/getEditMenuInfo",params:{id:e}}),o=e=>(0,n.Z)({method:"POST",url:"/boss/menu/saveOrUpdate",data:e}),r=e=>(0,n.Z)({method:"GET",url:"boss/menu/getAll"}),a=e=>(0,n.Z)({method:"DELETE",url:`/boss/menu/${e}`}),d=()=>(0,n.Z)({method:"GET",url:"/boss/menu/getMenuNodeList"}),c=e=>(0,n.Z)({method:"POST",url:"/boss/menu/allocateRoleMenus",data:e}),l=e=>(0,n.Z)({method:"GET",url:"/boss/menu/getRoleMenus",params:{roleId:e}})}}]);
//# sourceMappingURL=alloc-menu.ed2bdbe1.js.map