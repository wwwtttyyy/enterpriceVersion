<template>
  <el-container style="position:absolute;top:140px;bottom:0;left:20px;right:0;overflow:hidden" class="bg-white">
    <!-- <el-header class="d-flex align-items-center " style="background-color:#545c64">
    </el-header> -->
    <el-container style="position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden">
      <el-aside width="250px">
        <el-menu :default-active="$route.path" @select="slideSelect" style="height:100%" v-if="slideMenu" >
          <el-menu-item style="height:50px" :index="item.path" v-for="(item,index) in slideMenu" :key="index" @click="jumpToPage(item.path)">
            <div class="d-flex align-items-center" style="display:block">
              <i :class="item.icon"></i>
              <div slot="title" style="display:inline-block">{{item.name}}</div>
              <i style="color:green" class="el-icon-circle-check" v-show="item.show"></i>
            </div>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main >
        <div >
          <!-- <router-link to="{ path: '/login' }">denglu</router-link> -->
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import { __vlsRenderHelper } from '../../vue-temp/vue-editor-bridge'
import common from '../../../common/minix/common'
export default {
  mixins: [common],
  data() {
    return {
      activeItem: '0',
      navBar: [],
      page: '',
      currentPath: '',
      active: ''
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
      return this.navBar.list || []
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
      if (path === this.$route.path) return
      // this.currentPath = path
      this.$router.push(path)
    }
  }
}
</script>

<style>
</style>
