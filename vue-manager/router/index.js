/*
 * @Author: Cjiangha 445620536@qq.com
 * @Date: 2022-04-28 00:42:06
 * @LastEditors: Cjiangha 445620536@qq.com
 * @LastEditTime: 2022-05-07 03:27:57
 * @FilePath: \vue-element-bilibili\vue-manager\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import VueRouter from "vue-router";
import Vue from "vue";
// import Main from '../view/Main'


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [{
        path: '/',
        name: 'Main',
        component: () => import('../view/Main.vue'),
        // component: Main,
        children: [
            // {
            //     path: '/home',
            //     name: 'home',
            //     component: () =>import('../view/Home/Home.vue')
            // },
            // {
            //     path: '/',
            //     name: 'home',
            //     component: () =>import('../view/Home/Home.vue')
            // },
            // {
            //     path: '/mall',
            //     name: 'mall',
            //     component: () =>import('../view/Mall/Mall.vue')
            // },
            // {
            //     path: '/user',
            //     name: 'user',
            //     component: () =>import('../view/User/User.vue')
            // },
            // {
            //     path: '/dialag',
            //     name: 'dialag',
            //     component: () =>import('../view/Dialag/Dialag.vue'),
            // },
            // {
            //     path: '/page1',
            //     name: 'page1',
            //     component: () => import('../view/Other/PageOne.vue')
            // },
            // {
            //     path: '/page2',
            //     name: 'page2',
            //     component: () => import('../view/Other/PageTwo.vue')
            // },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../view/login/login')
    }

]

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes
})


export default router