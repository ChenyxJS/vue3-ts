<!--
 * @Author: chenyx
 * @Date: 2023-03-09 17:52:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 13:42:56
 * @FilePath: /vue3-ts-template/src/Layout/components/content.vue
-->
<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
      <keep-alive :exclude="[]">
        <component :is="Component" ></component>
      </keep-alive>
  </router-view>
</template>

<style></style>
