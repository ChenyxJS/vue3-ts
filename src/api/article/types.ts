/*
 * @Author: chenyx
 * @Date: 2022-10-18 20:43:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 14:02:54
 * @FilePath: /vue3-ts-template/src/api/article/types.ts
 */
export interface Article {
    articleId: number;
    articleTitle: string;
    articleDesc: string;
    articleType: string;
    articleUrl: string;
    articleCreateTime: string;
    articleTagIds: string;
    articleLikes: number;
    articleLooks: number;
  }
  
  export interface ArticleQuery extends PageQuery {
    keywords: string;
    articleTagIds: string;
  }
  