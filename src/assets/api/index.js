/*
 * @LastEditors: zl
 * @Date: 2022-11-17 18:25:45
 * @LastEditTime: 2022-11-17 19:29:59
 * @Email: 
 * @Description: 
 */
import axios from "./axios"

// get请求
export const getUsersList = params => {
  return axios({
    url: 'api/list',
    method: 'GET',
    params,
    // headers: {
    //   needToken: true
    // }
  });
};
//post请求
// export const getMenupag = data => {
//   return axios({
//     url: 'admin/menu/read',
//     method: 'POST',
//     data,
//     headers: {
//       needToken: true
//     }
//   });
// };