<template>
  <div>
    <card title="业绩成果" @save="saveMessage">
      <modal slot="header" title="新增主要经历" >
        <el-button type="primary" style="padding:7px" slot="component" icon="el-icon-plus">新建</el-button>
        <performance-result-form type="success" style="padding:7px" slot="content" icon="el-icon-plus">新建</performance-result-form>
        <!-- <test slot="content"></test> -->
      </modal>
      <div slot="body">
        <el-alert type="warning" :closable="false" show-icon style="margin-bottom:20px">
          <p style="font-size:18px;margin-bottom:2px">填写说明</p>
          <p style="font-size:15px"> 请按照重要性先后顺序填写任现职以来的业绩成果，拖动列表进行排序。</p>
        </el-alert>
        <tables modalTitle="新增学历情况" :tableData="tableData" :col="col" @setRow="getRow" @deleteItem="deleteData">
          <performance-result-form></performance-result-form>
        </tables>
      </div>

    </card>
  </div>
</template>

<script>
import card from './card'
import performanceResultForm from '../components/performanceResultForm'
import modal from '../components/modal'
import tables from '../components/tables'
export default {
  data() {
    return {
      dateQuery: '',
      col: [
        { label: '开始时间', prop: 'startTime' },
        { label: '结束时间', prop: 'deadline' },
        { label: '项目级别（规模）', prop: 'proLevel' },
        { label: '业绩名称（如项目，专利，标准，课题等）', prop: 'proName' }
      ],
      dropCol: [
        { label: '开始时间', prop: 'startTime' },
        { label: '结束时间', prop: 'deadline' },
        { label: '项目级别（规模）', prop: 'proLevel' },
        { label: '业绩名称（如项目，专利，标准，课题等）', prop: 'proName' }
      ],
      tableData: [
        {
          publishTime: '2016-05-02',
          provePerson: '虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          publishTime: '2016-05-08',
          provePerson: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },

  components: {
    card,
    performanceResultForm,
    tables,
    modal
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
      this.$router.push('/titleAppraisal/edit/pages/performanceReward')
    }
  }
}
</script>
<style lang='' scoped>
</style>
