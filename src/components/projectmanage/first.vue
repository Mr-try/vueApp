<template>
    <div>
        <el-row :gutter="24" style="float: left;margin-top: 30px;margin-bottom:10px;z-index: 9">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="formInline.proNumber" placeholder="项目名称/编号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="formInline.proLeader" placeholder="第一责任人/直接责任人/县责任领导"></el-input>
                </el-form-item>
                <el-form-item class="select-input">
                    <el-select v-model="formInline.proDepartment" placeholder="全部责任部门">
                        <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="select-input">
                    <el-select v-model="formInline.proBelong" placeholder="全部乡镇">
                        <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="select-input">
                    <el-select v-model="formInline.proIndustry" placeholder="全部行业">
                        <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <el-row :gutter="24" style="float:left;margin-top: -10px;z-index: 9">
            <el-radio-group v-model="radio1" @change="showtype">
                <el-radio class="radio" :label="1">前期</el-radio>
                <el-radio class="radio" :label="2">拆迁</el-radio>
                <el-radio class="radio" :label="3">建设</el-radio>
            </el-radio-group>
        </el-row>
        <el-row :gutter="24" style="float:right;z-index: 9;margin-top: 10px;padding-bottom: 20px">
            <el-button type="primary" @click="inputPage(0)"> 批量导入报表</el-button>
            <el-button type="primary" @click="outputPage(0)"> 导出报表</el-button>
            <el-button type="primary" @click="newPage(0)"> 新增项目</el-button>
        </el-row>
        <br>
        <el-row :gutter="24">
            <el-table :data="tableData" border style="width: 100%;">
                <el-table-column label="项目编号" width="180">
                    <template scope="scope">
                        {{ scope.row.proNumber }}
                    </template>
                </el-table-column>
                <el-table-column label="项目名称" width="180">
                    <template scope="scope">
                        <el-button type="text" size="small" @click="getProDetail(scope.row)">{{ scope.row.proName }}
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column label="项目总投资" width="180">
                    <template scope="scope">
                        {{ scope.row.proTotal }}
                    </template>
                </el-table-column>
                <el-table-column label="建设地点" width="180">
                    <template scope="scope">
                        {{ scope.row.proPlace }}
                    </template>
                </el-table-column>
                <el-table-column label="责任部门" width="180">
                    <template scope="scope">
                        {{ scope.row.proDepartment }}
                    </template>
                </el-table-column>
                <el-table-column label="建设阶段" width="180">
                    <template scope="scope">
                        {{ scope.row.proStep }}
                    </template>
                </el-table-column>
                <el-table-column label="所属行业" width="180">
                    <template scope="scope">
                        {{ scope.row.proIndustry }}
                    </template>
                </el-table-column>
                <el-table-column label="第一责任人" width="180">
                    <template scope="scope">
                        {{ scope.row.proPerson }}
                    </template>
                </el-table-column>
                <el-table-column label="县责任领导" width="180">
                    <template scope="scope">
                        {{ scope.row.proLeader }}
                    </template>
                </el-table-column>

                <el-table-column label="操作" fixed="right" width="180">
                    <template scope="scope">
                        <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">可见</el-button>
                        <el-button type="text" size="small" @click="handleEdit( scope.row)">修改</el-button>
                        <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)">删除
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
                formInline: {
                    proNumber: '',
                    proLeader: '',
                    proDepartment: '',
                    proBelong: '',
                    proIndustry: '',
                    department: '',
                    startdate: '',
                    enddate: ""
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

            };
        },
        methods: {
            onSubmit() {
                console.log(this.formInline);
            },
            newPage(){
                router.push("/3-2/" + this.radio1);
            },
            getProDetail(row){
                console.log(row);
                router.push("/3-4/" + row.preStepNum);
            },
            handleEdit(row){
                console.log(row);
                router.push("/3-3/" + row.preStepNum);
            }
        },
        created: function () {
            var _self = this;
            this.$http({
                method: 'get',
                url: '/getProjectList',
                data: this.ruleForm2
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
