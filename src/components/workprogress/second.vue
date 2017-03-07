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
                <el-form-item >
                    <el-select v-model="formInline.proDepartment" placeholder="全部责任部门">
                        <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item >
                    <el-select v-model="formInline.proBelong" placeholder="全部乡镇">
                        <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item >
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
                <el-radio class="radio" :label="1" >前期</el-radio>
                <el-radio class="radio" :label="2">征迁</el-radio>
                <el-radio class="radio" :label="3">建设</el-radio>
            </el-radio-group>
        </el-row>
        <el-row :gutter="24" style="float:right;z-index: 9;margin-top: 10px;padding-bottom: 20px">
            <el-button type="primary" @click="diypage(0)" > 导出报表</el-button>
        </el-row>
        <br>
        <el-row :gutter="24"  v-show="radio1==1">
            <el-table
                    :data="tableData3"
                    height="250"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </el-row>
        <el-row :gutter="24"  v-show="radio1==2">
            <el-table
                    :data="tableData3"
                    height="250"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期2"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </el-row>
        <el-row :gutter="24"  v-show="radio1==3">
            <el-table
                    :data="tableData3"
                    height="250"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期3"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </el-row>
    </div>

</template>

<script>
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
                    }]
            };
        },
        methods:{
            onSubmit() {
                console.log(this.formInline);
            },
            showtype(){
            }
        }
    }
</script>

<style scoped>
    .el-input {
        display: block !important;
    }
</style>
