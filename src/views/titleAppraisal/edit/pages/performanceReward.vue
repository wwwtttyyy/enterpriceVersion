<template>
  <div>
    <card title="业绩奖项" @save="saveMessage">
      <modal slot="header" title="新增业绩奖项">
        <el-button type="primary" style="padding:7px" slot="component" icon="el-icon-plus">新建</el-button>
        <performance-reward-form type="success" style="padding:7px" slot="content" icon="el-icon-plus">新建</performance-reward-form>
      </modal>
      <div slot="body">
        <el-alert type="warning" :closable="false" show-icon style="margin-bottom:20px">
          <p style="font-size:18px;margin-bottom:2px">填写说明</p>
          <p style="font-size:15px"> 请按照重要性先后顺序填写任现职以来的业绩奖项，拖动列表进行排序。</p>
        </el-alert>
        <tables modalTitle="新增业绩奖项" :tableData="tableData" :col="col" @setRow="getRow" @deleteItem="deleteData">
          <performance-reward-form></performance-reward-form>
        </tables>
      </div>
    </card>
  </div>
</template>

<script>
import card from './card'
import performanceRewardForm from '../components/performanceRewardForm'
import modal from '../components/modal'
import tables from '../components/tables'
export default {
  data() {
    return {
      currentRow: '',
      dateQuery: '',
      col: [
        { label: '项目名称', prop: 'rewardName' },
        { label: '奖励等级', prop: 'rewardLevel' },
        { label: '授予时间', prop: 'time' },
        { label: '授予机构', prop: 'organization' }
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
    performanceRewardForm,
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
      this.$router.push('/titleAppraisal/edit/pages/performancePatent')
    }
  }
}
</script>
<style lang='' scoped>
</style>
