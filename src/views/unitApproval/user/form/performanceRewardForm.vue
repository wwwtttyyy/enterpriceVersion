<template>
  <div>
    <el-form :disabled=true  label-position="top"  ref="ruleForm" :inline="true" :model="form" class="demo-form-inline" label-width="110px">
      <el-form-item prop="rewardName" label="项目名称">
        <el-input v-model="form.rewardName" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="rewardLevel" label="奖励等级">
        <el-select v-model="form.rewardLevel" placeholder=""  :style="{width:inputWidth}">
          <el-option label="国家级" value='国家级'></el-option>
          <el-option label="省部级" value='省部级'></el-option>
          <el-option label="市厅级" value='市厅级'></el-option>
          <el-option label="县区级" value='县区级'></el-option>
          <el-option label="单位级" value='单位级'></el-option>
          <el-option label="其他级别" value='其他级别'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="time" label="授予时间">
        <el-date-picker v-model="form.time" placeholder="" :style="{width:inputWidth}"></el-date-picker>
      </el-form-item>
      <el-form-item prop="organization" label="授予机构">
        <el-input v-model="form.organization" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>

      <el-form-item prop="content" label="内容提要" style="display:block">
        <el-input autosize type="textarea" placeholder="请输入内容" v-model="form.content" maxlength="70" show-word-limit></el-input>
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
        rewardName: '',
        rewardLevel: '',
        time: '',
        organization: '',
        content: '',
        proMaterial: ''
      },
      rules: {

        rewardName: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        rewardLevel: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        time: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        organization: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        content: [
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
