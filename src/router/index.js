import {createRouter,createWebHashHistory} from 'vue-router'
import { usePermissionStore } from '@/store/permission'
import { apiGetResources } from '@/api'
import navData from '@/utils/navData'
import {dealRouters, resolveComponent} from '@/utils/routerHandler'
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: ()=> import("@/views/login/index.vue")
    },
    {
        path: '/home',
        name: 'home',
        component: ()=> import("@/views/home/index.vue"),
        redirect: '/index',
    }

]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

router.beforeEach(async (to,from,next) => {
    if(to.path === '/login') {
        next()
    }else {
        const permissionStore = usePermissionStore()
        // 无缓存

        if(permissionStore.uid === ''){
            // 发送请求
            let { data } = await apiGetResources()
            console.log(data)
            // 缓存角色
            permissionStore.setUid(data.uid)
            // 转换为路由数据
            let asyncRouteList = dealRouters(data.uid,navData)
            // 动态路由数据添加
            asyncRouteList.map(route => {
                route.component = resolveComponent(route.component)
                router.addRoute('home',route)
            })
            next({path:to.path});
        } else {
            next()
        }
    }
})

export default router