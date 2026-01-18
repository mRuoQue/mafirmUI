<script setup></script>

<template>
  <div>Button:</div>
  <MfButton type="primary">primary </MfButton>
  <MfButton autofocus type="primary">primary autofocus </MfButton>

  <MfButton plain type="primary">primary plain </MfButton>

  <MfButton type="success">success </MfButton>
  <MfButton type="danger">danger</MfButton>
  <MfButton round type="info">danger round</MfButton>

  <div>Switch:</div>
  <MfSwitch v-model="value" label="开关:"></MfSwitch>

  <div>Collapse:</div>
  <MfCollapse>
    <MfCollapseItem name="1" title="标题1"
      >Consistent with real life: in line with the process and logic of real life, and
      comply with languages and habits that the users are used to; Consistent within
      interface: all elements should be consistent, such as: design style, icons and
      texts, position of elements, etc.</MfCollapseItem
    >
    <MfCollapseItem name="2" title="标题2"
      >Consistent with real life: in line with the process and logic of real life, and
      comply with languages and habits that the users are used to; Consistent within
      interface: all elements should be consistent, such as: design style, icons and
      texts, position of elements, etc.</MfCollapseItem
    >
    <MfCollapseItem name="3" title="标题3"
      >Consistent with real life: in line with the process and logic of real life, and
      comply with languages and habits that the users are used to; Consistent within
      interface: all elements should be consistent, such as: design style, icons and
      texts, position of elements, etc.</MfCollapseItem
    >
    <MfCollapseItem name="4" title="标题4"
      >Consistent with real life: in line with the process and logic of real life, and
      comply with languages and habits that the users are used to; Consistent within
      interface: all elements should be consistent, such as: design style, icons and
      texts, position of elements, etc.</MfCollapseItem
    >
  </MfCollapse>
</template>
<style></style>
