<template>
  <div>
    <el-form :disabled=true  ref="ruleForm" :inline="true" :model="form" class="demo-form-inline" label-width="80px" label-position="top">
      <el-form-item prop="startTime" label="开始时间">
        <el-date-picker v-model="form.startTime" placeholder="" :style="{width:inputWidth}"></el-date-picker>
      </el-form-item>

      <el-form-item prop="deadline" label="截止时间">
        <el-date-picker v-model="form.deadline" placeholder="" :style="{width:inputWidth}"></el-date-picker>
      </el-form-item>
      <el-form-item prop="office" label="职务">
        <el-input v-model="form.office" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="workUnit" label="工作单位">
        <el-input v-model="form.workUnit" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="workContent" label="工作经历">
        <el-input v-model="form.workContent" placeholder="何地,何学校,何单位学习或从事何种专业技术工作" style="width:415px"></el-input>
      </el-form-item>
      <el-form-item prop="provePerson" label="证明人">
        <el-input v-model="form.provePerson" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item style="display:block" label=" ">
        <span>辅助证明材料</span>
        <el-upload :limit=5 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      inputWidth: '200px',
      form: {
        startTime: '',
        deadline: '',
        workUnit: '',
        workContent: '',
        office: '',
        provePerson: ''
      },
      rules: {
        startTime: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        deadline: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        workUnit: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        workContent: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        office: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        provePerson: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ]
      }
    }
  },

  components: {},

  computed: {},

  created () {
    // console.log(this.data)
    Object.assign(this.form, this.data)
  },

  methods: {
    onSubmit() {
      let result = false
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          result = true
        }
      })
      return result
    },
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
