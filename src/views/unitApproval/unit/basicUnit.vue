<template>
  <div>
    <card title="基层单位考核推荐意见">
      <div slot="head">
        <el-button type="primary" style="padding:7px">保存</el-button>
      </div>
      <div slot="body">
        <div>
          <el-form :inline="true" :model="form" class="demo-form-inline" label-width='100px' label-position='top'>
            <el-form-item label="基层单位考核推荐意见">
              <el-input type="textarea" v-model="form.content" placeholder="" style="width:800px" :rows="10"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
export default {
  name: '',
  props: [''],
  data() {
    return {
      form: {
        content: ''
      }
    }
  },

  created() {
    this.$emit('refresh')
  },

  components: {
    card
  },

  computed: {},

  methods: {
    jumpToPage(path) {
      if (path === this.$route.path) return
      this.$router.push(path)
    }
  }
}
</script>
<style lang='' scoped>
</style>
