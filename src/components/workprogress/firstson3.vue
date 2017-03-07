<template>
    <el-row :gutter="24">
        <el-col :span="24">
            <div>
                <el-table :data="tableData3" border style="width: 100%;" height="350">
                    <el-table-column prop="date" label="序号2" width="150"></el-table-column>
                    <el-table-column prop="date" label="责任单位" width="150"></el-table-column>
                    <el-table-column label="已交地">
                        <el-table-column
                                prop="province"
                                label="面积（亩）"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="city"
                                label="任务量（亩）"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="完成比例"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="名次"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="已拆迁">
                        <el-table-column
                                prop="province"
                                label="面积（亩）"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="city"
                                label="任务量（亩）"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="完成比例"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="名次"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="已完成征迁户数">
                        <el-table-column
                                prop="province"
                                label="面积（亩）"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="city"
                                label="任务量（亩）"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="完成比例"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="名次"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="建设项目完成投资">
                        <el-table-column
                                prop="province"
                                label="面积（亩）"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="city"
                                label="任务量（亩）"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="完成比例"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="名次"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="已解决问题">
                        <el-table-column
                                prop="province"
                                label="面积（亩）"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="city"
                                label="任务量（亩）"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="完成比例"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="名次"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
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
            onSubmit() {
                console.log(this.formInline);
            }
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
