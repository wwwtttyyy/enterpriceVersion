<template>
  <div>
    <modal title="上传与原件相符章">
      <div slot="cpn" style="display:inline-block">
        <el-button type="primary" style="padding:7px;">上传与原件相符章</el-button>
      </div>
      <div slot="body">
        <el-form :model="form" :inline="true" :rules="rules" label-position="top">
          <el-form-item prop="unitLisencePicture" style="display:block" label=" 与原件相符">
            <span></span>
            <el-upload v-model="form.unitLisencePicture" :limit=5 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
        </el-form>
      </div>
    </modal>
  </div>
</template>

<script>
import modal from '@/views/components/modal'
export default {
  name: '',
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      form: {
        picture: ''
      },
      rules: {
        picture: [{ required: true, message: '该项为必填项', trigger: 'blur' }]
      }
    }
  },

  components: {
    modal
  },

  computed: {},

  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
<style lang='' scoped>
</style>
