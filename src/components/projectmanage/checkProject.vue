<template>
  <div>
    <span v-text="ruleForm.pbName"></span>
    <el-tabs v-model="activeName" id="tabs">
      <el-tab-pane label="基本信息" name="first">
        <div>
          <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
            <el-col :span="10" :sm="20" :lg="12">
              <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">项目基本信息</div>
              <el-form :span="10" label-position="left" :model="ruleForm" ref="ruleForm"
                       label-width="250px" class="demo-ruleForm">
                <el-form-item label="项目名称" prop="pbName">
                  <el-input v-model="ruleForm.pbName" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="年度" prop="pbYear">
                  <el-select v-model="ruleForm.pbYear" placeholder="" :disabled="true">
                    <el-option label="2016" value="shanghai"></el-option>
                    <el-option label="2017" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="项目编号" prop="pbCode">
                  <el-input v-model="ruleForm.pbCode" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="项目分类" prop="pbType">
                  <el-radio-group v-model="ruleForm.pbType" :disabled="true">
                    <el-radio label="1">前期</el-radio>
                    <el-radio label="2">征迁</el-radio>
                    <el-radio label="3">建设</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="是否可见" prop="pbSee">
                  <el-radio-group v-model="ruleForm.pbSee" :disabled="true">
                    <el-radio label="1">可见</el-radio>
                    <el-radio label="0">不可见</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="所属行业" prop="pbIndustry">
                  <el-select v-model="ruleForm.pbIndustry" placeholder="" :disabled="true">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="所属乡镇" prop="pbTown">
                  <el-select v-model="ruleForm.pbTown" placeholder="" :disabled="true">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="责任单位" prop="pbDepartment">
                  <el-select v-model="ruleForm.pbDepartment" placeholder="" :disabled="true">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="第一责任人" prop="pbFirperson">
                  <el-input v-model="ruleForm.pbFirperson" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="直接责任人" prop="pbResperson">
                  <el-input v-model="ruleForm.pbResperson" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="县责任领导" prop="pbCouleader">
                  <el-input v-model="ruleForm.pbCouleader" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="建设地点" prop="pbBdplace">
                  <el-input v-model="ruleForm.pbBdplace" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="项目介绍" prop="pbIntroduce">
                  <el-input type="textarea" v-model="ruleForm.pbIntroduce" placeholder=""
                            :disabled="true"></el-input>
                </el-form-item>
                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px"> 业主信息设置</div>
                <el-form-item label="项目业主" prop="pbOwner">
                  <el-input v-model="ruleForm.pbOwner" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="责任人、职务、联系方式" prop="pbYzlinkperson">
                  <el-input v-model="ruleForm.pbYzlinkperson" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="联系人、职务、联系方式" prop="pbYzrespperson">
                  <el-input v-model="ruleForm.pbYzrespperson" :disabled="true"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>

      <!--显示/隐藏三个阶段目标任务div-->
      <el-tab-pane label="完成情况" name="second" style="text-align: left;">
            <div v-if="showType == 1">
              <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                <el-col :sm="24" :lg="24" style="padding-right: 40px!important;">
                  <div style="font-size: 0.8em;color: #333;margin-bottom: 20px">上报情况汇总</div>
                  <div class="itemList">需上级协调问题
                    <el-input style="padding-top: 20px" type="textarea" :rows="2" placeholder=""
                              v-model="list.bdXsjxtquest" :disabled="true"></el-input>
                  </div>
                  <div class="itemList">各指标进度
                    <div style="z-index: 0; margin: -100px 0;!important;width: 900px;height: 400px" id="btProgress">
                      图
                    </div>
                  </div>
                  <div class="itemList">月度完成情况
                    <div style="width: 900px;height: 400px" id="btComplete">
                      图
                    </div>
                  </div>
                </el-col>
                <el-col :sm="24" :lg="24">
                  <div style="font-size: 0.8em;color: #333;margin-bottom: 20px">项目计划</div>
                  <div class="itemList">计划问题数：<span v-text="task.btPlanquestcount"></span>个</div>
                  <div class="itemList">计划完成节点数：<span v-text="tasknode.length"></span>个</div>
                  <el-table class="itemList" :data="tasknode" border style="width: 100%">
                    <el-table-column prop="tnDate" label="时间节点"></el-table-column>
                    <el-table-column prop="tnNote" label="完成目标"></el-table-column>
                  </el-table>
                  <div class="itemList">攻坚行动必须要解决的问题
                    <el-input style="padding-top: 20px" type="textarea" :rows="2" v-model="task.btWaitsolvquest"
                              :disabled="true"></el-input>
                  </div>
                  <div class="itemList">攻坚行动必须达到的目标
                    <el-input style="padding-top: 20px" type="textarea" :rows="2" v-model="task.btTarget"
                              :disabled="true"></el-input>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div v-if="showType == 2">
              <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                <el-col :sm="24" :lg="24" style="padding-right: 40px!important;">
                  <div style="font-size: 0.8em;color: #333;margin-bottom: 20px">上报情况汇总</div>
                  <div class="itemList">需上级协调问题
                    <el-input style="padding-top: 20px" type="textarea" :rows="2" placeholder=""
                              v-model="list.rpXsjxtquest" :disabled="true"></el-input>
                  </div>
                  <div class="itemList">各指标进度
                    <div style="z-index: 0; margin: -100px 0;!important;width: 900px;height: 400px" id="btProgress">
                      图
                    </div>
                  </div>
                  <div class="itemList">月度完成情况
                    <div style="width: 900px;height: 400px" id="btComplete">
                      图
                    </div>
                  </div>
                </el-col>
                <el-col :sm="24" :lg="24">
                  <div style="font-size: 0.8em;color: #333;margin-bottom: 20px">项目计划</div>
                  <div class="itemList">总交地面积：<span v-text="task.rem_zjdarea"></span>个</div>
                  <div class="itemList">总拆迁面积：<span v-text="task.rem_zcqarea"></span>个</div>
                  <div class="itemList">总征迁户数：<span v-text="task.rem_zzqfam"></span>个</div>
                  <div class="itemList">未完成交地面积：<span v-text="task.rem_wjdarea"></span>个</div>
                  <div class="itemList">未完成拆迁面积：<span v-text="task.rem_wcqarea"></span>个</div>
                  <div class="itemList">未完成征迁户数：<span v-text="task.rem_wzqfam"></span>个</div>
                  <div class="itemList">目标交地面积：<span v-text="task.rem_mbjdarea"></span>个</div>
                  <div class="itemList">目标拆迁面积：<span v-text="task.rem_mbzqarea"></span>个</div>
                  <div class="itemList">目标征迁户数：<span v-text="task.rem_mbzqfam"></span>个</div>
                  <div class="itemList">计划解决问题数：<span v-text="task.rem_planquest"></span>个</div>
                  <el-table class="itemList" :data="tasknode" border style="width: 100%">
                    <el-table-column prop="tnDate" label="时间节点"></el-table-column>
                    <el-table-column prop="tnNote" label="完成目标"></el-table-column>
                  </el-table>
                  <div class="itemList">攻坚行动必须要解决的问题
                    <el-input style="padding-top: 20px" type="textarea" :rows="2" v-model="task.btSolvequest"
                              :disabled="true"></el-input>
                  </div>
                  <div class="itemList">攻坚行动必须达到的目标
                    <el-input style="padding-top: 20px" type="textarea" :rows="2" v-model="task.btTarget"
                              :disabled="true"></el-input>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div v-if="showType == 3">
              <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                <el-col :sm="24" :lg="24" style="padding-right: 40px!important;">
                  <div style="font-size: 0.8em;color: #333;margin-bottom: 20px">上报情况汇总</div>
                  <div class="itemList">需上级协调问题
                    <el-input style="padding-top: 20px" type="textarea" :rows="2" placeholder=""
                              v-model="list.bdXsjxtquest" :disabled="true"></el-input>
                  </div>
                  <div class="itemList">各指标进度
                    <div style="z-index: 0; margin: -100px 0;!important;width: 900px;height: 400px" id="btProgress">
                      图
                    </div>
                  </div>
                  <div class="itemList">月度完成情况
                    <div style="width: 900px;height: 400px" id="btComplete">
                      图
                    </div>
                  </div>
                </el-col>
                <el-col :sm="24" :lg="24">
                  <div style="font-size: 0.8em;color: #333;margin-bottom: 20px">项目计划</div>
                  <div class="itemList">计划问题数：<span v-text="task.btPlanquestcount"></span>个</div>
                  <div class="itemList">计划完成节点数：<span v-text="tasknode.length"></span>个</div>
                  <el-table class="itemList" :data="tasknode" border style="width: 100%">
                    <el-table-column prop="tnDate" label="时间节点"></el-table-column>
                    <el-table-column prop="tnNote" label="完成目标"></el-table-column>
                  </el-table>
                  <div class="itemList">攻坚行动必须要解决的问题
                    <el-input style="padding-top: 20px" type="textarea" :rows="2" v-model="task.btWaitsolvquest"
                              :disabled="true"></el-input>
                  </div>
                  <div class="itemList">攻坚行动必须达到的目标
                    <el-input style="padding-top: 20px" type="textarea" :rows="2" v-model="task.btTarget"
                              :disabled="true"></el-input>
                  </div>
                </el-col>
              </el-row>
            </div>
      </el-tab-pane>
      <el-tab-pane label="上报记录" name="third">
        <el-row :gutter="24">
          <el-col :span="12" style="text-align: right">
          </el-col>
          <el-col :span="18" style="text-align: left">
            <el-form :inline="true" :model="getProjectLog" class="demo-form-inline">
              <el-form-item>
                <el-date-picker v-model="getProjectLog.bgdate" type="date" placeholder="开始时间"
                                :picker-options="pickerOptions1">
                </el-date-picker>
              </el-form-item>
              <el-form-item>
                -
              </el-form-item>
              <el-form-item>
                <el-date-picker v-model="getProjectLog.enddate" type="date" placeholder="结束时间"
                                :picker-options="pickerOptions1">
                </el-date-picker>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="4" style="text-align: right;float: right">
            <el-button type="primary">导出报表</el-button>
            <el-button @click="back">返回</el-button>
          </el-col>
        </el-row>

        <div v-if="showType == 1">
          <el-row :gutter="24">
            <el-table :data="tableProjectLog" border style="width: 100%;">
              <el-table-column label="上报时间" width="180">
                <template scope="scope">
                  {{ scope.row.bdHbdate }}
                </template>
              </el-table-column>
              <el-table-column label="前期项目完成节点数" width="180">
                <template scope="scope">
                  <el-button type="text" size="small" @click="getProDetail(scope.row)">{{ scope.row.bdFinishnodes }}
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column label="已解决问题" width="180">
                <template scope="scope">
                  {{ scope.row.bdSolvequest }}
                </template>
              </el-table-column>
              <el-table-column label="今日解决问题" width="180">
                <template scope="scope">
                  {{ scope.row.bdTdsolvequest }}
                </template>
              </el-table-column>
              <el-table-column label="需上级协调问题" width="180">
                <template scope="scope">
                  {{ scope.row.bdXsjxtquest }}
                </template>
              </el-table-column>
              <el-table-column label="责任人" width="180">
                <template scope="scope">
                  {{ scope.row.bdresperson }}
                </template>
              </el-table-column>
              <el-table-column label="操作" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="checkPage( scope.row)">查看日报</el-button>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-row>
        </div>
        <div v-if="showType == 2">
          <el-row :gutter="24">
            <el-table :data="tableProjectLog" border style="width: 100%;">
              <el-table-column label="上报时间" width="180">
                <template scope="scope">
                  {{ scope.row.rpHbdate }}
                </template>
              </el-table-column>
              <el-table-column label="拆迁完成（㎡）" width="180">
                <template scope="scope">
                  <el-button type="text" size="small" @click="getProDetail(scope.row)">{{ scope.row.rpLljcqarea }}
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column label="交地完成（亩）" width="180">
                <template scope="scope">
                  {{ scope.row.rpLjjdarea }}
                </template>
              </el-table-column>
              <el-table-column label=" 征迁完成（户）" width="180">
                <template scope="scope">
                  {{ scope.row.rpLljzqfam }}
                </template>
              </el-table-column>
              <el-table-column label="已解决问题" width="180">
                <template scope="scope">
                  {{ scope.row.rpSolquecount }}
                </template>
              </el-table-column>
              <el-table-column label="今日解决问题" width="180">
                <template scope="scope">
                  {{ scope.row.rpTdsolquest }}
                </template>
              </el-table-column>
              <el-table-column label="需上级协调问题" width="180">
                <template scope="scope">
                  {{ scope.row.rpXsjxtquest }}
                </template>
              </el-table-column>
              <el-table-column label="责任人" width="180">
                <template scope="scope">
                  {{ scope.row.rpXsjxtquest }}
                </template>
              </el-table-column>
              <el-table-column label="操作" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="checkPage( scope.row)">查看日报</el-button>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-row>
        </div>
        <div v-if="showType == 3">
          <el-row :gutter="24">
            <el-table :data="tableProjectLog" border style="width: 100%;">
              <el-table-column label="上报时间" width="180">
                <template scope="scope">
                  {{ scope.row.bdHbdate }}
                </template>
              </el-table-column>
              <el-table-column label="开工情况" width="180">
                <template scope="scope">
                  <el-button type="text" size="small" @click="getProDetail(scope.row)">{{ scope.row.bdStatus }}
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column label="竣工情况" width="180">
                <template scope="scope">
                  <el-button type="text" size="small" @click="getProDetail(scope.row)">{{ scope.row.bdStatus }}
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column label="已解决问题" width="180">
                <template scope="scope">
                  {{ scope.row.bdSolvequest }}
                </template>
              </el-table-column>
              <el-table-column label="今日解决问题" width="180">
                <template scope="scope">
                  {{ scope.row.bdSolvequest }}
                </template>
              </el-table-column>
              <el-table-column label="需上级协调问题" width="180">
                <template scope="scope">
                  {{ scope.row.bdXsjxtquest }}
                </template>
              </el-table-column>
              <el-table-column label="责任人" width="180">
                <template scope="scope">
                  {{ scope.row.proStep }}
                </template>
              </el-table-column>
              <el-table-column label="操作" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="checkPage( scope.row)">查看日报</el-button>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-row>
        </div>
        <el-pagination
          v-if="isShowPagination"
          @current-change="handleCurrentChange"
          :current-page="getProjectLog.pageNo"
          :page-size="getProjectLog.pageCount"
          layout="total, prev, pager, next"
          :total="totalPages">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  var echarts = require('echarts');
  import router from '../../router'

  export default {
    data() {
      return {
        /* 分页配置 */
        isShowPagination:false,
        totalPages:'',

        showType: "",
        activeName: 'first',
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        ruleForm: {},
        task: {},
        tasknode: [],
        list: {},
        /* get report list setting */
        getProjectLog: {
          pid: localStorage.projectId,
          type: 1,
          pageNo: 1,
          pageCount: 10,
          bgdate: '',
          enddate: ""
        },
        tableProjectLog: [],
        tableData: [],
        tableData2: []
      };
    },
    methods: {
      formatTen(num) {
        return num > 9 ? (num + "") : ("0" + num);
      },
      formatDate(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return year + "-" + this.formatTen(month) + "-" + this.formatTen(day);
      },
      /* 分页查询上报 */
      handleCurrentChange(val) {
        this.getProjectLog.pageNo = val;
        console.log(`当前页: ${val}`);
        this.getLogs()
      },
      /* 查看日报 */
      checkPage(row){
        console.log(row)
        localStorage.checkLogId = row.bdId || row.rpId;
        localStorage.checkProName = this.ruleForm.pbName;
        router.push("/2-4/" + this.getProjectLog.type);
      },
      getLogs:function () {
        this.getProjectLog.bgdate= this.getProjectLog.bgdate == ''? '':this.formatDate(new Date(this.getProjectLog.bgdate));
        this.getProjectLog.enddate=this.getProjectLog.enddate == ''? '':this.formatDate(new Date(this.getProjectLog.enddate));
        var _self = this;
        this.$http({
          url: localStorage.url + '/project/getProjectLog',
          type: "GET",
          data: _self.getProjectLog,
          success: function (data) {
            if (data.code == 0) {
              _self.tableProjectLog = data.data.data;
              /* 分页配置 */
              if(data.data.count > _self.getProjectLog.pageCount){
                _self.isShowPagination = true;
                _self.totalPages = data.data.count;
              }
              else {
                _self.isShowPagination = false;
              }
            }
            else {
              console.log('error submit!!');
              return false;
            }
          },
          error: function (err) {
            console.log(err)
          }
        });
      },
      back: function () {
        router.push("/3-1");
      },
      onSubmit: function () {
        this.getLogs()
      }
    },
    mounted: function () {
      let str = this.$route.path;
      let strs = str.split("/");
      this.showType = strs[2];
      this.getProjectLog.type = strs[2];

      /* get project detail by  id */
      var _self = this;
      this.$http({
        url: localStorage.url + '/project/getProjectInfo',
        type: "GET",
        data: {pid: localStorage.projectId},
        success: function (data) {
          if (data.code == 0) {
            console.log(data)
            _self.ruleForm = data.data.base;
            if (data.data.task) _self.task = data.data.task;
            if (data.data.log) _self.list = data.data.log;
            if (data.data.tasknode) _self.tasknode = data.data.tasknode;

            /* 前期 */
            if (_self.getProjectLog.type == 1) {
              /* pain echarts one */
              var myChart = echarts.init(document.getElementById('btProgress'));
              let progressOption = {
                tooltip: {
                  show: false,
                  trigger: 'item',
                  formatter: "{a}{b}: {c} ({d}%)"
                },
                textStyle: {color: '#fff'},
                series: [
                  {
                    name: '完成节点数',
                    type: 'pie',
                    hoverAnimation: false,
                    clockwise: false,
                    radius: ['35%', '40%'],
                    center: ['25%', '50%'],
                    label: {
                      normal: {
                        show: false,
                      }
                    },
                    labelLine: {
                      normal: {
                        show: false
                      }
                    },
                    data: [
                      {
                        value: _self.tasknode.length - _self.list.bdFinishnodes,
                        name: '未完成',
                        itemStyle: {normal: {color: '#bce2f2'}, emphasis: {color: '#bce2f2'}}
                      },
                      {
                        value: _self.list.bdFinishnodes,
                        name: '完成',
                        itemStyle: {normal: {color: '#2daae2'}, emphasis: {color: '#2daae2'}}
                      }
                    ]
                  },
                  {
                    name: '解决问题数',
                    type: 'pie',
                    selectedMode: false,
                    hoverAnimation: false,
                    clockwise: false,
                    radius: [0, '30%'],
                    center: ['75%', '50%'],
                    itemStyle: {
                      normal: {
                        label: {
                          show: true,
                          formatter: '{b} \n ' + 100 * _self.list.bdFinishnodes / _self.task.btPlanquestcount + "%"
                        },
                        labelLine: {show: true}
                      }
                    },
                    label: {normal: {show: true, position: 'center'},},
                    labelLine: {
                      normal: {
                        show: false
                      }
                    },
                    emphasis: {show: true, position: 'center'}, textStyle: {color: '#fff', fontWeight: 'bold'},
                    data: [
                      {
                        value: 1,
                        name: '解决问题数',
                        label: {
                          normal: {show: true, position: 'center'},
                          textStyle: {color: '#fff', fontWeight: 'bold'}
                        },
                        itemStyle: {normal: {color: '#2daae2'}}
                      },
                    ]
                  },

                  {
                    name: '完成节点数',
                    type: 'pie',
                    selectedMode: false,
                    hoverAnimation: false,
                    clockwise: false,
                    radius: [0, '30%'],
                    center: ['25%', '50%'],
                    itemStyle: {
                      normal: {
                        label: {
                          show: true,
                          formatter: '{b} \n ' + 100 * _self.list.bdSolvequest / _self.task.btPlanquestcount + "%"
                        },
                        labelLine: {show: true}
                      }
                    },
                    label: {normal: {show: true, position: 'center'},},
                    labelLine: {
                      normal: {
                        show: false
                      }
                    },
                    emphasis: {show: true, position: 'center'}, textStyle: {color: '#fff', fontWeight: 'bold'},
                    data: [
                      {
                        value: 1,
                        name: '完成节点数',
                        label: {
                          normal: {show: true, position: 'center'},
                          textStyle: {color: '#fff', fontWeight: 'bold'}
                        },
                        itemStyle: {normal: {color: '#2daae2'}}
                      },
                    ]
                  },
                  {
                    name: '解决问题数',
                    type: 'pie',
                    hoverAnimation: false,
                    clockwise: false,
                    radius: ['35%', '40%'],
                    center: ['75%', '50%'],
                    label: {
                      normal: {
                        show: false,
                      }
                    },
                    labelLine: {
                      normal: {
                        show: false
                      }
                    },
                    data: [
                      {
                        value: _self.task.btPlanquestcount - _self.list.bdSolvequest,
                        name: '未完成',
                        itemStyle: {normal: {color: '#bce2f2'}, emphasis: {color: '#bce2f2'}}
                      },
                      {
                        value: _self.list.bdSolvequest,
                        name: '完成',
                        itemStyle: {normal: {color: '#2daae2'}, emphasis: {color: '#2daae2'}}
                      }
                    ]
                  }
                ]
              };
              myChart.setOption(progressOption);
              // 高亮当前图形
              myChart.dispatchAction({
                type: 'pieSelect',
                seriesIndex: 0,
              });
              /* pain echarts two */
              var myChart2 = echarts.init(document.getElementById('btComplete'));
              let completeOption = {
                tooltip: {
                  trigger: 'axis'
                },
                grid: {
                  containLabel: true
                },
                legend: {
                  data: ['完成节点数', '解决问题数']
                },
                xAxis: [{
                  type: 'category',
                  axisTick: {
                    alignWithLabel: true
                  },
                  data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
                }],
                yAxis: [{
                  type: 'value',
                  name: '完成节点数',
                  min: 0,
                  max: 50,
                  position: 'right',
                  axisLabel: {
                    formatter: '{value} %'
                  }
                }, {
                  type: 'value',
                  name: '解决问题数',
                  min: 0,
                  max: 3000,
                  position: 'left'
                }],
                series: [{
                  name: '完成节点数',
                  type: 'line',
                  stack: '总量',
                  label: {
                    normal: {
                      show: true,
                      position: 'top',
                    }
                  },
                  lineStyle: {
                    normal: {
                      width: 3,
                      shadowColor: 'rgba(0,0,0,0.4)',
                      shadowBlur: 10,
                      shadowOffsetY: 10
                    }
                  },
                  data: [1, 13, 37, 35, 15, 13, 25, 21, 6, 45, 32, 2, 4, 13, 6, 4, 11]
                }, {
                  name: '解决问题数',
                  type: 'bar',
                  yAxisIndex: 1,
                  stack: '总量',
                  label: {
                    normal: {
                      show: true,
                      position: 'top'
                    }
                  },
                  data: [209, 236, 325, 439, 507, 576, 722, 879, 938, 1364, 1806, 1851, 1931, 2198, 2349, 2460, 2735]
                }]
              };
              myChart2.setOption(completeOption);
            }
            /* 征迁 */
            if (_self.getProjectLog.type == 2) {
              /* pain echarts one */

              /* pain echarts two */
              var myChart2 = echarts.init(document.getElementById('btComplete'));
              let completeOption = {
                tooltip: {
                  trigger: 'axis'
                },
                grid: {
                  containLabel: true
                },
                legend: {
                  data: ['完成节点数', '解决问题数']
                },
                xAxis: [{
                  type: 'category',
                  axisTick: {
                    alignWithLabel: true
                  },
                  data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
                }],
                yAxis: [{
                  type: 'value',
                  name: '完成节点数',
                  min: 0,
                  max: 50,
                  position: 'right',
                  axisLabel: {
                    formatter: '{value} %'
                  }
                }, {
                  type: 'value',
                  name: '解决问题数',
                  min: 0,
                  max: 3000,
                  position: 'left'
                }],
                series: [{
                  name: '完成节点数',
                  type: 'line',
                  stack: '总量',
                  label: {
                    normal: {
                      show: true,
                      position: 'top',
                    }
                  },
                  lineStyle: {
                    normal: {
                      width: 3,
                      shadowColor: 'rgba(0,0,0,0.4)',
                      shadowBlur: 10,
                      shadowOffsetY: 10
                    }
                  },
                  data: [1, 13, 37, 35, 15, 13, 25, 21, 6, 45, 32, 2, 4, 13, 6, 4, 11]
                }, {
                  name: '解决问题数',
                  type: 'bar',
                  yAxisIndex: 1,
                  stack: '总量',
                  label: {
                    normal: {
                      show: true,
                      position: 'top'
                    }
                  },
                  data: [209, 236, 325, 439, 507, 576, 722, 879, 938, 1364, 1806, 1851, 1931, 2198, 2349, 2460, 2735]
                }]
              };
              myChart2.setOption(completeOption);
            }
            /* 建设 */
            if (_self.getProjectLog.type == 3) {
              /* pain echarts one */
              var myChart = echarts.init(document.getElementById('btProgress'));
              let progressOption = {
                tooltip: {
                  show: false,
                  trigger: 'item',
                  formatter: "{a}{b}: {c} ({d}%)"
                },
                textStyle: {color: '#fff'},
                series: [
                  {
                    name: '完成节点数',
                    type: 'pie',
                    hoverAnimation: false,
                    clockwise: false,
                    radius: ['35%', '40%'],
                    center: ['25%', '50%'],
                    label: {
                      normal: {
                        show: false,
                      }
                    },
                    labelLine: {
                      normal: {
                        show: false
                      }
                    },
                    data: [
                      {
                        value: _self.tasknode.length - _self.list.bdFinishnodes,
                        name: '未完成',
                        itemStyle: {normal: {color: '#bce2f2'}, emphasis: {color: '#bce2f2'}}
                      },
                      {
                        value: _self.list.bdFinishnodes,
                        name: '完成',
                        itemStyle: {normal: {color: '#2daae2'}, emphasis: {color: '#2daae2'}}
                      }
                    ]
                  },
                  {
                    name: '解决问题数',
                    type: 'pie',
                    selectedMode: false,
                    hoverAnimation: false,
                    clockwise: false,
                    radius: [0, '30%'],
                    center: ['75%', '50%'],
                    itemStyle: {
                      normal: {
                        label: {
                          show: true,
                          formatter: '{b} \n ' + 100 * _self.list.bdFinishnodes / _self.task.btPlanquestcount + "%"
                        },
                        labelLine: {show: true}
                      }
                    },
                    label: {normal: {show: true, position: 'center'},},
                    labelLine: {
                      normal: {
                        show: false
                      }
                    },
                    emphasis: {show: true, position: 'center'}, textStyle: {color: '#fff', fontWeight: 'bold'},
                    data: [
                      {
                        value: 1,
                        name: '解决问题数',
                        label: {
                          normal: {show: true, position: 'center'},
                          textStyle: {color: '#fff', fontWeight: 'bold'}
                        },
                        itemStyle: {normal: {color: '#2daae2'}}
                      },
                    ]
                  },

                  {
                    name: '完成节点数',
                    type: 'pie',
                    selectedMode: false,
                    hoverAnimation: false,
                    clockwise: false,
                    radius: [0, '30%'],
                    center: ['25%', '50%'],
                    itemStyle: {
                      normal: {
                        label: {
                          show: true,
                          formatter: '{b} \n ' + 100 * _self.list.bdSolvequest / _self.task.btPlanquestcount + "%"
                        },
                        labelLine: {show: true}
                      }
                    },
                    label: {normal: {show: true, position: 'center'},},
                    labelLine: {
                      normal: {
                        show: false
                      }
                    },
                    emphasis: {show: true, position: 'center'}, textStyle: {color: '#fff', fontWeight: 'bold'},
                    data: [
                      {
                        value: 1,
                        name: '完成节点数',
                        label: {
                          normal: {show: true, position: 'center'},
                          textStyle: {color: '#fff', fontWeight: 'bold'}
                        },
                        itemStyle: {normal: {color: '#2daae2'}}
                      },
                    ]
                  },
                  {
                    name: '解决问题数',
                    type: 'pie',
                    hoverAnimation: false,
                    clockwise: false,
                    radius: ['35%', '40%'],
                    center: ['75%', '50%'],
                    label: {
                      normal: {
                        show: false,
                      }
                    },
                    labelLine: {
                      normal: {
                        show: false
                      }
                    },
                    data: [
                      {
                        value: _self.task.btPlanquestcount - _self.list.bdSolvequest,
                        name: '未完成',
                        itemStyle: {normal: {color: '#bce2f2'}, emphasis: {color: '#bce2f2'}}
                      },
                      {
                        value: _self.list.bdSolvequest,
                        name: '完成',
                        itemStyle: {normal: {color: '#2daae2'}, emphasis: {color: '#2daae2'}}
                      }
                    ]
                  }
                ]
              };
              myChart.setOption(progressOption);
              // 高亮当前图形
              myChart.dispatchAction({
                type: 'pieSelect',
                seriesIndex: 0,
              });
              /* pain echarts two */
              var myChart2 = echarts.init(document.getElementById('btComplete'));
              let completeOption = {
                tooltip: {
                  trigger: 'axis'
                },
                grid: {
                  containLabel: true
                },
                legend: {
                  data: ['完成节点数', '解决问题数']
                },
                xAxis: [{
                  type: 'category',
                  axisTick: {
                    alignWithLabel: true
                  },
                  data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
                }],
                yAxis: [{
                  type: 'value',
                  name: '完成节点数',
                  min: 0,
                  max: 50,
                  position: 'right',
                  axisLabel: {
                    formatter: '{value} %'
                  }
                }, {
                  type: 'value',
                  name: '解决问题数',
                  min: 0,
                  max: 3000,
                  position: 'left'
                }],
                series: [{
                  name: '完成节点数',
                  type: 'line',
                  stack: '总量',
                  label: {
                    normal: {
                      show: true,
                      position: 'top',
                    }
                  },
                  lineStyle: {
                    normal: {
                      width: 3,
                      shadowColor: 'rgba(0,0,0,0.4)',
                      shadowBlur: 10,
                      shadowOffsetY: 10
                    }
                  },
                  data: [1, 13, 37, 35, 15, 13, 25, 21, 6, 45, 32, 2, 4, 13, 6, 4, 11]
                }, {
                  name: '解决问题数',
                  type: 'bar',
                  yAxisIndex: 1,
                  stack: '总量',
                  label: {
                    normal: {
                      show: true,
                      position: 'top'
                    }
                  },
                  data: [209, 236, 325, 439, 507, 576, 722, 879, 938, 1364, 1806, 1851, 1931, 2198, 2349, 2460, 2735]
                }]
              };
              myChart2.setOption(completeOption);
            }
          }
          else {
            console.log('error submit!!');
            return false;
          }
        },
        error: function (err) {
          console.log(err)
        }
      });

      /* get report list */
      this.$http({
        url: localStorage.url + '/project/getProjectLog',
        type: "GET",
        data: _self.getProjectLog,
        success: function (data) {
          if (data.code == 0) {
            _self.tableProjectLog = data.data.data;
            /* 分页配置 */
            if(data.data.count > _self.getProjectLog.pageCount){
              _self.isShowPagination = true;
              _self.totalPages = data.data.count;
            }
          }
          else {
            console.log('error submit!!');
            return false;
          }
        },
        error: function (err) {
          console.log(err)
        }
      });
    }
  };
</script>
<style>
  .itemList {
    font-size: 0.8em;
    color: #777;
    margin-bottom: 20px;
    margin-left: 20px;
  }

  .el-table th > .cell {
    text-align: center !important;
  }

  .el-table .cell {
    text-align: center !important;
  }
</style>
