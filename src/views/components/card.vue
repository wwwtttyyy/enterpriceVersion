<template>
  <div>
    <div class="card">
      <div class="card-header" :style="{'background-color':bgc}">
        <span>{{title}}</span>
        <div  style="float: right">
          <slot name="head"></slot>
        </div>
      </div>
      <div class="card-body">
        <slot name='body'> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default() {
        return '123'
      }
    },
    bgc: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {}
  },

  components: {},

  computed: {},

  methods: {}
}
</script>
<style lang='' scoped>
</style>
