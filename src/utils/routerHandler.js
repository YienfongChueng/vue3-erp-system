import {useNavStore} from '@/store/nav'
export const dealRouters = (uid,navData)=>{
    let routeList = []
    let list = []  // 定义一个数组,针对角色处理数据
    if(uid === 1) {
        // 管理员
        list = navData
    }else {
        let uids = uid.toString().split('') // 转为数组
        list = navData.filter(v=>uids.some(d=>v.roles.includes(d)));
    }
    //缓存到mainstore  导航数据复用
    const navStore = useNavStore()
    navStore.setNav(list)
    // 生成路由数据
    routeList = list.map(item => {
        return {
            path: item.path,
            name: item.name,
            meta:{title:item.title},
            component: item.component
        }
    })
    return routeList
}

export const resolveComponent = (component) => {
    let Module = import.meta.glob("@/views/home/content/*/index.vue");
    let path = Module[`/src/views/home/content/${component}/index.vue`];
    return path;
}