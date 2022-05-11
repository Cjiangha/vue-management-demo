import Vue from "vue"
import App from "./App.vue"

// import ElementUI from 'element-ui'
import {
  Button,
  Radio,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Dialog,
  RadioGroup,
  RadioButton,
  Col,
  Row,
  Card,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Form,
  FormItem,
  Input,
  Switch,
  DatePicker,
  Select,
  Option,
  Pagination,
  MessageBox,
  Message
} from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import '../src/assets/less/index.less'
import router from "./../router/index"
import store from '../store'
import http from 'axios'
import '../api/mock'


Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message  = Message

//路由守卫   用的比较多的是 to 和 next参数
// router.beforeEach((to,from,next)=>{
//   store.commit('clearToken')
//   const token = store.state.user.token
//   console.log('token',token)
//   if(!token && to.name !=='login'){// 没token也不来自登录页
//     next({name:'login'})
//   }  else if(token && to.name === 'login'){ //来源是登录页 带token
//     next({name:'home'})
//   }else{
//     next()
//   }
// })
// Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Dialog)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Col)
Vue.use(Row)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn )
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Pagination)

new Vue({
  store,//使用store
  router,
  render: (h) => h(App),
  created(){
    // store.commit('addMenu',router)
  }
}).$mount("#app")