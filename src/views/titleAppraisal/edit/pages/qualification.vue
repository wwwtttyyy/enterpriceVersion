<template>
  <div>
    <card title="从业或职（执）业资格" @save="saveMessage">
      <modal slot="header" title="新增从业或职（执）业资格">
        <el-button type="primary" style="padding:7px" slot="component" icon="el-icon-plus">新建</el-button>
        <qualification-form type="success" style="padding:7px" slot="content" icon="el-icon-plus">新建</qualification-form>
      </modal>
      <div slot="body">
        <el-alert type="warning" :closable="false" show-icon style="margin-bottom:20px">
          <p style="font-size:18px;margin-bottom:2px">填写说明</p>
          <p style="font-size:15px"> 请按照重要性先后顺序填写任现职以来的业绩成果，拖动列表进行排序。</p>
        </el-alert>
        <tables modalTitle="新增从业或职（执）业资格" :tableData="tableData" :col="col" @setRow="getRow" @deleteItem="deleteData">
          <qualification-form></qualification-form>
        </tables>
      </div>
    </card>
  </div>
</template>

<script>
import card from './card'
import qualificationForm from '../components/qualificationForm'
import modal from '../components/modal'
import tables from '../components/tables'
export default {
  data() {
    return {
      currentRow: '',
      dateQuery: '',
      col: [
        { label: '资格名称', prop: 'qualiName' },
        { label: '取得时间', prop: 'getTime' },
        { label: '批准时间', prop: 'approvalTime' },
        { label: '专业名称', prop: 'professional' },
        { label: '证书编号', prop: 'cetiNum' }
      ],
      tableData: [
        {
          publishTime: '2016-05-02',
          provePerson: '虎',
          rewardName: '上海市普陀区金沙江路  弄'
        },
        {
          publishTime: '2016-05-08',
          provePerson: '王小虎',
          rewardName: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },

  components: {
    card,
    qualificationForm,
    tables,
    modal
  },

  computed: {},

  mounted() {
  },

  methods: {
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
      this.$router.push('/titleAppraisal/edit/pages/researchMaterial')
    }
  }
}
</script>
<style lang='' scoped>
</style>
