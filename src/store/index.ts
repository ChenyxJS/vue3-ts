/*
 * @Author: chenyx
 * @Date: 2022-12-29 11:47:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-02 20:34:29
 * @FilePath: /chenyxjs-blog/src/store/index.ts
 */

import type { App } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();

// 全局挂载store
export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };


