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
        <el-form-item class="select-date">
          <el-date-picker v-model="formInline.bgdate" type="date" placeholder="查询时间"
                          :picker-options="pickerOptions1">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="select-date">
          <el-date-picker v-model="formInline.enddate" type="date" placeholder="查询时间"
                          :picker-options="pickerOptions1">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="select-input">
          <el-select v-model="formInline.town" placeholder="全部乡镇">
            <el-option label="全部乡镇" value=""></el-option>
            <el-option v-for="item in townList" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="select-input">
          <el-select v-model="formInline.department" placeholder="全部单位">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in departmentList" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>

    <el-row :gutter="24" style="margin-bottom: 10px">
      <el-col :span="12" style="text-align: left">
        <el-radio-group v-model="radio1" @change="showtype" style="margin-top: 10px">
          <el-radio class="radio" :label="1">前期</el-radio>
          <el-radio class="radio" :label="2">征迁</el-radio>
          <el-radio class="radio" :label="3">建设</el-radio>
        </el-radio-group>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <el-button type="primary" @click="diypage(0)"> 导出报表</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="24" v-if="radio1 == 1">
      <el-table :data="tablePrep" border style="width: 100%;">
        <el-table-column label="项目名称" width="180">
          <template scope="scope">
            <el-button type="text" size="small" @click="getProDetail(scope.row)">{{ scope.row.bdProjectName }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="上报时间" width="180">
          <template scope="scope">
            {{ scope.row.bdHbdate }}
          </template>
        </el-table-column>
        <el-table-column label="前期项目完成节点" width="180">
          <template scope="scope">
            {{ scope.row.bdFinishnodes }}
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
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="180">
          <template scope="scope">
            <el-button type="text" size="small" @click="checkPage(scope.row)">查看日报
            </el-button>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row :gutter="24" v-if="radio1 == 2">
      <el-table :data="tableMid" border style="width: 100%;">
        <el-table-column label="项目名称" width="180">
          <template scope="scope">
            <el-button type="text" size="small" @click="getProDetail(scope.row)">{{ scope.row.rpProjectName }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="上报时间" width="180">
          <template scope="scope">
            {{ scope.row.rpHbdate }}
          </template>
        </el-table-column>
        <el-table-column label="拆迁完成(㎡)" width="180">
          <template scope="scope">
            {{ scope.row.rpLljcqarea }}
          </template>
        </el-table-column>
        <el-table-column label="交地完成亩)" width="180">
          <template scope="scope">
            {{ scope.row.rpLjjdarea }}
          </template>
        </el-table-column>
        <el-table-column label="征迁完成户)" width="180">
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
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="180">
          <template scope="scope">
            <el-button type="text" size="small" @click="checkPage(scope.row)">查看日报
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row :gutter="24" v-if="radio1 == 3">
      <el-table :data="tableLate" border style="width: 100%;">
        <el-table-column label="项目名称" width="180">
          <template scope="scope">
            <el-button type="text" size="small" @click="getProDetail(scope.row)">{{ scope.row.bdProjectName }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="上报时间" width="180">
          <template scope="scope">
            {{ scope.row.bdHbdate }}
          </template>
        </el-table-column>
        <el-table-column label="开工情况" width="180">
          <template scope="scope">
            {{ scope.row.bdStatus }}
          </template>
        </el-table-column>
        <el-table-column label="竣工情况" width="180">
          <template scope="scope">
            {{ scope.row.bdStatus }}
          </template>
        </el-table-column>
        <el-table-column label="已解决问题" width="180">
          <template scope="scope">
            {{ scope.row.name }}
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
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="180">
          <template scope="scope">
            <el-button type="text" size="small" @click="checkPage(scope.row)">查看日报
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>

</template>

<script>
  import router from '../../router'
  export default {
    data() {
      return {
        townList: [],
        departmentList: [],
        formInline: {
          pname: '',
          person: '',
          town: '',
          department: '',
          bgdate: '2017-03-24',
          enddate: '2017-03-24',
          pageNo: 1,
          pageCount: 10
        },
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
        tableData3: [
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
        tablePrep: [],
        tableMid: [],
        tableLate: []
      };
    },
    methods: {
      onSubmit() {
        console.log(this.formInline);
        this.showtype()
      },
      checkPage(row){
        localStorage.checkLogId = row.bdId || row.rpId;
        localStorage.checkProName = row.rpProjectName;
        router.push("/2-4/" + this.radio1);
      },
      showtype(){
        console.log(this.radio1)
        var _self = this;
        /* 获取前期最新日报 */
        if (this.radio1 == 1) {
          this.$http({
            url: localStorage.url + '/schedule/getBeforeProjectLog',
            type: "POST",
            data: _self.formInline,
            success: function (data) {
              if (data.code == 0) {
                console.log(1111, data)
                _self.tablePrep = data.data.data;
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
        else if (this.radio1 == 2) {
          this.$http({
            url: localStorage.url + '/schedule/getRemoveProjectLog',
            type: "POST",
            data: _self.formInline,
            success: function (data) {
              if (data.code == 0) {
                console.log(22222, data)
                _self.tableMid = data.data.data;
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
        else {
          this.$http({
            url: localStorage.url + '/schedule/getBuildProjectLog',
            type: "POST",
            data: _self.formInline,
            success: function (data) {
              if (data.code == 0) {
                console.log(3333, data)
                _self.tableLate = data.data.data;
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

      /* 查看日报详情 */
      getProDetail: function (row) {
        localStorage.projectId = row.rpProjectid || row.bdProjectid;
        router.push("/3-4/" + this.radio1);
      }
    },
    created: function () {
      // 获取乡镇、行业等数组
      this.townList = this.$store.getters.getTown;
      this.departmentList = this.$store.getters.getDepartment;
      var _self = this;
      this.$http({
        url: localStorage.url + '/schedule/getRemoveProjectLog',
        type: "GET",
        data: _self.formInline,
        success: function (data) {
          if (data.code == 0) {
            console.log(data)
            _self.tableMid = data.data.data;
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
<style lang="stylus" rel="stylesheet/stylus">
  .select-date
    width 200px

  .select-input
    width 110px

  .el-input
    display block !important

  .el-table th > .cell
    text-align center !important

  .el-table .cell
    text-align center !important
</style>
