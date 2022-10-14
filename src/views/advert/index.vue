<template>
  <div class="advert">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button @click="$router.push({name: 'advert-create'})">添加广告</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="编号" type="index">
        </el-table-column>
        <el-table-column prop="name" label="广告名称">
        </el-table-column>
        <el-table-column prop="position" label="广告位置">
        </el-table-column>
        <el-table-column prop="image" label="广告图片">
        </el-table-column>
        <el-table-column prop="time" label="时间">
        </el-table-column>
        <el-table-column prop="name" label="状态" width="80">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.status">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getAllAds, saveOrUpdateAd } from '@/services/advert'

export default {
  name: 'AdvertIndex',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.loadAllAds()
  },
  methods: {
    handleEdit (rowData) {
      this.$router.push({
        name: 'advert-edit',
        param: {
          id: rowData.id
        }
      })
    },
    handleDelete (rowData) {
      this.$confirm('确认删除吗？', '删除提示')
        .then(async () => {
          const { data } = await saveOrUpdateAd(rowData.id)
          if (data.code === '000000') {
            this.$message.success('删除成功')
            this.loadAllMenus()
          }
        })
        .catch(() => {
          this.$message.info('已取消删除')
        })
    },
    async loadAllAds () {
      const { data } = await getAllAds()
      if (data.code === '000000') {
        this.tableData = data.data
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
