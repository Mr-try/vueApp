<template>
    <div>
        <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
            <el-col :span="24" :sm="24" :lg="24" style="margin-bottom: 70px">
                <h3>岐安村二期安置点（批地村民自建）</h3>
                2017-02-01 进度汇报
            </el-col>
            <el-col :span="10" :sm="20" :lg="12">
                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">建设项目汇报项</div>
                <el-form :span="10" label-position="left" :model="ruleForm" label-width="250px" class="demo-ruleForm">
                    <el-form-item label="累计完成投资（亿元）" prop="bdAllprice">
                        <el-input v-model="ruleForm.bdAllprice" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="开竣工状态">
                        <el-col :span="6">
                            <el-checkbox v-model="checked" disabled>已开工</el-checkbox>
                        </el-col>
                        <el-col :span="18">
                            <el-date-picker type="date" disabled placeholder="选择开工时间" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col :span="24" style="height:10px;">
                        </el-col>
                        <el-col :span="6">
                            <el-checkbox v-model="checked" disabled>已竣工</el-checkbox>
                        </el-col>
                        <el-col :span="18">
                            <el-date-picker type="date" disabled placeholder="选择竣工时间" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="已解决问题数" prop="name">
                        <el-input v-model="ruleForm.name" ></el-input>
                    </el-form-item>
                    <el-form-item label="今日解决问题" prop="bdSolvequest">
                        <el-input type="textarea" v-model="ruleForm.bdSolvequest" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="需上级协调问题" prop="bdXsjxtquest">
                        <el-input type="textarea" v-model="ruleForm.bdXsjxtquest"  disabled></el-input>
                    </el-form-item>
                    <el-form-item label="项目进展简诉" prop="bdBriefing">
                        <el-input type="textarea" v-model="ruleForm.bdBriefing" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="存在问题" prop="bdWaitquest">
                        <el-input type="textarea" v-model="ruleForm.bdWaitquest"  disabled></el-input>
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
                ruleForm: {}
            };
        },
      created: function () {
        var _self = this;
        this.$http({
          url: localStorage.url + '/schedule/getBuildLog',
          type: "GET",
          data: {id:localStorage.checkLogId},
          success: function (data) {
            if (data.code == 0) {
              console.log(data)
              _self.ruleForm = data.data;
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
