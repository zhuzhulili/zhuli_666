/*
 * @LastEditors: zl
 * @Date: 2022-11-17 18:36:36
 * @LastEditTime: 2022-11-17 18:44:19
 * @Email: 
 * @Description: 
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
  // {
  //   path: '/login',
  //   component: () => import('./Login.vue'),
  //   meta: { title: '登录' }
  // },
  {
    path: '/home',
    component: () => import('../views/home.vue'),
    meta: { title: '首页' },
    children: [{
      path: 'firstview',
      component: () => import('../views/firstview.vue'),
      meta: { title: '子页' }
    },
    ]
  },
  {
    path: '/',
    redirect: '/home/firstview'
  }
];
const router = new VueRouter({
  mode: 'hash',
  routes
});

//全局路由导航守卫
// router.beforeEach((to, from, next) => {
//    let userToken = sessionStorage.getItem('user_token');
//    if (userToken) {
//       next();
//    } else {
//       if (to.path == '/Login') {
//          next('/stats/taskplayback');
//       } else {
//          next('/stats/taskplayback');
//       }
//    }
// });

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };

export default router;