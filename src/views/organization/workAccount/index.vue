<template>
  <div>
    <card title="单位人事（职改）人员信息">
      <div slot="head">
        <!-- <el-button type="primary" style="padding:7px">新建人事（职改）人员</el-button> -->
        <add-account></add-account>
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
import addAccount from './addAccount'
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
    addAccount,
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
