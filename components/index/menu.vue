<template>
    <div class="menu">
        <dl class="nav" @mouseleave="leave">
            <dt>全部分类</dt>
            <dd v-for="(item,index) in menu" :key="index" @mouseenter="enter(index)" >
                <nuxt-link to="/goodfood">{{item.name}}</nuxt-link>
            </dd>
        </dl>
        <div class="detail" v-if="isShowDetail" @mouseenter="enterDetail" @mouseleave="leaveDetail">
            <template v-for="(item,index) in menu[index].child">
                <h4 :key="index">{{item.title}}</h4>
                <span v-for="v in item.child" :key="v">{{v}}</span>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShowDetail:false,
            index:0,
            menu:[{
                name:'美食a',
                child:[{
                    title:'美食a',
                    child:['代金券a','甜点饮品a']
                }]
            },{
                name:'外卖',
                child:[{
                    title:'外卖',
                    child:['美团外面','饿了么']
                }]
            }]
        }
    },
    methods:{
        enter(index){
            this.index = index
            this.isShowDetail = true
        },
        leave(){
            this.timer = setTimeout(() => {
                this.isShowDetail = false        
            }, 150);
        },
        enterDetail(){
            clearTimeout(this.timer)
        },
        leaveDetail(){
            this.isShowDetail = false
        }
    }
}
</script>
<style lang="scss" scoped>
    .menu{
        position:relative;
        height:475px;
        margin-top:-50px;
        background:-webkit-linear-gradient(-90deg,rgba(2,181,157,.85) 2%,rgba(22,146,183,.85) 100%);
        .nav{
            color:#fff;
        width:230px;
            dt{
                font-size:16px;    
                height:50px;
                line-height:50px;
                padding-left:15px;
                margin-bottom:10px;
            }
            dd{
                padding-left:15px;
                font-size:13px;
                line-height:20px;
                a{
                    color:#fff;
                    display:block;
                }
                &:hover{
                    background:rgba(255,255,255,.2)
                }
            }
        }
        .detail{
            position:absolute;
            bottom:0;
            top:60px;
            width:400px;
            padding:0 25px;
            box-sizing:border-box;
            left:100%;
            background:#fff;
            h4{
                margin-top:10px;
                font-size:16px;
                font-weight:normal;
                color:#222;
                line-height:40px;
                border-bottom:1px solid #e5e5e5;
            }
            span{
                font-size:12px;
                float:left;
                margin-top:10px;
                margin-right:16px;
                color:#999;
            }
        }
    }
</style>


