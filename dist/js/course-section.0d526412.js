"use strict";(self["webpackChunkedu_boss_fed_vue2"]=self["webpackChunkedu_boss_fed_vue2"]||[]).push([[390],{3996:function(e,s,t){t.r(s),t.d(s,{default:function(){return h}});t(7658);var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"course-section"},[s("el-card",[s("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{data:e.sections,props:e.defaultProps,draggable:"","allow-drop":e.handleAllowDrop},on:{"node-drop":e.handleNodeDrop},scopedSlots:e._u([{key:"default",fn:function({node:t,data:a}){return s("div",{staticClass:"inner"},[s("span",[e._v(e._s(t.label))]),a.sectionName?s("span",{staticClass:"actions"},[s("el-button",[e._v("编辑")]),s("el-button",[e._v("添加课时")]),s("el-button",[e._v("状态")])],1):s("span",{staticClass:"actions"},[s("el-button",[e._v("编辑")]),s("el-button",{on:{click:function(s){return e.$router.push({name:"course-video",params:{courseId:e.courseId},query:{lessonId:a.id}})}}},[e._v("上传视频")]),s("el-button",[e._v("状态")])],1)])}}])})],1)],1)},o=[],n=t(3139);const d=e=>(0,n.Z)({method:"GET",url:"/boss/course/section/getSectionAndLesson",params:{courseId:e}}),r=e=>(0,n.Z)({method:"POST",url:"/boss/course/section/saveOrUpdateSection",data:e}),i=e=>(0,n.Z)({method:"POST",url:"/boss/course/lesson/saveOrUpdate",data:e});var c={name:"CourseSection",props:{courseId:{type:[String,Number],required:!0}},created(){this.loadSection()},data(){return{sections:[],defaultProps:{children:"lessonDTOS",label(e){return e.sectionName||e.theme}},isLoading:!1}},methods:{async handleNodeDrop(e,s,t,a){this.isLoading=!0;try{await Promise.all(s.parent.childNodes.map(((s,t)=>e.data.sectionId?i({id:s.data.id,orderNum:t}):r({id:s.data.id,orderNum:t})))),this.$message.success("数据更新成功")}catch(o){this.$message.error("数据更新失败",o)}this.isLoading=!1},handleAllowDrop(e,s,t){return"inner"!==t&&e.data.sectionId===s.data.sectionId},async loadSection(){const{data:e}=await d(this.courseId);"000000"===e.code&&(this.sections=e.data)}}},u=c,l=t(1001),p=(0,l.Z)(u,a,o,!1,null,"15aa872a",null),h=p.exports}}]);
//# sourceMappingURL=course-section.0d526412.js.map