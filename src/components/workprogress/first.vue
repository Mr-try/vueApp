<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="按责任部门汇总" name="firstson">
        <el-row :gutter="24" style="z-index:9;float:left ;width: 100%;text-align: left">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
              <el-select v-model="formInline.department" placeholder="全部责任部门">
                <el-option label="全部责任部门" value=""></el-option>
                <el-option v-for="item in departmentList" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-select v-model="formInline.industry" placeholder="全部分类">
                <el-option label="全部分类" value=""></el-option>
                <el-option v-for="item in industryList" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row :gutter="24" style="margin-bottom: 10px">
          <el-col :span="12" style="text-align: left">
            <el-radio-group v-model="radio1" @change="" style="margin-top: 10px">
              <el-radio :label="1">表格展示</el-radio>
              <el-radio :label="2">图表展示</el-radio>
            </el-radio-group>
          </el-col>
          <el-col :span="12" style="text-align: right">
            <el-button type="primary" @click="diypage(0)" v-show="radio1 == 1"> 自定义报表</el-button>
          </el-col>
        </el-row>
        <el-col :span="24" v-show="radio1 == 1">
          <div>
            <el-table :data="tableData" border style="width: 100%;">
              <el-table-column type="index" label="序号" width="50"></el-table-column>
              <el-table-column prop="town" label="责任部门" width="150"></el-table-column>
              <el-table-column label="已交地">
                <el-table-column
                  prop="ljjd"
                  label="面积（亩）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="zjd"
                  label="任务量（亩）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="jdpercent"
                  label="完成比例"
                  width="100">
                </el-table-column>
              </el-table-column>
              <el-table-column label="已拆迁">
                <el-table-column
                  prop="ljcq"
                  label="面积（亩）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="zcq"
                  label="任务量（亩）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="cqpercent"
                  label="完成比例"
                  width="100">
                </el-table-column>
              </el-table-column>
              <el-table-column label="已完成征迁户数">
                <el-table-column
                  prop="ljzq"
                  label="征迁户数（户）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="zzq"
                  label="任务量（户）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="zqpercent"
                  label="完成比例"
                  width="100">
                </el-table-column>
              </el-table-column>
              <el-table-column label="建设项目完成投资">
                <el-table-column
                  prop="planinvest"
                  label="完成投资（亿元）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="allprice"
                  label="任务量（亿元）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="priceercent"
                  label="完成比例"
                  width="100">
                </el-table-column>
              </el-table-column>
              <el-table-column label="已解决问题">
                <el-table-column
                  prop="solvequest"
                  label="数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="planquestcount"
                  label="总数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="questpercent"
                  label="完成比例"
                  width="100">
                </el-table-column>
              </el-table-column>
              <el-table-column label="已开工">
                <el-table-column
                  prop="kg"
                  label="数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="total"
                  label="总数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="kgl"
                  label="开工率"
                  width="100">
                </el-table-column>
              </el-table-column>
              <el-table-column label="已竣工">
                <el-table-column
                  prop="jg"
                  label="数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="total"
                  label="总数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="jgl"
                  label="竣工率"
                  width="200">
                </el-table-column>
              </el-table-column>
              <el-table-column label="前期项目完成节点数">
                <el-table-column
                  prop="finishnodes"
                  label="数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="totalcount"
                  label="总数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="finishnodespercent"
                  label="完成比例"
                  width="100">
                </el-table-column>
              </el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="24" v-show="radio1 == 2">
          <div id="maincharts" style="width:800px;height: 350px"></div>
        </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="按行业汇总" name="secondson">
        <el-row :gutter="24" style="z-index:9;float:left ;width: 100%;text-align: left">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
              <el-select v-model="formInline.department" placeholder="全部责任部门">
                <el-option label="全部责任部门" value=""></el-option>
                <el-option v-for="item in departmentList" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select v-model="formInline.industry" placeholder="全部分类">
                <el-option label="全部分类" value=""></el-option>
                <el-option v-for="item in industryList" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row :gutter="24" style="margin-bottom: 10px">
          <el-col :span="12" style="text-align: left">
            <el-radio-group v-model="radio2" style="margin-top: 10px">
              <el-radio :label="1">表格展示</el-radio>
              <el-radio :label="2">图表展示</el-radio>
            </el-radio-group>
            </el-radio-group>
          </el-col>
          <el-col :span="12" style="text-align: right">
            <el-button type="primary" @click="diypage(1)" v-show="radio1==1 ||radio2 == 1"> 自定义报表</el-button>
          </el-col>
        </el-row>
        <el-col :span="24" v-show="radio2 == 1">
          <div>
            <el-table :data="tableData" border style="width: 100%;">
              <el-table-column type="index" label="序号" width="50"></el-table-column>
              <el-table-column prop="industry" label="行业" width="150"></el-table-column>
              <el-table-column label="已交地">
                <el-table-column
                  prop="ljjd"
                  label="面积（亩）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="zjd"
                  label="任务量（亩）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="jdpercent"
                  label="完成比例"
                  width="100">
                </el-table-column>
              </el-table-column>
              <el-table-column label="已拆迁">
                <el-table-column
                  prop="ljcq"
                  label="面积（亩）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="zcq"
                  label="任务量（亩）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="cqpercent"
                  label="完成比例"
                  width="100">
                </el-table-column>
              </el-table-column>
              <el-table-column label="已完成征迁户数">
                <el-table-column
                  prop="ljzq"
                  label="征迁户数（户）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="zzq"
                  label="任务量（户）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="zqpercent"
                  label="完成比例"
                  width="100">
                </el-table-column>
              </el-table-column>
              <el-table-column label="建设项目完成投资">
                <el-table-column
                  prop="planinvest"
                  label="完成投资（亿元）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="allprice"
                  label="任务量（亿元）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="priceercent"
                  label="完成比例"
                  width="100">
                </el-table-column>
              </el-table-column>
              <el-table-column label="已解决问题">
                <el-table-column
                  prop="solvequest"
                  label="数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="planquestcount"
                  label="总数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="questpercent"
                  label="完成比例"
                  width="100">
                </el-table-column>
              </el-table-column>
              <el-table-column label="已开工">
                <el-table-column
                  prop="kg"
                  label="数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="total"
                  label="总数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="kgl"
                  label="开工率"
                  width="100">
                </el-table-column>
              </el-table-column>
              <el-table-column label="已竣工">
                <el-table-column
                  prop="jg"
                  label="数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="total"
                  label="总数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="jgl"
                  label="竣工率"
                  width="100">
                </el-table-column>
              </el-table-column>
              <el-table-column label="前期项目完成节点数">
                <el-table-column
                  prop="finishnodes"
                  label="数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="totalcount"
                  label="总数量（个）"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="finishnodespercent"
                  label="完成比例"
                  width="100">
                </el-table-column>
              </el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="24" v-show="radio2 == 2">
          <div id="maincharts2" style="width:900px;height: 350px"></div>
        </el-col>
      </el-tab-pane>
    </el-tabs>
    <!--自定义报表-->
    <el-dialog title="title" v-model="dialogFormVisible" :show-close="false" size="small">
      <el-row :gutter="24" class="diycheck">

        <!--交地进度-->
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateJiaodi" v-model="checkAllJiaodi"
                       @change="handleCheckAllChange($event,1)">交地进度
          </el-checkbox>
          <el-checkbox-group v-model="checkedJiaodi" @change="handleCheckedChange($event,1)">
            <el-checkbox class="checkbox-son" v-for="item in jiaodi" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </el-col>

        <!--拆迁进度-->
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateChaiqian"
                       v-model="checkAllChaiqian" @change="handleCheckAllChange($event,2)">拆迁进度
          </el-checkbox>
          <el-checkbox-group v-model="checkedChaiqian" @change="handleCheckedChange($event,2)">
            <el-checkbox class="checkbox-son" v-for="item in chaiqian" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </el-col>

        <!--拆迁户数-->
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateHushu" v-model="checkAllHushu"
                       @change="handleCheckAllChange($event,3)">拆迁户数
          </el-checkbox>
          <el-checkbox-group v-model="checkedHushu" @change="handleCheckedChange($event,3)">
            <el-checkbox class="checkbox-son" v-for="item in hushu" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </el-col>

        <!--解决问题数-->
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateWenti" v-model="checkAllWenti"
                       @change="handleCheckAllChange($event,4)">解决问题数
          </el-checkbox>
          <el-checkbox-group v-model="checkedWenti" @change="handleCheckedChange($event,4)">
            <el-checkbox class="checkbox-son" v-for="item in wenti" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </el-col>

        <!--建设项目投资情况-->
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateTouzi" v-model="checkAllTouzi"
                       @change="handleCheckAllChange($event,5)">建设项目投资情况
          </el-checkbox>
          <el-checkbox-group v-model="checkedTouzi" @change="handleCheckedChange($event,5)">
            <el-checkbox class="checkbox-son" v-for="item in touzi" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </el-col>

        <!--建设项目开工情况-->
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateKaigong" v-model="checkAllKaigong"
                       @change="handleCheckAllChange($event,6)">建设项目开工情况
          </el-checkbox>
          <el-checkbox-group v-model="checkedKaigong" @change="handleCheckedChange($event,6)">
            <el-checkbox class="checkbox-son" v-for="item in kaigong" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </el-col>

        <!--建设项目竣工情况-->
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateJungong" v-model="checkAllJungong"
                       @change="handleCheckAllChange($event,7)">建设项目竣工情况
          </el-checkbox>
          <el-checkbox-group v-model="checkedJungong" @change="handleCheckedChange($event,7)">
            <el-checkbox class="checkbox-son" v-for="item in jungong" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </el-col>

        <!--前期项目完成节点数-->
        <el-col :span="6">
          <el-checkbox class="checkbox-all" :indeterminate="isIndeterminateWancheng"
                       v-model="checkAllWancheng" @change="handleCheckAllChange($event,8)">前期项目完成节点数
          </el-checkbox>
          <el-checkbox-group v-model="checkedWancheng" @change="handleCheckedChange($event,8)">
            <el-checkbox class="checkbox-son" v-for="item in wancheng" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
      <div slot="title">
        {{dialogTitle}}
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import router from '../../router'
  var echarts = require('echarts');
  const jiaodiOptions = ['面积（亩）', '任务量（亩）', '完成比例'];
  const chaiqianOptions = ['面积（m²）', '任务量（m²）', '完成比例'];
  const hushuOptions = ['数量（个）', '任务量（个）', '完成比例'];
  const wentiOptions = ['数量（个）', '任务量（个）', '完成比例'];
  const touziOptions = ['金额（亿元）', '任务量（亿元）', '完成比例'];
  const kaigongOptions = ['数量（个）', '任务量（个）', '完成比例'];
  const jungongOptions = ['数量（个）', '任务量（个）', '完成比例'];
  const wanchengOptions = ['数量（个）', '任务量（个）', '完成比例'];

  export default {
    data() {
      return {
        departmentList: [],
        industryList: [],
        tab:{index:''},
        //自定义报表
        dialogTitle: "自定义报表",

        checkAllJiaodi: true,
        checkedJiaodi: jiaodiOptions,
        jiaodi: jiaodiOptions,
        isIndeterminateJiaodi: false,

        checkAllChaiqian: true,
        checkedChaiqian: chaiqianOptions,
        chaiqian: chaiqianOptions,
        isIndeterminateChaiqian: false,

        checkAllHushu: true,
        checkedHushu: hushuOptions,
        hushu: hushuOptions,
        isIndeterminateHushu: false,

        checkAllWenti: true,
        checkedWenti: wentiOptions,
        wenti: wentiOptions,
        isIndeterminateWenti: false,

        checkAllTouzi: true,
        checkedTouzi: touziOptions,
        touzi: touziOptions,
        isIndeterminateTouzi: false,

        checkAllKaigong: true,
        checkedKaigong: kaigongOptions,
        kaigong: kaigongOptions,
        isIndeterminateKaigong: false,

        checkAllJungong: true,
        checkedJungong: jungongOptions,
        jungong: jungongOptions,
        isIndeterminateJungong: false,

        checkAllWancheng: true,
        checkedWancheng: wanchengOptions,
        wancheng: wanchengOptions,
        isIndeterminateWancheng: false,

        formInline: {
          department: '',
          industry: ''
        },
        radio1: 1,
        radio2: 1,
        formLabelWidth: '80px',
        dialogFormVisible: false,
        activeName: 'firstson',
        value: '',
        value1: '',
        value2: '',
        tableData: [],
        tableData3: [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }]
      };
    },
    methods: {
      handleCheckAllChange(event, type) {
        switch (type) {
          case 1:
            this.checkedJiaodi = event.target.checked ? jiaodiOptions : [];
            this.isIndeterminateJiaodi = false;
            break;
          case 2:
            this.checkedChaiqian = event.target.checked ? chaiqianOptions : [];
            this.isIndeterminateChaiqian = false;
            break;
          case 3:
            this.checkedHushu = event.target.checked ? hushuOptions : [];
            this.isIndeterminateHushu = false;
            break;
          case 4:
            this.checkedWenti = event.target.checked ? wentiOptions : [];
            this.isIndeterminateWenti = false;
            break;
          case 5:
            this.checkedTouzi = event.target.checked ? touziOptions : [];
            this.isIndeterminateTouzi = false;
            break;
          case 6:
            this.checkedKaigong = event.target.checked ? kaigongOptions : [];
            this.isIndeterminateKaigong = false;
            break;
          case 7:
            this.checkedJungong = event.target.checked ? jungongOptions : [];
            this.isIndeterminateJungong = false;
            break;
          case 8:
            this.checkedWancheng = event.target.checked ? wanchengOptions : [];
            this.isIndeterminateWancheng = false;
            break;
        }

      },
      handleCheckedChange(value, type) {
        switch (type) {
          case 1: {
            let checkedCount = value.length;
            this.checkAllJiaodi = checkedCount === this.jiaodi.length;
            this.isIndeterminateJiaodi = checkedCount > 0 && checkedCount < this.jiaodi.length;
            break;
          }
          case 2: {
            let checkedCount = value.length;
            this.checkAllChaiqian = checkedCount === this.chaiqian.length;
            this.isIndeterminateChaiqian = checkedCount > 0 && checkedCount < this.chaiqian.length;
            break;
          }
          case 3: {
            let checkedCount = value.length;
            this.checkAllHushu = checkedCount === this.hushu.length;
            this.isIndeterminateHushu = checkedCount > 0 && checkedCount < this.hushu.length;
            break;
          }
          case 4: {
            let checkedCount = value.length;
            this.checkAllWenti = checkedCount === this.wenti.length;
            this.isIndeterminateWenti = checkedCount > 0 && checkedCount < this.wenti.length;
            break;
          }
          case 5: {
            let checkedCount = value.length;
            this.checkAllTouzi = checkedCount === this.touzi.length;
            this.isIndeterminateTouzi = checkedCount > 0 && checkedCount < this.touzi.length;
            break;
          }
          case 6: {
            let checkedCount = value.length;
            this.checkAllKaigong = checkedCount === this.kaigong.length;
            this.isIndeterminateKaigong = checkedCount > 0 && checkedCount < this.kaigong.length;
            break;
          }
          case 7: {
            let checkedCount = value.length;
            this.checkAllJungong = checkedCount === this.jungong.length;
            this.isIndeterminateJungong = checkedCount > 0 && checkedCount < this.jungong.length;
            break;
          }
          case 8: {
            let checkedCount = value.length;
            this.checkAllWancheng = checkedCount === this.wancheng.length;
            this.isIndeterminateWancheng = checkedCount > 0 && checkedCount < this.wancheng.length;
            break;
          }
        }
      },
      diypage(type) {
        this.dialogFormVisible = true;
        this.dialogTitle = "自定义报表";
        this.form = {
          account: '',
          realName: '',
          userType: "",
          belong: '',
          accountState: "1",
          pass: '',
        }
      },
      onSubmit() {
        console.log(this.formInline);
        localStorage.townName = this.formInline.department;
        localStorage.indusName = this.formInline.industry;
        this.handleClick(this.tab)
      },
      handleClick(tab) {
        let routermarker = Number(tab.index);
        this.tab.index = routermarker;
        if (routermarker) {
          var _self = this;
          this.$http({
            url: localStorage.url + '/leader/getProjectListGroupBYOrderIndustry',
            type: "POST",
            data:_self.formInline,
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
          });
          var myChart = echarts.init(document.getElementById('maincharts2'));
          myChart.setOption(
            {
              backgroundColor: "#324157",
              "title": {
                "text": "拆迁进度2",
                x: "4%",

                textStyle: {
                  color: '#fff',
                  fontSize: '16'
                },
                subtextStyle: {
                  color: '#90979c',
                  fontSize: '16',

                },
              },
              "tooltip": {
                "trigger": "axis",
                "axisPointer": {
                  "type": "shadow",
                  textStyle: {
                    color: "#fff"
                  }

                },
              },
              "grid": {
                "borderWidth": 0,
                "top": 110,
                "bottom": 95,
                textStyle: {
                  color: "#fff"
                }
              },
              "legend": {
                x: '4%',
                top: '11%',
                textStyle: {
                  color: '#90979c',
                },
                "data": ['已完成', '未完成']
              },


              "calculable": true,
              "xAxis": [{
                "type": "category",
                "axisLine": {
                  lineStyle: {
                    color: '#90979c'
                  }
                },
                "splitLine": {
                  "show": false
                },
                "axisTick": {
                  "show": false
                },
                "splitArea": {
                  "show": false
                },
                "axisLabel": {
                  "interval": 0,

                },
                "data": ["甘蔗镇", "白沙镇", "南屿镇", "尚干镇", "祥谦镇", "青口镇", "南通镇", "上街镇", "荆溪镇", "竹岐乡", "鸿尾乡", "洋里乡"],
              }],
              "yAxis": [{
                "type": "value",
                "splitLine": {
                  "show": false
                },
                "axisLine": {
                  lineStyle: {
                    color: '#90979c'
                  }
                },
                "axisTick": {
                  "show": false
                },
                "axisLabel": {
                  "interval": 0,

                },
                "splitArea": {
                  "show": false
                },

              }],
              "dataZoom": [{
                "show": true,
                "height": 30,
                "xAxisIndex": [
                  0
                ],
                bottom: 30,
                "start": 10,
                "end": 80,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                  color: "#d3dee5",

                },
                textStyle: {
                  color: "#fff"
                },
                borderColor: "#90979c"


              }, {
                "type": "inside",
                "show": true,
                "height": 15,
                "start": 1,
                "end": 35
              }],
              "series": [{
                "name": "已完成",
                "type": "bar",
                "stack": "总量",
                "barMaxWidth": 35,
                "barGap": "10%",
                "itemStyle": {
                  "normal": {
                    "color": "rgba(255,144,128,1)",
                    "label": {
                      "show": true,
                      "textStyle": {
                        "color": "#fff"
                      },
                      "position": "insideTop",
                      formatter: function (p) {
                        return p.value > 0 ? (p.value) : '';
                      }
                    }
                  }
                },
                "data": [
                  709,
                  1917,
                  2455,
                  2610,
                  1719,
                  1433,
                  1544,
                  3285,
                  5208,
                  3372,
                  2484,
                  4078
                ],
              },

                {
                  "name": "未完成",
                  "type": "bar",
                  "stack": "总量",
                  "itemStyle": {
                    "normal": {
                      "color": "rgba(0,191,183,1)",
                      "barBorderRadius": 0,
                      "label": {
                        "show": true,
                        "position": "top",
                        formatter: function (p) {
                          return p.value > 0 ? (p.value) : '';
                        }
                      }
                    }
                  },
                  "data": [
                    327,
                    1776,
                    507,
                    1200,
                    800,
                    482,
                    204,
                    1390,
                    1001,
                    951,
                    381,
                    220
                  ]
                }
              ]
            }
          );
        }
        else {
          var _self = this;
          this.$http({
            url: localStorage.url + '/leader/getProjectListGroupByTown',
            type: "POST",
            data:_self.formInline,
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
          });
          var myChart = echarts.init(document.getElementById('maincharts'));
          myChart.setOption(
            {
              backgroundColor: "#fff",
              "title": {
                "text": "拆迁进度",
                x: "-5",
                textStyle: {
                  color: '#20a0ff',
                  fontSize: '16'
                },
                subtextStyle: {
                  color: '#90979c',
                  fontSize: '16',

                },
              },
              "tooltip": {
                "trigger": "axis",
                "axisPointer": {
                  "type": "shadow",
                  textStyle: {
                    color: "#fff"
                  }
                },
              },
              "grid": {
                "borderWidth": 0,
                "top": 110,
                "left": 40,
                "bottom": 95,
                textStyle: {
                  color: "#fff"
                }
              },
              "legend": {
                x: '-5',
                top: '11%',
                textStyle: {
                  color: '#90979c',
                },
                "data": ['已完成', '未完成']
              },


              "calculable": true,
              "xAxis": [{
                "type": "category",
                "axisLine": {
                  lineStyle: {
                    color: '#000'
                  }
                },
                "splitLine": {
                  "show": false
                },
                "axisTick": {
                  "show": false
                },
                "splitArea": {
                  "show": false
                },
                "axisLabel": {
                  "interval": 0,

                },
                "data": ["甘蔗镇", "白沙镇", "南屿镇", "尚干镇", "祥谦镇", "青口镇", "南通镇", "上街镇", "荆溪镇", "竹岐乡", "鸿尾乡", "洋里乡"],
              }],
              "yAxis": [{
                "type": "value",
                "splitLine": {
                  "show": false
                },
                "axisLine": {
                  lineStyle: {
                    color: '#000'
                  }
                },
                "axisTick": {
                  "show": false
                },
                "axisLabel": {
                  "interval": 0,

                },
                "splitArea": {
                  "show": false
                },

              }],
              "dataZoom": [{
                "show": true,
                "height": 30,
                "xAxisIndex": [
                  0
                ],
                bottom: 30,
                "start": 10,
                "end": 80,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                  color: "#d3dee5",

                },
                textStyle: {
                  color: "#20a0ff"
                },
                borderColor: "#90979c"


              }, {
                "type": "inside",
                "show": true,
                "height": 15,
                "start": 1,
                "end": 35
              }],
              "series": [
                {
                  "name": "已完成",
                  "type": "bar",
                  "stack": "总量",
                  "barMaxWidth": 35,
                  "barGap": "10%",
                  "itemStyle": {
                    "normal": {
                      "color": "#20a0ff",
                      "label": {
                        "show": true,
                        "textStyle": {
                          "color": "#fff"
                        },
                        "position": "insideTop",
                        formatter: function (p) {
                          return p.value > 0 ? (p.value) : '';
                        }
                      }
                    }
                  },
                  "data": [
                    709,
                    1917,
                    2455,
                    2610,
                    1719,
                    1433,
                    1544,
                    3285,
                    5208,
                    3372,
                    2484,
                    4078
                  ],
                },
                {
                  "name": "未完成",
                  "type": "bar",
                  "stack": "总量",
                  "itemStyle": {
                    "normal": {
                      "color": "#C3E8FA",
                      "barBorderRadius": 0,
                      "label": {
                        "show": true,
                        "position": "top",
                        formatter: function (p) {
                          return p.value > 0 ? (p.value) : '';
                        }
                      }
                    }
                  },
                  "data": [
                    327,
                    1776,
                    507,
                    1200,
                    800,
                    482,
                    204,
                    1390,
                    1001,
                    951,
                    381,
                    220
                  ]
                }
              ]
            }
          );
        }

      }
    },
    mounted: function () {
      // 获取乡镇、行业等数组
      this.townList = this.$store.getters.getTown;
      this.departmentList = this.$store.getters.getDepartment;
      this.industryList = this.$store.getters.getIndustry;
      var _self = this;
      this.$http({
        url: localStorage.url + '/leader/getProjectListGroupByTown',
        type: "GET",
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
      var myChart = echarts.init(document.getElementById('maincharts'));
      myChart.setOption(
        {
          backgroundColor: "#fff",
          "title": {
            "text": "拆迁进度",
            x: "-5",
            textStyle: {
              color: '#20a0ff',
              fontSize: '16'
            },
            subtextStyle: {
              color: '#90979c',
              fontSize: '16',

            },
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              textStyle: {
                color: "#fff"
              }
            },
          },
          grid: {
            borderWidth: 0,
            top: 110,
            left: 40,
            bottom: 95,
            textStyle: {
              color: "#fff"
            }
          },
          legend: {
            x: '-5',
            top: '11%',
            textStyle: {
              color: '#90979c',
            },
            data: ['已完成', '未完成']
          },


          calculable: true,
          xAxis: [{
            type: "category",
            axisLine: {
              lineStyle: {
                color: '#000'
              }
            },
            splitLine: {
              "show": false
            },
            axisTick: {
              "show": false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0,

            },
            data: ["甘蔗镇", "白沙镇", "南屿镇", "尚干镇", "祥谦镇", "青口镇", "南通镇", "上街镇", "荆溪镇", "竹岐乡", "鸿尾乡", "洋里乡"],
          }],
          yAxis: [{
            type: "value",
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#000'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,

            },
            splitArea: {
              show: false
            },

          }],
          dataZoom: [{
            show: true,
            height: 30,
            xAxisIndex: [
              0
            ],
            bottom: 30,
            start: 10,
            end: 80,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
              color: "#d3dee5",

            },
            textStyle: {
              color: "#20a0ff"
            },
            borderColor: "#90979c"


          }, {
            type: "inside",
            show: true,
            height: 15,
            start: 1,
            end: 35
          }],
          series: [
            {
              name: "已完成",
              type: "bar",
              stack: "总量",
              barMaxWidth: 35,
              barGap: "10%",
              itemStyle: {
                normal: {
                  color: "#20a0ff",
                  label: {
                    show: true,
                    textStyle: {
                      color: "#fff"
                    },
                    position: "insideTop",
                    formatter: function (p) {
                      return p.value > 0 ? (p.value) : '';
                    }
                  }
                }
              },
              data: [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1544,
                3285,
                5208,
                3372,
                2484,
                4078
              ],
            },
            {
              name: "未完成",
              type: "bar",
              stack: "总量",
              itemStyle: {
                normal: {
                  color: "#C3E8FA",
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: "top",
                    formatter: function (p) {
                      return p.value > 0 ? (p.value) : '';
                    }
                  }
                }
              },
              data: [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204,
                1390,
                1001,
                951,
                381,
                220
              ]
            }
          ]
        }
      );
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

  .el-table th > .cell {
    text-align: center !important;
  }
</style>
