<!--
 * @LastEditors: zl
 * @Date: 2022-09-15 16:42:07
 * @LastEditTime: 2022-11-18 15:21:00
 * @Email: 
 * @Description: 
-->
<template>
  <div>
    <div class="box"></div>
    <svg class="svg-icon" aria-hidden="true">
      <use xlink:href="#icon-gj" />
    </svg>
    <el-button>dianwo</el-button>
    <i class="iconfont icon-daochu1024-26"></i>
    <i class="iconfont icon-icon_fabu"></i>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  components: {},
  computed: {
    // ...mapGetters("User", ["getUser"]),
    // ...mapState({
    //   users: (state) => state.User.users,
    // }),
  },
  mounted() {
    // this.$store.dispatch("User/getUserAction");
    // this.$store.commit('User/getUserMutation');
    // console.log(this.users, 1);
    // console.log(this.getUser, 2);
  },
  watch: {
    // users(val) {
    //   console.log(val);
    // },
  },
};
</script>

<style scoped>
.box {
  width: 300px;
  height: 300px;
  background-color: pink;
}
.svg-icon {
  width: 20px;
  height: 20px;
  vertical-align: bottom;
}
</style>
