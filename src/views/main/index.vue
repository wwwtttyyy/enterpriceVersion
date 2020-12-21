<template>
  <div style="position:absolute;bottom:0;top:0px;left:0px;right:0;overflow:hidden;background-color: #EBEEF5;" >
    <el-container>
      <el-header class="d-flex align-items-center" style="background-color:#ffffff">
        <img src="../../assets/img/logo.png" class=" mb-0 mr-auto">
      </el-header>
      <el-container class="d-flex align-items-center bg-white">
        <div class=" mb-0 mr-auto ">
          <el-menu  class="el-menu-demo border-0" mode="horizontal" :default-active="currentPath" >
            <el-menu-item :index="item.path" v-for="(item, index) in menuList" :key="index" @click="jumpToPage(item.path)">{{item.title }}</el-menu-item>
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
      <!-- <keep-alive> -->
        <router-view />
      <!-- </keep-alive> -->
    </el-container>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: '',
  props: [''],
  data() {
    return {
      menuList: [],
      currentPath: store.getters.addRouters[0].children[0].path,
      activeIndex: '0'
    }
  },

  created() {
    // console.log(this.$route.path)
    // this.currentPath = this.$route.path
    this.menuList = store.getters.currentMenu
    // this.currentPath
    // console.log(this.menuList)
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
          if (action === 'confirm') {
            // 还要做一些操作
            this.$store.dispatch('Logout').then(() => {
              this.$router.push('/login')
            }).catch((err) => {
              console.log(err)
            })
          }
        }
      })
    }
  }
}
</script>
<style lang='' scoped>
</style>
