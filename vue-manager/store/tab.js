import Cookies from "js-cookie";
export default {
  state: {
    isCollapse: false,
    tabsList: [
      {
        path: "/home",
        name: "home",
        label: "首页",
        icon: "home",
      },
    ],
    currentMenu: null, //当前菜单添加的tab
    menu: [],
  },
  mutations: {
    collapsemenu(state) {
      state.isCollapse = !state.isCollapse;
    },

    // selectMenu(state,val) state->仓库的state 进行比较
    // val(即页面拿到的item值)->与state中的值进行匹配  仓库state 与我们拿的路由值(item.name)进行比较
    selectMenu(state, val) {
      console.log("selectMenu", state, val);
      if (val.name !== "home") {
        // 当点击的不为home
        state.currentMenu = val;
        // findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引
        const result = state.tabsList.findIndex(
          (item) => item.name === val.name
        );
        if (result === -1) {
          //点击不为home 且 val.name
          state.tabsList.push(val);
        }
      } else {
        //点击为home
        state.currentMenu = null;
      }
    },
    // 删除面包屑对应的tab
    closeTag(state, val) {
      const result = state.tabsList.findIndex((item) => item.name === val.name); //找到索引值
      state.tabsList.splice(result, 1); //删除索引值对应的listitem
    },

    setMenu(state, val) {
      state.menu = val;
      Cookies.set("menu", JSON.stringify(state.menu));
    },
    clearMenu(state) {
      state.menu = [];
      Cookies.remove("");
    },
    addMenu(state,router){
      if(!Cookies.get('menu')){
        Cookies.set("menu", JSON.stringify(state.menu));
      }else{
        const menu = JSON.parse(Cookies.get('menu'))
        console.log('menu----------------------------------',menu)
        state.menu = menu
        const menuArray =[]
        menu.forEach(item=>{
          if(item.children){//item.children 有值的时候返回true
            item.children = item.children.map(item=>{
              item.component = ()=> import(`../view/${item.url}`)
              return item
            })
            menuArray.push(...item.children)
            console.log('item.children',menuArray)
          }else{
            item.component = ()=> import(`../view/${item.url}`)
            menuArray.push(item)
            console.log('直接push   item',menuArray)
          }
        })
        console.log('menuArray',menuArray)
        
        //路由动态添加
        // 添加一条新的路由记录作为现有路由的子路由。如果路由有一个 name，并且已经有一个与之名字相同的路由，它会先删除之前的路由。
        // addRoute(parentName: string | symbol, route: RouteRecordRaw): () => void
        menuArray.forEach(item=>{
          router.addRoute('Main',item)
        })
      }
   
    }
  },
};
