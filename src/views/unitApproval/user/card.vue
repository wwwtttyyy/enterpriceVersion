<template>
  <div  style="position:absolute;bottom:0;top:0px;left:250px;right:0;overflow:hidden;">
    <el-card class="box-card"  style="position:absolute;bottom:0;top:0;left:0;right:0;overflow:auto;width:100%;">
      <div slot="header" class="align-middle">
        <h5 style="display:inline-block;margin-bottom:0px">职称评审 <span class="el-icon-caret-right"></span> {{title}}</h5>
        <div  style="float: right">
          <slot  name="header"></slot>
          <el-button icon="el-icon-check" style="padding:7px;margin-left:20px" type="primary" v-show="saveitem" @click="save">保存</el-button>
          <el-button style="padding:7px;margin-left:20px" type="info" plain @click="back">返回</el-button></div>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="text item" >
        <slot name="body"></slot>
      </div>
    </el-card>
  </div>

</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    saveitem: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    save() {
      this.$emit('save')
    },
    back() {
      this.$router.push('/titleAppraisal/index')
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
