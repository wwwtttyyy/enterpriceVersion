<template>
  <div>
    <card title="业绩奖项" >
      <div slot="body">
        <tables @setRow='getRow' modalTitle="业绩奖项" :tableData="tableData" :col="col" >
          <performance-reward-form></performance-reward-form>
        </tables>
      </div>
    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
import modal from '@/views/components/modal'
import tables from '@/views/components/tables'
import performanceRewardForm from './form/performanceRewardForm'
import {getPerforRewardInfo} from '@/api/unitApproval/user'

export default {
  data() {
    return {
      currentRow: {},
      dateQuery: '',
      col: [
        { label: '项目名称', prop: 'rewardName' },
        { label: '奖励等级', prop: 'rewardLevel' },
        { label: '授予时间', prop: 'time' },
        { label: '授予机构', prop: 'organization' }
      ],
      tableData: [
      ]
    }
  },

  components: {
    card,
    tables,
    performanceRewardForm,
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
      const res = await getPerforRewardInfo(param)
      console.log(res)
      this.tableData = res.data
    }
  }

}
</script>
<style lang='' scoped>
</style>
