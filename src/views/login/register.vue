<template>
  <div style="padding:20px">
    <card title="用户注册">
      <div slot="head">
        <el-button style="padding:0" type="text" @click="returnToLogin">返回</el-button>
      </div>
      <div slot="body">
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" label-width="110px" size="medium" class="demo-ruleForm">
          <card title="账户信息">
            <div slot="body">
              <el-alert title="填报说明" type="warning" :closable=false style="margin-bottom:20px">
                1.账户默认为单位统一社会信用代码。当填写了统一社会信用代码时，自动显示在单位账户处。<br>
                2.单位账户信息仅用于编辑单位信息，和单位工作人员账户。<br>
                3.若您的工作单位是分公司（无独立法人资格），请勿提交注册，请联系总公司在其单位账号内添加即可，若总公司未注册，请先注册总公司。
              </el-alert>
              <el-form-item label="账户(统一社会信用代码)" prop="creditCode">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.creditCode"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.password" show-password></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkpassword">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.checkpassword" show-password></el-input>
              </el-form-item>
            </div>
          </card>
          <card title="单位信息" style="margin-top:20px">
            <div slot="body">
              <el-form-item label="统一社会信用代码" prop="creditCode">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.creditCode"></el-input>
              </el-form-item>
              <el-form-item label="单位名称" prop="entityName">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.entityName"></el-input>
              </el-form-item>
              <el-form-item label="法定代表人" prop="legalRepresent">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.legalRepresent"></el-input>
              </el-form-item>
              <el-form-item label="单位级别" prop="unitLevel">
                <el-select v-model="ruleForm.unitLevel" placeholder="请选择" :style="{width:inputWidth}">
                  <el-option label="区属" value="区属"></el-option>
                  <el-option label="市属" value="市属"></el-option>
                  <el-option label="县属" value="县属"></el-option>
                  <el-option label="乡镇属" value="乡镇属"></el-option>
                  <el-option label="村属" value="村属"></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="单位性质" prop="unitNature">
                <el-select v-model="ruleForm.unitNature" placeholder="请选择" :style="{width:inputWidth}">
                  <el-option label="事业单位" value="事业单位"></el-option>
                  <el-option label="国家机关" value="国家机关"></el-option>
                  <el-option label="国有企业" value="国有企业"></el-option>
                  <el-option label="非公单位" value="非公单位"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="单位行业" prop="unitIndustry">
                <el-select v-model="ruleForm.unitIndustry" placeholder="请选择" :style="{width:inputWidth}">
                  <el-option label="服务业" value="服务业"></el-option>
                  <el-option label="计算机/互联网/通信/电子" value="计算机/互联网/通信/电子"></el-option>
                  <el-option label="金融/银行/保险" value="金融/银行/保险"></el-option>
                  <el-option label="政府/非赢利机构" value="政府/非赢利机构"></el-option>
                  <el-option label="交通/运输/物流/仓储/邮政" value="交通/运输/物流/仓储/邮政"></el-option>
                  <el-option label="商业零售业" value="商业零售业"></el-option>
                  <el-option label="物流业" value="物流业"></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="单位注册经办人" prop="unitAgent">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.unitAgent"></el-input>
              </el-form-item>
              <el-form-item label="单位所在地" prop="unitLocation">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.unitLocation"></el-input>
              </el-form-item>
              <el-form-item label="单位地址" prop="unitAddress">
                <el-input :style="{width:inputWidth}" v-model="ruleForm.unitAddress"></el-input>
              </el-form-item>
              <div style="display:block">
                <div style="display:block;width:30%;float:left;height:450px">
                  <span>
                    <span class="font-weight-bold">营业执照扫描件要求</span><br>
                    <div style="height:200px;padding:20px 0;color:red">
                      企业：《企业法人营业执照》（工商局发的）<br>
                      事业单位：《事业单位法人证书》（人事局发的）<br>
                      社团：《社会团体法人登记证书》（民政局发的）<br>
                      民办非企业单位：《民办非企业单位登记证书》（民政局发的）<br>
                      请上传彩色扫描件原件<br>
                      政府/机关：《统一社会信用代码证书》
                    </div>
                  </span>
                  <el-form-item label="单位营业执照（请上传“单位营业执照”原件） " prop="unitLisence">
                    <el-upload v-model="ruleForm.unitLisence" :limit=5 :auto-upload="false" action="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </el-form-item>
                </div>
                <div style="display:block;width:30%;float:left;height:450px">
                  <span>
                    <span class="font-weight-bold">手持身份证和单位营业执照要求</span>
                    <div style="height:200px;padding:20px 0;color:red" class="font-weight-bold">
                      <el-button type="text" @click="dialogTableVisible = true">点击查看样例</el-button>
                      <el-dialog title="手持身份证和单位营业执照示例图" :visible.sync="dialogTableVisible" width='70%'>
                        <img src="../../assets/img/picture.png">
                      </el-dialog>
                    </div>
                  </span>
                  <el-form-item label="单位注册经办人手持身份证和单位营业执照图片" prop="unitLisencePicture">
                    <el-upload :limit=5 :auto-upload="false" action="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible" v-model="ruleForm.unitLisencePicture">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </el-form-item>
                </div>
                <div style="display:block;width:30%;float:left;height:450px">
                  <span>
                    <span class="font-weight-bold">签章扫描件要求</span>
                    <div style="height:200px;padding:20px 0;color:red">
                      单位签章可以为：“单位职称专用章”、“单位人力资源部公章”、“单位职改办签章”和“单位公章”其中一项。
                    </div>
                  </span>
                  <el-form-item label="单位签章" prop="unitSigned">
                    <el-upload v-model="ruleForm.unitSigned" :auto-upload="false" :limit=5 action="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </el-form-item>
                </div>
              </div>

            </div>
          </card>
          <card title="单位工作人员账户信息" style="margin-top:20px">
            <div slot="body">
              <el-alert title="请输入单位工作人员证件号码，点击查询按钮，并核对查询到的信息。" type="warning" show-icon :closable=false>
              </el-alert>
              <el-input style="width:400px;margin:20px 0" placeholder="请输入单位工作人员身份证号码、护照号等"></el-input>
              <el-button type="primary" @click="test">查询</el-button>
              <template>
                <el-table border :data="tableData" style="width: 100%">
                  <el-table-column prop="staffAccount" label="单位工作人员账户">
                  </el-table-column>
                  <el-table-column prop="phone" label="联系手机">
                  </el-table-column>
                  <el-table-column prop="email" label="邮箱">
                  </el-table-column>
                </el-table>
              </template>
            </div>
          </card>

        </el-form>
        <el-button type="primary" style="display:block;float:right;margin-top:20px" @click="submitForm">立即创建</el-button>
      </div>
    </card>

  </div>

