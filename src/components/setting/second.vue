<template>
    <div>
        <!--<el-row :gutter="24" style="float:left;padding-top: 30px ;z-index: 9">-->
            <!--<el-form :inline="true" :model="formInline" class="demo-form-inline">-->
                <!--<el-form-item>-->
                    <!--<el-input v-model="formInline.user" placeholder="人员名称"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item>-->
                    <!--<el-select v-model="formInline.department" placeholder="全部乡镇">-->
                        <!--<el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>-->
                    <!--</el-select>-->
                <!--</el-form-item>-->

                <!--<el-form-item>-->
                    <!--<el-button type="primary" @click="onSubmit">查询</el-button>-->
                <!--</el-form-item>-->
            <!--</el-form>-->
        <!--</el-row>-->

        <el-row :gutter="24" style="">
            <el-table :data="tableData" border style="width: 100%;margin-top: 100px">
                <el-table-column label="角色名称" >
                    <template scope="scope">
                        {{ scope.row.urName }}
                    </template>
                </el-table-column>
                <el-table-column label="角色说明" >
                    <template scope="scope">
                        {{ scope.row.urRemark }}
                    </template>
                </el-table-column>
                <el-table-column label="权限说明" >
                    <template scope="scope">
                        {{ scope.row.urPowerremark }}
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </div>

</template>

<script>
    import '../../admin/ajax_personlist'
    export default {
        data() {
            return {
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
            };
        },
        methods: {
            onSubmit(formName) {
                this.$http({
                    method: 'get',
                    url: '/login',
                    data: this.ruleForm2
                }).then(function (res) {
                    console.log(res)
                    router.push('/1-1');
                }).catch(function (err) {
                    console.log(err)
                })
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },
      created: function () {
        /*
          get role list
         */
        var _self = this;
        this.$http({
          url: localStorage.url + '/User/getRoleList',
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
