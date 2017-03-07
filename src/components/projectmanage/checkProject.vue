<template>
    <div>
        查询项目
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="first">
                <div>
                    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                        <el-col :span="10" :sm="20" :lg="12">
                            <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">项目基本信息</div>
                            <el-form :span="10" label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm"
                                     label-width="250px" class="demo-ruleForm">
                                <el-form-item label="项目名称" prop="name">
                                    <el-input v-model="ruleForm.name" :disabled="true"></el-input>
                                </el-form-item>
                                <el-form-item label="年度" prop="name">
                                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域" :disabled="true">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="项目编号" prop="name">
                                    <el-input v-model="ruleForm.name" :disabled="true"></el-input>
                                </el-form-item>
                                <el-form-item label="项目分类" prop="resource">
                                    <el-radio-group v-model="ruleForm.resource" :disabled="true">
                                        <el-radio label="前期"></el-radio>
                                        <el-radio label="征迁"></el-radio>
                                        <el-radio label="建设"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="是否可见" prop="resource">
                                    <el-radio-group v-model="ruleForm.resource2" :disabled="true">
                                        <el-radio label="可见"></el-radio>
                                        <el-radio label="不可见"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="所属行业" prop="resource">
                                    <el-select v-model="ruleForm.region" placeholder="请选择所属行业" :disabled="true">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="所属乡镇" prop="resource">
                                    <el-select v-model="ruleForm.region" placeholder="请选择所属乡镇" :disabled="true">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="责任单位" prop="resource">
                                    <el-select v-model="ruleForm.region" placeholder="请选择责任单位" :disabled="true">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="第一责任人" prop="name">
                                    <el-input v-model="ruleForm.name" :disabled="true"></el-input>
                                </el-form-item>
                                <el-form-item label="直接责任人" prop="name">
                                    <el-input v-model="ruleForm.name" :disabled="true"></el-input>
                                </el-form-item>
                                <el-form-item label="县责任领导" prop="name">
                                    <el-input v-model="ruleForm.name" :disabled="true"></el-input>
                                </el-form-item>
                                <el-form-item label="建设地点" prop="name">
                                    <el-input v-model="ruleForm.name" :disabled="true"></el-input>
                                </el-form-item>
                                <el-form-item label="项目介绍" prop="desc">
                                    <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入项目介绍"
                                              :disabled="true"></el-input>
                                </el-form-item>
                                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px"> 业主信息设置</div>
                                <el-form-item label="项目业主" prop="name">
                                    <el-input v-model="ruleForm.name" :disabled="true"></el-input>
                                </el-form-item>
                                <el-form-item label="责任人、职务、联系方式" prop="name">
                                    <el-input v-model="ruleForm.name" :disabled="true"></el-input>
                                </el-form-item>
                                <el-form-item label="联系人、职务、联系方式" prop="name">
                                    <el-input v-model="ruleForm.name" :disabled="true"></el-input>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
            <!--
                显示/隐藏三个阶段目标任务div
            -->
            <el-tab-pane label="完成情况" name="second" style="text-align: left;">
                岐安村二期安置点（批地村民自建）
                <div v-if="showType == 1">
                    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                        <el-col :sm="24" :lg="12" style="padding-right: 40px!important;">
                            上报情况汇总
                            <br>
                            需上级协调问题
                            <br>
                            <el-input
                                    type="textarea"
                                    :rows="2"
                                    placeholder="请输入内容"
                                    v-model="textarea"
                                    :disabled="true">
                            </el-input>

                        </el-col>
                        <el-col :sm="24" :lg="12">
                            22222
                        </el-col>
                    </el-row>
                </div>
                <div v-if="showType == 2">
                    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                        <el-col :span="24" :sm="24" :lg="12">
                            111111
                        </el-col>
                        <el-col :span="24" :sm="24" :lg="12">
                            22222
                        </el-col>
                    </el-row>
                </div>
                <div v-if="showType == 3">
                    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                        <el-col :span="24" :sm="24" :lg="12">
                            111111
                        </el-col>
                        <el-col :span="24" :sm="24" :lg="12">
                            22222
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
            <el-tab-pane label="上报记录" name="third">
                <div v-if="showType == 1">
                    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                        <el-col :span="24" :sm="24" :lg="12">
                            111111
                        </el-col>
                        <el-col :span="24" :sm="24" :lg="12">
                            22222
                        </el-col>
                    </el-row>
                </div>
                <div v-if="showType == 2">
                    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                        <el-col :span="24" :sm="24" :lg="12">
                            111111
                        </el-col>
                        <el-col :span="24" :sm="24" :lg="12">
                            22222
                        </el-col>
                    </el-row>
                </div>
                <div v-if="showType == 3">
                    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                        <el-col :span="24" :sm="24" :lg="12">
                            111111
                        </el-col>
                        <el-col :span="24" :sm="24" :lg="12">
                            22222
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import '../../admin/ajax_personlist'

    export default {
        data() {
            return {
                showType: "",
                activeName: 'first',
                ruleForm: {
                    name: 'xxxxx',
                    region: '区域一',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: "前期",
                    resource2: "可见",
                    desc: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    region: [
                        {required: true, message: '请选择活动区域', trigger: 'change'}
                    ],
                    date1: [
                        {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    date2: [
                        {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
                    ],
                    type: [
                        {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
                    ],
                    resource: [
                        {required: true, message: '请选择活动资源', trigger: 'change'}
                    ],
                    desc: [
                        {required: true, message: '请填写活动形式', trigger: 'blur'}
                    ]
                },
                tableData: [{
                    date: '第一季度',
                    name: '未填写',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '第二季度',
                    name: '未填写',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '第三季度',
                    name: '未填写',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '第四季度',
                    name: '未填写',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]

            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },
        mounted: function () {
            let str = this.$route.path;
            let strs = str.split("/");
            console.log(strs)
            this.showType = strs[2]
        }
    };
</script>
<style>
    .el-table th > .cell {
        text-align: center !important;
    }

    .el-table .cell {
        text-align: center !important;
    }
</style>
