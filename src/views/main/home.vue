<template>

  <el-container style="position:absolute;top:140px;bottom:0;left:20px;right:0;overflow:hidden" >
    <el-container style="position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden">
      <el-aside width="250px" class="bg-white" style="overflow:hidden;padding:20px">
        <div style="height:120px;display:flex;">
          <div class="d-block float-left align-middle" style="align-self:center;display:relative">
            <el-avatar class="" :size="70" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
            <p class="upload" style="display:absolute;top:0;text-align:center;font-size:10px">上传头像</p>
          </div>
          <div class=" d-block float-left  " style="margin-left:20px;align-self:center">
            <span style="margin-bottom:20px" class="font-weight-bold d-inline">{{name}}</span><br>
            <span>
              <el-tag style="margin-top:20px">{{work}}</el-tag>
            </span>
          </div>
        </div>
        <ul class="nav flex-column menu nav-pills " style=" height:100%">
            <li class="nav-item" @click="changeNav(1,'/main/component/messageCenter')">
              <a class="nav-link " :class="{activeItem : index == 1}">消息中心</a>
            </li>
            <li class="nav-item" @click="changeNav(2,'/main/component/statistic')">
              <a class="nav-link" :class="{activeItem : index == 2}" >数据统计</a>
            </li>
          </ul>
      </el-aside>
      <el-main style="padding:0;" class="">
        <div class="ml-3 bg-white" style="padding:20px;height:100%;overflow:auto">
          <!-- <router-link to="{ path: '/login' }">denglu</router-link> -->
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
      index: 1,
      name: '小明',
      work: '高级工程师'
    }
  },

  mounted () {

  },

  components: {},

  computed: {},

  methods: {
    changeNav(index, path) {
      this.index = index
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
.upload:hover{
  cursor:pointer
}
.activeItem {
  color: #fff;
  background-color: red;
}
.menu li {
  height: 50px;
  display: flex;
}
.menu li a:hover{
  background-color: #F2F6FC;
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
