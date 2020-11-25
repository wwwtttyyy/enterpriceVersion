<template>
  <div>
    <card title="人才引进相关材料" @save="saveMessage">
      <modal slot="header" title="新增引进人才相关材料">
        <el-button type="primary" style="padding:7px" slot="component" icon="el-icon-plus">新建</el-button>
        <talentMaterials-form type="success" style="padding:7px" slot="content" icon="el-icon-plus">新建</talentMaterials-form>
        <!-- <test slot="content"></test> -->
      </modal>
      <div slot="body">
        <el-alert type="warning" :closable="false" show-icon style="margin-bottom:20px">
          <p style="font-size:18px;margin-bottom:2px">填写说明</p>
          <p style="font-size:15px"> 请填写专业技术工作经历信息，可拖动列表进行排序。</p>
        </el-alert>
        <tables modalTitle="新增引进人才相关材料" :tableData="tableData" :col="col" @setRow="getRow" @deleteItem="deleteData">
          <talentMaterials-form></talentMaterials-form>
        </tables>
      </div>

    </card>
  </div>
</template>

<script>
import card from './card'
import talentMaterialsForm from '../components/talentMaterialsForm'
import modal from '../components/modal'
import tables from '../components/tables'
export default {
  data() {
    return {
      dateQuery: '',
      col: [
        { label: '材料名称', prop: 'materialName' }
      ],
      tableData: [
        {
          dealine: '2016-05-02',
          materialName: '虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          deadline: '2016-05-02',
          materialName: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },

  components: {
    card,
    talentMaterialsForm,
    tables,
    modal
  },

  computed: {},

  mounted() {
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
      this.$router.push('/titleAppraisal/edit/pages/academic')
    }
  }
}
</script>
<style lang='' scoped>
</style>
