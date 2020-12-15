<template>
  <div>
    <card title="分公司信息">
      <div slot="head">
        <el-button type="primary" style="padding:7px">新建分公司</el-button>
        <el-button type="primary" style="padding:7px">添加分公司工作人员</el-button>
        <el-button type="primary" style="padding:7px">新建分公司签章</el-button>
      </div>
      <div slot="body"></div>
    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
export default {
  name: '',
  props: [''],
  data() {
    return {}
  },

  created () {
    this.$emit('refresh')
  },

  components: {
    card
  },

  computed: {},

  methods: {}
}
</script>
<style lang='' scoped>
</style>
