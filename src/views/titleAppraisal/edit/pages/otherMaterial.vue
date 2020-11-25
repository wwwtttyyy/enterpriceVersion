<template>
  <div>
    <card title="其他材料" @save="saveMessage">
      <modal slot="header" title="新增其他材料">
        <el-button type="primary" style="padding:7px" slot="component" icon="el-icon-plus">新建</el-button>
        <otherMaterial-form type="success" style="padding:7px" slot="content" icon="el-icon-plus">新建</otherMaterial-form>
      </modal>
      <div slot="body">
        <el-alert type="warning" :closable="false" show-icon style="margin-bottom:20px">
          <p style="font-size:18px;margin-bottom:2px">填写说明</p>
          <p style="font-size:15px"> 高校和科研院所申报人员，还应提供国（境）外工作和研究佐证材料，国（境）外工作研究经历不包括在国（境）外攻读学历、学位的时间。</p>
        </el-alert>
        <tables modalTitle="新增其他材料" :tableData="tableData" :col="col" @setRow="getRow" @deleteItem="deleteData">
          <otherMaterial-form></otherMaterial-form>
        </tables>
      </div>
    </card>
  </div>
</template>

<script>
import card from './card'
import otherMaterialForm from '../components/otherMaterialForm'
import modal from '../components/modal'
import tables from '../components/tables'
export default {
  data() {
    return {
      currentRow: '',
      dateQuery: '',
      col: [
        { label: '标题', prop: 'title' }
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
    otherMaterialForm,
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
      this.$router.push('/titleAppraisal/edit/pages/submit')
    }
  }
}
</script>
<style lang='' scoped>
</style>
