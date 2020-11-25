<template>
  <div>
    <card title="基本信息" @save="saveMessage">
      <div slot="body">
        <el-form :inline="true" :model="form" class="demo-form-inline" label-position="top" :rules="rules" ref="ruleForm" label-width="10px">
          <el-form-item prop="unit" label="单位（请在下拉列表中选择，如无法搜索到所需的单位信息，请先进行注册）" style="width:100%">
            <el-input v-model="form.unit" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="unitRage" label="单位级别" :style="{width:inputWidth}">
            <el-input v-model="form.unitRage" placeholder="" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="personIdentity" label="个人身份性质">
            <!-- <el-input v-model="form.personIdentity" placeholder=""></el-input> -->
            <el-select v-model="form.personIdentity" placeholder="请选择" :style="{width:inputWidth}">
              <el-option label="国有企业人员" value="国有企业人员"></el-option>
              <el-option label="事业单位人员" value="事业单位人员"></el-option>
              <el-option label="非公单位人员" value="非公单位人员"></el-option>
              <el-option label="机关、事业非公单位人员" value="机关、事业非公单位人员"></el-option>
              <el-option label="自由职业者" value="自由职业者"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="appraisalAnnual" label="评审年度" :style="{width:inputWidth}">
            <el-input v-model="form.appraisalAnnual" placeholder="" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="name" label="姓名（现名）" :style="{width:inputWidth}">
            <el-input v-model="form.name" placeholder="" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="passname" label="姓名（曾用名）" :style="{width:inputWidth}">
            <el-input v-model="form.passname" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别" :style="{width:inputWidth}">
            <el-input v-model="form.sex" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="nation" label="民族">
            <!-- <el-input v-model="form.nation" placeholder=""></el-input> -->
            <el-select v-model="form.nation" placeholder="请选择" :style="{width:inputWidth}">
              <el-option label="汉族" value="汉族"></el-option>
              <el-option label="壮族" value="壮族"></el-option>
              <el-option label="苗族" value="苗族"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="certificateNum" label="证件号码" :style="{width:inputWidth}">
            <el-input v-model="form.certificateNum" placeholder="" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="birthday" label="出生年月">
            <el-date-picker v-model="form.birthday" type="month" placeholder="请选择" :style="{width:inputWidth}">
            </el-date-picker>
          </el-form-item>
          <el-form-item prop="fillFormTime" label="填表时间">
            <el-date-picker v-model="form.fillFormTime" type="month" placeholder="请选择" :style="{width:inputWidth}">
            </el-date-picker>
          </el-form-item>
          <el-form-item prop="joinJopTime" label="参加工作时间">
            <el-date-picker v-model="form.joinJopTime" type="month" placeholder="请选择" :style="{width:inputWidth}"></el-date-picker>
          </el-form-item>
          <el-form-item prop="professionTime" label="专业技术年限">
            <el-input-number v-model="form.professionTime" placeholder="" :style="{width:inputWidth}"></el-input-number>
          </el-form-item>
          <el-form-item prop="Judges" label="参加评审会" :style="{width:inputWidth}">
            <el-input v-model="form.Judges" placeholder="" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="titleSeries" label="拟评职称系列" :style="{width:inputWidth}">
            <el-input v-model="form.titleSeries" placeholder="" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="professional" label="拟评专业">
            <el-cascader v-model="form.professional" :options="options" @change="handleChange" :style="{width:inputWidth}"></el-cascader>
          </el-form-item>
          <el-form-item prop="professioQuality" label="拟评专业技术资格" :style="{width:inputWidth}">
            <el-cascader v-model="form.professioQuality" :options="options" @change="handleChange"></el-cascader>
          </el-form-item>
          <el-form-item prop="admin" label="行政职务">
            <el-select v-model="form.admin" placeholder="请选择" :style="{width:inputWidth}">
              <el-option label="总书记" value="总书记"></el-option>
              <el-option label="书记" value="书记"></el-option>
              <el-option label="副书记" value="副书记"></el-option>
              <el-option label="第一书记" value="第一书记"></el-option>
              <el-option label="第二书记" value="第二书记"></el-option>
              <el-option label="候补书记" value="候补书记"></el-option>
              <el-option label="委员" value="委员"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="adminStartTime" label="行政职务任命时间">
            <el-date-picker v-model="form.adminStartTime" type="month" placeholder="请选择" :style="{width:inputWidth}"></el-date-picker>
          </el-form-item>
          <el-form-item prop="adminDescribe" label="行政职务说明" :style="{width:inputWidth}">
            <el-input v-model="form.adminDescribe" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="phone" label="联系电话" :style="{width:inputWidth}">
            <el-input v-model="form.phone" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="email" label="电子邮箱" :style="{width:inputWidth}">
            <el-input v-model="form.email" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="organizationName" label="档案所在地机构名称" :style="{width:inputWidth}">
            <el-input v-model="form.organizationName" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="political" label="政治面貌">
            <!-- <el-input v-model="form.political" placeholder=""></el-input> -->
            <el-select v-model="form.political" placeholder="请选择" :style="{width:inputWidth}">
              <el-option label="中共党员" value="中共党员"></el-option>
              <el-option label="预备党员" value="预备党员"></el-option>
              <el-option label="群众" value="群众"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="nativePlace" label="籍贯" :style="{width:inputWidth}">
            <el-input v-model="form.nativePlace" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="address" label="联系地址" :style="{width:inputWidth}">
            <el-input v-model="form.address" placeholder=""></el-input>
          </el-form-item>
          <el-alert type="warning" show-icon :closable="false" style="margin-bottom:30px">
            <p style="font-size:18px;margin-bottom:2px">上传说明</p>
            <p style="font-size:15px">因二寸证件照将用于证书制作，一旦确认无法修改，为不影响证书制作效果，请上传高清、正规的近期二寸免冠彩照（证件照），不可使用生活照、半身照、自拍照、毕业证书照、二次照片扫描件等。</p>
          </el-alert>
          <el-form-item prop="bookCover" style="display:block" label=" 身份证正面照片（限一张）">
            <span></span>
            <el-upload v-model="form.bookCover" :limit=1 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item prop="bookCover" style="display:block" label=" 身份证反面照片（限一张）">
            <span></span>
            <el-upload v-model="form.bookCover" :limit=1 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item prop="bookCover" style="display:block" label=" 近期免冠2寸照片（限二张）">
            <span></span>
            <el-upload v-model="form.bookCover" :limit=2 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
        </el-form>
        <el-dialog title="示例图" :visible.sync="dialogVisible" width="80%">
          <img src="../../../../assets/img/figure.png">
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>

    </card>
  </div>
