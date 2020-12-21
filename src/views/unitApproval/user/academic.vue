<template>
  <div>
    <card title="论文、著作" >
      <div slot="body">
        <tables :show=false modalTitle="论文、著作" :tableData="tableData" :col="col">
          <academic-form  :data="currentRow" ref="editForm"></academic-form>
        </tables>
      </div>

    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
import modal from '@/views/components/modal'
import tables from '@/views/components/tables'
import academicForm from './form/academicForm'
import {getAcademicInfo} from '@/api/unitApproval/user'
export default {
  data() {
    return {
      currentRow: {},
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

      ]
    }
  },

  components: {
    card,
    tables,
    academicForm,
    modal
  },

  computed: {},

  created() {
    this.getInfo()
  },

  methods: {
    handleClick(row) {
      console.log(row)
    },
    getRow(row) {
      // 获取到当前行的数据
      Object.assign(this.currentRow, row)
    },
    async getInfo() {
      console.log(sessionStorage.getItem('usercertificateNum'))
      const param = {
        certificateNum: sessionStorage.getItem('usercertificateNum')
      }
      const res = await getAcademicInfo(param)
      console.log(res)
      this.tableData = res.data
    }

  }
}
</script>
<style lang='' scoped>
</style>
