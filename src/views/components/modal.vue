
<template>
  <div>
    <div @click="dialogVisible = true" style="display:block">
      <slot name="cpn">
        <!-- <el-button type="text">点击打开 Dialog</el-button> -->
      </slot>
    </div>

    <el-dialog :title="title" :visible.sync="dialogVisible" width="width" :before-close="handleClose">
      <slot name="body"></slot>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return '标题'
      }
    },
    width: {
      type: String,
      default() {
        return '200px'
      }
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      done()
    }
  }
}
</script>
