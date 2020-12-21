
<template>
  <div style="display:inline-block">
    <!-- <el-button type="text" @click="dialogFormVisible = true">2</el-button> -->
    <div @click="dialogFormVisible = true" ><slot name="component" @click="dialogFormVisible = true"></slot></div>
    <el-dialog :title="title" :visible.sync="dialogFormVisible" :width="width">
      <slot name="content"></slot>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return '详情'
      }
    },
    width: {
      type: String,
      default() {
        return '1000px'
      }
    }
  },
  data() {
    return {
      // form: {
      //   name: '',
      //   region: '',
      //   date1: '',
      //   date2: '',
      //   delivery: false,
      //   type: [],
      //   resource: '',
      //   desc: ''
      // },
      dialogFormVisible: false
    }
  },
  methods: {
    submit() {
      // this.dialogFormVisible = false
      this.$emit('handleConfirm')
      this.dialogFormVisible = false
    }
  }
}
</script>
