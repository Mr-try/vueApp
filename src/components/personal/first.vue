<template>
  <div>
    <el-row style="padding-top: 30px">
      <el-col :span="9">
        <el-form :model="ruleForm1" label-width="200px" class="demo-ruleForm">
          <el-form-item label="系统账号" prop="uiCode ">
            <el-input v-model="ruleForm1.uiCode" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="所属乡镇" prop="uiTown">
            <el-input v-model="ruleForm1.uiTown" :disabled="true"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="9">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="200px" class="demo-ruleForm">
          <el-form-item label="原登录密码" prop="oldpassword">
            <el-input type="password" v-model="ruleForm2.oldpassword"></el-input>
          </el-form-item>
          <el-form-item label="新登录密码" prop="password">
            <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
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
  import {Message} from 'element-ui';
  export default {
    data() {
      var checkPwd = (rule, value, callback) => {
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
        } else if (value !== this.ruleForm2.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm1: {
          uiCode: localStorage.uiCode,
          uiTown: localStorage.uiTown,
        },
        ruleForm2: {
          uid: localStorage.uiId,
          oldpassword: '',
          password: '',
          checkPass: ''
        },
        rules2: {
          oldpassword: [
            {validator: checkPwd, trigger: 'change'}
          ],
          password: [
            {validator: validatePass, trigger: 'change'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'change'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http({
              url: localStorage.url + '/User/modifyPassword',
              type: 'POST',
              data: this.ruleForm2,
              success: function (data) {
                if (data.code == 1) {
                  Message({
                    showClose: true,
                    message: '原密码不正确',
                    type: 'error'
                  });
                }
                else {
                  Message({
                    showClose: true,
                    message: '修改成功',
                    type: 'success'
                  });
                }

              },
              error: function (err) {
                Message({
                  showClose: true,
                  message: '修改失败',
                  type: 'error'
                });
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
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
