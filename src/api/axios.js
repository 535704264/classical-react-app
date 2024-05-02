import axios from 'axios'
import merge from 'lodash/merge'
import qs from 'qs'

const baseUrl = "/api"

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    getInsideCofig() {
        const config = {
            baseUrl : this.baseUrl,
            haeder: {} 
        }
        return config
    }

    interception(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (req) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么

            return req;
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });

    }

    request(options) {
        options = {...this.getInsideCofig(), ...options}
        const instance  = axios.create()
        // 实例拦截器的绑定
        this.interception(instance)
        return instance(options)
    }
}





export default new HttpRequest(baseUrl)
