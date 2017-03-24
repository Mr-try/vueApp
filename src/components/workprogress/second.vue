<template>
  <div>
    <el-row :gutter="24"
            style="float: left;margin-top: 30px;margin-bottom:10px;z-index: 9;width: 100%;text-align: left">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formInline.pname" placeholder="项目名称/编号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formInline.person" placeholder="第一责任人/直接责任人/县责任领导"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="formInline.department" placeholder="全部责任部门">
            <el-option v-for="item in departmentList" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="formInline.town" placeholder="全部乡镇">
            <el-option v-for="item in townList" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="formInline.industry" placeholder="全部行业">
            <el-option v-for="item in industryList" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="12" style="text-align: left">
        <el-radio-group v-model="radio1" @change="showtype" style="margin-top: 10px">
          <el-radio class="radio" :label="1">前期</el-radio>
          <el-radio class="radio" :label="2">征迁</el-radio>
          <el-radio class="radio" :label="3">建设</el-radio>
        </el-radio-group>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <el-button type="primary" @click="diypage(0)"> 自定义报表</el-button>
        <el-button @click="diypage(1)"> 导出报表</el-button>
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="24" v-show="radio1==1">
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="pcode" label="项目编号" width="150"></el-table-column>
        <el-table-column prop="pname" label="项目名称" width="150"></el-table-column>
        <el-table-column prop="type" label="分类" width="150"></el-table-column>
        <el-table-column prop="industry" label="行业" width="150"></el-table-column>
        <el-table-column prop="allprice" label="总投资(亿元)" width="150"></el-table-column>
        <el-table-column label="完成节点数">
          <el-table-column
            prop="finishnodes"
            label="数量(个)"
            width="120">
          </el-table-column>
          <el-table-column
            prop="totalcount"
            label="总数量(个)"
            width="120">
          </el-table-column>
          <el-table-column
            prop="finishnodespercent"
            label="完成比例"
            width="300">
          </el-table-column>
        </el-table-column>
        <el-table-column label="已解决问题">
          <el-table-column
            prop="solvequest"
            label="数量(个)"
            width="120">
          </el-table-column>
          <el-table-column
            prop="planquestcount"
            label="总数量(个)"
            width="120">
          </el-table-column>
          <el-table-column
            prop="solvequestpercent"
            label="完成比例"
            width="300">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="department" label="责任部门" width="150"></el-table-column>
        <el-table-column prop="firperson" label="第一责任人" width="150"></el-table-column>
        <el-table-column prop="couleader" label="县责任领导" width="150"></el-table-column>
        <el-table-column prop="xsjxtquest" label="需领导协调问题" width="150"></el-table-column>
        <el-table-column prop="lastreport" label="最后上报时间" width="150"></el-table-column>
      </el-table>
    </el-row>
    <el-row :gutter="24" v-show="radio1==2">
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="pcode" label="项目编号" width="150"></el-table-column>
        <el-table-column prop="pname" label="项目名称" width="150"></el-table-column>
        <el-table-column prop="type" label="分类" width="150"></el-table-column>
        <el-table-column prop="industry" label="行业" width="150"></el-table-column>
        <el-table-column label="已交地">
          <el-table-column
            prop="ljjd"
            label="面积（亩）"
            width="120">
          </el-table-column>
          <el-table-column
            prop="zjd"
            label="任务量（亩）"
            width="120">
          </el-table-column>
          <el-table-column
            prop="jdpercent"
            label="完成比例"
            width="300">
          </el-table-column>
        </el-table-column>
        <el-table-column label="已拆迁">
          <el-table-column
            prop="ljcq"
            label="面积（㎡）"
            width="120">
          </el-table-column>
          <el-table-column
            prop="zcq"
            label="任务量（㎡）"
            width="120">
          </el-table-column>
          <el-table-column
            prop="cqpercent"
            label="完成比例"
            width="300">
          </el-table-column>
        </el-table-column>
        <el-table-column label="已完成征迁户数">
          <el-table-column
            prop="ljzq"
            label="数量（户）"
            width="120">
          </el-table-column>
          <el-table-column
            prop="zzq"
            label="拆迁总数（户）"
            width="120">
          </el-table-column>
          <el-table-column
            prop="zqpercent"
            label="完成比例"
            width="300">
          </el-table-column>
        </el-table-column>
        <el-table-column label="已解决问题">
          <el-table-column
            prop="ljquest"
            label="数量(个)"
            width="120">
          </el-table-column>
          <el-table-column
            prop="zquest"
            label="总数量(个)"
            width="120">
          </el-table-column>
          <el-table-column
            prop="questpercent"
            label="完成比例"
            width="300">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="department" label="责任部门" width="150"></el-table-column>
        <el-table-column prop="firperson" label="第一责任人" width="150"></el-table-column>
        <el-table-column prop="couleader" label="县责任领导" width="150"></el-table-column>
        <el-table-column prop="xsjxtquest" label="需领导协调问题" width="150"></el-table-column>
        <el-table-column prop="lastreport" label="最后上报时间" width="150"></el-table-column>
      </el-table>
    </el-row>
    <el-row :gutter="24" v-show="radio1==3">
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="pcode" label="项目编号" width="150"></el-table-column>
        <el-table-column prop="pname" label="项目名称" width="150"></el-table-column>
        <el-table-column prop="type" label="分类" width="150"></el-table-column>
        <el-table-column prop="industry" label="行业" width="150"></el-table-column>
        <el-table-column prop="invest" label="总投资（亿元）" width="150"></el-table-column>
        <el-table-column label="开竣工信息">
          <el-table-column
            prop="bttime"
            label="开工时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="endtime"
            label="竣工时间"
            width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column label="总投资">
          <el-table-column
            prop="allprice"
            label="金额亿元）"
            width="120">
          </el-table-column>
          <el-table-column
            prop="planinvest"
            label="任务量（亿元）"
            width="120">
          </el-table-column>
          <el-table-column
            prop="priceercent"
            label="完成比例"
            width="300">
          </el-table-column>
        </el-table-column>
        <el-table-column label="已解决问题">
          <el-table-column
            prop="yjjquest"
            label="数量(个)"
            width="120">
          </el-table-column>
          <el-table-column
            prop="planquest"
            label="总数量(个)"
            width="120">
          </el-table-column>
          <el-table-column
            prop="questpercent"
            label="完成比例"
            width="300">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="department" label="责任部门" width="150"></el-table-column>
        <el-table-column prop="firperson" label="第一责任人" width="150"></el-table-column>
        <el-table-column prop="couleader" label="县责任领导" width="150"></el-table-column>
        <el-table-column prop="xsjxtquest" label="需领导协调问题" width="150"></el-table-column>
        <el-table-column prop="lastreport" label="最后上报时间" width="150"></el-table-column>
      </el-table>
    </el-row>
    <!--<el-pagination-->
    <!--v-if="isShowPagination"-->
    <!--@current-change="handleCurrentChange"-->
    <!--:current-page="formInline.pageNo"-->
    <!--:page-size="formInline.pageCount"-->
    <!--layout="total, prev, pager, next"-->
    <!--:total="totalPages">-->
    <!--</el-pagination>-->
    <!-- 征迁 自定义报表-->
    <el-dialog title="title" v-model="dialogZhengqianFormVisible" :show-close="false">
      <!--项目基本信息-->
      <el-row :gutter="24">
        <div class="dialogItem">项目基本信息</div>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="checkedZhengqianXiangmu" @change="">
          <el-checkbox class="checkbox-son" v-for="item in zhengqianXiangmu" :label="item">
            {{ item }}
          </el-checkbox>
        </el-checkbox-group>
      </el-row>
      <!--完成时间节点-->
      <el-row :gutter="24">
        <div class="dialogItem"> 完成任务时间节点</div>
      </el-row>
      <el-row :gutter="24">
        <el-checkbox-group v-model="checkedZhengqianTimenode" @change="">
          <el-checkbox class="checkbox-son" v-for="item in zhengqianTimenode" :label="item">{{ item }}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <!--完成情况-->
      <el-row :gutter="24">
        <div class="dialogItem"> 完成情况</div>
      </el-row>
      <el-row :gutter="24" class="diycheck">
        <!--交地进度-->
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateZhengqianJiaodi"
                       v-model="checkAllZhengqianJiaodi" @change="handleCheckAllChange($event,1)">
            交地进度
          </el-checkbox>
          <el-checkbox-group v-model="checkedZhengqianJiaodi" @change="handleCheckedChange($event,1)">
            <el-checkbox class="checkbox-son" v-for="item in zhengqianJiaodi" :label="item">
              {{ item }}
            </el-checkbox>
          </el-checkbox-group>
        </el-col>
        <!--拆迁进度-->
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateZhengqianChaiqian"
                       v-model="checkAllZhengqianChaiqian" @change="handleCheckAllChange($event,2)">
            拆迁进度
          </el-checkbox>
          <el-checkbox-group v-model="checkedZhengqianChaiqian" @change="handleCheckedChange($event,2)">
            <el-checkbox class="checkbox-son" v-for="item in zhengqianChaiqian" :label="item">
              {{ item }}
            </el-checkbox>
          </el-checkbox-group>
        </el-col>
        <!--拆迁户数-->
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateZhengqianHushu"
                       v-model="checkAllZhengqianHushu" @change="handleCheckAllChange($event,3)">
            拆迁户数
          </el-checkbox>
          <el-checkbox-group v-model="checkedZhengqianHushu" @change="handleCheckedChange($event,3)">
            <el-checkbox class="checkbox-son" v-for="item in zhengqianHushu" :label="item">
              {{ item }}
            </el-checkbox>
          </el-checkbox-group>
        </el-col>
        <!--解决问题数-->
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateZhengqianWenti"
                       v-model="checkAllZhengqianWenti" @change="handleCheckAllChange($event,4)">
            解决问题数
          </el-checkbox>
          <el-checkbox-group v-model="checkedZhengqianWenti" @change="handleCheckedChange($event,4)">
            <el-checkbox class="checkbox-son" v-for="item in zhengqianWenti" :label="item">
              {{ item }}
            </el-checkbox>
          </el-checkbox-group>
        </el-col>

      </el-row>
      <!--责任人信息-->
      <el-row :gutter="24">
        <div class="dialogItem">责任人信息</div>
      </el-row>
      <el-row :gutter="24">
        <el-checkbox-group v-model="checkedZhengqianZerenren" @change="">
          <el-checkbox class="checkbox-son" v-for="item in zhengqianZerenren" :label="item">{{ item }}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <!--责任人信息-->
      <el-row :gutter="24">
        <div class="dialogItem">最新日志信息</div>
      </el-row>
      <el-row :gutter="24">
        <el-checkbox-group v-model="checkedZhengqianRizhi" @change="">
          <el-checkbox class="checkbox-son" v-for="item in zhengqianRizhi" :label="item">{{ item }}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogZhengqianFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogZhengqianFormVisible = false">确 定</el-button>
      </div>
      <div slot="title">
        {{dialogTitle}}
      </div>
    </el-dialog>

    <!--前期  自定义报表-->
    <el-dialog title="title" v-model="dialogQianqiFormVisible" :show-close="false">
      <el-row :gutter="24">
        <div class="dialogItem">项目基本信息</div>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="checkedQianqiXiangmu" @change="">
          <el-checkbox class="checkbox-son" v-for="item in qianqiXiangmu" :label="item">{{ item }}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-row :gutter="24">
        <div class="dialogItem">完成任务时间节点</div>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="checkedQianqiTimenode" @change="">
          <el-checkbox class="checkbox-son" v-for="item in qianqiTimenode" :label="item"> {{ item }}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-row :gutter="24">
        <div class="dialogItem">完成情况</div>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateQianqiWenti"
                       v-model="checkAllQianqiWenti" @change="handleCheckAllChange($event, 5)">
            解决问题数
          </el-checkbox>
          <el-checkbox-group v-model="checkedQianqiWenti" @change="handleCheckedChange($event, 5)">
            <el-checkbox class="checkbox-son" v-for="item in qianqiWenti" :label="item">{{ item }}</el-checkbox>
          </el-checkbox-group>
        </el-col>
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateQianqiWanchengNode"
                       v-model="checkAllQianqiWanchengNode" @change="handleCheckAllChange($event, 6)">
            前期项目完成节点数
          </el-checkbox>
          <el-checkbox-group v-model="checkedQianqiWanchengNode" @change="handleCheckedChange($event, 6)">
            <el-checkbox class="checkbox-son" v-for="item in qianqiWanchengNode" :label="item">{{ item }}</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <div class="dialogItem">责任人信息</div>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="checkedQianqiZenrenren" @change="">
          <el-checkbox class="checkbox-son" v-for="item in qianqiZenrenren" :label="item">{{ item }}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-row :gutter="24">
        <div class="dialogItem">最近日志信息</div>
      </el-row>
      <el-row>
        <el-checkbox-group v-model="checkedQianqiRizhi" @change="">
          <el-checkbox class="checkbox-son" v-for="item in qianqiRizhi" :label="item">{{ item }}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogQianqiFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogQianqiFormVisible = false">确定</el-button>
      </div>
      <div slot="title">
        {{ dialogTitle }}
      </div>
    </el-dialog>
  </div>

