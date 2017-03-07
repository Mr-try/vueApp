<template>
    <div>
        新增项目
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="first">
                <div>
                    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                        <el-col :span="10" :sm="20" :lg="12">
                            <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">项目基本信息</div>
                            <el-form :span="10" label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm"
                                     label-width="250px" class="demo-ruleForm">
                                <el-form-item label="项目名称" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="年度" prop="name">
                                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="项目编号" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="项目分类" prop="resource">
                                    <el-radio-group v-model="ruleForm.resource">
                                        <el-radio label="前期"></el-radio>
                                        <el-radio label="征迁"></el-radio>
                                        <el-radio label="建设"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="是否可见" prop="resource">
                                    <el-radio-group v-model="ruleForm.resource">
                                        <el-radio label="可见"></el-radio>
                                        <el-radio label="不可见"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="所属行业" prop="resource">
                                    <el-select v-model="ruleForm.region" placeholder="请选择所属行业">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="所属乡镇" prop="resource">
                                    <el-select v-model="ruleForm.region" placeholder="请选择所属乡镇">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="责任单位" prop="resource">
                                    <el-select v-model="ruleForm.region" placeholder="请选择责任单位">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="第一责任人" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="直接责任人" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="县责任领导" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="建设地点" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="项目介绍" prop="desc">
                                    <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入项目介绍"></el-input>
                                </el-form-item>
                                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px"> 业主信息设置</div>
                                <el-form-item label="项目业主" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="责任人、职务、联系方式" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="联系人、职务、联系方式" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit('ruleForm')">保存修改</el-button>
                                    <el-button>取消返回</el-button>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
            <!--
                显示/隐藏三个阶段目标任务div
            -->
            <el-tab-pane label="目标任务" name="second">
                <div v-if="showType == 1">
                    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                        <el-col :span="10" :sm="20" :lg="12">
                            <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">前期项目目标任务</div>
                            <el-form :span="10" label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm"
                                     label-width="250px" class="demo-ruleForm">
                                <el-form-item label="计划问题数" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="总投资" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="攻坚行动必须解决的问题" prop="desc">
                                    <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入项目介绍"></el-input>
                                </el-form-item>
                                <el-form-item label="攻坚行动必须达到的目标" prop="desc">
                                    <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入项目介绍"></el-input>
                                </el-form-item>
                                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px"> 完成任务时间节点</div>
                                <el-form-item label="" prop="resource">
                                    <el-radio-group style="margin-left: -250px" v-model="ruleForm.resource">
                                        <el-radio label="按季度"></el-radio>
                                        <el-radio label="选择时间"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-table
                                        :data="tableData"
                                        border
                                        style="width: 100%;margin-bottom: 30px">
                                    <el-table-column
                                            label="时间节点"
                                            width="180">
                                        <template scope="scope">
                                            <el-icon name="time"></el-icon>
                                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="完成目标"
                                            width="180">
                                        <template scope="scope">
                                            <div slot="reference" class="name-wrapper">
                                                <el-tag type="warning">{{ scope.row.name }}</el-tag>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="操作">
                                        <template scope="scope">
                                            <el-button
                                                    size="small"
                                                    @click="handleEdit(scope.$index, scope.row)">填写目标
                                            </el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit('ruleForm')">保存修改</el-button>
                                    <el-button>取消返回</el-button>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                </div>
                <div v-if="showType == 2">
                    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                        <el-col :span="10" :sm="20" :lg="12">
                            <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">征迁项目目标任务</div>
                            <el-form :span="10" label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm"
                                     label-width="250px" class="demo-ruleForm">
                                <el-form-item label="总交地面积（亩）" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="未交地面积（亩）" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="目标交地面积（亩）" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="总拆迁面积（平方米）" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="未拆迁面积（平方米）" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>

                                <el-form-item label="目标拆迁面积（平方米）" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>

                                <el-form-item label="总征迁户数（户）" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="未征迁户数（户）" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="目标征迁户数（户）" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="计划问题数" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="攻坚行动必须解决的问题" prop="desc">
                                    <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入项目介绍"></el-input>
                                </el-form-item>
                                <el-form-item label="攻坚行动必须达到的目标" prop="desc">
                                    <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入项目介绍"></el-input>
                                </el-form-item>
                                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px"> 完成任务时间节点</div>
                                <el-form-item label="" prop="resource">
                                    <el-radio-group style="margin-left: -250px" v-model="ruleForm.resource">
                                        <el-radio label="按季度"></el-radio>
                                        <el-radio label="选择时间"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-table
                                        :data="tableData"
                                        border
                                        style="width: 100%;margin-bottom: 30px">
                                    <el-table-column
                                            label="时间节点"
                                            width="180">
                                        <template scope="scope">
                                            <el-icon name="time"></el-icon>
                                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="完成目标"
                                            width="180">
                                        <template scope="scope">
                                            <div slot="reference" class="name-wrapper">
                                                <el-tag type="warning">{{ scope.row.name }}</el-tag>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="操作">
                                        <template scope="scope">
                                            <el-button
                                                    size="small"
                                                    @click="handleEdit(scope.$index, scope.row)">填写目标
                                            </el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit('ruleForm')">保存修改</el-button>
                                    <el-button>取消返回</el-button>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                </div>
                <div v-if="showType == 3">
                    <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
                        <el-col :span="10" :sm="20" :lg="12">
                            <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">建设项目目标任务</div>
                            <el-form :span="10" label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm"
                                     label-width="250px" class="demo-ruleForm">
                                <el-form-item label="项目总投资（亿元）" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="项目总投资（亿元）" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="开竣工状态" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="计划问题数" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="总投资" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="攻坚行动必须解决的问题" prop="desc">
                                    <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入项目介绍"></el-input>
                                </el-form-item>
                                <el-form-item label="攻坚行动必须达到的目标" prop="desc">
                                    <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入项目介绍"></el-input>
                                </el-form-item>
                                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px"> 完成任务时间节点</div>
                                <el-form-item label="" prop="resource">
                                    <el-radio-group style="margin-left: -250px" v-model="ruleForm.resource">
                                        <el-radio label="按季度"></el-radio>
                                        <el-radio label="选择时间"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-table
                                        :data="tableData"
                                        border
                                        style="width: 100%;margin-bottom: 30px">
                                    <el-table-column
                                            label="时间节点"
                                            width="180">
                                        <template scope="scope">
                                            <el-icon name="time"></el-icon>
                                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="完成目标"
                                            width="180">
                                        <template scope="scope">
                                            <div slot="reference" class="name-wrapper">
                                                <el-tag type="warning">{{ scope.row.name }}</el-tag>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="操作">
                                        <template scope="scope">
                                            <el-button
                                                    size="small"
                                                    @click="handleEdit(scope.$index, scope.row)">填写目标
                                            </el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit('ruleForm')">保存修改</el-button>
                                    <el-button>取消返回</el-button>
                                </el-form-item>
                            </el-form>
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
                showType:"",
                activeName: 'first',
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
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
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
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
