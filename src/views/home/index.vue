<template>
    <div>
        <el-container>
                <el-aside width="200px"><Sidebar /></el-aside>
                <el-container>
                    <el-header>
                        <el-button type="primary" class="exit" @click="goBack">退出</el-button>
                    </el-header>
                    <el-main>
                        <el-card>
                            <router-view></router-view>
                        </el-card>
                    </el-main>
                </el-container>
        </el-container>
    </div>
</template>

<script setup>
import Sidebar from '@/layout/Sidebar.vue'
import {removeToken} from '@/utils/auth.js'
import {useRouter} from 'vue-router'
import { usePermissionStore } from '@/store/permission'
const router = useRouter()
const permissionStore = usePermissionStore()
const goBack = ()=> {
    // 清除token
    removeToken()
    // 清除用户角色
    permissionStore.setUid('')
    router.push('/login')
}
</script>

<style lang="scss" scoped>

</style>