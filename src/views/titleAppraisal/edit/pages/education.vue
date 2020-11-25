<template>
  <div>
    <card title="学历情况" @save="saveMessage">
      <modal slot="header" title="新增学历情况">
        <el-button type="primary" style="padding:7px" slot="component" icon="el-icon-plus">新建</el-button>
        <education-form slot="content"></education-form>
      </modal>
      <div slot="body">
        <el-alert type="warning" :closable="false" show-icon style="margin-bottom:20px">
          <p style="font-size:18px;margin-bottom:2px">填写说明</p>
          <p style="font-size:15px">此处填写学历项目，“最高学历”为必录项，指截止目前所获得的最高学历。此项将作为评审重要条件体现在所做材料上。民营企业、社会组织及自由职业参评人员，教育部学信网不能够查询到学历的需提供学历证书、查档材料或学历认证机构出具的学历认证等相关材料。</p>
        </el-alert>
        <tables modalTitle="新增学历情况" :tableData="tableData" :col="col" @setRow="getRow" @deleteItem="deleteData">
          <education-form></education-form>
        </tables>
      </div>

    </card>
  </div>
</template>

<script>
import card from './card'
import educationForm from '../components/educationForm'
import modal from '../components/modal'
import tables from '../components/tables'
export default {
  data() {
    return {
      col: [
        { label: '毕业时间', prop: 'graduateTime' },
        { label: '学历项目', prop: 'project' },
        { label: '学历', prop: 'education' },
        { label: '毕业学校', prop: 'scholl' },
        { label: '专业', prop: 'profession' },
        { label: '学位', prop: 'degree' }
      ],
      tableData: [
        {
          graduateTime: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          graduateTime: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },

  components: {
    card,
    educationForm,
    modal,
    tables
  },

  computed: {},

  methods: {
    handleClick(row) {
      console.log(row)
    },
    deleteData(row) {
      console.log(row)
      console.log(this.currentRow)
    },
    getRow(row) {
      // 获取到当前行的数据
      this.currentRow = row
      console.log(row)
    },
    saveMessage() {
      this.$router.push('/titleAppraisal/edit/pages/mainExperience')
    }
  }
}
</script>
<style lang='' scoped>
</style>
