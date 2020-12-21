<template>
  <div>
    <div class="container">
      <div class="row">
        <!-- 12 flex布局-->
        <div class="col-lg-6 m-auto pt-5">
          <img src="../../assets/img/logo.png" alt="">
          <div class="card mt-5 border">
            <div class="card-header bg-white mb-0">
              <h5 class="text-center">用户登录</h5>
            </div>
            <div class="card-body" >
              <el-form label-width="0px" :model="form" ref="form" :rules="rules"  >
                <el-form-item prop="unitName" style="padding-left:0px">
                  <el-input placeholder="请输入单位名称" v-model="form.unitName">
                    <template slot="prepend">单位</template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="account" style="padding-left:0px">
                  <el-input placeholder="请输入账户" v-model="form.account">
                    <template slot="prepend">账户</template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input placeholder="请输入密码" type="password" v-model="form.password">
                    <template slot="prepend">密码</template>
                    <el-button slot="append" @click="forgetPassword">忘记密码</el-button>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit('form')" style="width:100%">登录</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button style="width:100%" @click="register">注册</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {login} from '@/api/login'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      form: {
        unitName: '',
        account: '',
        password: ''
      },
      rules: {
        unitName: [
          { required: true, message: '请输入单位名称', trigger: 'blur' }
        ],
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    ...mapActions(['Login', 'Logout']),
    async logins(form) {
      this.$store.dispatch('Login', form).then(() => {
        this.$router.push({ path: '/' }) // 登录成功之后重定向到首页
      }).catch(() => {
        this.$message.error('您的账户或密码有误') // 登录失败提示错误
      })
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.logins(this.form)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    forgetPassword() {
      console.log('forget')
    },
    register() {
      this.$router.push('/login/register')
    }
  }
}
</script>
<style>
/* #components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
} */
</style>
