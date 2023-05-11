/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-18 00:34:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 13:57:59
 */
import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { Article, ArticleQuery } from "./types";

export function getArticleList(
  data?: ArticleQuery
): AxiosPromise<PageResult<Article>> {
  return request({
    url: "/web/article/pages",
    method: "get",
    params: data,
  });
}

export function getArticleById(id: number) {
  return request({
    url: "/web/article/" + id,
    method: "get",
  });
}

export function addArticle(data: Article): AxiosPromise<BaseApiResult> {
  return request({
    url: "/web/article/add",
    method: "post",
    data,
  });
}

export function updateArticle(data: Article): AxiosPromise<BaseApiResult> {
  return request({
    url: "/web/article/update",
    method: "put",
    data,
  });
}

export function deleteArticle(id: string): AxiosPromise<BaseApiResult> {
  return request({
    url: "/web/article/delete/" + id,
    method: "delete",
  });
}
