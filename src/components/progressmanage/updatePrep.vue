<template>
  <div>
    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
      <el-col :span="24" :sm="24" :lg="24" style="margin-bottom: 70px">
        <h3><span v-text=proName></span></h3>
        2017-02-01 进度汇报
      </el-col>
      <el-col :span="10" :sm="20" :lg="12">
        <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">前期项目汇报项</div>
        <el-form :span="10" label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px"
                 class="demo-ruleForm">
          <el-form-item label="完成节点数" prop="finishnodes">
            <el-input v-model="ruleForm.finishnodes"></el-input>
          </el-form-item>
          <el-form-item label="已解决问题数" prop="solvequest">
            <el-input v-model="ruleForm.solvequest"></el-input>
          </el-form-item>
          <el-form-item label="今日解决问题" prop="tdsolvequest">
            <el-input type="textarea" v-model="ruleForm.tdsolvequest" placeholder="请输入今日解决问题，若无，可不填"></el-input>
          </el-form-item>
          <el-form-item label="需上级协调问题" prop="xsjxtquest">
            <el-input type="textarea" v-model="ruleForm.xsjxtquest" placeholder="请输入需上级协调问题，若无，可不填"></el-input>
          </el-form-item>
          <el-form-item label="项目进展简诉" prop="xmjzjs">
            <el-input type="textarea" v-model="ruleForm.xmjzjs" placeholder="请输入进展简述，若无，可不填"></el-input>
          </el-form-item>
          <el-form-item label="存在问题" prop="quest">
            <el-input type="textarea" v-model="ruleForm.quest" placeholder="请输入存在问题，若无，可不填"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit(0,'ruleForm')">暂存</el-button>
            <el-button type="primary" @click="onSubmit(1,'ruleForm')">保存并上报</el-button>
            <el-button>取消返回</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<style>

</style>
<script>
  import router from '../../router'
  export default {
    data() {
      return {
        proName: localStorage.updateProName,
        ruleForm: {
          pid: localStorage.updateProId,
          finishnodes: '',
          solvequest: '',
          tdsolvequest: '',
          xsjxtquest: '',
          xmjzjs: '',
          quest: '',
          savestatus: ''

        },
        rules: {
          finishnodes: [
            {required: true, message: '请输入完成节点数', trigger: 'change'},
          ],
          solvequest: [
            {required: true, message: '请输入已解决问题数', trigger: 'change'}
          ]
        }
      };
    },
    methods: {
      onSubmit(type,formName) {
        this.ruleForm.savestatus = type;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var _self = this;
            this.$http({
              url: localStorage.url + '/schedule/addBeforeReport',
              type: "POST",
              data: _self.ruleForm,
              success: function (data) {
                if (data.code == 0) {
                  console.log(data)
                  router.push("/2-1");
                }
                else {
                  console.log('error submit!!');
                  return false;
                }
              },
              error: function (err) {
                console.log(err)
              }
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
