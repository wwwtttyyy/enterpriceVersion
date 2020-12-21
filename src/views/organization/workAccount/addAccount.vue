<template>
  <div>
    <modal title="新增工作人员" width="700px" @handleConfirm='additem'>
      <div slot="cpn" style="display:inline-block">
        <el-button type="primary" style="padding:7px;">新增工作人员</el-button>
      </div>
      <div slot="body">
        <el-alert title="请输入身份证号码，点击查询！" type="warning" style="margin-bottom:20px" show-icon>
        </el-alert>
        <el-input  v-model="input" placeholder="请输入内容" style="width:300px"></el-input>
        <el-button type="primary" @click="search">查询</el-button>
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
import {getUserInfo, addWorker} from '@/api/organization'
// import store from '@/store'
export default {
  name: '',
  data() {
    return {
      input: '',
      tableData: [],
      dialogImageUrl: '',
      dialogVisible: false
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
    },
    async search() {
      console.log(this.input)
      const res = await getUserInfo(this.input)
      this.tableData.push(res.data)
      console.log(this.tableData)
    },
    async additem() {
      const data = this.tableData[0]
      // eslint-disable-next-line no-undef
      data.unitName = sessionStorage.getItem('unitName')
      data.start = false
      const res = await addWorker(data)

      this.$emit('refresh')
      console.log(res)
    }
  }
}
</script>
<style lang='' scoped>
</style>
