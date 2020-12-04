<template>
  <div>
    <modal title="修改单位信息">
      <div slot="cpn">
        <el-button type="primary" style="padding:7px;">修改单位信息</el-button>
      </div>
      <div slot="body">
        <el-form :model="form" :inline="true" :rules="rules" label-position="top">
          <el-form-item label="单位性质" :label-width="formLabelWidth" prop="unitNature">
            <el-select v-model="form.unitNature" placeholder="请选择">
              <el-option label="非公单位" value="非公单位"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="公司所在地" :label-width="formLabelWidth" prop="unitLocation">
            <el-select v-model="form.unitLocation" placeholder="请选择">
              <el-option label="广西壮族自治区" value="广西壮族自治区"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="法人代表" :label-width="formLabelWidth" prop="legalRepresent">
            <el-input v-model="form.legalRepresent" autocomplete="off" :style="{width:inputWidth}"></el-input>
          </el-form-item>
          <el-form-item label="公司地址" :label-width="formLabelWidth" prop="unitAddress">
            <el-input v-model="form.unitAddress" autocomplete="off" :style="{width:inputWidth}"></el-input>
          </el-form-item>
          <el-form-item label="单位级别" :label-width="formLabelWidth" prop="unitLevel">
            <el-select v-model="form.unitLevel" placeholder="请选择">
              <el-option label="区属" value="区属"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="公司行业" :label-width="formLabelWidth" prop="unitIndustry">
            <el-select v-model="form.unitIndustry" placeholder="请选择">
              <el-option label="商业零售业" value="商业零售业"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注说明" prop="note">
            <el-input style="width:500px" type="textarea" v-model="form.note" :autosize="{ minRows: 10, maxRows: 20}"></el-input>
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
        unitNature: '',
        unitLocation: '',
        legalRepresent: '',
        unitAddress: '',
        unitLevel: '',
        note: '',
        unitIndustry: ''
      },
      rules: {
        unitNature: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        unitLocation: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        legalRepresent: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        note: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        unitLevel: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        unitIndustry: [
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
