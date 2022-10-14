<template>
    <div class="resource-list">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <el-form :inline="true" :model="form" class="demo-form-inline" ref="form">
                    <el-form-item label="资源名称" prop="name">
                        <el-input v-model="form.name" placeholder="资源名称" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="资源路径" prop="url">
                        <el-input v-model="form.url" placeholder="资源路径" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="资源分类" prop="categoryId">
                        <el-select v-model="form.categoryId" placeholder="资源分类" clearable>
                            <!-- 请求接口进行下拉菜单项设置遍历所有 -->
                            <el-option v-for="item in resourceCategories" :key="item.id" :label="item.name"
                                :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="onReset">重置
                        </el-button>
                        <el-button type="primary" :disabled="isLoading" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-table :data="resources" style="width: 100%" v-loading="isLoading">
                <el-table-column type="index" label="编号" width="100">
                </el-table-column>
                <el-table-column prop="name" label="资源名称">
                </el-table-column>
                <el-table-column prop="url" label="资源路径">
                </el-table-column>
                <el-table-column prop="description" label="描述">
                </el-table-column>
                <!-- 设置过滤器需要使用作用域插槽获取数据 -->
                <el-table-column label="添加时间">
                    <template slot-scope="scope">
                        <span>{{ scope.row.createdTime | dateFormat }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button size="mini" @click="handleDelete(scope.row)" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页组件结构 -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="form.current" :page-sizes="[10, 15, 20]" :page-size="form.size"
                layout="total, sizes, prev, pager, next, jumper" :total="totalCount" :disabled="isLoading">
            </el-pagination>
        </el-card>
    </div>
</template>
<script>
import { getResourcePages, getResourceCategories } from '@/services/resource'
export default {
  name: 'ResourceList',
  data () {
    return {
      resources: [],
      form: {
        current: 1,
        size: 10,
        name: '',
        url: '',
        categoryId: ''
      },
      totalCount: 0,
      resourceCategories: [],
      isLoading: false
    }
  },
  created () {
    this.loadResource()
    this.loadResouceCategories()
  },
  methods: {
    onReset () {
      this.$refs.form.resetField()
    },
    onSubmit () {
      this.form.current = 1
      this.loadResource()
    },
    async loadResouceCategories () {
      const { data } = await getResourceCategories()
      if (data.code === '000000') {
        this.resourceCategories = data.data
      }
    },
    handleSizeChange (val) {
      this.form.size = val
      this.form.current = 1
    },
    handleCurrentChange (val) {
      this.form.current = val
      this.loadResource()
    },
    async loadResource () {
      this.isLoading = true
      const { data } = await getResourcePages(this.form)
      if (data.code === '000000') {
        this.resource = data.data.records
        this.totalCount = data.data.total
        this.isLoading = false
      }
    },
    handleEdit () {

    },
    handleDelete () {

    }
  },
  filter: {
    dateFormat (date) {
      date = new Date(date)
      return `
        ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}
        ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
      `
    }
  }
}

</script>
<style lang="scss" scoped>

</style>
