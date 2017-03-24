<template>
  <div>
    <el-row :gutter="24" style="float:left;padding-top: 30px;z-index: 9">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formInline.name" placeholder="人员名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="formInline.town" placeholder="全部乡镇">
            <el-option  label="所有" value=""></el-option>
            <el-option v-for="item in townList" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row :gutter="24" style="float:right;z-index: 9;padding-top: 60px;padding-bottom: 20px">
      <el-button type="primary" @click="handleAdd"> 新增用户</el-button>
    </el-row>
    <el-row :gutter="24" style="">
      <el-table :data="tableData" border style="width: 100%;margin-top: 100px" :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column label="账户名称" width="180" prop="uiCode" sortable>
        </el-table-column>
        <el-table-column label="真实姓名" width="180"  prop="uiName" sortable>
        </el-table-column>
        <el-table-column label="所属乡镇" width="180" prop="uiTown" sortable>
        </el-table-column>
        <el-table-column label="用户角色" width="180" prop="uiRole" sortable>
        </el-table-column>
        <el-table-column label="账户状态" width="180" prop="uiStatus" sortable>
          <template scope="scope">
            {{ scope.row.uiStatus == 1 ? "正常":"不正常"}}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">修改
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click.native.prevent="handleDelete(scope.$index, tableData)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <!--新增/修改用户-->
    <el-dialog title="title" v-model="dialogFormVisible" :show-close="false" size="tiny">
      <el-form :model="form" :rules="rules" ref="form" :label-width="formLabelWidth">
        <el-form-item label="登录账号" prop="code">
          <el-input v-model="form.code" placeholder="请输入登录账号"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="用户角色" prop="role">
          <el-select v-model="form.role" placeholder="请选择用户角色" style="width: 100%">
            <el-option label="乡镇上报人员(上报)" value="乡镇上报人员(上报)"></el-option>
            <el-option label="项目管理员(县)" value="项目管理员(县)"></el-option>
            <el-option label="领导(浏览)" value="领导(浏览)"></el-option>
            <el-option label="系统管理员" value="系统管理员"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属乡镇" prop="town">
          <el-select v-model="form.town" placeholder="请选择所属乡镇" style="width: 100%">
            <el-option v-for="item in townList" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账户状态" prop="status">
          <el-radio-group v-model="form.status" style="width:100%;text-align: left">
            <el-radio label="1">正常</el-radio>
            <el-radio label="2">不正常</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="默认密码" prop="password">
          <el-input v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
      <div slot="title">
        {{dialogTitle}}
      </div>
    </el-dialog>
  </div>

</template>

