<template>
    <el-container>
      <el-aside width="auto">
        <CommonAside></CommonAside>
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader></CommonHeader>
        </el-header>
         <common-tag></common-tag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import CommonAside from "../src/components/CommonAside.vue";
import CommonHeader from "../src/components/CommonHeader.vue";
import CommonTag from '../src/components/CommonTag.vue'


export default {
  data() {
    return {};
  },
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  },
  created(){
      this.$store.commit("addMenu", this.$router); // router 组件注册
  }
};
</script>

<style lang="less" scoped>
.el-aside{
  background-color:#545c64;
}
.el-header {
  background: rgb(51, 51, 51);
}

.el-main {
  padding-top: 0;
}
</style>