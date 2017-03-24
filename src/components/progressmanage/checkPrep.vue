<template>
  <div>
    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
      <el-col :span="24" :sm="24" :lg="24" style="margin-bottom: 70px">
        <h3><span v-text=projectName></span></h3>
        <span v-text=ruleForm.bdHbdate></span>&nbsp;&nbsp;进度汇报
      </el-col>
      <el-col :span="10" :sm="20" :lg="12">
        <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">前期项目汇报项</div>
        <el-form :span="10" label-position="left" :model="ruleForm" label-width="150px"
                 class="demo-ruleForm">
          <el-form-item label="完成节点数" prop="bdFinishnodes">
            <el-input v-model="ruleForm.bdFinishnodes" disabled></el-input>
          </el-form-item>
          <el-form-item label="已解决问题数" prop="bdSolvequest">
            <el-input v-model="ruleForm.bdSolvequest" disabled></el-input>
          </el-form-item>
          <el-form-item label="今日解决问题" prop="bdTdsolvequest">
            <el-input type="textarea" v-model="ruleForm.bdTdsolvequest" disabled></el-input>
          </el-form-item>
          <el-form-item label="需上级协调问题" prop="bdXsjxtquest">
            <el-input type="textarea" v-model="ruleForm.bdXsjxtquest" disabled></el-input>
          </el-form-item>
          <el-form-item label="项目进展简诉" prop="bdXmjzjs">
            <el-input type="textarea" v-model="ruleForm.bdXmjzjs" disabled></el-input>
          </el-form-item>
          <el-form-item label="存在问题" prop="bdQuest">
            <el-input type="textarea" v-model="ruleForm.bdQuest" disabled></el-input>
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
        projectName: localStorage.checkProName,
        ruleForm: {}
      };
    },
    created: function () {
      var _self = this;
      this.$http({
        url: localStorage.url + '/schedule/getBeforeLog',
        type: "GET",
        data: {id: localStorage.checkLogId},
        success: function (data) {
          if (data.code == 0) {
            console.log(data)
            console.log(localStorage.checkLogId);
            let dateTmp = new Date(data.data.bdHbdate);
            let year = dateTmp.getFullYear();
            let month = dateTmp.getMonth()+1;
            let date = dateTmp.getDate();
            console.log(year,month,date)
            data.data.bdHbdate = year + "-"+ month + "-" + date;
            _self.ruleForm=data.data;
            console.log(_self.ruleForm.bdHbdate)
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
    }
  }
</script>
