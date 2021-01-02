<template>
  <div>
    <card title="单位审议小组审议推荐意见">
      <div slot="head">
        <el-button type="primary" style="padding:7px" @click="submit">保存</el-button>
      </div>
      <div slot="body">
        <div>
          <el-form :inline="true" :rules="rules" ref="ruleForm" :model="form" class="demo-form-inline" label-width='100px' label-position='top'>
            <el-form-item label="单位审议小组审议推荐意见" prop="content">
              <el-input type="textarea"  v-model="form.content" placeholder="" style="width:800px" :rows="10"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import {setsubmitReview, getsubmitReview, updatesubmitReview} from '@/api/titleApprisal'
import card from '@/views/components/card'
export default {
  name: '',
  props: [''],
  data() {
    return {
      form: {
        content: ''
      },
      rules: {
        content: [{ required: true, message: '该项为必填项', trigger: 'blur' }]
      },
      data: {
        basicUnit: '',
        defense: '',
        expertOpinion: '',
        mainUnit: '',
        public: '',
        reviewTeam: '',
        score: '',
        unitLeader: '',
        reformDepart: '',
        reviewResult: '',
        returnOpinion: '',
        declareNum: sessionStorage.getItem('declareNum')
      }
    }
  },

  created() {
    this.getData().then((data) => {
      if (data === undefined) return
      this.form.content = data.reviewTeam
    })
  },

  components: {
    card
  },

  computed: {},

  methods: {
    async getData() {
      const param = {
        declareNum: sessionStorage.getItem('declareNum')
      }
      const res = await getsubmitReview(param)
      return res.data[0]
    },
    async setData(data) {
      await setsubmitReview(data)
    },
    async update(data) {
      await updatesubmitReview(data)
    },
    submit() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.getData().then((res) => {
            if (res) {
              res.reviewTeam = this.form.content
              this.update(res).then(() => {
                this.$notify({
                  title: '',
                  message: '保存成功',
                  type: 'success'
                })
              })
            } else {
              this.data.reviewTeam = this.form.content
              this.setData(this.data).then(() => {
                this.$notify({
                  title: '',
                  message: '保存成功',
                  type: 'success'
                })
              })
            }
          })
        }
      })
    }
  }
}
</script>
<style lang='' scoped>
</style>
