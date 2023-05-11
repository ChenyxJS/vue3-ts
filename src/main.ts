/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-12 22:48:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 13:45:14
 */
import App from "./App.vue";
import router from "./router";
import { Directive, createApp } from "vue";
import { createPinia } from "pinia";
// 路由前的权限验证
import "@/permission";
// 字体图标
import "./assets/iconfont/iconfont.css";
// 全局样式
import "@/style/index.scss";
// 移动端适配
// import "@/utils/flexible";
// import "amfe-flexible/index.js";

const app = createApp(App);

import SvgIcon from "@/components/SvgIcon.vue";
const pinia = createPinia();

// 自定义指令 
import * as directive from '@/directive';
Object.keys(directive).forEach(key => {
  app.directive(key, (directive as { [key: string]: Directive })[key]);
});

// 注册全局方法
app.component("svg-icon", SvgIcon);
app.use(router);
app.use(pinia);
app.mount("#app");
