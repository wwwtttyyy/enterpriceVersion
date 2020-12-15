<template>
  <div>
    <card title="签章修改日志">
      <div slot="head">

      </div>
      <div slot="body">
        <el-alert title="注意事项" type="warning" description="如果查询不到信息，请先去广西专业技术人员服务平台 bttpl/my gxrczc.comlaccountlregister注册!" show-icon>
        </el-alert>
        <tables  :tableData="tableData" :col="col" @setRow="getRow" @deleteItem="deleteData">
        </tables>
      </div>
    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
import tables from '@/views/components/tables'
export default {
  name: '',
  props: [''],
  data() {
    return {
      col: [
        {
          label: '人事（职改）人员姓名', prop: 'name'
        },
        {
          label: '联系手机', prop: 'phone'
        },
        {
          label: '邮箱', prop: 'email'
        },
        {
          label: '是否启用', prop: 'enable'
        }
      ],
      tableData: []
    }
  },

  components: {
    card,
    tables
  },

  computed: {},

  methods: {
    getRow(row) {
      // 获取到当前行的数据
      this.currentRow = row
      console.log(row)
    },
    saveMessage() {
      this.$router.push('/titleAppraisal/edit/pages/mainExperience')
    },
    deleteData() {

    }
  }
}
</script>
<style lang='' scoped>
</style>
