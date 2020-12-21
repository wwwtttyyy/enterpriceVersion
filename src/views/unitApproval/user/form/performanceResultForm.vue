<template>
  <div>
    <el-form :disabled=true  label-position="top" :rules="rules" ref="ruleForm" :inline="true" :model="form" class="demo-form-inline" label-width="110px">
      <el-form-item prop="projectName" label="业绩名称（如项目，专利，课题等）">
        <el-input v-model="form.projectName" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="startTime" label="开始时间">
        <el-date-picker v-model="form.startTime" placeholder="" :style="{width:inputWidth}"></el-date-picker>
      </el-form-item>
      <el-form-item prop="deadline" label="结束时间">
        <el-date-picker v-model="form.deadline" placeholder="" :style="{width:inputWidth}"></el-date-picker>
      </el-form-item>
      <el-form-item prop="proLevel" label="项目级别（规模）">
        <el-input v-model="form.proLevel" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>

      <el-form-item prop="proContent" label="项目内容（最多70字）" style="display:block">
        <el-input autosize type="textarea" placeholder="请输入内容" v-model="form.proContent" maxlength="70" show-word-limit></el-input>
      </el-form-item>
      <el-form-item prop="selfEffects" label="本人起何作用（独立、主持、主要参加、参加或协助）（最多150字）" style="display:block">
        <el-input autosize type="textarea" placeholder="请输入内容" v-model="form.selfEffects" maxlength="150" show-word-limit style="width:100%"></el-input>
      </el-form-item>
      <el-form-item prop="results" label="完成情况及效果、效益、获何种奖励、专利（最多250字）" style="display:block">
        <el-input autosize type="textarea" placeholder="请输入内容" v-model="form.results" maxlength="250" show-word-limit></el-input>
      </el-form-item>

      <el-form-item prop="proMaterial" style="display:block" label=" 项目材料扫描件（限20张）">
        <span></span>
        <el-upload v-model="form.proMaterial" :limit=20 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item prop="selfProof" style="display:block" label="个人项目任职证明扫描件（限20张） ">
        <el-upload v-model="form.selfProof" :limit=20 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item prop="awards" style="display:block" label="项目获奖扫描件（限20张） ">
        <el-upload v-model="form.awards" :limit=50 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
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
        projectName: '',
        startTime: '',
        deadline: '',
        proLevel: '',
        proContent: '',
        selfEffects: '',
        results: '',
        proMaterial: '',
        selfProof: '',
        awards: ''
      },
      rules: {
        projectName: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        startTime: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        deadline: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        proLevel: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        proContent: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        selfEffects: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        results: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ]
        // proMaterial: [
        //   { required: true, message: '该项为必填项', trigger: 'blur' }
        // ],
        // selfProof: [
        //   { required: true, message: '该项为必填项', trigger: 'blur' }
        // ],
        // awards: [
        //   { required: true, message: '该项为必填项', trigger: 'blur' }
        // ]
      }
    }
  },

  components: {},

  created () {
    // console.log(this.data)
    Object.assign(this.form, this.data)
  },

  computed: {},

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
