<template>
  <div>
    <card title="个人承诺" :saveitem=false>
      <div slot="body">
        <el-alert type="error" :closable="false">
          <div style="padding:20px">
            <p style="font-size:25px"  class="text-center ">职称申报个人承诺书</p><br>
            <p style="text-indent:2em;font-size:17px">本人承诺对所递交的申报材料完整性和真实性负责。如因申报材料缺失不全造成的后果由本人自行承担；如申报过程中被发现申报材料弄虚作假，同意按照自治区有关文件及评审条件规定，自申报当年起，5年内不得申报。累计造假两次的，终身不得申报。</p>
            <p class="text-right" style="font-size:15px">本人已承诺：Jianghao</p>
            <p class="text-right" style="font-size:15px">承诺日期：2020-11-15</p>
          </div>
        </el-alert>
        <div style="margin:0,auto;text-align:center;padding:50px">
          <el-radio v-model="agree" label="1" >我已阅读并同意以上条款</el-radio><br>
          <el-button style="margin-top:20px" type="primary" @click="jumpToPage('/titleAppraisal/edit/pages/basicInfo')">开始填写申报信息</el-button>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import card from './card'
import { Message } from 'element-ui'
export default {
  data() {
    return {
      agree: 0
    }
  },

  components: {
    card
  },

  computed: {},

  methods: {
    jumpToPage(path) {
      if (this.agree === 0) {
        // this.$message('这是一条消息提示')
        Message({
          message: '请同意条款',
          type: 'warning'
        })
        return
      }
      this.$router.push(path)
    }
  }
}
</script>
<style lang='' scoped>
</style>
