<template>
  <div>
    <el-form :disabled=true label-position="top" :rules="rules" ref="ruleForm" :inline="true" :model="form" class="demo-form-inline" label-width="110px">
      <el-form-item prop="startTime" label="开始时间">
        <el-date-picker v-model="form.startTime" placeholder="" :style="{width:inputWidth}"></el-date-picker>
      </el-form-item>
      <el-form-item prop="deadline" label="截止时间">
        <el-date-picker v-model="form.deadline" placeholder="" :style="{width:inputWidth}"></el-date-picker>
      </el-form-item>
      <el-form-item prop="workUnit" label="工作单位">
        <el-input v-model="form.workUnit" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="position" label="职务岗位">
        <el-input v-model="form.position" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="workContent" label="工作内容" style="display:block">
        <el-input :autosize="{ minRows: 5, maxRows: 10}" type="textarea" placeholder="请输入内容" v-model="form.workContent" show-word-limit></el-input>
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
        startTime: '',
        deadline: '',
        workUnit: '',
        position: '',
        workContent: '',
        proMaterial: ''
      },
      rules: {
        startTime: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        deadline: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        workUnit: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        position: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        workContent: [
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
