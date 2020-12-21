<template>
  <div>
    <card title="国（境）工作或研究材料">
      <div slot="body">
        <tables :show=false modalTitle="国（境）工作或研究材料" :tableData="tableData" :col="col" >
          <research-material-form></research-material-form>
        </tables>
      </div>
    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
import modal from '@/views/components/modal'
import {getResearchMaterialInfo} from '@/api/unitApproval/user'
import tables from '@/views/components/tables'
import researchMaterialForm from './form/researchMaterialForm'
export default {
  data() {
    return {
      currentRow: {},
      dateQuery: '',
      col: [
        { label: '开始时间', prop: 'startTime' },
        { label: '截止时间', prop: 'deadline' },
        { label: '工作单位', prop: 'workUnit' },
        { label: '职务岗位', prop: 'position' }
      ],
      tableData: [
      ]
    }
  },

  components: {
    card,
    tables,
    researchMaterialForm,
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
      const res = await getResearchMaterialInfo(param)
      console.log(res)
      this.tableData = res.data
    }
  }

}
</script>
<style lang='' scoped>
</style>
