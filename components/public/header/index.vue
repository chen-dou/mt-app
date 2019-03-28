<template>
    <div>
        <v-topbar></v-topbar>
        <v-searchbar></v-searchbar> 
    </div>
</template>
<script>
import VTopbar from './topbar.vue'
import VSearchbar from './searchbar'
export default {
    components:{
        VTopbar,
        VSearchbar
    },
    mounted(){
        console.log('layout')
    }
}
</script>
<style>

</style>
