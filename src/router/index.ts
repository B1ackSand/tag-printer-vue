import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    // 项目打开后进入的默认地址
    {
        path: '/',
        redirect: '/home',
        meta: {
          title: 'tag-printer'
        }
    },
    {
        path: '/home',
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: 'tag-printer'
        }
    }
]
const router = createRouter({
    history: createWebHashHistory(), // 本项目采用了哈希模式
    routes
})
export default router
