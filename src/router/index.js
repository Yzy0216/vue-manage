import Vue from 'vue'
import VueRouter from 'vue-router'


//导入组件路由
import Mian from '@/components/Mian.vue'
import User from '@/users/user.vue'
import Home from '@/users/home.vue'
import Mall from '@/users/mall.vue'
import Charts from '@/views/charts.vue'
import Edit from '@/views/edit.vue'
import Setting from '@/views/setting.vue'
import Warning from '@/views/warning.vue'
//导入登录页面
import Login from '@/users/MyLogin.vue'


Vue.use(VueRouter)


const router = new VueRouter({

        routes: [
            { path: '/', redirect: '/login' },
            { path: '/login', name: 'MyLogin', component: Login, },
            // { path: '/', redirect: '/Mian' },
            {
                path: '/Mian',
                name: 'Mian',
                component: Mian,
                redirect: '/Mian/home',
                children: [

                    { path: 'home', name: 'home', component: Home },
                    { path: 'user', name: 'user', component: User },
                    { path: 'mall', name: 'mall', component: Mall },
                    { path: 'charts', name: 'charts', component: Charts },
                    { path: 'edit', name: 'edit', component: Edit },
                    { path: 'setting', name: 'setting', component: Setting },
                    { path: 'warning', name: 'warning', component: Warning },

                ]
            },

        ],
        mode: 'history',

    })
    // 全局路由导航守卫
router.beforeEach((to, from, next) => {
    // 判断用户访问的是否为登录页
    if (to.path === '/login') return next()
        // 获取 token 值
    const tokenStr = localStorage.getItem('token')
    if (!tokenStr) {
        next('/login')
    } else {
        next()
    }
})

export default router