<template>
  <div>
    <el-form :disabled=true  label-position="top" :rules="rules" ref="ruleForm" :inline="true" :model="form" class="demo-form-inline" label-width="110px">
      <el-form-item prop="qualiName" label="资格名称">
        <el-input v-model="form.qualiName" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="getTime" label="取得时间">
        <el-date-picker v-model="form.getTime" placeholder="" :style="{width:inputWidth}"></el-date-picker>
      </el-form-item>
      <el-form-item prop="approvalAuthority" label="批准机关">
        <el-input v-model="form.approvalAuthority" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="professional" label="专业名称">
        <el-input v-model="form.professional" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="cetiNum" label="证书编号">
        <el-input v-model="form.cetiNum" placeholder="" :style="{width:inputWidth}"></el-input>
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
        qualiName: '',
        getTime: '',
        approvalAuthority: '',
        professional: '',
        cetiNum: '',
        proMaterial: ''
      },
      rules: {
        qualiName: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        getTime: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        approvalAuthority: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        professional: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        cetiNum: [
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
