<template>
  <div>
    <el-form :disabled=true  ref="ruleForm" :inline="true" :model="form" class="demo-form-inline" label-width="120px" label-position="top">
      <el-form-item prop="materialName" label="材料名称">
        <el-input v-model="form.materialName" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="material" style="display:block" label=" 辅助证明材料">
        <!-- <span>辅助证明材料</span> -->
        <el-upload v-model="form.material" :limit=5 action="#" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
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
      inputWidth: '350px',
      form: {
        materialName: '',
        material: ''
      },
      rules: {
        materialName: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ]
        // material: [
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