<script>
  import {Message} from 'element-ui';
  export default {
    data() {
      return {
        townList:[],
        form: {
          code: '',
          name: '',
          role: "",
          town: '',
          status: "1",
          password: '',
        },
        rules: {
          code: [
            {required: true, message: '请输入登陆账号', trigger: 'blur'},
            {min: 1, max: 25, message: '长度在 1 到 25 个字符', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请输入真实姓名', trigger: 'blur'},
            {min: 1, max: 25, message: '长度在 1 到 25 个字符', trigger: 'blur'}
          ],
          role: [
            {required: true, message: '请选择用户角色', trigger: 'change'}
          ],
          town: [
            {required: true, message: '请选择所属乡镇', trigger: 'change'}
          ],
          status: [
            {required: true, required: true, message: '请账户状态', trigger: 'change'}
          ],
          password: [
            {required: true, message: '请输入登陆密码', trigger: 'blur'},
            {min: 1, max: 25, message: '长度在 1 到 25 个字符', trigger: 'blur'}
          ],
        },
        formLabelWidth: '100px',
        dialogFormVisible: false,
        isEdit: '',
        formInline: {
          name: '',
          town: ''
        },
        activeName: 'first',
        input: '',
        options: [
          {
            value: '闽侯县',
            label: '闽侯县'
          },
          {
            value: '荆溪镇',
            label: '荆溪镇'
          }, {

            value: '青口镇',
            label: '青口镇'
          },
          {
            value: '上街镇',
            label: '上街镇'
          },
          {
            value: '高新区',
            label: '高新区'
          }
        ],
        tableData: [],
        dialogTitle: ""
      };
    },
    methods: {
      /*
       add/edit user submit
       */
      submitForm(formName) {
        /* edit user */
        const _self = this;
        if (this.isEdit) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$http({
                url: localStorage.url + '/User/modifyUserInfo',
                type: "POST",
                data: this.form,
                success: function (data) {
                  if (data.code == 0) {
                    Message({
                      showClose: true,
                      message: '修改成功',
                      type: 'success'
                    });
                    console.log(_self.form)
                    /*更新到页面当中*/
                    let formTmp = {
                      uiCode: _self.form.code,
                      uiName: _self.form.name,
                      uiRole: _self.form.role,
                      uiTown: _self.form.town,
                      uiStatus: _self.form.status,
                      uiPassword: _self.form.password
                    };
                    _self.tableData.splice(_self.form.index,1,formTmp)
                  }
                  else {
                    Message({
                      showClose: true,
                      message: '修改失败',
                      type: 'error'
                    });
                    return false;
                  }
                },
                error: function (err) {
                  Message({
                    showClose: true,
                    message: '添加失败',
                    type: 'error'
                  });
                }
              });
            }
            else {
              console.log('error submit!!');
              return false;
            }
            this.dialogFormVisible = false;
          });
        }
        /* add user */
        else {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$http({
                url: localStorage.url + '/User/add',
                type: "POST",
                data: this.form,
                success: function (data) {
                  if (data.code == 0) {
                    Message({
                      showClose: true,
                      message: '添加成功',
                      type: 'success'
                    });
                    console.log(_self.form);
                    let formTmp = {
                      uiCode: _self.form.code,
                      uiName: _self.form.name,
                      uiRole: _self.form.role,
                      uiTown: _self.form.town,
                      uiStatus: _self.form.status,
                      uiPassword: _self.form.password
                    }
                    _self.tableData.push(formTmp)
                  }
                  else {
                    Message({
                      showClose: true,
                      message: '添加失败',
                      type: 'error'
                    });
                    return false;
                  }
                },
                error: function (err) {
                  Message({
                    showClose: true,
                    message: '添加失败',
                    type: 'error'
                  });
                  this.dialogFormVisible = false;
                }
              });
            }
            else {
              console.log('error submit!!');
              return false;
            }
            this.dialogFormVisible = false;
          });
        }
      },
      /* select user */
      onSubmit(formName){
        var _self = this;
        this.$http({
          url: localStorage.url + '/User/getUserList',
          method: 'post',
          data:this.formInline,
          success: function (data) {
            let json = data.data;
            _self.tableData = json;
            console.log(json)
          },
          error: function (err) {
            console.log(err)

          }
        })
      },

      /*
       add user
       */
      handleAdd() {
        this.dialogFormVisible = true;
        this.dialogTitle = "新增用户";
        this.isEdit = 0;
        this.form = {
          code: '',
          name: '',
          role: "",
          town: '',
          status: "1",
          password: '',
        }
      },

      /*
       edit user
       */
      handleEdit(index, row) {
        console.log(index)
        console.log(row)
        this.isEdit = 1;
        this.dialogFormVisible = true;
        this.dialogTitle = "修改用户";
        let data = {
          //传入index方便更新表格内容
          index:index,
          uid: row.uiId,
          password: row.uiPassword,
          code: row.uiCode,
          status: row.uiStatus,
          town: row.uiTown,
          name: row.uiName,
          role: row.uiRole,
        };
        this.form = data;
      },

      /*
       delete user
       */

      handleDelete(index, rows) {
        this.$confirm('确认删除此用户?', '删除用户', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var _self = this;
          /* 确定删除 */
          this.$http({
            url: localStorage.url + '/User/delete',
            type: 'POST',
            data: {uid: rows[index].uiId},
            success: function (data) {
              rows.splice(index, 1);
              _self.$message({
                type: 'success',
                message: '删除成功!'
              });
            },
            error: function (err) {
              console.log(err)
              _self.$message({
                type: 'success',
                message: '删除失败!'
              });
            }
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
    ,
    created: function () {
      /*
       获取用户列表
       */
      this.townList = this.$store.getters.getTown;
      var _self = this;
      this.$http({
        url: localStorage.url + '/User/getUserList',
        method: 'get',
        success: function (data) {
          let json = data.data;
          _self.tableData = json;
          console.log(json)
        },
        error: function (err) {
          console.log(err)

        }
      })
    }
  }
</script>

<style>

  .el-input {
    display: block !important;
  }

  .el-table th > .cell {
    text-align: center !important;
  }
</style>
