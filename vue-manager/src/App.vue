<template>
  <div id="app">
    <!-- <router-link to="/">
      <el-button>默认按钮</el-button>
    </router-link>
      <router-link to="/user">
       <el-button type="primary">主要按钮</el-button>
    </router-link> -->
    <router-view></router-view>
    <!-- <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio> -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  backdrop-filter: blur(20px);
  /* -webkit-backdrop-filter: blur(20px); */
  }
</style>
