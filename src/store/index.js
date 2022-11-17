/*
 * @LastEditors: zl
 * @Date: 2022-11-17 18:36:42
 * @LastEditTime: 2022-11-17 19:01:12
 * @Email: 
 * @Description: 
 */
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import User from './user'

export default new Vuex.Store({
  //引入 注册
  modules: {
    User
  }
})