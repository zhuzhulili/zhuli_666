/*
 * @Descripttion:
 * @version:
 * @Author: zhuLi
 * @Date: 2020-09-22 15:25:41
 * @LastEditors: zl
 * @LastEditTime: 2022-11-18 15:17:25
 * 获取环境类型数据的初始化
 */
import { getUsersList } from '../../api';
const getUsers = {
  namespaced: true, // 这里是解决不同模块命名冲突的问题,但是所有数据都还在一个挂载点上
  state: {
    users: [
      "张三", "李四"
    ]
  },
  actions: {
    async getUserAction ({ commit }, data) {
      let result = await getUsersList();
      // console.log(result);
      commit('getUserMutation', { users: result });
    },
  },
  mutations: {
    getUserMutation (state, { users }) {
      // let arr = 0
      // for (let i = 0; i < getENVdQR3.length; i++) {
      //   arr += getENVdQR3[i].Detections.length
      // }
      state.users = users
    },
  },
  getters: {
    getUser: state => state.users
  }
};
export default getUsers;
