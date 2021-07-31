<template>
  <div class="rh-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RHCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
