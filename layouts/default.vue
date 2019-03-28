<template>
  <el-container>
    <el-header height="auto"><v-header></v-header></el-header>
    <el-main class="main"><nuxt /></el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import VHeader from '../components/public/header'
export default {
  components:{
    VHeader  
  }
}
</script>

<style lang="scss" scoped>
  .main{
    background:#f8f8f8;
    padding:0;
    overflow:visible;
  }
</style>
