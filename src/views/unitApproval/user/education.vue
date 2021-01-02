<template>
  <div>
    <card title="学历情况" >
      <div slot="body">
        <tables @setRow='getRow' :show=false  modalTitle="学历情况" :tableData="tableData" :col="col">
          <education-form :data="currentRow" ref="editForm"></education-form>
        </tables>
      </div>
    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
import modal from '@/views/components/modal'
import tables from '@/views/components/tables'
import educationForm from './form/educationForm'
import {getEduInfo} from '@/api/unitApproval/user'
export default {
  data() {
    return {
      currentRow: {},
      col: [
        { label: '毕业时间', prop: 'graduateTime' },
        { label: '学历项目', prop: 'project' },
        { label: '学历', prop: 'education' },
        { label: '毕业学校', prop: 'school' },
        { label: '专业', prop: 'profession' },
        { label: '学位', prop: 'degree' }
      ],
      tableData: [
        {
          graduateTime: '1'
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

  created() {
    this.getInfo()
  },

  methods: {
    getRow(row) {
      // 获取到当前行的数据
      Object.assign(this.currentRow, row)
      console.log(this.currentRow)
    },
    async getInfo() {
      console.log(sessionStorage.getItem('usercertificateNum'))
      const param = {
        certificateNum: sessionStorage.getItem('usercertificateNum')
      }
      const res = await getEduInfo(param)
      console.log(res)
      this.tableData = res.data
    }
  }
}
</script>
<style lang='' scoped>
</style>
