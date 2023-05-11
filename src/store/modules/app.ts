/*
 * @Author: chenyx
 * @Date: 2023-03-11 17:16:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 14:01:29
 * @FilePath: /vue3-ts-template/src/store/modules/app.ts
 */
import { defineStore } from "pinia";
import { reactive, ref } from "vue"; 

export const useAppStroe = defineStore("app", {
  state: () => {
    // 设备宽度
    let width = ref(window.innerWidth);
    // 设备高度
    let height = ref(window.innerHeight);
    // 设备屏幕尺寸
    const screenSize = {
      width,
      height,
    };
    // 设备状态
    const deviceStatus = reactive({
      isMobile: width.value <= 768,
      isTablet: width.value > 768 && width.value < 1024,
      isDesktop: width.value >= 1024,
    });
    return {
      width,
      height,
      screenSize,
      deviceStatus,
    };
  },
  getters: {},
  actions: {
    // 添加监听器，监听窗口大小变化，修改设备状态
    deviceResize(width: number, height: number) {
      this.width = width;
      this.height = height;
      this.deviceStatus = reactive({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    },
  },
});
