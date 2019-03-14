import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import My from '@/views/My'

Vue.use(Router);
//重写go方法
Router.prototype.go = function () {
    this.isBack = true;
    window.history.go(-1)
};
/*
    全局路由配置
*/
export default new Router({
    //使用前端伪路由
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Index',
            meta: {
                headerType:'index',
                isHome: true,
                keepAlive: true,
                isBack: false
            },
            component: Index
        },
        {
            path: '/my',
            name: 'My',
            meta: {
                headerTitle: '我的',
                isHome: true,
                keepAlive: true,
                isBack: false
            },
            component: My
        },
        {
            path: '/product/list',
            name: 'productList',
            meta: {
                headerTitle: '列表',
                keepAlive: true,
                isBack: false
            },
            component: () => import('@/views/Product/List')
        },
        {
            path: '/product/show',
            name: 'productShow',
            meta: {
                headerTitle: '详情',
                keepAlive: true,
                isBack: false
            },
            component: () => import('@/views/Product/Show')
        }
    ]
})
