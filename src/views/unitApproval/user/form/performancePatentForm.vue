<template>
  <div>
    <el-form :disabled=true  label-position="top" :rules="rules" ref="ruleForm" :inline="true" :model="form" class="demo-form-inline" label-width="110px">
      <el-form-item prop="patentName" label="专利名称">
        <el-input v-model="form.patentName" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="patentType" label="专利类型">
        <el-select v-model="form.patentType" placeholder="请选择" :style="{width:inputWidth}">
          <el-option label="发明" value='发明'></el-option>
          <el-option label="实用新型" value='实用新型'></el-option>
          <el-option label="外观设计" value='外观设计'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="time" label="取得时间">
        <el-date-picker v-model="form.time" placeholder="" :style="{width:inputWidth}"></el-date-picker>
      </el-form-item>

      <el-form-item prop="introduce" label="专利介绍" style="display:block">
        <el-input :autosize="{ minRows: 5, maxRows: 10}" type="textarea" placeholder="请输入内容" v-model="form.introduce"  show-word-limit></el-input>
      </el-form-item>

      <el-form-item prop="proMaterial" style="display:block" label=" 辅助证明材料">
        <span></span>
        <el-upload v-model="form.proMaterial" :limit=20 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      inputWidth: '200px',
      form: {
        patentName: '',
        patentType: '',
        time: '',
        introduce: '',
        proMaterial: ''
      },
      rules: {
        patentName: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        patentType: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        time: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        introduce: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ]
        // proMaterial: [
        //   { required: true, message: '该项为必填项', trigger: 'blur' }
        // ]
      }
    }
  },

  components: {},

  computed: {},
  created () {
    // console.log(this.data)
    Object.assign(this.form, this.data)
    console.log(this.form)
  },

  methods: {
    onSubmit() {
      let result = false
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          result = true
        }
      })
      return result
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
<style lang='' scoped>
</style>
