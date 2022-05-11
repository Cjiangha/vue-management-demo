/*
    现在采用是vuex的mudules的方式，states定义相应的属性，
    然后在mutations下定义一个方法对states进行传参并进行数据的处理
*/ 

import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab.js'
import user from './user.js'

Vue.use(Vuex)


export default new Vuex.Store({
    state () {
        return {
          page: 0
        }
      },
    modules:{
        tab,
        user
    }
})
