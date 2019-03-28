<template>
    <div class="register">
        <header class="header-mini">
            <div class="wrapper">
                <nuxt-link to="/"></nuxt-link>
            </div>
        </header>
        <div class="content">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="昵称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                    <el-input  v-model="ruleForm.code"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input type="password" v-model="ruleForm.pwd"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="cpwd">
                    <el-input  type="password" v-model="ruleForm.cpwd"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    layout:'blank',
    data(){
        return {
            ruleForm:{
                name:'',
                email:'',
                code:'',
                pwd:'',
                cpwd:''
            },
            rules:{
                name:[{required:true,type:'string',message:'请输入昵称',trigger:'blur'}],
                email:[{required:true,type:'email',message:'请输入邮箱',trigger:'blur'}],
                pwd:[{required:true,message:'创建密码',trigger:'blur'}],
                cpwd:[
                    {
                        validator:(rule,value,callback) => {
                            if(value===''){
                                callback(new Error('请再次输入密码'))
                            }else if(value!==this.ruleForm.pwd){
                                callback(new Error('两次输入密码不一致'))
                            }else{
                                callback()
                            }
                        },
                        trigger:'blur'
                    }
                ]
            }  
        }
    },
    methods:{
        submitForm(){
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .header-mini{
        border-bottom:2px solid #2bb8aa;
        .wrapper{
            padding:10px 0;
            width:980px;
            margin:auto;
            a{
                background-image:url('https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png');
                background-position:-669px -748px;
                width:54px;
                height:36px;
                display:block;
            }
        }   
    }
    .content{
        margin:0 auto 30px;
        width:980px;
        padding-top:30px;
        .el-form{
            width:400px;
        }
    }
</style>