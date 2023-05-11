<!--
 * @Descripttion: svgIcon
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-16 23:27:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 13:54:54
-->

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SvgIcon",
  props: {
    iconName: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "",
    },
    iconSize: {
      type: [Number, String],
      default: 14,
    },
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <svg
    :class="['svg-icon', $attrs.class]"
    :style="{
      width: iconSize + 'px',
      height: iconSize + 'px',
    }"
    aria-hidden="true"
  >
    <use :xlink:href="'#icon-' + iconName" :fill="color" />
  </svg>
</template>

<style scope>
.svg-icon {
  vertical-align: middle;
  fill: currentColor;
}
</style>
