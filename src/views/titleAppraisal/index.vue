<template>
  <div style="position:absolute;bottom:0;top:140px;left:20px;right:0;overflow:hidden;">
    <el-card style="position:absolute;bottom:0;top:0;left:0;right:0;overflow:auto;width:100%;">
      <div slot="header" class="clearfix">
        <span style="font-size: 20px;" class="font-weight-bold">职称评审</span>
        <el-button style="float: right; padding: 10px" type="primary" icon="el-icon-plus">新建申报数据</el-button>
      </div>
      <div class="text item">
        <el-alert title="填报说明" type="info" show-icon style="background-color:#2983bb ;color:#619ac3;" class="bg-light" :closable="false">
          <p style="font-size: 15px; color:#619ac3">
            欢迎您参加广西壮族自治区专业技术资格的申报，为使您更为准确的掌握申报评审的相关政策，减少因政策原因导致的申报障碍，敬请认真阅读并掌握评审相关的政策规定。主要包括以下政策：<br>
            1.国家、自治区职称管理方面的政策文件；<br>
            2.关于专业技术资格评审的一般程序规定及要求；<br>
            3.个人所选择申报系列的专业技术资格评审条件；<br>
            4.相关专项职称评审政策；<br>
            5.当年度的自治区评审部署文件及所选择申报系列的评审部署文件；<br>
            6.其他根据个人情况需要掌握的职称政策；<br>
            以上政策均可在广西壮族自治区人力资源和社会保障厅网站上“年度职称评审工作专题”查询到；如网站查询不到或对政策文件把握不准，您也可根据我们在该网站提供的联系方式选择到您申报的评委会咨询了解。
          </p>
        </el-alert>
      </div>
      <!-- <div>
      <el-button>新建申报数据</el-button>
    </div> -->
      <appraisal-item></appraisal-item>
    </el-card>
  </div>

</template>
<script>
import appraisalItem from './appraisalItem'
export default {
  components: {
    appraisalItem
  }
}
</script>

<style>
.text {
  font-size: 20px;
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
