<template>
  <div>
    <el-form label-position="top" :rules="rules" ref="ruleForm" :inline="true" :model="form" class="demo-form-inline" label-width="90px">
      <el-form-item prop="publishTime" label="发表时间">
        <el-date-picker v-model="form.publishTime" placeholder="" :style="{width:inputWidth}"></el-date-picker>
      </el-form-item>
      <el-form-item prop="bookType" label="论文类型">
        <el-select v-model="form.bookType" placeholder="请选择" :style="{width:inputWidth}">
          <el-option label="国内核心期刊（中文核心）" value='国内核心期刊（中文核心）'></el-option>
          <el-option label="国内核心期刊（科技核心）" value='国内核心期刊（科技核心）'></el-option>
          <el-option label="国际权威索引" value='国际权威索引'></el-option>
          <el-option label="国家报刊" value='国家报刊'></el-option>
          <el-option label="理论宣传成果" value='理论宣传成果'></el-option>
          <el-option label="其他" value=' 其他'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="jues" label="角色">
        <el-select v-model="form.jues" placeholder="请选择" :style="{width:inputWidth}">
          <el-option label="独著" value='独著'></el-option>
          <el-option label="主编" value='主编'></el-option>
          <el-option label="编委" value='编委'></el-option>
          <el-option label="通讯作者" value='通讯作者'></el-option>
          <el-option label="其他" value='其他'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="mainBook" label="核心期刊">
        <el-select v-model="form.mainBook" placeholder="请选择" :style="{width:inputWidth}">
          <el-option label="2004年-中国预防兽医年报" value='2004年-中国预防兽医学报'></el-option>
          <el-option label="2004年-中国兽医杂志" value='2004年-中国兽医杂志'></el-option>
          <el-option label="其他" value='其他'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="opus" label="是否代表作">
        <el-select v-model="form.opus" placeholder="请选择" :style="{width:inputWidth}">
          <el-option label="是" value='是'></el-option>
          <el-option label="否" value='否'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="bookNum" label="登载刊物名称、刊号">
        <el-input v-model="form.bookNum" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="foreignIndex" label="国外权威索引收录">
        <el-select v-model="form.foreignIndex" placeholder="请选择" :style="{width:inputWidth}">
          <el-option  label="SCI " value='SCI '></el-option>
          <el-option  label="EI  " value='EI  '></el-option>
          <el-option  label="SSCI" value='SSCI'></el-option>
          <el-option  label="A&HCI" value='A&HCI'></el-option>
          <el-option  label="其他" value='其他'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="issue" label="年卷（期）">
        <el-input v-model="form.issue" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="awardBenefits" label="获奖情况经济效益">
        <el-input v-model="form.awardBenefits" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="bookName" label="论文著作名称">
        <el-input v-model="form.bookName" placeholder="" :style="{width:inputWidth}"></el-input>
      </el-form-item>
      <el-form-item prop="show" label="是否在推荐表上显示此论文、著作">
        <el-select v-model="form.show" placeholder="请选择" :style="{width:inputWidth}">
          <el-option label="是" value='是'></el-option>
          <el-option label="否" value='否'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="bookLevel" label="论文级别">
        <el-select v-model="form.bookLevel" placeholder="请选择" :style="{width:inputWidth}">
          <el-option label="国家级" value='国家级'></el-option>
          <el-option label="省部级" value='省部级'></el-option>
          <el-option label="市厅级" value='市厅级'></el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="bookCover" style="display:block" label=" 论文封面和论文版权页（限5张）">
        <span></span>
        <el-upload v-model="form.bookCover" :limit=5 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item prop="bookMenu" style="display:block" label="论文目录（限5张） ">
        <el-upload v-model="form.bookMenu" :limit=5 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item prop="bookContent" style="display:block" label="论文内容（限50张） ">
        <el-upload v-model="form.bookContent" :limit=50 action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
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
  props: [''],
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      inputWidth: '210px',
      form: {
        publishTime: '',
        bookType: '',
        jues: '',
        mainBook: '',
        opus: '',
        bookNum: '',
        foreignIndex: '',
        issue: '',
        awardBenefits: '',
        bookName: '',
        show: '',
        bookLevel: '',
        bookCover: '',
        bookMenu: '',
        bookContent: ''
      },
      rules: {
        publishTime: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        bookType: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        jues: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        // mainBook: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        opus: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        bookNum: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        // foreignIndex: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        // issue: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        // awardBenefits: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        bookName: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        // show: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        // bookLevel: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        bookCover: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        bookMenu: [{ required: true, message: '该项为必填项', trigger: 'blur' }],
        bookContent: [{ required: true, message: '该项为必填项', trigger: 'blur' }]
      }
    }
  },

  components: {},

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
