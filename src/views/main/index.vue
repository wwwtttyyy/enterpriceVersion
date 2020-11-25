<template>
  <div style="position:absolute;bottom:0;top:0px;left:0px;right:0;overflow:hidden;background-color: #EBEEF5;" >
    <el-container>
      <el-header class="d-flex align-items-center" style="background-color:#ffffff">
        <img src="../../assets/img/logo.png" class=" mb-0 mr-auto">
      </el-header>
      <el-container class="d-flex align-items-center bg-white">
        <div class=" mb-0 mr-auto ">
          <el-menu  class="el-menu-demo border-0" mode="horizontal" :default-active="activeIndex" @select="handleSelect">
            <el-menu-item index="1" @click="jumpToPage('/main/home')">首页</el-menu-item>
            <el-menu-item index="2">个人资料</el-menu-item>
            <el-submenu index="3">
              <template slot="title">证书管理</template>
              <el-menu-item index="3-1">证书审验</el-menu-item>
              <el-menu-item index="3-2">证书信息</el-menu-item>
              <el-menu-item index="3-3">电子信息单</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                申报职称
              </template>
              <el-menu-item index="4-1">职称认定</el-menu-item>
              <el-menu-item index="4-2" @click="jumpToPage('/titleAppraisal/index')">职称评审</el-menu-item>
              <el-menu-item index="4-3">重新确认</el-menu-item>
              <el-menu-item index="4-4">遗失补办</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">报表下载</el-menu-item>
            <el-menu-item index="6">费用管理</el-menu-item>
            <el-menu-item index="7">帮助中心</el-menu-item>
            <el-menu-item index="8">意见建议</el-menu-item>
          </el-menu>
        </div>
        <div>
          <el-menu class="el-menu-demo border-0" mode="horizontal" style="margin-right:10px;">
            <el-submenu index="100">
              <template slot="title">
                <a style="font-size:20px" class="el-icon-setting " title="设置"></a>
              </template>
              <el-menu-item index="1">修改密码</el-menu-item>
              <el-menu-item index="2">修改安全问题</el-menu-item>
              <el-menu-item index="3">修改手机号码</el-menu-item>
              <el-menu-item index="4">修改绑定邮箱</el-menu-item>
            </el-submenu>
            <el-menu-item><a style="font-size:20px" class="el-icon-chat-dot-square" title="消息"></a></el-menu-item>
            <el-menu-item><a style="font-size:20px" class="el-icon-user" title="个人中心"></a></el-menu-item>
            <el-menu-item><a style="font-size:20px" class="el-icon-switch-button" title="退出" @click="loginOut"></a></el-menu-item>
          </el-menu>

        </div>
      </el-container>
      <router-view />
    </el-container>
  </div>
</template>

<script>
export default {
  name: '',
  props: [''],
  data() {
    return {
      activeIndex: '1'
    }
  },

  components: {},

  computed: {},

  methods: {
    jumpToPage(path) {
      if (path === this.$route.path) return
      // this.currentPath = path
      this.$router.push(path)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    loginOut() {
      this.$alert('确定要退出吗？', '退出系统', {
        confirmButtonText: '确定',
        callback: action => {
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>
<style lang='' scoped>
</style>
