/*
 * @LastEditors: zl
 * @Date: 2022-09-15 16:42:07
 * @LastEditTime: 2022-11-17 19:13:32
 * @Email: 
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import "../public/flexible";
import './assets/img/icon/index'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'
import './assets/css/reset.css'
import * as https from "./assets/api"
import router from "./router"
import store from "./store"

Vue.prototype.$https = https
Vue.prototype.$bus = new Vue();
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
