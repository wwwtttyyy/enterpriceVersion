<template>
  <div>
    <el-table :data="tableData" row-key="id">
      <el-table-column v-for="(item, index) in col" :key="`col_${index}`" :prop="col[index].prop" :label="item.label" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  data() {
    return {
      dateQuery: '',
      col: [
        { label: '手机号', prop: 'sjh' },
        { label: '姓名', prop: 'name' },
        { label: '邮箱', prop: 'youxiang' },
        { label: '参会单位', prop: 'address' },
        { label: '职务', prop: 'zhiwu' },
        { label: '所参会仪', prop: 'suocanhuiyi' }
      ],
      dropCol: [
        { label: '手机号', prop: 'sjh' },
        { label: '姓名', prop: 'name' },
        { label: '邮箱', prop: 'youxiang' },
        { label: '参会单位', prop: 'address' },
        { label: '职务', prop: 'zhiwu' },
        { label: '所参会仪', prop: 'suocanhuiyi' }
      ],
      tableData: [
        {
          sjh: '13856958563',
          name: '王小虎1',
          youxiang: '13856958563@163.com',
          address: '北京市海阔天空有限公司',
          zhiwu: '部门经理',
          suocanhuiyi: '杂志社交流活动'
        },
        {
          sjh: '13856958563',
          name: '虎1',
          youxiang: '13856958563@163.com',
          address: '北京市海阔天空有限公司',
          zhiwu: '部门经理',
          suocanhuiyi: '杂志社交流活动'
        }
      ]
    }
  },
  methods: {
    rowDrop() {
      // 此时找到的元素是要拖拽元素的父容器
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      let data = []
      Sortable.create(tbody, {
        draggable: '.el-table__row',
        onEnd({ newIndex, oldIndex }) {
          // 将 拖拽后的列表信息 存到 data变量中
          data = _this.tableData
        }
      })
      // 将 data变量中的 信息 赋值给 tableData 重新渲染列表数据
      if (!data) {
        this.tableData = data
      }
    }
  },
  mounted() {
    this.rowDrop()
  },
  created() {}
}
</script>
