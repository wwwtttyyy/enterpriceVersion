<template>

  <el-container style="position:absolute;top:140px;bottom:0;left:20px;right:0;overflow:hidden">
    <el-container style="position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden">
      <el-aside width="250px" class="bg-white" style="padding:20px">
        <div style="height:50px;line-height:50px;text-align:center;display:flex;background-color:#F2F6FC">
          <span style="text-align:center;margin:0 auto;font-size:15px">申办职称</span>
        </div>
        <el-menu class="el-menu-demo border-0" mode="vertical" :default-active="currentPath">
          <!-- <el-menu-item style="text-align:center" :index="item.path" v-for="(item, index) in subMenu" :key="index" @click="jumpToPage(item.path)">{{item.title }}</el-menu-item> -->
          <el-submenu :index="item.name" v-for="(item, index) in subMenu" :key="index">
            <template slot="title">{{item.name}}</template>
            <el-menu-item :index="i.path" v-for="(i, key) in item.children" :key="index+key" @click="jumpToPage(i.path)">{{i.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main style="padding:0;" class="">
        <div class="ml-3 bg-white" style="padding:20px;height:100%;overflow:auto">
          <router-view @refresh="refresh"></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import store from '@/store'
export default {
  name: '',
  props: [''],
  data() {
    return {
      currentindex: 0,
      currentPath: '',
      subMenu: []
    }
  },

  mounted() {},
  created() {
    this.currentPath = this.$route.path
    // this.subMenu =
    // console.log(this.$conf.titleApprisal.list)
    this.subMenu = this.$conf.unitApproval.list
    console.log(this.subMenu)
  },

  components: {},

  computed: {

  },

  methods: {
    turntoString(data) {
      return data.toString()
    },
    refresh() {
      // this.getSubMenu()
    },
    changeNav(index, path) {
      this.currentindex = index
      this.jumpToPage(path)
    },
    jumpToPage(path) {
      if (path === this.$route.path) return
      this.$router.push(path)
    }
  }
}
</script>
<style lang='' scoped>
.el-menu-item.is-active {
  color: white;
  background-color: red !important;
}

.upload:hover {
  cursor: pointer;
}
.activeItem {
  color: #fff;
  background-color: red;
}
.menu li {
  height: 50px;
  display: flex;
}
.menu li a:hover {
  background-color: #f2f6fc;
}
.menu li a {
  width: 100%;
  text-align: center;
  align-self: center;
}
.identify-left {
  width: 50%;
  float: left;
  display: block;
}
.identify-right {
  width: 50%;
  float: right;
  /* display: block; */
  padding: 40px 0;
  text-align: center;
}
.identify-right p {
  display: inline-block;
  vertical-align: middle;
  margin: 10px;
}
.identify-img {
  float: left;
  display: block;
  overflow: hidden;
  margin: 10px;
}
.identify-info {
  /* color: aqua; */
  margin-top: 15px;
  margin-left: 130px;
}
.identify-name {
  font-weight: bold;
  font-size: 20px;
}
.identify-work {
  margin-top: 5px;
  font-size: 15px;
}
</style>
