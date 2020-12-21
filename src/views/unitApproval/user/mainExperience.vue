<template>
  <div>
    <card title="主要经历">
      <div slot="body">
        <tables :show=false :tableData="tableData" :col="col" modalTitle="主要经历">
          <experience-form :data="currentRow" ref="editForm"></experience-form>
        </tables>
      </div>

    </card>
  </div>
</template>
//
<script>
import card from '@/views/components/card'
import modal from '@/views/components/modal'
import tables from '@/views/components/tables'
import experienceForm from './form/experienceForm'
import {getMainExpInfo} from '@/api/unitApproval/user'
export default {
  data() {
    return {
      currentRow: {},
      dateQuery: '',
      col: [
        { label: '开始时间', prop: 'startTime' },
        { label: '截止时间', prop: 'deadline' },
        { label: '工作单位（学校）', prop: 'workUnit' },
        { label: '从事何种专业技术工作（学习）', prop: 'workContent' },
        { label: '职务', prop: 'office' },
        { label: '证明人', prop: 'provePerson' }
      ],
      tableData: [
        {
          startTime: ''
        }
      ]
    }
  },

  components: {
    card,
    tables,
    experienceForm,
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
      const res = await getMainExpInfo(param)
      console.log(res)
      this.tableData = res.data
    }
  }

}
</script>
<style lang='' scoped>
</style>
