<template>
  <div>
    <el-row :gutter="24" style="float: left;margin-top: 30px;margin-bottom:10px;z-index: 9;width: 100%;text-align: left">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formInline.pname" placeholder="项目名称/编号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formInline.person" placeholder="第一责任人/直接责任人/县责任领导"></el-input>
        </el-form-item>
        <el-form-item class="select-input">
          <el-select v-model="formInline.department" placeholder="全部责任部门">
            <el-option v-for="item in departmentList" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="select-input">
          <el-select v-model="formInline.town" placeholder="全部乡镇">
            <el-option v-for="item in townList" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="select-input">
          <el-select v-model="formInline.industry" placeholder="全部行业">
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
        <el-radio-group v-model="radio1" @change="showtype" style="margin-top: 10px">
          <el-radio class="radio" :label="1">前期</el-radio>
          <el-radio class="radio" :label="2">拆迁</el-radio>
          <el-radio class="radio" :label="3">建设</el-radio>
        </el-radio-group>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <el-button type="primary" @click="inputReportForm()"> 批量导入报表</el-button>
        <el-button type="primary" @click="outputPage(0)"> 导出报表</el-button>
        <el-button type="primary" @click="newPage(0)"> 新增项目</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-table :data="tableData" border style="width: 100%;margin-bottom: 40px">
        <el-table-column label="项目编号" width="180">
          <template scope="scope">
            {{ scope.row.pbCode }}
          </template>
        </el-table-column>
        <el-table-column label="项目名称" width="180">
          <template scope="scope">
            <el-button type="text" size="small" @click="getProDetail(scope.row)">{{ scope.row.pbName }}
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
            {{ scope.row.pbBdplace }}
          </template>
        </el-table-column>
        <el-table-column label="责任部门" width="180">
          <template scope="scope">
            {{ scope.row.pbDepartment }}
          </template>
        </el-table-column>
        <!--<el-table-column label="建设阶段" width="180">-->
          <!--<template scope="scope">-->
            <!--{{ scope.row.proStep }}-->
          <!--</template>-->
        <!--</el-table-column>-->
        <el-table-column label="所属行业" width="180">
          <template scope="scope">
            {{ scope.row.pbIndustry }}
          </template>
        </el-table-column>
        <el-table-column label="第一责任人" width="180">
          <template scope="scope">
            {{ scope.row.pbFirperson }}
          </template>
        </el-table-column>
        <el-table-column label="县责任领导" width="180">
          <template scope="scope">
            {{ scope.row.pbCouleader }}
          </template>
        </el-table-column>

        <el-table-column label="操作" fixed="right" width="180">
          <template scope="scope">
            <el-button type="text" size="small" @click="isSee(scope.row)" >
              {{ scope.row.pbSee == 1 ? "可见":"不可见"}}
            </el-button>
            <el-button type="text" size="small" @click="editProInfo(scope.row)">修改</el-button>
            <el-button type="text" size="small" @click="deletePro(scope.$index, scope.row,tableData)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-pagination
      v-if="isShowPagination"
      @current-change="handleCurrentChange"
      :current-page="formInline.pageNo"
      :page-size="formInline.pageCount"
      layout="total, prev, pager, next"
      :total="totalPages">
    </el-pagination>
    <!--input report forms -->
    <el-dialog title="title" v-model="dialogFormVisible" :show-close="false" size="small">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        mutiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip" >
          仅支持.xlsx格式文件，且文件格式必须严格按照提供的模板<br>
          <div style="text-align: left">
            * 导入须知：<br>
            1. 项目批量导入功能，请下载响应模板，严格按照模板字段填入项目信息。否则导入结果可能会发生错误；<br>
            2. 项目编号、项目名称作为识别项目的唯一标识，请认真填写，如果有重复的项目编号，将只有一条项目记录<br>
            <el-button @click="dialogFormVisible = false">下载模板</el-button>
          </div>
        </div>
      </el-upload>
      <div slot="footer" class="dialog-footer" style="text-align: center">
        <el-button @click="dialogFormVisible = false">取消导入</el-button>
      </div>
      <div slot="title">
        {{dialogTitle}}
      </div>
    </el-dialog>

  </div>

</template>

<script>
  import router from '../../router'
  export default {
    data() {
      return {
        townList:[],
        departmentList:[],
        industryList:[],
        /* 分页配置 */
        isShowPagination:false,
        totalPages:'',

        formInline: {
          pageNo:1,
          pageCount:10,
          type:this.radio1,
          town:'',
          department:'',
          industry:'',
          person:'',
          pname:''
        },
        radio1: 1,
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
        tableData: [],
        dialogFormVisible: false,
        dialogTitle: "导入报表",
        searchResult:[],
      }
    },
    methods: {

      /* 分页查询 */
      handleCurrentChange(val) {
        this.formInline.pageNo = val;
        console.log(`当前页: ${val}`);
        this.showtype();
      },
      /* 切换类型 */
      showtype:function () {
        var _self = this;
        this.$http({
          url: localStorage.url + '/project/getProjectList?type='+this.radio1,
          type: "POST",
          data: _self.formInline,
          success: function (data) {
            if (data.code == 0) {
              _self.tableData=data.data.data;
              /* 分页配置 */
              if(data.data.count > _self.formInline.pageCount){
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
        })
      },

      /* set see or not*/
      isSee:function (row) {
        this.$http({
          url: localStorage.url + '/project/issee',
          type: "GET",
          data: {
            pid:row.pbId,
            see:row.pbSee == 0 ? 1:0,
            code:row.pbCode
          },
          success: function (data) {
            if (data.code == 0) {
              row.pbSee = row.pbSee == 0 ? 1:0
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
      },

      /*input report form */
      inputReportForm: function () {
        this.dialogFormVisible = true;
      },

      /*edit project information */
      editProInfo(row){
        console.log(row);
        localStorage.editPbId = row.pbId;
        router.push("/3-3/" + this.radio1);
      },

      /*delete project */
      deletePro:function (index,row,rows) {
        var _self = this;
        this.$http({
          url: localStorage.url + '/project/deleteProject',
          type: "GET",
          data: {pid:row.pbId},
          success: function (data) {
            if (data.code == 0) {
              console.log(data)
              rows.splice(index, 1);
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
      },
      onSubmit() {
        console.log(this.formInline);
        this.showtype()
      },
      newPage(){
        router.push("/3-2/" + this.radio1);
      },
      /* get project detail */
      getProDetail(row){
        localStorage.projectId = row.pbId;
        router.push("/3-4/" + this.radio1);
      }
    },
    created: function () {
      // 获取乡镇、行业等数组
      this.townList = this.$store.getters.getTown;
      this.departmentList = this.$store.getters.getDepartment;
      this.industryList = this.$store.getters.getIndustry;
      var _self = this;
      this.$http({
        url: localStorage.url + '/project/getProjectList?type=1',
        type: "POST",
        data: this.formInline,
        success: function (data) {
          if (data.code == 0) {
            _self.tableData=data.data.data;

            /* 分页配置 */
            if(data.data.count > _self.formInline.pageCount){
              _self.isShowPagination = true;
              _self.totalPages = data.data.count;
            }
            else{
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
      })
    }
  }
</script>

<style>
  .select-input {
    max-width: 150px;
  }

  .el-input {
    display: block !important;
  }

  .el-table th > .cell {
    text-align: center !important;
  }

  .el-table .cell {
    text-align: center !important;
  }
</style>
