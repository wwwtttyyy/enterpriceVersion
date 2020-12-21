<template>
  <div>
    <card title="业绩专利" >
      <div slot="body">
        <tables modalTitle="业绩专利" :tableData="tableData" :col="col">
          <performance-patent-form :data="currentRow" ref="editForm"></performance-patent-form>
        </tables>
      </div>
    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
import modal from '@/views/components/modal'
import tables from '@/views/components/tables'
import performancePatentForm from './form/performancePatentForm'
import {getPerforPatentInfo} from '@/api/unitApproval/user'

export default {
  data() {
    return {
      currentRow: {},
      dateQuery: '',
      col: [
        { label: '专利名称', prop: 'patentName' },
        { label: '专利类型', prop: 'patentType' },
        { label: '取得时间', prop: 'time' }
      ],
      tableData: [
      ]
    }
  },

  components: {
    card,
    tables,
    performancePatentForm,
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
      const res = await getPerforPatentInfo(param)
      console.log(res)
      this.tableData = res.data
    }
  }

}
</script>
<style lang='' scoped>
</style>
