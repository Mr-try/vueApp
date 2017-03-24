<template>
  <div>
    <el-row :gutter="24" style="float: left;margin-top: 30px;margin-bottom:10px;z-index: 9">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formInline.pname" placeholder="项目名称/编号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formInline.person" placeholder="第一责任人/直接责任人/县责任领导"></el-input>
        </el-form-item>
        <el-form-item class="select-date">
          <el-date-picker v-model="formInline.bgdate" type="date" placeholder="开始时间" :picker-options="pickerOptions1">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="select-date">
          <el-date-picker v-model="formInline.enddate" type="date" placeholder="结束时间" :picker-options="pickerOptions1">
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
        <el-form-item class="select-input">
          <el-select v-model="formInline.type" placeholder="全部分类">
            <el-option label="全部分类" value=""></el-option>
            <el-option v-for="(item,index) in typeList" :label="item" :value="index+1"></el-option>
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
          <el-radio class="radio" :label="0">所有</el-radio>
          <el-radio class="radio" :label="1">已上报</el-radio>
          <el-radio class="radio" :label="2">未上报</el-radio>
        </el-radio-group>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <el-button type="primary" @click="diypage(0)"> 导出报表</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-table :data="tableData" border style="width: 100%;" :row-class-name="tableRowClassName">
        <el-table-column label="项目编号" width="180">
          <template scope="scope">
            {{ scope.row.pb_code }}
          </template>
        </el-table-column>
        <el-table-column label="项目名称" width="180">
          <template scope="scope">
            <el-button type="text" size="small" @click="getProDetail(scope.row)">{{ scope.row.pb_name }}
            </el-button>
          </template>
        </el-table-column>
        <!--<el-table-column label="项目总投资" width="180">-->
        <!--<template scope="scope">-->
        <!--{{ scope.row.proTotal }}-->
        <!--</template>-->
        <!--</el-table-column>-->
        <el-table-column label="建设地点" width="180">
          <template scope="scope">
            {{ scope.row.proPlace }}
          </template>
        </el-table-column>
        <el-table-column label="责任部门" width="180">
          <template scope="scope">
            {{ scope.row.pb_department }}
          </template>
        </el-table-column>
        <el-table-column label="建设阶段" width="180">
          <template scope="scope">
            {{ scope.row.pb_type }}
          </template>
        </el-table-column>
        <el-table-column label="所属行业" width="180">
          <template scope="scope">
            {{ scope.row.pb_industry }}
          </template>
        </el-table-column>
        <el-table-column label="第一责任人" width="180">
          <template scope="scope">
            {{ scope.row.pb_firperson }}
          </template>
        </el-table-column>
        <el-table-column label="县责任领导" width="180">
          <template scope="scope">
            {{ scope.row.pb_couleader }}
          </template>
        </el-table-column>
        <el-table-column label="最后一次上报日期" width="180">
          <template scope="scope">
            {{ scope.row.date }}
          </template>
        </el-table-column>
        <el-table-column label="是否上报" width="180">
          <template scope="scope">
            {{ scope.row.reportstatus == 0 ? "未上报":"是" }}
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="180">
          <template scope="scope">
            <el-button v-if="!scope.row.reportstatus" type="text" size="small" @click="putPage(scope.row)">上报
            </el-button>
            <el-button v-if="scope.row.reportstatus " type="text" size="small" @click="checkPage(scope.row)">查看日报
            </el-button>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>

</template>

<script>
  import router from '../../router'
  import '../../admin/ajax_projectlist'

  export default {
    data() {
      return {
        townList: [],
        departmentList: [],
        industryList: [],
        typeList: ["前期", "征迁", "建设"],
        formInline: {
          pname: '',
          type: '',
          town: '',
          department: '',
          person: '',
          all: 0,
          bgdate: '2017-03-03',
          enddate: '2017-03-03'
        },
        radio1: 0,
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
        tableData: [],
      };
    },
    methods: {
      tableRowClassName(row, index) {
        if (!row.reportstatus) {
          return 'info-row';
        }
      },
      putPage(row){
        console.log(row)
        localStorage.updateProId = row.pb_id;
        localStorage.updateProName = row.pb_name;
        router.push("/2-3/" + row.pb_type);

      },
      checkPage(row){
        localStorage.checkLogId = row.log.bdId || row.log.rpId;
        localStorage.checkProName = row.pb_name;
        router.push("/2-4/" + row.pb_type);
      },

      /* 切换上报与否的状态 */
      showtype() {
        console.log(this.radio1);
        this.formInline.all = this.radio1
        this.onSubmit();

      },
      /* get project detail */
      getProDetail(row){
        console.log(row)
        localStorage.projectId = row.pb_id;
        router.push("/3-4/" + row.pb_type);
      },
      /* 日期转化 */
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

      onSubmit() {
        console.log(this.formInline);
        var _self = this;
        this.formInline.bgdate = this.formatDate(new Date(this.formInline.bgdate));
        this.formInline.enddate = this.formatDate(new Date(this.formInline.enddate));
        this.$http({
          url: localStorage.url + '/schedule/selectProjectListforhz',
          type: "POST",
          data: _self.formInline,
          success: function (data) {
            if (data.code == 0) {
              console.log(data)
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
    mounted: function () {
      // 获取乡镇、行业等数组
      this.townList = this.$store.getters.getTown;
      this.departmentList = this.$store.getters.getDepartment;
      this.industryList = this.$store.getters.getIndustry;
      var _self = this;
      this.$http({
        url: localStorage.url + '/schedule/selectProjectListforhz',
        type: "POST",
        data: _self.formInline,
        success: function (data) {
          if (data.code == 0) {
            console.log(data)
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

<style lang="stylus" rel="stylesheet/stylus">
  .el-table .info-row
    background #ff737d

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
