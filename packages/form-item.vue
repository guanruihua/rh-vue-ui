<template>
  <div class="rh-form-item">
    <label class="rh-form-item__label" :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="rh-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RHFormItem',
  props: {
    label: String
  },
  inject: ['Form']
}
</script>

<style lang="scss">
.rh-form-item {
  margin-bottom: 25px;
  .rh-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .rh-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
