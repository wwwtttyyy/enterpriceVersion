<template>
  <div>
    <card title="业绩成果">
      <div slot="body">
        <tables @setRow='getRow' :show=false modalTitle="业绩成果" :tableData="tableData" :col="col">
          <performance-result-form :data="currentRow" ref="editForm"></performance-result-form>
        </tables>
      </div>

    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
import modal from '@/views/components/modal'
import tables from '@/views/components/tables'
import performanceResultForm from './form/performanceResultForm'
import {getPerforResultInfo} from '@/api/unitApproval/user'
export default {
  data() {
    return {
      currentRow: {},
      dateQuery: '',
      col: [
        { label: '开始时间', prop: 'startTime' },
        { label: '结束时间', prop: 'deadline' },
        { label: '项目级别（规模）', prop: 'proLevel' },
        { label: '业绩名称（如项目，专利，标准，课题等）', prop: 'proName' }
      ],
      dropCol: [
        { label: '开始时间', prop: 'startTime' },
        { label: '结束时间', prop: 'deadline' },
        { label: '项目级别（规模）', prop: 'proLevel' },
        { label: '业绩名称（如项目，专利，标准，课题等）', prop: 'proName' }
      ],
      tableData: [
      ]
    }
  },

  components: {
    card,
    tables,
    performanceResultForm,
    modal
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
      const res = await getPerforResultInfo(param)
      console.log(res)
      this.tableData = res.data
    }
  }
}
</script>
<style lang='' scoped>
</style>
