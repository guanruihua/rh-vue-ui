<template>
  <div class="rh-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RHForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style>

</style>
