<!--
 * @LastEditors: zl
 * @Date: 2022-09-15 16:42:07
 * @LastEditTime: 2022-11-17 18:48:25
 * @Email: 
 * @Description: 
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style></style>
