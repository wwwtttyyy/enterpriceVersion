<template>
  <el-container style="position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden">
    <el-header class="d-flex align-items-center " style="background-color:#545c64">
      <a class="h5 text-light mb-0 mr-auto">{{$conf.logo}}</a>
      <el-menu :default-active="navBar.active" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item :index="index|numToString(index)" v-for="(item,index) in navBar.list" :key='index'>{{item.name}}</el-menu-item>
      </el-menu>
      <el-menu :default-active="navBar.active" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="100">
          <template slot="title">
            <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            我的
          </template>
          <el-menu-item index="100-1">修改</el-menu-item>
          <el-menu-item index="100-2" @click="jumpToPage('/login')">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="slideMenuActive" @select="slideSelect" style="height:100%" v-if="slideMenu">
          <el-menu-item :index="index|numToString(index)" v-for="(item,index) in slideMenu" :key="index" @click="jumpToPage(item.path)">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
          <!-- <el-submenu :index="index|numToString(index)" v-for="(item,index) in navBar.list" :key="index|numToString(index)">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </template>
              <el-menu-item :index="subindex|numToString(subindex)" v-for="(subitem,subindex) in item.submenu" :key="subindex|numToString(subindex)">{{subitem.name}}</el-menu-item>
          </el-submenu> -->
        </el-menu>
      </el-aside>
      <el-main>
        <div style="padding:20px; margin:-20px;">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>
          <!-- <router-link to="{ path: '/login' }">denglu</router-link> -->
          <router-view></router-view>
        </div>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
// import { __vlsRenderHelper } from '../../vue-temp/vue-editor-bridge'
import common from '../common/minix/common'
export default {
  mixins: [common],
  data() {
    return {
      navBar: [],
      page: '',
      currentPath: ''
    }
  },
  created() {
    // 初始化菜单
    console.log(this.$route.matched)

    this.navBar = this.$conf.navBar
    // this.getRouterBran()
  },
  computed: {
    slideMenu() {
      return this.navBar.list[this.navBar.active].submenu || []
    },
    slideMenuActive() {
      return this.navBar.list[this.navBar.active].active || []
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.navBar.active = key
      console.log(key, keyPath)
    },
    slideSelect(key, keyPath) {
      this.navBar.list[this.navBar.active].active = key
      console.log(key, keyPath)
    },
    getRouterBran() {
      console.log(this.$route.matched)
    },
    jumpToPage(path) {
      if (path === this.currentPath) return
      this.currentPath = path
      this.$router.push(path)
    }
  }
}
</script>

<style>
</style>
