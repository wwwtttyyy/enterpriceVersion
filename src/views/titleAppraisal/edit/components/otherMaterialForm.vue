<template>
  <div>
    <el-form label-position="top" :rules="rules" ref="ruleForm" :inline="true" :model="form" class="demo-form-inline" label-width="110px">
      <el-form-item prop="title" label="开始时间">
        <el-date-picker v-model="form.title" placeholder="" :style="{width:inputWidth}"></el-date-picker>
      </el-form-item>

      <el-form-item prop="proMaterial" style="display:block" label=" 项目扫描件（限10张）">
        <span></span>
        <el-upload v-model="form.proMaterial" :limit=10 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
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
      inputWidth: '200px',
      form: {
        title: '',
        proMaterial: ''
      },
      rules: {
        title: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        proMaterial: [
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
