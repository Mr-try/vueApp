<template>
    <div class="login">
        <el-row :span="24">
            <el-col :span="6" :push="9">
                <el-form :label-position="labelPosition" :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="ruleForm2.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<style scope>
    .login {
        padding: 200px 0;
        width: 100%;
        height: 100%;
    }
    .btn-login{
        width: 100%;
    }
</style>
<script>
    import router from '../router'
    import '../admin/ajax_login'
    export default {
        data() {
            return {
                labelPosition: 'left',
                ruleForm2: {
                    pass: '',
                    name: ''
                },
                rules2: {
                    pass: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                    ],
                    name: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' },
                        { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) =>{
                    if (valid) {
                        this.$http({
                            method:'get',
                            url:'/login',
                            data:this.ruleForm2
                        }).then(function (res) {
                            console.log(res)
                            router.push('/1-1');
                        }).catch(function (err) {
                            console.log(err)
                        })

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>