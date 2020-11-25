<template>
  <el-card class="box-card border" style="width:100%;">
    <div slot="header" class="clearfix" style="padding:0px;">
      <span class="font-weight-bold" style="font-size:18px">#1 职称评审</span>
      <div style="float:right">
        <el-button style=" padding: 7px; margin-right:5px" type="danger" icon="el-icon-document">推荐表</el-button>
        <el-button style=" padding: 7px; margin-right:5px" type="danger" icon="el-icon-document">评审表</el-button>
        <el-button style=" padding: 7px; margin-right:5px" type="warning" icon="el-icon-edit-outline">写入数据</el-button>
        <el-button style=" padding: 7px; margin-right:5px" type="warning" icon="el-icon-user">重置评委会</el-button>
        <el-button style=" padding: 7px; margin-right:5px" type="primary" icon="el-icon-edit" @click="jumpToPage('/titleAppraisal/edit/index')">编辑</el-button>
      </div>
    </div>
    <div class="text item align-items-center">
      <div style="width:80%;margin:20px auto;color:#619ac3;">
        <el-steps :active="active" finish-status="success" style="color:#619ac3;">
          <el-step title="个人申报"></el-step>
          <el-step title="单位审核"></el-step>
          <el-step title="主管单位/职改办推荐"></el-step>
          <el-step title="评委会所在职改办"></el-step>
          <el-step title="材料报送成功"></el-step>
        </el-steps>
        <!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button> -->
      </div>
      <div style="width:90% ;margin:0 auto;">
        <ul class="border-0" style="display:block;padding:0">
          <li class="list-group-item border-0" style="padding:0px;border-radius:0px">
            <ul class="list-group list-group-flush border-0" style="border-radius:0px">
              <li class="list-group-item border-0" style="padding:0px">
                <ul class="list-group list-group-horizontal w-auto " >
                  <li class="list-group-item w-25 list-group-item-secondary border-bottom-0 border-right text-right" style="border-top-left-radius:0;border-bottom-left-radius:0"> 申报年度</li>
                  <li class="list-group-item w-25 border-bottom-0 border-right">2020</li>
                  <li class="list-group-item w-25 list-group-item-secondary border-bottom-0 border-right text-right">评委会所属职改办</li>
                  <li class="list-group-item w-25  border-bottom-0 " style="border-top-right-radius:0;border-bottom-right-radius:0">广西师范大学职称工作领导小组办公室</li>
                </ul>
              </li>
              <li class="list-group-item border-0" style="padding:0px">
                <ul class="list-group list-group-horizontal w-auto">
                  <li class="list-group-item w-25 list-group-item-secondary border-bottom-0 border-right text-right"  style="border-top-left-radius:0;border-bottom-left-radius:0">拟申报资格名称</li>
                  <li class="list-group-item w-25 border-bottom-0 border-right ">称艺术系列/副高级/</li>
                  <li class="list-group-item w-25 list-group-item-secondary border-bottom-0 border-right text-right">评审会名称</li>
                  <li class="list-group-item w-25 border-bottom-0 " style="border-top-right-radius:0;border-bottom-right-radius:0">桂林电子科技大学引进高层次急需紧缺人才直接评审高级职称委员会</li>
                </ul>
              </li>
              <li class="list-group-item border-0" style="padding:0px">
                <ul class="list-group list-group-horizontal w-auto">
                  <li class="list-group-item w-25 list-group-item-secondary border-bottom-0 border-right text-right"  style="border-top-left-radius:0;border-bottom-left-radius:0">评审等级</li>
                  <li class="list-group-item w-25 border-bottom-0 border-right">副高级</li>
                  <li class="list-group-item w-25 list-group-item-secondary border-bottom-0 border-right text-right">创建时间</li>
                  <li class="list-group-item w-25 border-bottom-0" style="border-top-right-radius:0;border-bottom-right-radius:0">2020-11-15</li>
                </ul>
              </li>
              <li class="list-group-item border-0 " style="padding:0px">
                <ul class="list-group list-group-horizontal w-auto">
                  <li class="list-group-item w-25 list-group-item-secondary border-right text-right"  style="border-top-left-radius:0;border-bottom-left-radius:0">材料报送时间段</li>
                  <li class="list-group-item w-75 border-right0" style="border-top-right-radius:0;border-bottom-right-radius:0">2020-10-22 01:01 截至到 2020-11-25 01:01</li>
                  <!-- <li class="list-group-item w-25 border-right-0"></li>
                  <li class="list-group-item w-25"></li> -->
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      formInline: {
        user: '',
        region: ''
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },

  methods: {
    next() {
      if (this.active++ > 4) this.active = 0
    },
    onSubmit() {
      console.log('submit!')
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
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
