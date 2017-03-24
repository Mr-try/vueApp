<template>
  <div>
    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
      <el-col :span="24" :sm="24" :lg="24" style="margin-bottom: 70px">
        <h3><span v-text=proName></span></h3>
        <span v-text=currentDate></span> 进度汇报
      </el-col>
      <el-col :span="10" :sm="20" :lg="12">
        <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">建设项目汇报项</div>
        <el-form :span="10" label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="250px"
                 class="demo-ruleForm">
          <el-form-item label="累计完成投资（亿元）" prop="allprice">
            <el-input v-model="ruleForm.allprice"></el-input>
          </el-form-item>
          <el-form-item label="开竣工状态">
            <el-col :span="6">
              <el-checkbox v-model="ruleForm.bgstatus">已开工</el-checkbox>
            </el-col>
            <el-col :span="18">
              <el-date-picker type="date" placeholder="选择开工时间" v-model="ruleForm.bgdate"
                              style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col :span="24" style="height:10px;">
            </el-col>
            <el-col :span="6">
              <el-checkbox v-model="ruleForm.endstatus">已竣工</el-checkbox>
            </el-col>
            <el-col :span="18">
              <el-date-picker type="date" placeholder="选择竣工时间" v-model="ruleForm.enddate"
                              style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="已解决问题数" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="今日解决问题" prop="solvequest">
            <el-input type="textarea" v-model="ruleForm.solvequest" placeholder="请输入今日解决问题，若无，可不填"></el-input>
          </el-form-item>
          <el-form-item label="需上级协调问题" prop="xsjxtquest">
            <el-input type="textarea" v-model="ruleForm.xsjxtquest" placeholder="请输入需上级协调问题，若无，可不填"></el-input>
          </el-form-item>
          <el-form-item label="项目进展简诉" prop="briefing">
            <el-input type="textarea" v-model="ruleForm.briefing" placeholder="请输入进展简述，若无，可不填"></el-input>
          </el-form-item>
          <el-form-item label="存在问题" prop="waitquest">
            <el-input type="textarea" v-model="ruleForm.waitquest" placeholder="请输入存在问题，若无，可不填"></el-input>
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
  export default {
    data() {
      return {
        currentDate:'',
        proName: localStorage.updateProName,
        ruleForm: {
          pid: localStorage.updateProId,
          allprice: '',
          status: '',
          bgdate: '',
          bgstatus: '',
          enddate: '',
          endstatus: '',
          solvequest: '',
          xsjxtquest: '',
          briefing: '',
          waitquest: '',
          savestatus: ''
        },
        rules: {
          allprice: [
            {required: true, message: '请输入累计完成投资（亿元）', trigger: 'change'},
          ],
          status: [
            {required: true, message: '请输入开竣工状态已开工', trigger: 'change'}
          ],
          solvequest: [
            {required: true, message: '请输入已解决问题数', trigger: 'change'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created:function () {
      let newDate = new Date();
      this.currentDate = newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate()
    }
  }
</script>
