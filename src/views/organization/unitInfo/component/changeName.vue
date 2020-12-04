<template>
  <div>
    <modal title="改名申请">
      <div slot="cpn" >
        <el-button type="primary" style="padding:7px;">改名申请</el-button>
      </div>
      <div slot="body">
        <el-form :model="form" :inline="true" :rules="rules" label-position="top">
          <el-form-item label="统一社会信用代码" :label-width="formLabelWidth" prop="certiCode">
            <el-input v-model="form.certiCode" autocomplete="off" :style="{width:inputWidth}"></el-input>
          </el-form-item>
          <el-form-item label="单位名称" :label-width="formLabelWidth" prop="unitName">
            <el-input v-model="form.unitName" autocomplete="off" :style="{width:inputWidth}"></el-input>
          </el-form-item>
          <el-form-item label="单位委托人" :label-width="formLabelWidth" prop="unitAgent">
            <el-input v-model="form.unitAgent" autocomplete="off" :style="{width:inputWidth}"></el-input>
          </el-form-item>
          <el-form-item label="单位营业执照" :label-width="formLabelWidth" prop="unitLisence">
            <el-input v-model="form.unitLisence" autocomplete="off" :style="{width:inputWidth}"></el-input>
          </el-form-item>
          <el-form-item prop="unitLisencePicture" style="display:block" label=" 单位经办人手持身份证和单位营业执照图片">
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
  props: [''],
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      formLabelWidth: '',
      inputWidth: '200px',
      form: {
        certiCode: '',
        unitName: '',
        unitAgent: '',
        unitLisence: '',
        unitLisencePicture: false
      },
      rules: {
        certiCode: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        unitName: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        unitAgent: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        unitLisence: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        unitLisencePicture: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ]
      }
      // formLabelWidth: '120px'
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
