<template>
  <div>
    <card title="工作总结" @save="saveMessage('ruleForm')">
      <div slot="body">
        <el-form label-position="top" :rules="rules" ref="ruleForm" :inline="true" :model="form" class="demo-form-inline" label-width="110px">
          <el-form-item prop="jobSummary" label="工作总结" style="display:block">
            <el-input :autosize="{ minRows: 10, maxRows: 40}" type="textarea" placeholder="请输入内容" v-model="form.jobSummary" show-word-limit></el-input>
          </el-form-item>
        </el-form>
        <!-- <el-button type="danger">同意并报送</el-button> -->
      </div>
    </card>
  </div>
</template>

<script>
import {getSummaryInfo} from '@/api/unitApproval/user'
import card from '@/views/components/card'
// import store from '@/store'
export default {
  data() {
    return {
      agree: '1',
      dialogImageUrl: '',
      dialogVisible: false,
      inputWidth: '200px',
      form: {
        jobSummary: ''
      },
      rules: {
        jobSummary: [{ required: true, message: '该项为必填项', trigger: 'blur' }]
      }
    }
  },

  components: {
    card
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
      const res = await getSummaryInfo(param)
      console.log(res)
      this.tableData = res.data
    }
  }

}
</script>
<style lang='' scoped>
</style>
