"use strict";(self["webpackChunkedu_boss_fed_vue2"]=self["webpackChunkedu_boss_fed_vue2"]||[]).push([[596],{5335:function(e,t,r){r.d(t,{Z:function(){return m}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"menu-create-or-edit"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v(e._s(e.isEdit?"编辑菜单":"添加菜单"))])]),t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"菜单名称"}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"菜单路径"}},[t("el-input",{model:{value:e.form.href,callback:function(t){e.$set(e.form,"href",t)},expression:"form.href"}})],1),t("el-form-item",{attrs:{label:"上级菜单"}},[t("el-select",{attrs:{placeholder:"请选择上级菜单"},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}},[t("el-option",{attrs:{label:"无上级菜单",value:-1}}),e._l(e.parentMenuList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],2)],1),t("el-form-item",{attrs:{label:"描述"}},[t("el-input",{model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),t("el-form-item",{attrs:{label:"前端图标"}},[t("el-input",{model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1),t("el-form-item",{attrs:{label:"是否显示"}},[t("el-radio-group",{model:{value:e.form.shown,callback:function(t){e.$set(e.form,"shown",t)},expression:"form.shown"}},[t("el-radio",{attrs:{label:!0}},[e._v("是")]),t("el-radio",{attrs:{label:!1}},[e._v("否")])],1)],1),t("el-form-item",{attrs:{label:"排序"}},[t("el-input-number",{attrs:{label:"描述文字"},model:{value:e.form.orderNum,callback:function(t){e.$set(e.form,"orderNum",t)},expression:"form.orderNum"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e.isEdit?e._e():t("el-button",[e._v("重置")])],1)],1)],1)],1)},n=[],a=(r(7658),r(5216)),s={name:"CreateOrEdit",props:{isEdit:{type:Boolean,default:!1}},data(){return{form:{parentId:-1,name:"",href:"",icon:"",orderNum:0,description:"",shown:!1},parentMenuList:[]}},created(){this.loadMenuInfo()},methods:{async onSubmit(){const{data:e}=await(0,a.lj)(this.form);"000000"===e.code&&(this.$message.success("提交成功"),this.$router.push({name:"menu"}))},async loadMenuInfo(){const e=this.$route.params.id||-1,{data:t}=await(0,a.kJ)(e);"000000"===t.code&&(this.parentMenuList=t.data.parentMenuList,t.data.menuInfo&&(this.form=t.data.menuInfo))}}},l=s,i=r(1001),u=(0,i.Z)(l,o,n,!1,null,"ed0cb9e8",null),m=u.exports},5831:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"menu-edit"},[t("create-or-edit",{attrs:{"is-edit":!0}})],1)},n=[],a=r(5335),s={name:"MenuEdit",components:{CreateOrEdit:a.Z}},l=s,i=r(1001),u=(0,i.Z)(l,o,n,!1,null,"f525cd88",null),m=u.exports},5216:function(e,t,r){r.d(t,{RD:function(){return l},Wr:function(){return i},_L:function(){return m},kJ:function(){return n},lj:function(){return a},nv:function(){return u},xz:function(){return s}});var o=r(3139);const n=(e=-1)=>(0,o.Z)({method:"GET",url:"/boss/menu/getEditMenuInfo",params:{id:e}}),a=e=>(0,o.Z)({method:"POST",url:"/boss/menu/saveOrUpdate",data:e}),s=e=>(0,o.Z)({method:"GET",url:"boss/menu/getAll"}),l=e=>(0,o.Z)({method:"DELETE",url:`/boss/menu/${e}`}),i=()=>(0,o.Z)({method:"GET",url:"/boss/menu/getMenuNodeList"}),u=e=>(0,o.Z)({method:"POST",url:"/boss/menu/allocateRoleMenus",data:e}),m=e=>(0,o.Z)({method:"GET",url:"/boss/menu/getRoleMenus",params:{roleId:e}})}}]);
//# sourceMappingURL=menu-edit.d254e7f9.js.map