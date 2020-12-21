<template>
  <div>
    <card title="单位人事（职改）人员信息">
      <div slot="head">
        <!-- <el-button type="primary" style="padding:7px">新建人事（职改）人员</el-button> -->
        <add-account @refresh="getWorker"></add-account>
      </div>
      <div slot="body">
        <el-alert title="注意事项" type="warning" description="如果查询不到信息，请先去广西专业技术人员服务平台 bttpl/my gxrczc.comlaccountlregister注册!" show-icon>
        </el-alert>
        <tables  :tableData="tableData" :col="col" @setRow="getRow" @deleteItem="deleteData">
          <el-button slot="start" :type="data.data.start == 0?'info':'primary'"  slot-scope="data" @click="changeState(data.data)">{{data.data.start == 1?'禁用':'启用'}}</el-button>
        </tables>
      </div>
    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
import tables from '@/views/components/tables'
import addAccount from './addAccount'
import {getWorker, modifyWorker, delWorker} from '@/api/organization'
import {setLoginAccount, delLoginAccount} from '@/api/login'

export default {
  name: '',
  props: [''],
  data() {
    return {
      col: [
        {
          label: '人事（职改）人员姓名', prop: 'name'
        },
        {
          label: '联系手机', prop: 'phone'
        },
        {
          label: '邮箱', prop: 'email'
        }
      ],
      tableData: [],
      start: false
    }
  },

  components: {
    card,
    addAccount,
    tables
  },

  computed: {},
  created () {
    this.getWorker()
  },

  methods: {
    async addLoginAccount(data) {
      const temp = {
        role: 'worker',
        account: data.certificateNum,
        password: data.password,
        unitName: sessionStorage.getItem('unitName')
      }
      console.log(temp)
      await setLoginAccount(temp)
    },
    async delLoginAccount(data) {
      console.log(data)
      await delLoginAccount(data.certificateNum) // 根据账户名删除
    },
    async changeState(data) {
      console.log(data)
      if (data.start === 1) {
        data.start = 0
        await modifyWorker(data)
        this.delLoginAccount(data)
      } else {
        data.start = 1
        await modifyWorker(data)
        this.addLoginAccount(data)
      }
    },
    async getWorker() {
      const res = await getWorker(sessionStorage.getItem('unitName'))
      this.tableData = res.data
      console.log(res)
    },
    getRow(row) {
      // 获取到当前行的数据
      this.currentRow = row
      console.log(row)
    },
    saveMessage() {
      this.$router.push('/titleAppraisal/edit/pages/mainExperience')
    },
    async deleteData(data) {
      console.log(data)
      await delWorker(data.id)
      this.getWorker()
    }
  }
}
</script>
<style lang='' scoped>
</style>
