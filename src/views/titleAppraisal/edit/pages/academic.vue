<template>
  <div>
    <card title="论文、著作" @save="saveMessage">
      <modal slot="header" title="新增论文、著作">
        <el-button type="primary" style="padding:7px" slot="component" icon="el-icon-plus">新建</el-button>
        <academic-form type="success" style="padding:7px" slot="content" icon="el-icon-plus">新建</academic-form>
        <!-- <test slot="content"></test> -->
      </modal>
      <div slot="body">
        <el-alert type="warning" :closable="false" show-icon style="margin-bottom:20px">
          <p style="font-size:18px;margin-bottom:2px">填写说明</p>
          <p style="font-size:15px"> 请按照重要性先后顺序填写论文、著作信息，拖动列表进行排序。</p>
        </el-alert>
        <tables modalTitle="新增论文、著作" :tableData="tableData" :col="col" @setRow="getRow" @deleteItem="deleteData">
          <academic-form></academic-form>
        </tables>
      </div>

    </card>
  </div>
</template>

<script>
import card from './card'
import academicForm from '../components/academicForm'
import modal from '../components/modal'
import tables from '../components/tables'
export default {
  data() {
    return {
      dateQuery: '',
      col: [
        { label: '发表时间', prop: 'publishTime' },
        { label: '论文类别', prop: 'bookType' },
        { label: '论文著作名称', prop: 'bookName' },
        { label: '登载刊物名称、刊号', prop: 'bookNum' },
        { label: '角色', prop: 'jues' },
        { label: '是否代表作', prop: 'magnum' }
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
    academicForm,
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
      this.$router.push('/titleAppraisal/edit/pages/performanceResult')
    }
  }
}
</script>
<style lang='' scoped>
</style>
