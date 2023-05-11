/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-12 23:24:53
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 13:51:41
 */
import {
  RouteRecordRaw,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Layout from "@/Layout/index.vue";

const routes = [
  {
      path: "/404",
      name: "404",
      component: () => import("../views/error-page/404.vue"),
  },
  {
      path: "/",
      component: Layout,
      redirect: "/home",
      children: [
          {
              path: "home",
              name: "home",
              component: () => import("../views/home/index.vue"),
              meta: {
                  title: "首页",
              },
          },
      ],
  },
] as RouteRecordRaw[];

// 开发环境使用hash 生产环境使用web
const history =
  import.meta.env.MODE === "production"
      ? createWebHistory()
      : createWebHashHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
