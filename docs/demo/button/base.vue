<script setup>
// 这里使用了类型别名，请按照自己项目的配置引入组件即可
import SmButton from "@/components/button/button.vue";
</script>

<template>
  <SmButton type="primary">primary </SmButton>
  <SmButton autofocus type="primary">primary autofocus </SmButton>

  <SmButton plain type="primary">primary plain </SmButton>

  <SmButton type="success">success </SmButton>
  <SmButton type="danger">danger</SmButton>
  <SmButton round type="info">danger round</SmButton>
</template>
