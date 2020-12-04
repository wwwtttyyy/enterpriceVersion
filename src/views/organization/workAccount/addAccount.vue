<template>
  <div>
    <modal title="新增工作人员">
      <div slot="cpn" style="display:inline-block">
        <el-button type="primary" style="padding:7px;">新增工作人员</el-button>
      </div>
      <div slot="body">
        <!-- <el-form :model="form" :inline="true" :rules="rules" label-position="top">
          <el-form-item prop="unitLisencePicture" style="display:block" label=" 与原件相符">
            <span></span>
            <el-upload v-model="form.unitLisencePicture" :limit=5 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
        </el-form> -->
        <el-alert title="请输入身份证号码，点击查询！" type="warning" style="margin-bottom:20px" show-icon>
        </el-alert>
        <el-input  placeholder="请输入内容" style="width:300px"></el-input>
        <el-button type="primary">查询</el-button>
        <el-table :data="tableData" style="width: 100%;margin:20px auto">
          <el-table-column prop="name" label="工作人员姓名" >
          </el-table-column>
          <el-table-column prop="phone" label="联系手机" >
          </el-table-column>
          <el-table-column prop="email" label="邮箱">
          </el-table-column>
        </el-table>
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
      tableData: [],
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
