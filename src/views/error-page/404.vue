<!--
 * @Author: chenyx
 * @Date: 2023-02-26 11:28:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 14:02:04
 * @FilePath: /vue3-ts-template/src/views/error-page/404.vue
-->
<script setup lang="ts">
import router from "@/router";

function back() {
  router.replace("home");
}
</script>
<template>
  <div class="container">
    <button @click="back" round>BACK HOME</button>
  </div>
</template>
<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
