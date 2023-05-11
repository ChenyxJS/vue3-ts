<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 22:48:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 13:43:26
-->
<script setup lang="ts">
import { useAppStroe } from "@/store/modules/app";
import { onMounted } from "vue";

const appStore = useAppStroe();
onMounted(() => {
    window.onresize = () => {
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        appStore.deviceResize(screenWidth, screenHeight);
    };
});
</script>

<template>
    <router-view></router-view>
</template>

<style></style>
