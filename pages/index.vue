<template>
  <div class="page-index">
    <div class="index-container">
      <div class="banner-container">
        <v-menu />
      </div>
    </div>
  </div>
</template>

<script>
import VMenu from '@/components/index/menu'
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['currentCity'])
  },
  components:{
    VMenu
  },
  mounted(){
    console.log('mounted')
  },
  async asyncData(context){
    const {data:{currentCity}} = await context.app.$axios.get('/mock/city.json')
    console.log(currentCity)
  },
  async fetch(){
    console.log(7777)
  }
}
</script>

<style lang="scss" scoped>
  .index-container{
    width:1190px;
    margin:auto;
    /deep/ .menu{
      float:left;
    }
  }
</style>