</template>

<script>
  //征迁信息
  const zhengqianXiangmuOptions = ['项目编号', '项目业主', '项目分类', '所属行业',
    '项目总投资', '攻坚行动必须解决的问题', '总交地面积', '总拆迁面积',
    '总征迁户数', '未交地面积', '未征迁户数'];
  const zhengqianTimenodeOptions = ['第一季度', '第二季度', '第三季度', '第四季度'];
  const zhengqianJiaodiOptions = ['面积（亩）', '任务量（亩）', '完成比例'];
  const zhengqianChaiqianOptions = ['面积（m²）', '任务量（m²）', '完成比例'];
  const zhengqianHushuOptions = ['数量（个）', '任务量（个）', '完成比例'];
  const zhengqianWentiOptions = ['数量（个）', '任务量（个）', '完成比例'];
  const zhengqianZerenrenOptions = ['责任部门', '所属乡镇', '第一责任人', '直接责任人', '县责任领导'];
  const zhengqianRizhiOptions = ['最后上报时间', '需领导协调解决的问题'];
  //前期信息
  const qianqiXiangmuOptions = ['项目编号', '项目业主', '项目分类', '所属行业',
    '项目总投资', '攻坚行动必须解决的问题', '攻坚行动必须达到的目标'];
  const qianqiTimenodeOptions = ['第一季度', '第二季度', '第三季度', '第四季度'];
  const qianqiWentiOptions = ['数量（个）', '任务量（个）', '完成比例'];
  const qianqiWanchengNodeOptions = ['数量（个）', '任务量（个）', '完成比例'];
  const qianqiZenrenrenOptions = ['责任部门', '所属乡镇', '第一责任人', '直接责任人', '县责任领导'];
  const qianqiRizhiOptions = ['最后上报时间', '需领导协调解决的问题'];
  export default {
    data() {
      return {
        townList: '',
        departmentList: '',
        industryList: '',
        totalPages: '',
        formInline: {
          pageNo:1,
          pageCount:10,
          town: '',
          department: '',
          person: '',
          pname: '',
          industry: '',
        },
        // 自定义报表
        dialogTitle: "自定义报表",
        dialogZhengqianFormVisible: false,
        dialogQianqiFormVisible: false,
        dialogJiansheFormVisible: false,

        //前期表格的data
        qianqiXiangmu: qianqiXiangmuOptions,
        checkedQianqiXiangmu: qianqiXiangmuOptions,

        qianqiTimenode: qianqiTimenodeOptions,
        checkedQianqiTimenode: qianqiTimenodeOptions,

        qianqiWenti: qianqiWentiOptions,
        checkedQianqiWenti: qianqiWentiOptions,

        qianqiWanchengNode: qianqiWanchengNodeOptions,
        checkedQianqiWanchengNode: qianqiWanchengNodeOptions,
        isIndeterminateQianqiWanchengNode: false,
        checkAllQianqiWanchengNode: true,

        qianqiZenrenren: qianqiZenrenrenOptions,
        checkedQianqiZenrenren: qianqiZenrenrenOptions,

        qianqiRizhi: qianqiRizhiOptions,
        checkedQianqiRizhi: qianqiRizhiOptions,

        isIndeterminateQianqiWenti: false,
        checkAllQianqiWenti: true,
        checkedQianqiWenti: qianqiWentiOptions,
        qianqiWenti: qianqiWentiOptions,

        //征迁表格的data
        checkedZhengqianXiangmu: zhengqianXiangmuOptions,
        zhengqianXiangmu: zhengqianXiangmuOptions,

        checkedZhengqianTimenode: zhengqianTimenodeOptions,
        zhengqianTimenode: zhengqianTimenodeOptions,

        checkedZhengqianZerenren: zhengqianZerenrenOptions,
        zhengqianZerenren: zhengqianZerenrenOptions,

        checkedZhengqianRizhi: zhengqianRizhiOptions,
        zhengqianRizhi: zhengqianRizhiOptions,

        zhengqianJiaodi: zhengqianJiaodiOptions,
        checkedZhengqianJiaodi: zhengqianJiaodiOptions,
        isIndeterminateZhengqianJiaodi: false,
        checkAllZhengqianJiaodi: true,

        zhengqianChaiqian: zhengqianChaiqianOptions,
        checkedZhengqianChaiqian: zhengqianChaiqianOptions,
        isIndeterminateZhengqianChaiqian: false,
        checkAllZhengqianChaiqian: true,

        zhengqianHushu: zhengqianHushuOptions,
        checkedZhengqianHushu: zhengqianHushuOptions,
        isIndeterminateZhengqianHushu: false,
        checkAllZhengqianHushu: true,

        zhengqianWenti: zhengqianWentiOptions,
        checkedZhengqianWenti: zhengqianWentiOptions,
        isIndeterminateZhengqianWenti: false,
        checkAllZhengqianWenti: true,


        radio1: 2,
        activeName: 'first',
        input: '',
        value: '',
        value1: '',
        options: [
          {
            value: '选项1',
            label: '闽侯县'
          },
          {
            value: '选项2',
            label: '荆溪镇'
          }, {

            value: '选项3',
            label: '青口镇'
          },
          {
            value: '选项4',
            label: '上街镇'
          },
          {
            value: '选项5',
            label: '高新区'
          }
        ],
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
        tableData: []
      };
    },
    methods: {
      onSubmit() {
        console.log(this.formInline);
        this.showtype();
      },

      /* 分页查询 */
      handleCurrentChange(val) {
        this.formInline.pageNo = val;
        console.log(`当前页: ${val}`);
        this.showtype();
      },
      showtype(){
        var _self = this;
        /* 前期报表 */
        if (this.radio1 == 1) {
          this.$http({
            url: localStorage.url + '/leader/getBeforeProjectSchedule',
            type: "POST",
            data: _self.formInline,
            success: function (data) {
              if (data.code == 0) {
                _self.tableData = data.data;
                /* 分页配置 */
                if (data.data.count > _self.formInline.pageCount) {
                  _self.isShowPagination = true;
                  _self.totalPages = data.data.count;
                }
                else {
                  _self.isShowPagination = false;
                }
              }
              else {
                console.log('error!!');
                return false;
              }
            },
            error: function (err) {
              console.log(err)
            }
          })
        }

        /* 征迁报表 */
        if (this.radio1 == 2) {
          this.$http({
            url: localStorage.url + '/leader/getRemoveProjectSchedule',
            type: "POST",
            data: _self.formInline,
            success: function (data) {
              if (data.code == 0) {
                console.log(222, data)
                _self.tableData = data.data;
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

        /* 建设报表 */
        if (this.radio1 == 3) {
          this.$http({
            url: localStorage.url + '/leader/getRemoveProjectSchedule',
            type: "POST",
            data: _self.formInline,
            success: function (data) {
              if (data.code == 0) {
                console.log(222, data)
                _self.tableData = data.data;
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
      },
      diypage(type){
        if (this.radio1 === 1) {
          this.dialogQianqiFormVisible = true;
        }
        if (this.radio1 === 2) {
          this.dialogZhengqianFormVisible = true;
        }
        if (this.radio1 === 3) {
          this.dialogJiansheFormVisible = true;
        }
        console.log(this.radio1);
        switch (type) {
          case 0:
            this.dialogTitle = "自定义报表";
            break;
          case 1:
            this.dialogTitle = "导出报表";
            break;
        }
      },
      handleCheckAllChange(event, type){
        switch (type) {
          case 1:
            this.checkedZhengqianJiaodi = event.target.checked ? zhengqianJiaodiOptions : [];
            this.isIndeterminateZhengqianJiaodi = false;
            break;
          case 2:
            this.checkedZhengqianChaiqian = event.target.checked ? zhengqianChaiqianOptions : [];
            this.isIndeterminateZhengqianChaiqian = false;
            break;
          case 3:
            this.checkedZhengqianHushu = event.target.checked ? zhengqianHushuOptions : [];
            this.isIndeterminateZhengqianHushu = false;
            break;
          case 4:
            this.checkedZhengqianWenti = event.target.checked ? zhengqianWentiOptions : [];
            this.isIndeterminateZhengqianWenti = false;
            break;
          case 5:
            this.checkedQianqiWenti = event.target.checked ? qianqiWentiOptions : [];
            this.isIndeterminateQianqiWenti = false;
            break;
          case 6:
            this.checkedQianqiWanchengNode = event.target.checked ? qianqiWanchengNodeOptions : [];
            this.isIndeterminateQianqiWanchengNode = false;
            break;
        }
      },
      handleCheckedChange(value, type){
        switch (type) {
          case 1: {
            let checkedCount = value.length;
            this.checkAllZhengqianJiaodi = checkedCount === this.zhengqianJiaodi.length;
            this.isIndeterminateZhengqianJiaodi = checkedCount > 0 && checkedCount < this.zhengqianJiaodi.length;
            break;
          }
          case 2: {
            let checkedCount = value.length;
            this.checkAllZhengqianChaiqian = checkedCount === this.zhengqianChaiqian.length;
            this.isIndeterminateZhengqianChaiqian = checkedCount > 0 && checkedCount < this.zhengqianChaiqian.length;
            break;
          }
          case 3: {
            let checkedCount = value.length;
            this.checkAllZhengqianHushu = checkedCount === this.zhengqianHushu.length;
            this.isIndeterminateZhengqianHushu = checkedCount > 0 && checkedCount < this.zhengqianHushu.length;
            break;
          }
          case 4: {
            let checkedCount = value.length;
            this.checkAllZhengqianWenti = checkedCount === this.zhengqianWenti.length;
            this.isIndeterminateZhengqianWenti = checkedCount > 0 && checkedCount < this.zhengqianWenti.length;
            break;
          }
          case 5: {
            let checkedCount = value.length;
            this.checkAllQianqiWenti = checkedCount === this.qianqiWenti.length;
            this.isIndeterminateQianqiWenti = checkedCount > 0 && checkedCount < this.qianqiWenti.length;
            break;
          }
          case 6: {
            let checkedCount = value.length;
            this.checkAllQianqiWanchengNode = checkedCount === this.qianqiWanchengNode.length;
            this.isIndeterminateQianqiWanchengNode = checkedCount > 0 && checkedCount < this.qianqiWanchengNode.length;
            break;
          }
        }
      },
    },
    created: function () {
      // 获取乡镇、行业等数组
      this.townList = this.$store.getters.getTown;
      this.departmentList = this.$store.getters.getDepartment;
      this.industryList = this.$store.getters.getIndustry;
      var _self = this;
      this.$http({
        url: localStorage.url + '/leader/getRemoveProjectSchedule',
        type: "POST",
        data: _self.formInline,
        success: function (data) {
          if (data.code == 0) {
            _self.tableData = data.data;
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

<style>
  .diycheck {
    text-align: left
  }

  .checkbox-all {
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .checkbox-son {
    display: block;
    margin-bottom: 8px;
    margin-left: 20px;
  }

  .checkbox-son + .checkbox-son {
    margin-left: 0;
    margin-left: 20px;

  }

  .el-input {
    display: block !important;
  }

  .checkbox-son {
    float: left;
    margin-top: 10px;
  }

  .dialogItem {
    float: left;
    margin: 10px;
  }

  .diycheck {
    text-align: left
  }

  .el-table th > .cell {
    text-align: center !important;
  }
</style>

