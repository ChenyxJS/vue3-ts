/*
 * @Author: chenyx
 * @Date: 2023-05-04 12:19:45
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 13:41:03
 * @FilePath: /vue3-ts-template/src/directive/v-download.ts
 */

import { Directive } from "vue";

type DownloadFile = {
  fileName: string;
  url: string;
};

// 定义自定义指令
export const download: Directive = {
  mounted(el: HTMLImageElement, bindings: any) {
    // 元素加载进来后添加绑定事件
    el.addEventListener("click", () => {
      const a = document.createElement("a");
      const file: DownloadFile | string = bindings.value; // 完整的url则直接使用
      let url: string;
      let fileName: string;
      // 判断是否传入的值是否为DownloadFile类型
      if ((file as DownloadFile).fileName !== undefined) {
        const downloadFile = file as DownloadFile;
        url = downloadFile.url;
        fileName = downloadFile.fileName;
      } else {
        const downloadFile = file as string;
        url = downloadFile;
        fileName = downloadFile.split("/")[downloadFile.split("/").length - 1];
      }
      // 这里是将url转成blob地址

      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          // 将链接地址字符内容转变成blob地址
          a.href = URL.createObjectURL(blob);
          // 下载文件的名字
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          return a;
        })
        .then((doc) => {
          //最后把新建的节点删除
          document.body.removeChild(doc);
        })
        .catch((err) => {
          // TODO 报错提示
        });
    });
  },
};
