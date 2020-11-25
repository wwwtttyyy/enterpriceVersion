<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" >
      <el-tab-pane label="未读消息" name="first" style="height:480px;width:100%;padding:10px" class="tab">
        <el-card v-for="(item,index) in data" :key="index" shadow="hover" style="padding-bottom:20px;margin-bottom:30px">
          <div><span class="badge badge-primary">系统通知</span>{{item.content}}</div>
          <div style="margin-top:20px ;float:left">{{item.time}}</div>
          <div style="margin-top:20px ;float:right;color:blue">我知道了</div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="已读消息" name="second" style="height:480px;width:100%;padding:10px">暂无</el-tab-pane>
    </el-tabs>

    <!-- <el-pagination background layout="prev, pager, next" :total="data.length" :page-size=3>

    </el-pagination> -->

  </div>
</template>

<script>
export default {
  name: '',
  props: [''],
  data() {
    return {
      activeName: 'first',
      data: [
        {
          content:
            '温馨提示：您2020年度申报高等学校教师系列桂林理工大学正高级评委会即将截止收取材料，为了避免您错过本年度职称申报，请您及时在评审会部署文规定报送材料时间内，将申报材料报送至评审会所在职改办。具体材料申报进度可以通过职称评审申报列表中“流程记录”查阅。',
          time: '2020-11-23'
        },
        {
          content:
            '温馨提示：您2020年度申报高等学校教师系列桂林理工大学正高级评委会即将截止收取材料，为了避免您错过本年度职称申报，请您及时在评审会部署文规定报送材料时间内，将申报材料报送至评审会所在职改办。具体材料申报进度可以通过职称评审申报列表中“流程记录”查阅。',
          time: '2020-11-23'
        },
        {
          content:
            '温馨提示：您2020年度申报高等学校教师系列桂林理工大学正高级评委会即将截止收取材料，为了避免您错过本年度职称申报，请您及时在评审会部署文规定报送材料时间内，将申报材料报送至评审会所在职改办。具体材料申报进度可以通过职称评审申报列表中“流程记录”查阅。',
          time: '2020-11-23'
        },
        {
          content:
            '温馨提示：您2020年度申报高等学校教师系列桂林理工大学正高级评委会即将截止收取材料，为了避免您错过本年度职称申报，请您及时在评审会部署文规定报送材料时间内，将申报材料报送至评审会所在职改办。具体材料申报进度可以通过职称评审申报列表中“流程记录”查阅。',
          time: '2020-11-23'
        },
        {
          content:
            '温馨提示：您2020年度申报高等学校教师系列桂林理工大学正高级评委会即将截止收取材料，为了避免您错过本年度职称申报，请您及时在评审会部署文规定报送材料时间内，将申报材料报送至评审会所在职改办。具体材料申报进度可以通过职称评审申报列表中“流程记录”查阅。',
          time: '2020-11-23'
        }
      ]
    }
  },

  components: {},

  computed: {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang='' scoped>
.tab{
  overflow: auto
}

.tab::-webkit-scrollbar{
    display: none;
}
</style>