</template>

<script>
import card from '@/views/components/card'
import {register} from '@/api/login'
export default {
  components: {
    card
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      inputWidth: '230px',
      tableData: [],
      ruleForm: {
        creditCode: '',
        password: '',
        checkpassword: '',
        entityName: '',
        role: 'admin',
        legalRepresent: '',
        unitLevel: '',
        unitNature: '',
        unitIndustry: '',
        unitAgent: '',
        unitLocation: '',
        unitAddress: '',
        unitLisence: '',
        unitLisencePicture: '',
        unitSigned: ''
      },
      rules: {
        email: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        creditCode: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        password: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        checkpassword: [{ required: true, validator: validatePass, trigger: 'blur' }],
        entityName: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        legalRepresent: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        unitLevel: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        unitNature: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        unitIndustry: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        unitAgent: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        unitLocation: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        unitAddress: [{ required: true, message: '该项为必填项', trigger: 'blur' }]
        // unitLisence: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        // unitLisencePicture: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        // unitSigned: [{ required: true, message: '该项为必填项', trigger: 'blur' }]
      },
      dialogImageUrl: '',
      dialogVisible: false,
      dialogTableVisible: false
    }
  },
  created() {
    this.$alert(
      `单位帐户及单位工作人员帐户应由单位人力资源部注册及操作，您应对您账户项下的所有行为结果（包括但不限于填写文字信息、上传扫描图片及披露信息等）负责。`,
      '注册须知',
      {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '确定',
        callback: (action) => {}
      }
    )
  },
  methods: {
    test() {
      console.log(this.ruleForm.name)
    },
    async register() {
      let data = this.ruleForm
      this.$delete(data, 'checkpassword')
      const res = await register(data)
      console.log(res)
    },
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm)
          this.register()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm() {
      this.$refs['ruleForm'].resetFields()
    },
    returnToLogin() {
      this.$router.push('/login')
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
