<template>

  <el-container style="position:absolute;top:140px;bottom:0;left:20px;right:0;overflow:hidden">
    <el-container style="position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden">
      <el-aside width="250px" class="bg-white" style="overflow:hidden;padding:20px">
        <div style="height:40px;line-height:40px;text-align:center;display:flex;background-color:#F2F6FC">
          组织机构管理
        </div>
        <ul class="nav flex-column menu nav-pills " style=" height:100%">
          <li class="nav-item" :index="item.index" v-for="(item,index) in list" :key="index" @click="changeNav(item.index,item.path)">
            <a class="nav-link " :class="{activeItem : item.index == currentindex}">{{item.name}}</a>
          </li>
        </ul>
      </el-aside>
      <el-main style="padding:0;" class="">
        <div class="ml-3 bg-white" style="padding:20px;height:100%;overflow:auto">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: '',
  props: [''],
  data() {
    return {
      currentindex: 0,
      list: []
    }
  },

  mounted() {},
  created() {
    this.list = this.$conf.organization.list
    console.log(this.list)
  },

  components: {},

  computed: {},

  methods: {
    changeNav(index, path) {
      this.currentindex = index
      this.jumpToPage(path)
    },
    jumpToPage(path) {
      if (path === this.$route.path) return
      // this.currentPath = path
      this.$router.push(path)
    }
  }
}
</script>
<style lang='' scoped>
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
