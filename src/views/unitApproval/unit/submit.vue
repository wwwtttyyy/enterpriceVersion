<template>
  <div>
    <card title="审核报送">
      <div slot="head">
        <el-button type="primary" style="padding:7px">保存</el-button>
      </div>
      <div slot="body">
        <div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="报送上级主管单位" name="first" >
              <el-form ref="firstform" :model="firstform" label-width="100px" label-position='top' :rules="rules">
                <el-form-item label="本单位负责人" prop="rule">
                  <el-input v-model="firstform.leader"></el-input>
                </el-form-item>
                <el-form-item label="报送上级主管单位" prop="rule">
                  <el-input v-model="firstform.superUnit"></el-input>
                </el-form-item>
              </el-form>
              <el-button type="primary" style="float:right" @click="superUnit">报送</el-button>
            </el-tab-pane>
            <el-tab-pane label="报送职改部门" name="second">
              <el-form ref="secondform" :model="secondform" label-width="100px" label-position='top'  :rules="rules">
                <el-form-item label="本单位负责人" prop="rule">
                  <el-input v-model="secondform.leader"></el-input>
                </el-form-item>
                <el-form-item label="报送职改部门" prop="rule">
                  <el-input v-model="secondform.depart"></el-input>
                </el-form-item>
              </el-form>
              <el-button type="primary" style="float:right" @click="depart">报送</el-button>
            </el-tab-pane>
            <el-tab-pane label="退回修改" name="third">
              <el-form ref="thirdform" :model="threeform" label-width="100px"  :rules="rules">
                <el-form-item label="申报个人">
                  {{threeform.applier}}
                </el-form-item>
                <el-form-item label="退回类型"  :rules="rules">
                  <el-radio-group v-model="threeform.radio1">
                    <el-radio-button label="单位"></el-radio-button>
                    <el-radio-button label="个人"></el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="审核结果" prop="rule">
                  <el-radio-group v-model="threeform.result">
                    <el-radio label="退回修改"></el-radio>
                    <el-radio label="审核不通过"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="单位退回意见" prop="rule">
                  <el-input type="textarea" v-model="threeform.opinion" placeholder="" style="width:800px" :rows="10"></el-input>
                </el-form-item>
              </el-form>
              <el-button type="primary" style="float:right" @click="returnBack">报送</el-button>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
export default {
  name: '',
  props: [''],
  data() {
    return {
      firstform: {
        leader: '',
        superUnit: ''
      },
      secondform: {
        depart: '',
        leader: ''
      },
      threeform: {
        applier: sessionStorage.getItem('applier'),
        result: '',
        radio1: '个人',
        opinion: ''
      },
      activeName: 'first',
      rules: {
        rule: [{ required: true, message: '该项为必填项', trigger: 'blur' }]
      }
    }
  },

  created() {
    this.$emit('refresh')
  },

  components: {
    card
  },

  computed: {},

  methods: {
    jumpToPage(path) {
      if (path === this.$route.path) return
      this.$router.push(path)
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          return true
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    superUnit() {
      this.submitForm('firstform')
    },
    depart() {

    },
    returnBack() {

    }

  }
}
</script>
<style lang='' scoped>
</style>
