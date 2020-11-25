<template>
  <div>
    <card title="主要经历" @save="saveMessage">
      <modal slot="header" title="新增主要经历">
        <el-button type="primary" style="padding:7px" slot="component" icon="el-icon-plus">新建</el-button>
        <experience-form type="success" style="padding:7px" slot="content" icon="el-icon-plus">新建</experience-form>
        <!-- <test slot="content"></test> -->
      </modal>
      <div slot="body">
        <el-alert type="warning" :closable="false" show-icon style="margin-bottom:20px">
          <p style="font-size:18px;margin-bottom:2px">填写说明</p>
          <p style="font-size:15px"> 请填写专业技术工作经历信息，可拖动列表进行排序。</p>
        </el-alert>
        <tables modalTitle="新增主要经历" :tableData="tableData" :col="col" @setRow="getRow" @deleteItem="deleteData">
          <experience-form></experience-form>
        </tables>
      </div>

    </card>
  </div>
</template>

<script>
import card from './card'
import experienceForm from '../components/experienceForm'
import modal from '../components/modal'
import tables from '../components/tables'
export default {
  data() {
    return {
      dateQuery: '',
      col: [
        { label: '开始时间', prop: 'startTime' },
        { label: '截止时间', prop: 'deadline' },
        { label: '工作单位（学校）', prop: 'workUnit' },
        { label: '从事何种专业技术工作（学习）', prop: 'workContent' },
        { label: '职务', prop: 'office' },
        { label: '证明人', prop: 'provePerson' }
      ],
      tableData: [
        {
          dealine: '2016-05-02',
          provePerson: '虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          deadline: '2016-05-02',
          provePerson: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },

  components: {
    card,
    experienceForm,
    tables,
    modal
  },

  computed: {},

  mounted() {
    // this.rowDrop()
  },

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
      this.$router.push('/titleAppraisal/edit/pages/talentMaterials')
    }
  }
}
</script>
<style lang='' scoped>
</style>
