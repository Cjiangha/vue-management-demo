<template>
  <div class="Headerdiv">
    <div class="l-content">
      <el-button
        size="mini"
        icon="el-icon-menu"
        @click="changeStatus"
      ></el-button>
      <!-- <h4 style="color: #fff">首页</h4> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item class="el" v-for="item in tags" :key="item.label" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <!-- el-dropdown-item  -->
      <el-dropdown>
        <img :src="imageUrl" class="user" split-button="true" />
        <el-dropdown-menu  slot="dropdown">
          <el-dropdown-item @click.native="shouye">首页</el-dropdown-item>
          <el-dropdown-item @click.native="quit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  // 报错 ： [Vue warn]: Do not use built-in or reserved HTML elements as component id: header
  // header -> headers
  name: "headers",
  data() {
    return {
      imageUrl: require("../assets/images/user-default.png"),
    };
  },
  methods: {
    changeStatus() {
      this.$store.state.tab.isCollapse = !this.$store.state.tab.isCollapse;
    },
    quit(){
      console.log('点我点我')
      this.$router.push('/login')
    },
    shouye(){
      console.log('点我点我')
      this.$router.push('/')
    }
  },
  mounted(){
        console.log('tags',this.tags)
        // console.log('mapState',mapState)
  },
  computed:{
    ...mapState({
      tags:state => state.tab.tabsList
    })
  }
};
</script>

<style lang="less" scoped>
.Headerdiv {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .user {
    widows: 40px;
    height: 40px;
    border: 50%;
  }
}

</style>

