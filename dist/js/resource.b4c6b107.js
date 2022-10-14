"use strict";(self["webpackChunkedu_boss_fed_vue2"]=self["webpackChunkedu_boss_fed_vue2"]||[]).push([[105],{295:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"course"},[t("course-list")],1)},s=[],o=(a(7658),function(){var e=this,t=e._self._c;return t("div",{staticClass:"course-list"},[t("el-card",[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("数据筛选")])]),t("el-form",{ref:"form",attrs:{inline:!0,"label-position":"left",model:e.filterParams}},[t("el-form-item",{attrs:{label:"课程名称：",prop:"courseName"}},[t("el-input",{model:{value:e.filterParams.courseName,callback:function(t){e.$set(e.filterParams,"courseName",t)},expression:"filterParams.courseName"}})],1),t("el-form-item",{attrs:{label:"状态：",prop:"status"}},[t("el-select",{model:{value:e.filterParams.status,callback:function(t){e.$set(e.filterParams,"status",t)},expression:"filterParams.status"}},[t("el-option",{attrs:{label:"全部",value:""}}),t("el-option",{attrs:{label:"上架",value:"1"}}),t("el-option",{attrs:{label:"下架",value:"0"}})],1)],1),t("el-form-item",[t("el-button",{attrs:{disabled:e.isLoading},on:{click:e.handleReset}},[e._v("重置")]),t("el-button",{attrs:{type:"primary",disabled:e.isLoading},on:{click:e.handleFilter}},[e._v("查询")])],1)],1)],1),t("el-card",[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("查询结果：")]),t("el-button",{staticStyle:{float:"right","margin-top":"-10px"},attrs:{type:"primary"},on:{click:function(t){return e.$router.push({name:"course-create"})}}},[e._v("添加课程")])],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.courses}},[t("el-table-column",{attrs:{prop:"id",label:"ID",width:"100"}}),t("el-table-column",{attrs:{prop:"courseName",label:"课程名称",width:"230"}}),t("el-table-column",{attrs:{prop:"price",label:"价格"}}),t("el-table-column",{attrs:{prop:"sortNum",label:"排序"}}),t("el-table-column",{attrs:{prop:"status",label:"上架状态"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":1,"inactive-value":0,disabled:a.row.isStatusLoading},on:{change:function(t){return e.onStateChange(a.row)}},model:{value:a.row.status,callback:function(t){e.$set(a.row,"status",t)},expression:"scope.row.status"}})]}}])}),t("el-table-column",{attrs:{prop:"price",label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{on:{click:function(t){return e.$router.push({name:"course-edit",params:{courseId:a.row.id}})}}},[e._v("编辑")]),t("el-button",{on:{click:function(t){return e.$router.push({name:"course-section",params:{courseId:a.row.id}})}}},[e._v("内容管理")])]}}])})],1),t("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.totalCount,disabled:e.isLoading,"current-page":e.filterParams.currentPage},on:{"current-change":e.handleCurrentChange}})],1)],1)}),l=[],n=a(66),i={name:"CourseList",data(){return{filterParams:{currentPage:1,pageSize:10,courseName:"",status:""},courses:[],totalCount:0,isLoading:!1}},created(){this.loadCourse()},methods:{async onStateChange(e){e.isStatusLoading=!0;const{data:t}=await(0,n.$p)({courseId:e.id,status:e.status});"000000"===t.code&&(this.$message.success((1===e.status?"上架":"下架")+"成功"),e.isStatusLoading=!1)},async loadCourses(){this.isLoading=!0;const{data:e}=await(0,n.a7)(this.filterParams);"000000"===e.code&&(e.data.records.forEach((e=>{e.isStatusLoading=!1})),this.courses=e.data.records,this.totalCount=e.data.total,this.isLoading=!1)},handleCurrentChange(e){this.filterParams.currentPage=e,this.loadCourses()},handleFilter(){this.filterParams.currentPage=1,this.loadCourses()},handleReset(){this.$refs.form.resetFields(),this.filterParams.currentPage=1,this.loadCourses()}}},u=i,c=a(1001),d=(0,c.Z)(u,o,l,!1,null,"827f0578",null),m=d.exports,f={name:"CourseIndex",components:{CourseList:m}},p=f,h=(0,c.Z)(p,r,s,!1,null,"85460ac4",null),g=h.exports},3066:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"resource"},[t("resource-list")],1)},s=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"resource-list"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("el-form",{ref:"form",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[t("el-form-item",{attrs:{label:"资源名称",prop:"name"}},[t("el-input",{attrs:{placeholder:"资源名称",clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"资源路径",prop:"url"}},[t("el-input",{attrs:{placeholder:"资源路径",clearable:""},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),t("el-form-item",{attrs:{label:"资源分类",prop:"categoryId"}},[t("el-select",{attrs:{placeholder:"资源分类",clearable:""},model:{value:e.form.categoryId,callback:function(t){e.$set(e.form,"categoryId",t)},expression:"form.categoryId"}},e._l(e.resourceCategories,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",[t("el-button",{on:{click:e.onReset}},[e._v("重置 ")]),t("el-button",{attrs:{type:"primary",disabled:e.isLoading},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:e.resources}},[t("el-table-column",{attrs:{type:"index",label:"编号",width:"100"}}),t("el-table-column",{attrs:{prop:"name",label:"资源名称"}}),t("el-table-column",{attrs:{prop:"url",label:"资源路径"}}),t("el-table-column",{attrs:{prop:"description",label:"描述"}}),t("el-table-column",{attrs:{label:"添加时间"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(e._f("dateFormat")(a.row.createdTime)))])]}}])}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleEdit(a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(a.row)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{"current-page":e.form.current,"page-sizes":[10,15,20],"page-size":e.form.size,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount,disabled:e.isLoading},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},l=[],n=a(3139);const i=e=>(0,n.Z)({method:"POST",url:"/boss/resource/getResourcePages",data:e}),u=()=>(0,n.Z)({method:"GET",url:"/boss/resource/category/getAll"});var c={name:"ResourceList",data(){return{resources:[],form:{current:1,size:10,name:"",url:"",categoryId:""},totalCount:0,resourceCategories:[],isLoading:!1}},created(){this.loadResource(),this.loadResouceCategories()},methods:{onReset(){this.$refs.form.resetField()},onSubmit(){this.form.current=1,this.loadResource()},async loadResouceCategories(){const{data:e}=await u();"000000"===e.code&&(this.resourceCategories=e.data)},handleSizeChange(e){this.form.size=e,this.form.current=1},handleCurrentChange(e){this.form.current=e,this.loadResource()},async loadResource(){this.isLoading=!0;const{data:e}=await i(this.form);"000000"===e.code&&(this.resource=e.data.records,this.totalCount=e.data.total,this.isLoading=!1)},handleEdit(){},handleDelete(){}},filter:{dateFormat(e){return e=new Date(e),`\n        ${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}\n        ${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}\n      `}}},d=c,m=a(1001),f=(0,m.Z)(d,o,l,!1,null,"a80095aa",null),p=f.exports,h={name:"ResourceIndex",components:{ResourceList:p}},g=h,b=(0,m.Z)(g,r,s,!1,null,"119abb71",null),v=b.exports},66:function(e,t,a){a.d(t,{$p:function(){return o},NI:function(){return n},Yt:function(){return i},a7:function(){return s},jt:function(){return l}});var r=a(3139);const s=e=>(0,r.Z)({method:"POST",url:"boss/course/getQueryCourses",data:e}),o=e=>(0,r.Z)({method:"GET",url:"/boss/course/changeState",params:e}),l=e=>(0,r.Z)({method:"POST",url:"/boss/course/saveOrUpdateCourse",data:e}),n=(e,t)=>(0,r.Z)({method:"POST",url:"/boss/course/upload",data:e,onUploadProgress:t}),i=e=>(0,r.Z)({method:"GET",url:"/boss/course/getCourseById",params:{courseId:e}})}}]);
//# sourceMappingURL=resource.b4c6b107.js.map