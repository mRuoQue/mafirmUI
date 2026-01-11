<script setup>
// 这里使用了类型别名，请按照自己项目的配置引入组件即可
import MfButton from "@/components/button/button.vue";
</script>

<template>
  <MfButton type="primary">primary </MfButton>
  <MfButton autofocus type="primary">primary autofocus </MfButton>

  <MfButton plain type="primary">primary plain </MfButton>

  <MfButton type="success">success </MfButton>
  <MfButton type="danger">danger</MfButton>
  <MfButton round type="info">danger round</MfButton>
</template>
