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
                <el-form-item label="本单位负责人" prop="leader">
                  <el-input v-model="firstform.leader"></el-input>
                </el-form-item>
                <el-form-item label="报送上级主管单位" prop="superUnit">
                  <el-input v-model="firstform.superUnit"></el-input>
                </el-form-item>
              </el-form>
              <el-button type="primary" style="float:right" @click="superUnit">报送</el-button>
            </el-tab-pane>
            <el-tab-pane label="报送职改部门" name="second">
              <el-form ref="secondform" :model="secondform" label-width="100px" label-position='top'  :rules="rules">
                <el-form-item label="本单位负责人" prop="leader">
                  <el-input v-model="secondform.leader"></el-input>
                </el-form-item>
                <el-form-item label="报送职改部门" prop="depart">
                  <el-input v-model="secondform.depart"></el-input>
                </el-form-item>
              </el-form>
              <el-button type="primary" style="float:right" @click="depart">报送</el-button>
            </el-tab-pane>
            <el-tab-pane label="退回修改" name="third">
              <el-form ref="threeform" :model="threeform" label-width="100px"  :rules="rules">
                <el-form-item label="申报个人">
                  {{threeform.applier}}
                </el-form-item>
                <el-form-item label="退回类型"  prop="radio1">
                  <el-radio-group v-model="threeform.radio1">
                    <el-radio-button label="单位"></el-radio-button>
                    <el-radio-button label="个人"></el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="审核结果" prop="result">
                  <el-radio-group v-model="threeform.result">
                    <el-radio label="退回个人修改">退回修改</el-radio>
                    <el-radio label="审核不通过">审核不通过</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="单位退回意见" prop="opinion">
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
import {getsubmitReview, updatesubmitReview, updatedeclarestate} from '@/api/titleApprisal'

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
        leader: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        superUnit: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        depart: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        result: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        radio1: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        opinion: [{ required: true, message: '该项为必填项', trigger: 'blur' }]
      },
      data: []
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
    async updatedeclarestate(reviewState) {
      const param = {
        declareNum: sessionStorage.getItem('declareNum') - '0',
        reviewState: reviewState
      }
      console.log(param)
      await updatedeclarestate(param)
    },
    async getData() {
      const param = {
        declareNum: sessionStorage.getItem('declareNum')
      }
      const res = await getsubmitReview(param)
      return res.data[0]
    },
    submitForm(formName) {
      let result = false
      this.$refs[formName].validate((valid) => {
        if (valid) {
          result = true
        }
      })
      return result
    },
    async update(data) {
      await updatesubmitReview(data)
    },
    check(data) {
      let temp = true
      if (data.basicUnit === '' || data.mainUnit === '' || data.defense === '' || data.expertOpinion === '' || data.public === '' || data.reviewTeam === '' || data.score === '') {
        temp = false
      }
      return temp
    },
    superUnit() {
      if (this.submitForm('firstform') === false) return
      this.getData().then((res) => {
        console.log((res === undefined))
        if ((res === undefined) || !this.check(res)) {
          this.$notify({
            title: '错误',
            message: '请完善信息',
            type: 'error'
          })
          return
        }
        if (res) {
          res.reviewResult = '已上报上级主管单位'
          res.unitLeader = this.firstform.leader
          res.reformDepart = this.firstform.superUnit
          this.update(res)
          this.updatedeclarestate('已上报上级主管单位')
        }
      })
    },
    depart() {
      if (this.submitForm('secondform') === false) return
      this.getData().then((res) => {
        if ((res === undefined) || !this.check(res)) {
          this.$notify({
            title: '错误',
            message: '请完善信息',
            type: 'error'
          })
          return
        }
        if (res) {
          res.reviewResult = '已报送职改办'
          res.unitLeader = this.secondform.leader
          res.reformDepart = this.secondform.depart
          this.update(res)
          this.updatedeclarestate(res.reviewResult)
        }
      })
    },
    returnBack() {
      if (this.submitForm('threeform') === false) return
      this.getData().then((res) => {
        // console.log(res === undefined)
        // if (res === undefined) {
        //   return
        // }
        if ((res === undefined) || !this.check(res)) {
          this.$notify({
            title: '错误',
            message: '请完善信息',
            type: 'error'
          })
          return
        }
        if (res) {
          res.reviewResult = this.threeform.result
          res.returnOpinion = this.threeform.opinion
          console.log(res)
          this.update(res)
          this.updatedeclarestate(res.reviewResult)
        }
      })
    }

  }
}
</script>
<style lang='' scoped>
</style>
