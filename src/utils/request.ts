/*
 * @Descripttion: request工具类
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-16 21:23:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-11 13:38:05
 */
import axios from "axios";
import Qs from "qs";
const service = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 600000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    transformRequest: [
        function (data) {
            return Qs.stringify(data);
        },
    ],
});

service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        //TODO 处理相应数据
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default service;
