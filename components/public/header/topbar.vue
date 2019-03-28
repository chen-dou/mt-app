<template>
    <div class="header-bar">
        <div class="container">
            <div class="header-bar-left">
                <v-geo></v-geo>
                <v-user></v-user>
            </div>
            <div class="header-bar-right">
                <v-nav></v-nav>
            </div>
        </div>
    </div>
</template>
<script>
import VGeo from './geo.vue'
import VNav from './nav'
import VUser from './user'
export default {
    components:{
        VGeo,
        VNav,
        VUser
    }
}
</script>
<style lang="scss">
    .header-bar{
        background:#F8F8F8;
        height:40px;
        margin:0 -20px;
        line-height:40px;
        .container{
            width:1190px;
            margin:auto;
            .header-bar-left{
                float:left;
            }
            .header-bar-right{
                float:right;
                .header-bar-nav{
                    li{
                        float:left;
                        font-size:12px;
                        padding:0 14px;
                        a{
                            color:#999;
                            &:hover{
                                color:#31BBAC;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
