<template>
  <div class="sy">首页{{ usexxx.name }}</div>
  <div class="box"></div>
</template>

<script setup lang="ts">
import xxx from "@/store/modules/xxx.ts";
let usexxx = xxx();
</script>

<style scoped>
.sy {
  font-size: 40px;
}
.box {
  width: 300px;
  height: 300px;
  background: pink;
}
</style>
