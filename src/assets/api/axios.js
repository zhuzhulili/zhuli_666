/*
 * @Descripttion:
 * @version:
 * @Author: zhuLi
 * @Date: 2020-10-16 11:01:46
 * @LastEditors: zl
 * @LastEditTime: 2022-11-17 18:47:16
 */
import axios from 'axios';
import qs from 'qs';
import router from '../../router';
import {
  Loading,
  Message
} from 'element-ui';
const loading = {
  //loading加载对象
  loadingInstance: null,
  //打开加载
  open () {
    if (this.loadingInstance === null) {
      // 如果实例 为空，则创建
      this.loadingInstance = Loading.service({
        text: '加载中...', //加载图标下的文字
        spinner: 'el-icon-loading', //加载图标
        background: 'rgba(0, 0, 0, 0.5)', //背景色
        // customClass: 'loading', //自定义样式的类名
        target: document.querySelector('body')
      });
    }
  },
  //关闭加载
  close () {
    // 不为空时, 则关闭加载窗口
    if (this.loadingInstance !== null) {
      this.loadingInstance.close();
    }
    this.loadingInstance = null;
  }
};
const instance = axios.create({
  // baseURL: '/default/api'
});

instance.interceptors.request.use(config => {
  loading.open(); //打开加载窗口
  // if (config.method.toUpperCase() === 'POST' && config.data instanceof Object) {
  //            config.data = qs.stringify(config.data)
  // }
  // let token = sessionStorage.getItem('user_token');
  // if (config.headers.needToken) {
  //   if (token) {
  //     config.headers.authorization = 'Bearer ' + token;
  //   } else {
  //     throw new Error('没有token,请先登录');
  //   }
  // }
  return config;
});

instance.interceptors.response.use(
  response => {
    loading.close();
    return response.data;
  },
  error => {
    loading.close();
    if (!error.response) {
      if (document.getElementsByClassName('el-message').length === 0) {
        Message.error(error.message);
      }
      // router.currentRoute.path !== '/login' && router.replace('/login');
      //  console.log(router.currentRoute)
    } else {
      if (error.response.status === 401) {
        if (document.getElementsByClassName('el-message').length === 0) {
          Message.error('token过期,请重新登陆');
        }
        // router.currentRoute.path !== '/login' && router.replace('/login');
      } else if (error.response.status === 404) {
        if (document.getElementsByClassName('el-message').length === 0) {
          Message.error('请求资源未找到');
        }
      } else {
        if (document.getElementsByClassName('el-message').length === 0) {
          Message.error('请填写完整再提交!');
        }
      }
    }
    return new Promise(() => { });
  }
);

export default instance;