<!--
 * @Author: chenyx
 * @Date: 2023-02-14 13:45:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 13:54:32
 * @FilePath: /vue3-ts-template/src/components/BaseIcon.vue
-->
<script setup lang="ts">
import { reactive } from 'vue';

const props = defineProps({
    iconName: String,
    size: {
        type: [String, Number],
        default: 12,
    },
    color: String,
});
const state = reactive({
    iconStyle: {
        fontSize: typeof props.size === 'number' ? `${props.size}px` : props.size,
        color: props.color,
    },
});
</script>
<template>
    <i :class="['iconfont', iconName]" :style="state.iconStyle"></i>
</template>
<style></style>