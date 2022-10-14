<template>
  <create-or-edit></create-or-edit>
</template>
<script>
import { getAdList, saveOrUpdateAd } from '@/services/advert'
import CreateOrEdit from './components/CreateOrEdit'
export default {
  name: 'AdvertCreate',
  components: {
    CreateOrEdit
  },
  data () {
    return {
      form: {
        name: '',
        spaceId: 0,
        keyWord: '',
        htmlContent: '',
        text: '',
        img: '',
        startTime: '',
        endTime: '',
        createTime: '',
        updateTime: '',
        status: 0,
        priority: 0,
        startTimeFormatString: '',
        endTimeFormatString: ''
      },
      ruleForm: {
        upload: false
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value2: ''
    }
  },
  created () {
    this.loadAdvert()
  },
  method: {
    async onSubmit () {
      const { data } = await saveOrUpdateAd(this.form)
      if (data.code === '000000') {
        this.$message.success('提交成功')
        this.$router.push({
          name: 'advert'
        })
      }
    },
    async loadAdvert () {
      const { data } = await getAdList()
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
