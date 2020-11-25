<template>
  <div>
    <el-table :data="tableData" row-key="id" border>
      <el-table-column v-for="(item, index) in col" :key="`col_${index}`" :prop="col[index].prop" :label="item.label" align="center"></el-table-column>
      <el-table-column prop="operation" label="操作" width="150px">
        <template slot-scope="scope">
          <modal :title="modalTitle">
            <el-button @click="handleClick(scope.row)" style="padding:10px" slot="component" type="primary" icon="el-icon-edit"></el-button>
            <div slot="content" >
              <slot ></slot>
            </div>
            <!-- <performance-reward-form slot="content" @click="handleClick(scope.row)"></performance-reward-form> -->
          </modal>
          <el-button @click="deleteMessageBox(scope.row)" style="padding:10px;margin-left:10px" type="danger" icon="el-icon-delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
import modal from './modal'
export default {
  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    },
    col: {
      type: Array,
      default() {
        return []
      }
    },
    modalTitle: {
      type: String,
      default() {
        return '123'
      }
    }
  },
  data() {
    return {
      dateQuery: '',
      dropCol: []
    }
  },
  mounted() {
    this.dropCol = this.col
    this.rowDrop()
  },
  components: {
    modal
  },

  computed: {},

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
    },
    handleClick(row) {
      this.$emit('setRow', row)
    },
    deleteMessageBox(row) {
      this.$alert('此操作将永久删除条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        callback: (action) => {
          this.$emit('deleteItem', row)
        }
      })
    }
  }
}
</script>
