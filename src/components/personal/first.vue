<template>
    <div>
        <el-row style="padding-top: 30px">
            <el-col :span="9">
                <el-form :model="ruleForm1"   label-width="200px" class="demo-ruleForm">
                    <el-form-item label="系统账号" prop="account ">
                        <el-input v-model="ruleForm1.account" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="所属乡镇" prop="belong">
                        <el-input  v-model="ruleForm1.belong"  :disabled="true"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="9">
                <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="200px" class="demo-ruleForm">
                    <el-form-item label="原登录密码" prop="age">
                        <el-input  type="password" v-model.number="ruleForm2.age"></el-input>
                    </el-form-item>
                    <el-form-item label="新登录密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="再次输入新密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<style>

</style>
<script>
    import '../../admin/ajax_changepwd'
    export default {
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('原密码不能为空'));
                }
                else {
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm1: {
                    account: '999ddd999999',
                    belong: '9999999999',
                },
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http({
                            method:'post',
                            url:'/changepwd',
                            data:this.ruleForm2
                        }).then(function (res) {
                            console.log(res)
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