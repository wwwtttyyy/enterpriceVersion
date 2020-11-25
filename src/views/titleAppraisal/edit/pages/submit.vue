<template>
  <div>
    <card title="审核报送" :save=false>
      <div slot="body">
        <el-alert type="warning" :closable="false" show-icon style="margin-bottom:20px">
          <p style="font-size:18px;margin-bottom:2px">填写说明</p>
          <p style="font-size:15px">
            本人承诺所提交的专业技术资格申报材料真实有效。如有弄虚作假，本人愿接受相关政策规定处理，按照评审条件或自治区有关规定的年限内不得申报相应的专业技术资格。累计在两次申报中发现有学术造假行为的，终身不得申报。
最后点“同意并报送”按钮，完成报送流程。
          </p>
        </el-alert>
        <el-alert type="warning" :closable="false" show-icon style="margin-bottom:20px">
          <p style="font-size:18px;margin-bottom:2px">材料报送时间</p>
          <p style="font-size:15px">2020-10-22 01:01 截至到 2020-11-25 01:01</p>
        </el-alert>
        <div style="margin:0,auto;text-align:center">
          <el-button type="danger">同意并报送</el-button>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import card from './card'
export default {
  data() {
    return {
      agree: '1'
    }
  },

  components: {
    card
  },

  computed: {},

  methods: {
    jumpToPage(path) {
      if (path === this.currentPath) return
      this.currentPath = path
      this.$router.push(path)
    }
  }
}
</script>
<style lang='' scoped>
</style>
