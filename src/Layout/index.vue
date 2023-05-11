<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 23:06:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 13:58:33
-->
<script setup lang="ts">
import Content from "./components/Content.vue";
</script>

<template>
  <div class="Layout">
    <!-- top -->
    <div class="top-layout"></div>
    <div class="container-layout">
      <!-- slider -->
      <div class="slider-layout"></div>
      <!-- content -->
      <div class="content-layout">
        <content />
      </div>
    </div>
    <!-- footer -->
    <div class="footer-layout"></div>
  </div>
</template>

<style lang="scss" scoped></style>
