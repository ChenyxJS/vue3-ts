/*
 * @Author: chenyx
 * @Date: 2022-12-28 18:57:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 13:37:32
 * @FilePath: /vue3-ts-template/src/vite.config.ts
 */
import { UserConfig, ConfigEnv, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { svgBuilder } from "./src/utils/svgBuilder";

const srcPath = path.resolve(__dirname, "src");

export default ({ mode }: ConfigEnv): UserConfig => {
  // 获取 .env 环境配置文件
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      port: Number(env.VITE_APP_PORT),
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          // 线上API地址
          target: "http://www.xxxx.com",
          // 本地API地址
          // target: "http://localhost:8080",
          rewrite: (path) =>
            path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""),
        },
      },
    },
    plugins: [vue(), svgBuilder("./src/assets/svg/")],
    resolve: {
      alias: {
        "@": srcPath,
      },
    },
    build: {
      assetsDir: "./assets",
      chunkSizeWarningLimit: 500,
      minify: "terser",
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      terserOptions: {
        compress: {
          // warnings: false,
          drop_console: true, //打包时删除console
          drop_debugger: true, //打包时删除 debugger
          pure_funcs: ["console.log"],
        },
        output: {
          // 去掉注释内容
          comments: true,
        },
      },
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
          manualChunks: (id) => {
            // 使用函数形式时，每个解析的模块 id 都会传递给函数。
            // 如果返回字符串，则模块及其所有依赖项将添加到具有给定名称的手动块中。
            // 例如，这将创建一个vendor包含所有依赖项的块node_modules：
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
  };
};
