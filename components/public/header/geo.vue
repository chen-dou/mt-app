<template>
    <div class="geo">
        <i></i>{{currentCity}}
        <nuxt-link class="change-city" to="/changecity">切换城市</nuxt-link>
        <span class="near-citys">[
            <nuxt-link class="city-guess" to="/changecity">大厂回族自治县</nuxt-link>
            <nuxt-link class="city-guess" to="/changecity">廊坊</nuxt-link>
            <nuxt-link class="city-guess" to="/changecity">固安县</nuxt-link>]
        </span>    
    </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(["currentCity"])
    }
}
</script>
<style lang="scss" scoped>
    .geo{
        color:#666;
        font-size:12px;
        float:left;
        .change-city{
            color:#666;
        }
        .near-citys{
            .city-guess{
                color:#999;
            }
        }
    }
</style>

