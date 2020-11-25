<template>
  <div>
    <card title="国（境）工作或研究材料"  @save="saveMessage">
      <modal slot="header" title="新增国（境）工作或研究材料">
        <el-button type="primary" style="padding:7px" slot="component" icon="el-icon-plus">新建</el-button>
        <researchMaterial-form type="success" style="padding:7px" slot="content" icon="el-icon-plus">新建</researchMaterial-form>
      </modal>
      <div slot="body">
        <el-alert type="warning" :closable="false" show-icon style="margin-bottom:20px">
          <p style="font-size:18px;margin-bottom:2px">填写说明</p>
          <p style="font-size:15px"> 高校和科研院所申报人员，还应提供国（境）外工作和研究佐证材料，国（境）外工作研究经历不包括在国（境）外攻读学历、学位的时间。</p>
        </el-alert>
        <tables modalTitle="新增国（境）工作或研究材料" :tableData="tableData" :col="col" @setRow="getRow" @deleteItem="deleteData">
          <researchMaterial-form></researchMaterial-form>
        </tables>
      </div>
    </card>
  </div>
</template>

<script>
import card from './card'
import researchMaterialForm from '../components/researchMaterialForm'
import modal from '../components/modal'
import tables from '../components/tables'
export default {
  data() {
    return {
      currentRow: '',
      dateQuery: '',
      col: [
        { label: '开始时间', prop: 'startTime' },
        { label: '截止时间', prop: 'deadline' },
        { label: '工作单位', prop: 'workUnit' },
        { label: '职务岗位', prop: 'position' }
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
    researchMaterialForm,
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
      this.$router.push('/titleAppraisal/edit/pages/jobSummary')
    }
  }
}
</script>
<style lang='' scoped>
</style>
