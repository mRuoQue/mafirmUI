<script setup lang="ts">
import { computed, ref, Transition } from "vue";
// import Icon from "../icon/icon.vue";
import type { CollapseItemProps } from "./types";

defineOptions({
  name: "MfCollapseItem",
});

const props = withDefaults(defineProps<CollapseItemProps>(), {
  title: "",
  name: "",
  disabled: false,
});

const isActived = ref(true);

const toggle = () => {
  if (props.disabled) return;
  isActived.value = !isActived.value;

  props.onClick?.(props.name);
};

// 动画事件
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  // 进入动画前
  beforeEnter(el) {
    el.style.height = "0px";
    el.style.overflow = "hidden";
  },
  // 进入动画
  enter(el) {
    el.style.height = `${el.scrollHeight}px`;
  },
  // 进入动画后
  afterEnter(el) {
    el.style.height = "";
  },
  // 离开动画前
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = "hidden";
  },
  // 离开动画
  leave(el) {
    el.style.height = "0px";
  },
  // 离开动画后
  afterLeave(el) {
    el.style.height = "";
    el.style.overflow = "";
  },
};
</script>
<template>
  <div class="mf-collapse-item">
    <div class="mf-collapse-item-header" @click="toggle">
      <slot name="title">{{ title }}</slot>
      <!-- <Icon name="icon-home" type="svg" size="large" color="#1890ff" /> -->
    </div>

    <Transition name="mf-collapse" v-on="transitionEvents">
      <div v-show="isActived" class="mf-collapse-item-content">
        <slot />
      </div>
    </Transition>
  </div>
</template>
