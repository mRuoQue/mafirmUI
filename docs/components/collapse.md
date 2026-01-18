---
title：  Collapse
description：这是Collapse使用文档
---

# Collapse 
  折叠面板组件

## 基础用法
<preview path="../demo/collapse/index.vue" title="基础用法" description="Collapse组件基本用法"></preview>

## 组件属性
| 参数                  | 说明                                                               | 类型                      | 可选值 | 默认值 |
|-----------------------|--------------------------------------------------------------------|---------------------------|--------|--------|
| model-value / v-model | 绑定值，必须等于 activeValue 或 inactiveValue，默认为 Boolean 类型 | boolean / string / number | false  | —      |
| disabled              | 是否禁用                                                           | boolean                   | false  | —      |
| loading               | 是否显示加载中                                                     | boolean                   | false  | false  |
| size                  | switch 的大小                                                      | small \| large            | ''     | false  |
| width                 | switch 的宽度                                                      | number / string           | ''     | false  |
| activeIcon            | switch 状态为 on 时所显示图标，设置此项会忽略 active-text          | string / Component        | —      | false  |
| inactiveIcon          | switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text       | string / Component        | —      | —      |
| activeActionIcon      | on状态下显示的图标组件                                             | string / Component        | —      | false  |
| inactiveActionIcon    | off状态下显示的图标组件                                            | string / Component        | —      | switch |
| activeText            | switch 打开时的文字描述                                            | string                    | ''     |        |
| inactiveText          | switch 的状态为 off 时的文字描述                                   | string                    | ''     |        |
| activeValue           | switch 状态为 on 时的值                                            | boolean / string / number | true   |        |
| inactiveValue         | switch的状态为 off 时的值                                          | boolean / string / number | false  |        |                    