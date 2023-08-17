/*
 * @LastEditors: zl
 * @Date: 2023-08-08 09:56:34
 * @LastEditTime: 2023-08-08 14:38:38
 * @Email:
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/reset.scss";
import router from '@/router'
import pinia from "@/store"
createApp(App).use(router).use(pinia).mount("#app");
