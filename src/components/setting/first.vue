<template>
    <div>
        <el-row :gutter="24" style="float:left;padding-top: 30px;z-index: 9">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="formInline.user" placeholder="人员名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="formInline.department" placeholder="全部乡镇">
                        <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
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
            <el-table :data="tableData" border style="width: 100%;margin-top: 100px">
                <el-table-column label="账户名称" width="180">
                    <template scope="scope">
                        {{ scope.row.account }}
                    </template>
                </el-table-column>
                <el-table-column label="真实姓名" width="180">
                    <template scope="scope">
                        {{ scope.row.realName }}
                    </template>
                </el-table-column>
                <el-table-column label="所属乡镇" width="180">
                    <template scope="scope">
                        {{ scope.row.belong }}
                    </template>
                </el-table-column>
                <el-table-column label="用户角色" width="180">
                    <template scope="scope">
                        {{ scope.row.userType }}
                    </template>
                </el-table-column>
                <el-table-column label="账户状态" width="180">
                    <template scope="scope">
                        {{ scope.row.accountState }}
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
        <el-dialog  title="title" v-model="dialogFormVisible" :show-close="false" size="tiny">
            <el-form :model="form" :label-width="formLabelWidth">
                <el-form-item label="登录账号" >
                    <el-input v-model="form.account" placeholder="请输入登录账号"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名" >
                    <el-input v-model="form.realName" placeholder="请输入真实姓名"></el-input>
                </el-form-item>
                <el-form-item label="用户角色">
                    <el-select v-model="form.userType" placeholder="请选择用户角色" style="width: 100%">
                        <el-option label="乡镇上报人员(上报)" value="1"></el-option>
                        <el-option label="项目管理员(县)" value="2"></el-option>
                        <el-option label="领导(浏览)" value="3"></el-option>
                        <el-option label="系统管理员" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属乡镇" >
                    <el-select v-model="form.belong" placeholder="请选择所属乡镇" style="width: 100%">
                        <el-option label="青口镇" value="1"></el-option>
                        <el-option label="上街镇" value="2"></el-option>
                        <el-option label="闽侯县" value="3"></el-option>
                        <el-option label="大湖乡" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="账户状态" >
                    <el-radio-group v-model="form.accountState" style="width:100%;text-align: left">
                        <el-radio label="1">正常</el-radio>
                        <el-radio label="2">不正常</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="默认密码" >
                    <el-input v-model="form.pass" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
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
    import '../../admin/ajax_userlist'
    export default {
        data() {
            return {
                form: {
                    account:'',
                    realName: '',
                    userType:"",
                    belong: '',
                    accountState:"1",
                    pass: '',
                },
                formLabelWidth: '80px',
                dialogFormVisible: false,
                formInline: {
                    personname: '',
                    department: '',
                },
                activeName: 'first',
                input: '',
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
                tableData: [],
                dialogTitle:""
            };
        },
        methods: {
            onSubmit(formName) {
            },
            handleAdd() {
                this.dialogFormVisible = true;
                this.dialogTitle = "新增用户";
                this.form={
                    account:'',
                            realName: '',
                            userType:"",
                            belong: '',
                            accountState:"1",
                            pass: '',
                }
            },
            handleEdit(index, row) {
                this.dialogFormVisible = true;
                this.dialogTitle = "修改用户";
                if (row.accountState == "正常"){
                   var accountStateMarker = "1"
                }
                else {
                    var accountStateMarker = "2"
                }
                let data = {
                    account: row.account,
                    accountState:accountStateMarker,
                    belong: row.belong,
                    realName: row.realName,
                    userType:row.userType,
                };
                this.form=data;
            },
            handleDelete(index, rows) {
                console.log(index, rows);
                rows.splice(index, 1);
            }
        },
        created: function () {
            var _self = this;
            this.$http({
                method: 'get',
                url: '/getUserList',
                data: this.formInline
            }).then(function (res) {
                let json = res.data.data;
                _self.tableData = json;
            }).catch(function (err) {
                console.log(err)
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
