<template>
  <div>
    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
      <el-col :span="24" :sm="24" :lg="24" style="margin-bottom: 70px">
        <h3><span v-text=projectName></span></h3>
        <span v-text=ruleForm.bdHbdate></span> &nbsp; &nbsp;进度汇报
      </el-col>
      <el-col :span="10" :sm="20" :lg="12">
        <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">征迁项目汇报项</div>
        <el-form :span="10" label-position="left" :model="ruleForm" label-width="250px"
                 class="demo-ruleForm">
          <el-form-item label="累计交地面积（亩）" prop="rpLjjdarea">
            <el-input v-model="ruleForm.rpLjjdarea" disabled></el-input>
          </el-form-item>
          <el-form-item label="累计拆迁面积（㎡）" prop="rpLjcqarea">
            <el-input v-model="ruleForm.rpLjcqarea" disabled></el-input>
          </el-form-item>
          <el-form-item label="累计征迁户数（户）" prop="rpLjzqfam">
            <el-input v-model="ruleForm.rpLjzqfam" disabled></el-input>
          </el-form-item>
          <el-form-item label="已解决问题数" prop="rpSolquecount">
            <el-input v-model="ruleForm.rpSolquecount" disabled></el-input>
          </el-form-item>
          <el-form-item label="今日解决问题" prop="rpTdsolquest">
            <el-input type="textarea" v-model="ruleForm.rpTdsolquest"  disabled></el-input>
          </el-form-item>
          <el-form-item label="需上级协调问题" prop="rpXsjxtquest">
            <el-input type="textarea" v-model="ruleForm.rpXsjxtquest" disabled></el-input>
          </el-form-item>
          <el-form-item label="项目进展简诉" prop="rpBriefing">
            <el-input type="textarea" v-model="ruleForm.rpBriefing" disabled></el-input>
          </el-form-item>
          <el-form-item label="存在问题" prop="rpQuest">
            <el-input type="textarea" v-model="ruleForm.rpQuest" disabled></el-input>
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
        url: localStorage.url + '/schedule/getRemoveLog',
        type: "GET",
        data: {id: localStorage.checkLogId},
        success: function (data) {
          if (data.code == 0) {
            console.log(222,data)
            console.log(localStorage.checkLogId);
            let dateTmp = new Date(data.data.rpHbdate);
            let year = dateTmp.getFullYear();
            let month = dateTmp.getMonth()+1;
            let date = dateTmp.getDate();
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
