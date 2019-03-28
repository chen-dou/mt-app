<template>
    <div class="user">
        <template v-if="user">
            欢迎您，<span class="username">{{user}}</span>
            [<nuxt-link class="logout">退出</nuxt-link>]
        </template>
        <template v-else>
            <nuxt-link to="/login" class="login">立即登录</nuxt-link>
            <nuxt-link to="/register" class="register">注册</nuxt-link>
        </template>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user:''
        }
    }
}
</script>
<style lang="scss" scoped>
    .user{
        float:left;
        font-size:12px;
        margin-left:20px;
        .login{
            color:#31BBAC;
        }
        .register{
            color:#666;
            margin-left:10px;
        }
    }
</style>
