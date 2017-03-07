<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="按责任部门汇总" name="firstson">
                <el-row :gutter="24" style="float:left ">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item>
                            <el-select v-model="formInline.department" placeholder="全部责任部门">
                                <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item>
                            <el-date-picker v-model="formInline.startdate" type="date" placeholder="开始时间"
                                            :picker-options="pickerOptions1">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            -
                        </el-form-item>
                        <el-form-item>
                            <el-date-picker v-model="formInline.enddate" type="date" placeholder="结束时间"
                                            :picker-options="pickerOptions1">
                            </el-date-picker>
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
                <el-row :gutter="24" style="float:left;margin-top: -10px">
                    <el-radio-group v-model="radio1" @change="">
                        <el-radio :label="1">表格展示</el-radio>
                        <el-radio :label="2">图表展示</el-radio>
                    </el-radio-group>
                </el-row>
                <el-row :gutter="24" style="float:right;z-index: 9;margin-top: -20px;padding-bottom: 20px">
                    <el-button type="primary" @click="diypage(0)" v-show="radio1 == 1"> 自定义报表</el-button>
                </el-row>
                <br>
                <br>
            </el-tab-pane>
            <el-tab-pane label="按行业汇总" name="secondson">
                <el-row :gutter="24" style="float:left ">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item>
                            <el-select v-model="formInline.department" placeholder="全部责任部门">
                                <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item>
                            <el-date-picker v-model="formInline.startdate" type="date" placeholder="开始时间"
                                            :picker-options="pickerOptions1">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            -
                        </el-form-item>
                        <el-form-item>
                            <el-date-picker v-model="formInline.enddate" type="date" placeholder="结束时间"
                                            :picker-options="pickerOptions1">
                            </el-date-picker>
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
                <el-row :gutter="24" style="float:left;margin-top: -10px">
                    <el-radio-group v-model="radio1" @change="showtype2">
                        <el-radio :label="3">表格展示</el-radio>
                        <el-radio :label="4">图表展示</el-radio>
                    </el-radio-group>
                </el-row>
                <el-row :gutter="24" style="float:right;z-index: 9;margin-top: -20px;padding-bottom: 20px">
                    <el-button type="primary" @click="diypage(1)" v-show="radio1 == 3"> 自定义报表</el-button>
                </el-row>
                <br>
                <br>
            </el-tab-pane>
        </el-tabs>
        <!--自定义报表-->
        <el-dialog title="title" v-model="dialogFormVisible" :show-close="false" size="small">
            <el-row :gutter="24" class="diycheck" >

                <!--交地进度-->
                <el-col :span="6" >
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
        <router-view></router-view>
    </div>
</template>

<script>
    import router from '../../router'

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
                    startdate: '',
                    enddate: ""
                },
                radio1: 1,
                formLabelWidth: '80px',
                dialogFormVisible: false,
                activeName: 'firstson',
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
                value: '',
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
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
                value1: '',
                value2: '',
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
                    case 3:{
                        let checkedCount = value.length;
                        this.checkAllHushu = checkedCount === this.hushu.length;
                        this.isIndeterminateHushu = checkedCount > 0 && checkedCount < this.hushu.length;
                        break;
                    }
                    case 4:{
                        let checkedCount = value.length;
                        this.checkAllWenti = checkedCount === this.wenti.length;
                        this.isIndeterminateWenti = checkedCount > 0 && checkedCount < this.wenti.length;
                        break;
                    }
                    case 5:{
                        let checkedCount = value.length;
                        this.checkAllTouzi = checkedCount === this.touzi.length;
                        this.isIndeterminateTouzi = checkedCount > 0 && checkedCount < this.touzi.length;
                        break;
                    }
                    case 6:{
                        let checkedCount = value.length;
                        this.checkAllKaigong = checkedCount === this.kaigong.length;
                        this.isIndeterminateKaigong = checkedCount > 0 && checkedCount < this.kaigong.length;
                        break;
                    }
                    case 7:{
                        let checkedCount = value.length;
                        this.checkAllJungong = checkedCount === this.jungong.length;
                        this.isIndeterminateJungong = checkedCount > 0 && checkedCount < this.jungong.length;
                        break;
                    }
                    case 8:{
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
            },
            showtype(){
                router.push("/1-1/" + this.radio1);
            },
            showtype2(){
                router.push("/1-1/" + this.radio1);
            },
            handleClick(tab, event) {
                let routermarker = Number(tab.index);
                if (routermarker) {
                    this.radio1 = 3
                }
                else {
                    this.radio1 = 1
                }
                router.push("/1-1/" + this.radio1);
                let str = this.$route.path;
                let strs = str.split("/");
                console.log("strs[2]", strs)
            }
        },
        mounted: function () {
            let str = this.$route.path;
            let strs = str.split("/");
            console.log(strs)
            if (strs[2] && (strs[2]=="3"||strs[2]=="4") ) {
                this.radio1 = Number(strs[2])
                this.activeName = "secondson"
            }
            if (strs[2] && (strs[2]=="1"||strs[2]=="2") ) {
                this.radio1 = Number(strs[2])
                this.activeName = "firstson"
            }
        }
    }
</script>

<style>
    .diycheck{
        text-align:left
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
