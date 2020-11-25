<template>
  <div>
    <div class="container" style="margin-top:50px">
      <div class="row">
        <!-- 12 flex布局-->
        <div class="card m-auto" style="border-radius:30px">
          <div class="card-header text-center" style="border-top-left-radius:30px;border-top-right-radius:30px;background-color:#409EFF"  >
            <span style="color:white;font-size:22px" class="text-monospace">新用户注册</span>
          </div>
          <div class="card-body " style="width:800px;padding-right:50px">
            <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-position="right" label-width="110px" size="medium" class="demo-ruleForm">
              <el-form-item label="姓名" prop="name">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="Email" prop="email">
                <el-input v-model="ruleForm.email" :style="{width:inputWidth}"></el-input>
              </el-form-item>
              <el-form-item label="证件类型" prop="certificateType">
                <el-select v-model="ruleForm.certificateType" placeholder="请选择证件类型" :style="{width:inputWidth}">
                  <el-option label="居民身份证" value="居民身份证"></el-option>
                  <el-option label="港澳居民来往内地通行证" value="港澳居民来往内地通行证"></el-option>
                  <el-option label="台湾居民来往大陆通行证" value="台湾居民来往大陆通行证"></el-option>
                  <el-option label="外国人永久居留身份证" value="外国人永久居留身份证"></el-option>
                  <el-option label="护照" value="护照"></el-option>
                  <el-option label="其他类型" value="其他类型"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="证件号码" prop="certificateNum">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.certificateNum"></el-input>
              </el-form-item>
              <el-form-item label="出生日期" prop="birthday">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday" :style="{width:inputWidth}"></el-date-picker>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-select v-model="ruleForm.sex" placeholder="请选择性别" :style="{width:inputWidth}">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.password" show-password></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkpassword">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.checkpassword" show-password></el-input>
              </el-form-item>
              <el-form-item label="选择安全问题" prop="safequestion">
                <el-select v-model="ruleForm.safequestion" placeholder="请选择安全问题" :style="{width:inputWidth}">
                  <el-option label="您母亲的姓名是？" value="您母亲的姓名是？"></el-option>
                  <el-option label="您配偶的姓名是？" value="您配偶的姓名是？"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="安全答案" prop="safepassword">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.safepassword"></el-input>
              </el-form-item>
              <el-form-item label="手机号码" prop="phone">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.phone">
                  <el-button slot="append">获取验证码</el-button>
                </el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="veriCode">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.veriCode" style=""></el-input>
                <el-button slot="append">获取验证码</el-button>
              </el-form-item>
                            <el-form-item>
                <el-button :style="{width:inputWidth}" style="margin-left:110px" @click="returnToLogin">返回登录</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="margin-left:110px" :style="{width:inputWidth}" @click="submitForm('ruleForm')">注册账号</el-button>
              </el-form-item>

            </el-form>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
// import { Message } from 'element-ui'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      inputWidth: '230px',
      ruleForm: {
        name: '',
        email: '',
        certificateType: '',
        certificateNum: '',
        birthday: '',
        sex: '',
        password: '',
        checkpassword: '',
        safequestion: '',
        safepassword: '',
        phone: '',
        veriCode: ''
      },
      rules: {
        name: [
          { required: true, message: '该项为必填项', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        email: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        certificateType: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        certificateNum: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        birthday: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'blur'
          }
        ],
        sex: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        checkpassword: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        safequestion: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        safepassword: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        phone: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        veriCode: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.$alert(
      `1 进行证书审验的专业技术人员，必须先进行注册，注册后才能进行证书审验。</br></br>

        2 请专业技术人员认真、如实填写有关个人信息。其中姓名、身份证号作为证书审验基本信息，手机号码和邮箱作为专业技术人员登录系统和找回密码工具，一旦确认即不可随意更改。</br></br>

        3 相同身份证号，姓名，手机号码和邮箱只允许注册一次。</br></br>

        4 账号、密码、邮箱、安全问题和安全答案要妥善保管，如密码丢失，可通过注册时预留邮箱、安全问题和安全答案找回密码。账号和密码如被他人盗用责任自负。</br></br>

        5 注册时身份证号错误需要更改的，请致电 0771-5505013 联系客服处理。`,
      '注册须知',
      {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '确定',
        callback: (action) => {

        }
      }
    )
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    returnToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>
