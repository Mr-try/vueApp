<template>
    <div>
        <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
            <el-col :span="24" :sm="24" :lg="24" style="margin-bottom: 70px">
                <h3>岐安村二期安置点（批地村民自建）</h3>
                2017-02-01 进度汇报
            </el-col>
            <el-col :span="10" :sm="20" :lg="12">
                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">征迁项目汇报项</div>
                <el-form :span="10" label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="250px" class="demo-ruleForm">
                    <el-form-item label="累计交地面积（亩）" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="累计拆迁面积（㎡）" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="累计征迁户数（户）" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="已解决问题数" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="今日解决问题" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入今日解决问题，若无，可不填"></el-input>
                    </el-form-item>
                    <el-form-item label="需上级协调问题" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入需上级协调问题，若无，可不填"></el-input>
                    </el-form-item>
                    <el-form-item label="项目进展简诉" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入进展简述，若无，可不填"></el-input>
                    </el-form-item>
                    <el-form-item label="存在问题" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入存在问题，若无，可不填"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<style>

</style>
<script>
    export default {
        data() {
            return {
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
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
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
            }
        }
    }
</script>