<template>
  <div>
    <card title="单位信息">
      <div slot="head">
        <div style="float:right">
          <change-name style="display:inline-block"></change-name>
          <upload-seal style="display:inline-block"> </upload-seal>
          <modify-info style="display:inline-block"></modify-info>
          <change-password style="display:inline-block"></change-password>
        </div>
      </div>
      <div slot="body">
        <ul class="container">
          <li>
            <ul class="row">
              <li>统一社会信用代码</li>
              <li>123</li>
              <li>单位名称</li>
              <li>123</li>
            </ul>
          </li>
          <li>
            <ul class="row">
              <li>单位性质</li>
              <li>123</li>
              <li>法定代表人</li>
              <li>123</li>
            </ul>
          </li>
          <li>
            <ul class="row">
              <li>委托人</li>
              <li>123</li>
              <li>单位级别</li>
              <li>123</li>
            </ul>
          </li>
          <li>
            <ul class="row">
              <li>公司所在地</li>
              <li>123</li>
              <li>公司地址</li>
              <li>123</li>
            </ul>
          </li>
          <li>
            <ul class="row">
              <li>公司行业</li>
              <li>123</li>
              <li>是否非公</li>
              <li>123</li>
            </ul>
          </li>
          <li>
            <ul class="row">
              <li style="width:25%">备注说明</li>
              <li style="width:75%">123</li>
            </ul>
          </li>
          <li>
            <ul class="row" style="height:100px">
              <li style="width:25%;line-height:100px">单位营业执照</li>
              <li style="width:75%;line-height:100px">123</li>
            </ul>
          </li>
          <li>
            <ul class="row" style="height:100px">
              <li style="width:25%;line-height:100px">与原件相符</li>
              <li style="width:75%;line-height:100px">123</li>
            </ul>
          </li>
          <li>
            <ul class="row" style="height:100px">
              <li style="width:25%;line-height:100px">经办人手持身份证和单位营业执照图片</li>
              <li style="width:75%;line-height:100px">123</li>
            </ul>
          </li>
        </ul>
      </div>
    </card>
  </div>
</template>

<script>
import card from '@/views/components/card'
import modal from '@/views/components/modal'
import changeName from './component/changeName'
import changePassword from './component/changePassword'
import uploadSeal from './component/uploadSeal'
import modifyInfo from './component/modifyInfo'
export default {
  name: '',
  props: [''],
  data() {
    return {

    }
  },

  components: {
    card,
    modal,
    uploadSeal,
    changeName,
    modifyInfo,
    changePassword
  },

  computed: {},

  methods: {

  }
}
</script>
<style lang='' scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.container {
  border-right: 1px solid black;
  border-top: 1px solid black;
}
.row {
  height: 50px;
}
.row li {
  height: 100%;
  width: 25%;
  line-height: 50px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}
</style>
