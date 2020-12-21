<template>
  <div>
    <card title="职称评审">
      <div slot="head">
        <!-- <el-button type="primary" style="padding:7px">新建分公司</el-button>
        <el-button type="primary" style="padding:7px">添加分公司工作人员</el-button>
        <el-button type="primary" style="padding:7px">新建分公司签章</el-button> -->
      </div>
      <div slot="body">
        <div>
          <el-form :inline="true" :model="form" class="demo-form-inline" label-width='100px'>
            <el-form-item label="姓名">
              <el-input v-model="form.name" placeholder="" style="width:205px"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
              <el-input v-model="form.num" placeholder="" style="width:205px"></el-input>
            </el-form-item>
            <el-form-item label="申报状态">
              <el-select v-model="form.reviewState" placeholder="">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="待审核" value="待审核"></el-option>
                <el-option label="已审核" value="已审核"></el-option>
                <el-option label="审核不通过" value="审核不通过"></el-option>
                <el-option label="已上报上级主管单位" value="已上报上级主管单位"></el-option>
                <el-option label="已报送职改办" value="已报送职改办"></el-option>
                <el-option label="退回个人修改" value="退回个人修改"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="申报级别">
              <el-select v-model="form.delareLevel" placeholder="">
                <el-option label="副高级" value="副高级"></el-option>
                <el-option label="初级" value="初级"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="申报年度">
              <el-select v-model="form.delareAnnual" placeholder="">
                <el-option label="2020" value="2020"></el-option>
                <el-option label="2019" value="2019"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="    ">
              <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-alert title="温馨提示" type="warning" description="以下列表默认显示申报状态为待审核的信息，若要查看其他的信息，请修改筛选条件进行查询。" show-icon>
          </el-alert>
          <el-table :data="tableData" row-key="id" border>
            <el-table-column type="selection" width="50" align="center">
            </el-table-column>
            <el-table-column v-for="(item, index) in col" :key="`col_${index}`" :prop="col[index].prop" :label="item.label" align="center"></el-table-column>
            <el-table-column prop="operation" label="操作" width="150px" align="center">
              <template slot-scope="scope">
                <!-- <slot name="start" :data="scope.row"></slot> -->
                <el-button  @click="jumpToPage('/unitApproval/index',scope.row)" icon="el-icon-edit" type="primary" style="padding:10px;margin-left:10px"></el-button>
                <el-button @click="deleteMessageBox(scope.row)" style="padding:10px;margin-left:10px" type="danger" icon="el-icon-delete"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
import {getDeclare} from '@/api/titleApprisal'
export default {
  name: '',
  props: [''],
  data() {
    return {
      form: {
        name: '',
        num: '',
        reviewState: '待审核',
        delareLevel: '',
        delareAnnual: ''
      },
      col: [
        { label: '申报年度', prop: 'declareAnnual' },
        { label: '申报日期', prop: 'declareDate' },
        { label: '数据报送来源', prop: 'dataSource' },
        { label: '申报人', prop: 'applier' },
        { label: '状态', prop: 'reviewState' }
      ],
      tableData: [
      ]
    }
  },

  created() {
    // this.$emit('refresh')
    this.getData(this.form.reviewState)
  },

  components: {
    card
  },

  computed: {},

  methods: {
    search() {
      this.getData(this.form.reviewState)
    },
    async getData(value) {
      const params = {
        reviewState: value
      }
      const res = await getDeclare(params)
      this.tableData = res.data
      console.log(res)
    },
    jumpToPage(path, row) {
      // 保存身份证号到
      console.log(row)
      sessionStorage.setItem('usercertificateNum', row.certificateNum)
      sessionStorage.setItem('applier', row.applier)
      if (path === this.$route.path) return
      this.$router.push(path)
    }
  }
}
</script>
<style lang='' scoped>
</style>
