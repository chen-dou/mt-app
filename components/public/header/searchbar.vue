<template>
    <div class="header-search">
        <div class="header-content">
            <div class="header-title-module">
                <nuxt-link to="/">
                    <img src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="">
                </nuxt-link>
            </div>
            <div class="header-search-module">
                <div class="header-search-wrap">
                    <div class="header-search-block">
                        <input type="text" @focus="focus"  @blur="blur" placeholder="搜索商家或地点" v-model="search"/>
                        <button>搜索</button>
                    </div>
                    <div class="header-search-suggest">
                        <div class="header-search-noinput" v-if="isFocus&&!search">
                            <h6>热门搜索</h6>
                            <div class="header-search-hotword">
                                <nuxt-link to="/food">故宫博物院</nuxt-link>
                                <nuxt-link to="/food">第九届陶然亭冰雪嘉年华</nuxt-link>
                                <nuxt-link to="/food">北京欢乐谷</nuxt-link>
                                <nuxt-link to="/food">故宫珍宝馆</nuxt-link>
                            </div>
                        </div>
                        <div class="header-search-hasinput" v-if="isFocus&&search">
                            <ul>
                                <li><nuxt-link to="/food">食宝街</nuxt-link></li>
                                <li><nuxt-link to="/food">食宝街</nuxt-link></li>
                                <li><nuxt-link to="/food">食宝街</nuxt-link></li>
                                <li><nuxt-link to="/food">食宝街</nuxt-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="home-header-links">
                    <ul>
                        <li><nuxt-link to="/food">美团外卖</nuxt-link></li>
                        <li><nuxt-link to="/waimiai">猫眼电影</nuxt-link></li>
                        <li><nuxt-link to="/waimiai">美团酒店</nuxt-link></li>
                        <li><nuxt-link to="/waimiai">民宿/公寓</nuxt-link></li>
                        <li><nuxt-link to="/waimiai">商家入驻</nuxt-link></li>
                        <li><nuxt-link to="/waimiai">美团公益</nuxt-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            search:'',
            isFocus:false,
            hotPlace:[],
            searchList:[]
        }
    },
    methods:{
        focus(){
            this.isFocus = true
        },
        blur(){
            setTimeout(() => {
                this.isFocus = false
            },150)
        }
    }
}
</script>
<style lang="scss" scoped>
    .header-search{
        margin:0 -20px;
        background:#fff;
        padding-bottom:10px;
        .header-content{
            width:1190px;
            margin:auto;
            &:after{
                content:'';
                display:block;
                clear:both;
            }
            .header-title-module{
                padding-top:28px;
                padding-right:160px;
                float:left;
                img{
                    width:126px;
                    height:46px;
                }
            }
            .header-search-module{
                padding-top:25px;
                float:left;
                .header-search-wrap{
                    width:552px;
                    position:relative;
                    .header-search-block{
                        width:550px;
                        height:40px;
                        border:1px solid #13D1BE;
                        border-radius:4px;
                        input{
                            border:none;
                            outline:none;
                            width:84%;
                            height:100%;
                            float:left;
                            text-indent:1em;
                            background:none;
                        }
                        button{
                            width:16%;
                            outline:none;
                            float:left;
                            background:#13D1BE;
                            height:100%;
                            border:none;
                            color:#fff;
                            font-size:16px;
                            cursor:pointer;
                        }
                    }
                    .header-search-suggest{
                        position:absolute;
                        left:0px;
                        top:100%;
                        background:#fff;
                        box-shadow:0 3px 5px 0 rgba(0,0,0,.1);
                        border-top:none;
                        border-bottom-left-radius:4px;
                        border-bottom-right-radius:4px;
                        width:84%;
                        box-sizing:border-box;
                        color:#999;
                        font-size:12px;
                        .header-search-noinput{
                            border:1px solid #E5E5E5;
                            padding:10px;
                            h6{
                                padding-bottom:10px;
                            }
                            .header-search-hotword{
                                overflow:hidden;
                                a{
                                    color:#666;
                                    margin-right:10px;
                                    margin-bottom:5px;
                                    float:left;
                                    &:hover{
                                        color:#31BBAC;
                                    }
                                }
                            }
                        }
                        .header-search-hasinput{
                            border:1px solid #E5E5E5;
                            li{
                                a{
                                    color:#666;
                                    font-size:14px;
                                    display:block;
                                    line-height:24px;
                                    padding-left:10px;
                                    &:hover{
                                        color:#31BBAC;
                                        background:#eee;
                                    }
                                }
                            }
                        }
                    }
                }
                .home-header-links{
                    margin-top:49px;
                    li{
                        float:left;
                        a{
                            color:#222;
                            font-size:16px;
                            font-weight:bold;
                            &:hover{
                                color:#31BBAC;
                            }
                        }
                        &+li{
                            margin-left:40px;
                        }
                    }
                }
            }
        }
    }
</style>

