<template>
  <div>
    <card title="从业或职（执）业资格" >
      <div slot="body">
        <tables :show=false modalTitle="从业或职（执）业资格" :tableData="tableData" :col="col" >
          <qualification-form></qualification-form>
        </tables>
      </div>
    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
import modal from '@/views/components/modal'
import tables from '@/views/components/tables'
import qualificationForm from './form/qualificationForm'
import {getQualificateInfo} from '@/api/unitApproval/user'

export default {
  data() {
    return {
      currentRow: {},
      dateQuery: '',
      col: [
        { label: '资格名称', prop: 'qualiName' },
        { label: '取得时间', prop: 'getTime' },
        { label: '批准时间', prop: 'approvalTime' },
        { label: '专业名称', prop: 'professional' },
        { label: '证书编号', prop: 'cetiNum' }
      ],
      tableData: [
      ]
    }
  },

  components: {
    card,
    tables,
    qualificationForm,
    modal
  },

  computed: {},
  created() {
    this.getInfo()
  },

  methods: {
    async getInfo() {
      console.log(sessionStorage.getItem('usercertificateNum'))
      const param = {
        certificateNum: sessionStorage.getItem('usercertificateNum')
      }
      const res = await getQualificateInfo(param)
      console.log(res)
      this.tableData = res.data
    }
  }

}
</script>
<style lang='' scoped>
</style>
