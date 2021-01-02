<template>
  <div>
    <card title="其他材料">
      <div slot="body">
        <tables @setRow='getRow' :show=false modalTitle="其他材料" :tableData="tableData" :col="col" >
          <other-material-form></other-material-form>
        </tables>
      </div>
    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
import modal from '@/views/components/modal'
import tables from '@/views/components/tables'
import {getOtherMaterialInfo} from '@/api/unitApproval/user'

import otherMaterialForm from './form/otherMaterialForm'
export default {
  data() {
    return {
      currentRow: {},
      dateQuery: '',
      col: [
        { label: '标题', prop: 'title' }
      ],
      tableData: [
      ]
    }
  },

  components: {
    card,
    tables,
    otherMaterialForm,
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
      const res = await getOtherMaterialInfo(param)
      console.log(res)
      this.tableData = res.data
    }
  }

}
</script>
<style lang='' scoped>
</style>
