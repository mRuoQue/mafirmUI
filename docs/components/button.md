---
title: Button
description：这是Button使用文档
---

# Button 
  按钮组件

## 基础用法
使用 `<Button>` 标签创建按钮 
使用 `type` 属性设置按钮类型
使用 `disabled` 禁用按钮

## 示例
 <script setup>
    import SmButton from "../../packages/components/button/button.vue"

</script>


<SmButton type="primary">primary </SmButton>
<SmButton autofocus type="primary">primary autofocus </SmButton>

<SmButton plain type="primary">primary plain </SmButton>

<SmButton type="success">success </SmButton>
<SmButton type="danger">danger</SmButton>
<SmButton round type="info">danger round</SmButton>
