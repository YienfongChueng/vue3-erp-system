<template>
    <el-menu
        :default-active="route.path"
        class="el-menu-vertical-demo"
        router
      >
        <el-menu-item v-for="v in navData" :key="v.path" :index="v.path">
          <el-icon><icon-menu /></el-icon>
          <span>{{v.title}}</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
import {Menu as IconMenu} from '@element-plus/icons-vue'
import {useRoute} from 'vue-router'
import { useNavStore } from '@/store/nav'
import {storeToRefs} from 'pinia'
const route = useRoute()

const navStore = useNavStore()
const {nav:navData} = storeToRefs(navStore)
</script>

<style lang="scss" scoped>

</style>