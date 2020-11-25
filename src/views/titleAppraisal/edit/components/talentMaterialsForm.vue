<template>
  <div>
    <el-form :rules="rules" ref="ruleForm" :inline="true" :model="form" class="demo-form-inline" label-width="120px" label-position="top">
      <el-form-item prop="materialName" label="材料名称">
        <el-date-picker v-model="form.materialName" placeholder="" :style="{width:inputWidth}"></el-date-picker>
      </el-form-item>
      <el-form-item style="display:block" label=" 辅助证明材料">
        <!-- <span>辅助证明材料</span> -->
        <el-upload :limit=5 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
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
  props: [''],
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      inputWidth: '350px',
      form: {
        materialName: ''
      },
      rules: {
        materialName: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ]
      }
    }
  },

  components: {},

  computed: {},

  methods: {
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
