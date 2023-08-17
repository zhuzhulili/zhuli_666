/*
 * @LastEditors: zl
 * @Date: 2023-08-08 14:12:28
 * @LastEditTime: 2023-08-08 14:22:21
 * @Email:
 * @Description:
 */
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/views/home.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/login.vue"),
    },
    {
      path: "/",
      redirect:'/home'
    },
  ],
});
