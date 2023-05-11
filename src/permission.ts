/*
 * @Author: chenyx
 * @Date: 2023-03-13 23:09:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 13:48:22
 * @FilePath: /vue3-ts-template/src/permission.ts
 */
import router from "@/router";

// 白名单路由
// const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  // TODO 处理路由权限验证
  
  // 判断是否存在该路由
  if (to.name && router.hasRoute(to.name)) {
    next();
  } else {
    next("/404");
  }
});

router.afterEach(() => {});
