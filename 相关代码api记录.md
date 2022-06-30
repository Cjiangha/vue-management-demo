- [1、axios的二次封装](#1axios的二次封装)
- [2、封装组件的思路，封装一个echart 的公共组件的思路](#2封装组件的思路封装一个echart-的公共组件的思路)
- [3、Vuex](#3vuex)
- [4、token+axios+路由守卫+js-cookie 实现路由拦截和请求拦截](#4tokenaxios路由守卫js-cookie-实现路由拦截和请求拦截)
## 1、axios的二次封装
```js
   import axios from 'axios'
import config from '../config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            Headers: {}
        }
        return config
    }
    instencepotors(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            console.log('--请求的拦截--',error)
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 对响应错误做点什么
            console.log('--响应的拦截--',error)
            return Promise.reject(error);
        });
    }
    request(options){
        const instance = axios.create()
        options = {...this.getInsideConfig(),...options}
        this.instencepotors(instance) // 调用拦截器，即使用了工厂模式的装饰器模式
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)
```

## 2、封装组件的思路，封装一个echart 的公共组件的思路
```js
/* 
    1）、定义初始化的配置属性 initChart()
    2）、在chartData的属性值series、xData种，对chartData 使用watch进行深度监听chartData的数据的变化
    3）、isAxisChart 用来判断类型是饼状图 还是 折线图 / 柱形图，然后使用 computed 对 isAxisChart进行监计算，得到对应的
         数据类型

*/

```

##  3、Vuex
```js
/*     
   
    state、Getter、Mutation、Action、Module（集成了state、mutation、action、getter）
    使用mapState、mapGetters、mapMutations、mapActions    
*/ 
       
```

##  4、token+axios+路由守卫+js-cookie 实现路由拦截和请求拦截
```js
/*
   
       token 登录 / 注册 状态锁
       路由守卫 befreEach(to,next){
           if  无token 不是来自登录页
                跳转 login
           if 有token 且来自登录页
                跳转home
       }
*/    


//路由守卫   用的比较多的是 to 和 next参数
//路由守卫   用的比较多的是 to 和 next参数
router.beforeEach((to, from, next) => {
  store.commit('getToken') // 清除token
  const token = store.state.user.token
  console.log('token--------', token)
  console.log(token)
  if(!token && to.name !== 'login') { 
     next({name: 'login'})
  } else if (token && to.name === 'login') {
     next({name: 'home'})
  } else {
     next() 
  }
})
```