</template>

<script>
import card from './card'

export default {
  name: '',
  props: [''],
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      form: {
        unit: '',
        unitRage: '',
        personIdentity: '',
        appraisalAnnual: '',
        name: '',
        passname: '',
        sex: '',
        nation: '',
        certificateNum: '',
        birthday: '',
        fillFormTime: '',
        joinJopTime: '',
        professionTime: '',
        Judges: '',
        titleSeries: '',
        professioQuality: '',
        admin: '',
        adminStartTime: '',
        adminDescribe: '',
        phone: '',
        email: '',
        organizationName: '',
        political: '',
        nativePlace: '',
        address: ''
      },
      rules: {
        unit: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        unitRage: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        personIdentity: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        appraisalAnnual: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        name: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        passname: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        sex: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        nation: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        certificateNum: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        birthday: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        fillFormTime: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        joinJopTime: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        professionTime: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        Judges: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        titleSeries: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        professioQuality: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        admin: [{ requirde: true, message: '该项为必填项', trigger: 'blur' }],
        adminStartTime: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        adminDescribe: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        phone: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        email: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        organizationName: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        political: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        nativePlace: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ],
        addres: [{ required: true, message: '该项为必填项', trigger: 'blur' }]
      },
      options: [
        {
          value: '出版系列',
          label: '出版系列',
          children: [
            {
              value: '出版',
              label: '出版',
              children: [
                {
                  value: '出版',
                  label: '出版'
                }
              ]
            }
          ]
        }
      ],
      inputWidth: '250px',
      imageUrl: ''
    }
  },

  components: { card },

  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleChange(value) {
      console.log(value)
    },
    saveMessage() {
      // 路由跳转
      this.$router.push('/titleAppraisal/edit/pages/education')
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
