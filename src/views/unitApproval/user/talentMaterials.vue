<template>
  <div>
    <card title="人才引进相关材料" >
      <div slot="body">
        <tables :show=false modalTitle="新增引进人才相关材料" :tableData="tableData" :col="col">
          <talentMaterials-form></talentMaterials-form>
        </tables>
      </div>

    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
import modal from '@/views/components/modal'
import tables from '@/views/components/tables'
import {getTalentMaterialInfo} from '@/api/unitApproval/user'

import talentMaterialsForm from './form/talentMaterialsForm'
export default {
  data() {
    return {
      currentRow: {},
      dateQuery: '',
      col: [
        { label: '材料名称', prop: 'materialName' }
      ],
      tableData: [
        {
          materialName: ''
        }
      ]
    }
  },

  components: {
    card,
    talentMaterialsForm,
    tables,
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
      const res = await getTalentMaterialInfo(param)
      console.log(res)
      this.tableData = res.data
    }
  }

}
</script>
<style lang='' scoped>
</style>
