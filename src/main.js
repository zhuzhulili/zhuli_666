/*
 * @LastEditors: zl
 * @Date: 2022-09-15 16:42:07
 * @LastEditTime: 2022-09-23 17:58:47
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
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
