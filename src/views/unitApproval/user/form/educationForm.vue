<template>
  <div>
    <el-form :rules="rules" ref="ruleForm" :inline="true" :model="form" class="demo-form-inline" label-width="100px" label-position="top" disabled='true'>
      <el-form-item prop="graduateTime" label="毕业时间">
        <el-date-picker v-model="form.graduateTime" placeholder="" :style="{width:inputWidth}"></el-date-picker>
      </el-form-item>
      <el-form-item prop="school" label="毕业学校">
        <el-input v-model="form.school" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="project" label="学历项目">
        <el-select v-model="form.project" placeholder="请选择" :style="{width:inputWidth}">
          <el-option label="无学历" value="无学历"></el-option>
          <el-option label="第一学历" value="第一学历"></el-option>
          <el-option label="第二学历" value="第二学历"></el-option>
          <el-option label="第三学历" value="第三学历"></el-option>
          <el-option label="第四学历" value="第四学历"></el-option>
          <el-option label="最高学历" value="最高学历"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="profession" label="专业">
        <el-input v-model="form.profession" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="education" label="学历">
        <el-select v-model="form.education" placeholder="请选择" :style="{width:inputWidth}">
          <el-option label="博士研究生" value="博士研究生"></el-option>
          <el-option label="硕士研究生" value="硕士研究生"></el-option>
          <el-option label="本科" value="本科"></el-option>
          <el-option label="党校本科" value="党校本科"></el-option>
          <el-option label="党校大专" value="党校大专"></el-option>
          <el-option label="大专" value="大专"></el-option>
          <el-option label="中专" value="中专"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学位" prop="eduSystem">
        <el-select v-model="form.eduSystem" placeholder="请选择" :style="{width:inputWidth}">
          <el-option label="博士" value="博士"></el-option>
          <el-option label="硕士" value="硕士"></el-option>
          <el-option label="学士" value="学士"></el-option>
          <el-option label="双学士" value="双学士"></el-option>
          <el-option label="无学位" value="无学位"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="degree" label="学制">
        <el-select v-model="form.degree" placeholder="请选择" :style="{width:inputWidth}">
          <el-option label="5" value="5"></el-option>
          <el-option label="4" value="4"></el-option>
          <el-option label="3" value="3"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="1" value="1"></el-option>
          <el-option label="1.5" value="1.5"></el-option>
          <el-option label="2.5" value="2.5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="serialNum" label="毕业证编号">
        <el-input v-model="form.serialNum" placeholder="学信网电子注册编号，如无则填写具体材料编号" style="width:500px"></el-input>
      </el-form-item>
      <el-form-item style="display:block" label=" ">
        <span>学历（学位）证书材料（限5张）</span>
        <el-upload :limit=5 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
    </el-form>
    <el-alert type="warning" :closable="false" show-icon>
      <p style="font-size:13px">民营企业、社会组织及自由职业参评人员，教育部学信网不能够查询到学历的需提供学历证书、查档材料或学历认证机构出具的学历认证等相关材料。取得硕士（博士）学位的，请上传硕士学位证书。</p>
    </el-alert>
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
      inputWidth: '200px',
      form: {
        graduateTime: '',
        school: '',
        project: '',
        profession: '',
        education: '',
        eduSystem: '',
        degree: '',
        serialNum: ''
      },
      rules: {
        graduateTime: [{required: true, message: '该项为必填项', trigger: 'blur'}],
        school: [{required: true, message: '该项为必填项', trigger: 'blur'}],
        project: [{required: true, message: '该项为必填项', trigger: 'blur'}],
        profession: [{required: true, message: '该项为必填项', trigger: 'blur'}],
        education: [{required: true, message: '该项为必填项', trigger: 'blur'}],
        eduSystem: [{required: true, message: '该项为必填项', trigger: 'blur'}],
        degree: [{required: true, message: '该项为必填项', trigger: 'blur'}],
        serialNum: [{required: true, message: '该项为必填项', trigger: 'blur'}]
      },
      dialogImageUrl: '',
      dialogVisible: false
    }
  },

  components: {},

  computed: {
  },

  created () {
    console.log(this.data)
    Object.assign(this.form, this.data)
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
