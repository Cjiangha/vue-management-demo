<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#FFD04B"
      mode="vertical"
      unique-opened="true"
    >
      <h3>
        {{
          this.$store.state.tab.isCollapse == true ? "后台" : "通用后台管理系统"
        }}
      </h3>
      <el-menu-item
        @click="goto(item)"
        :index="item.path + ''"
        v-for="item in nochildren"
        v-bind:key="item.path"
      >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu
        v-for="item in haschildren"
        v-bind:key="item.path"
        :index="item.name + ''"
      >
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group
          v-for="itemchildren in item.children"
          v-bind:key="itemchildren.path"
        >
          <el-menu-item
            :index="itemchildren.path + ''"
            @click="goto(itemchildren)"
          >
            <i :class="`el-icon-${itemchildren.icon}`"></i>
            <span slot="title">{{ itemchildren.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      //左边侧边栏的所有数据
      // MenuJson: [
      //   {
      //     path: "/home",
      //     name: "home",
      //     label: "首页",
      //     icon: "s-home",
      //     url: "Home/Home",
      //   },
      //   {
      //     path: "/mall",
      //     name: "mall",
      //     label: "商品管理",
      //     icon: "video-play",
      //     url: "MallManage/MallManage",
      //   },
      //   {
      //     path: "/user",
      //     name: "user",
      //     label: "用户管理",
      //     icon: "user",
      //     url: "UserManage/UserManage",
      //   },
      //   {
      //     path: "/dialag",
      //     name: "dialag",
      //     label: "el-dialag",
      //     icon: "folder",
      //     url: "dialag/dialag",
      //   },
      //   {
      //     label: "其他",
      //     icon: "location",
      //     children: [
      //       {
      //         path: "/page1",
      //         name: "page1",
      //         label: "页面1",
      //         icon: "setting",
      //         url: "Other/PageOne",
      //       },
      //       {
      //         path: "/page2",
      //         name: "page2",
      //         label: "页面2",
      //         icon: "setting",
      //         url: "Other/PageTwo",
      //       },
      //     ],
      //   },
      // ],
      MenuJson:[],
      //控制折叠面板的开关  isCollapse,true->关闭
      // isCollapse: false,
      isTrue: false,
    };
  },
  mounted() {
    this.syncMenu
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },

    goto(item) {
      // console.log(`/${item.name}`);

      // 1、常规方法
      // this.$router.push('item.path')

      // 2、使用对象的形式 不带参数
      // this.$router.push({
      //   path:item.path
      // })

      // 3、使用对象的形式 参数为地址栏的参数
      // this.$router.push({
      //   path: item.path,
      //   query: { username: "jack" },
      // });

      // 4、使用对象的形式 ，参数为params 不会显示在地址栏
      this.$router.push({
        name: item.name,
        params: { id: 123 },
      });
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    // 该路由下没有子菜单
    nochildren() {
      return this.MenuJson.filter((item) => !item.children);
    },

    // 该路由下有子菜单
    haschildren() {
      return this.MenuJson.filter((item) => item.children);
    },

    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    syncMenu() {
       //判断 Cookie里面是否有 menu，有-> cookie 没有
    const menu = Cookies.get('menu');
    console.log(menu)
    if(menu){ // 有cookie
       this.MenuJson = JSON.parse(menu)
      //  return this.$store.state.tab.menu
      console.log('this.MenuJson',this.MenuJson)
      console.log('menu',menu)
      return this.MenuJson
    }else{ //无cookie 不存在
       return  this.MenuJson
    }
     
    }
  },
};
</script>

<style lang="less" scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
}

.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>
