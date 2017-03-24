<template>
  <div class="login">
    <el-row :span="24">
      <el-col :span="6" :push="9">
        <el-form :label-position="labelPosition" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="用户名" prop="code">
            <el-input v-model="ruleForm.code"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
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

  .btn-login {
    width: 100%;
  }
</style>
<script>
  import router from '../router'
  export default {
    data() {
      return {
        labelPosition: 'left',
        ruleForm: {
          password: '',
          code: ''
        },
        rules: {
          password: [
            {required: true, message: '密码不能为空', trigger: 'change'},
          ],
          code: [
            {required: true, message: '用户名不能为空', trigger: 'change'},
            {pattern: /^\w{3,25}$/, message: '长度在 3 到 25 个字符', trigger: 'change'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http({
              url: localStorage.url + '/User/login',
              type: "POST",
              data: this.ruleForm,
              success: function (data) {
                if (data.code == 0) {
                  router.push('/1-1');
                  localStorage.isLogin = true;
                  localStorage.uiId = data.data.uiId;
                  localStorage.uiCode = data.data.uiCode;
                  localStorage.uiTown = data.data.uiTown;
                  localStorage.uiStatus = data.data.uiStatus;
                  localStorage.uiPassword = data.data.uiPassword;
                }
                else {

                  localStorage.isLogin = false;
                  console.log('error submit!!');
                  return false;
                }
              },
              error: function (err) {
                console.log(err)
              }
            });
          }
          else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        formName = {
          password: '',
          code: ''
        };
      }
    }
  }
</script>
