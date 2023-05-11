/*
 * @Author: chenyx
 * @Date: 2023-01-02 21:24:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 13:57:30
 * @FilePath: /vue3-ts-template/src/types/global.d.ts
 */

declare global {
  interface BaseApiResult {
      // 请求是否成功
      success: boolean;
      // 错误码
      tip: string;
      // 维护人员看到的错误原因
      failReason: string;
      // 客户显示的错误原因
      failReasonShow: string;
      // 对象
      object?: any;
  }

  interface PageQuery {
      page: number;
      limit: number;
      // 排序列
      orderItem: string;
      // 排序类型
      orderType: OrderType;
  }

  interface PageResult<T> extends BaseApiResult {
      root: Array<T>;
      totalSize: number;
  }

  type DialogType = {
      title?: string;
      visible: boolean;
  };

  type OptionType = {
      value: string;
      label: string;
      checked?: boolean;
      children?: OptionType[];
  };
}

export {};
