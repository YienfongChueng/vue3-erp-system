<template>
   <div class="login">
        <p class="login-title">朝夕后台管理系统</p>
        <div class="login-content">
            <div class="login-main">
                <div class="login-container">
                    <el-form
                        ref="ruleFormRef"
                        :model="ruleForm"
                        :rules="rules"
                        label-width="120px"
                        class="demo-ruleForm"
                    >
                        <el-form-item label="用户名" prop="account">
                            <el-input v-model="ruleForm.account"/>
                        </el-form-item>

                        <el-form-item label="密码" prop="password">
                            <el-input  type="password" v-model="ruleForm.password" />
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="login(ruleFormRef)">
                                登录
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref,reactive} from 'vue'
import { apiLogin } from '@/api'
import { setToken } from '@/utils/auth.js'
import {useRouter} from 'vue-router'
const router = useRouter()
const ruleFormRef = ref();
const ruleForm = reactive({
    account: 'Admin',
    password:'itlove123456'
})
const rules = reactive({
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 2, max: 5, message: '长度2-5位', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 18, message: '长度3-18位', trigger: 'blur' },
  ]
})

function login(formEl) {
    formEl.validate(async valid => {
        if(!valid) {
            ElMessage({
                message: '账号密码格式错误！',
                type: 'warning',
            })
            return false
        }
        let {data: {token}} = await apiLogin(ruleForm)
        setToken(token)
        router.push('/home')
    })
}

</script>

<style lang="scss" scoped>

</style>