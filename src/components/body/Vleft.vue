<template>
    <div id="main-left">
        <el-row class="tac">
            <el-col :span="24">
                <el-menu :unique-opened="true" default-active="1" class="el-menu-vertical-demo" @select="handleSelect"
                         theme="dark">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-loading"></i>攻坚进度</template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">行动汇总</el-menu-item>
                            <el-menu-item index="1-2">项目进度</el-menu-item>
                            <el-menu-item index="1-3">地图展示</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-time"></i>进度管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">项目上报情况汇总</el-menu-item>
                            <el-menu-item index="2-2">最新日报</el-menu-item>
                            <el-submenu index="2-9">
                                <template slot="title">填写/暂存日报</template>
                                <el-menu-item index="2-3">填写日报_前期</el-menu-item>
                                <el-menu-item index="2-4">填写日报_拆迁</el-menu-item>
                                <el-menu-item index="2-5">填写日报_建设</el-menu-item>
                            </el-submenu>
                            <el-submenu index="2-10">
                                <template slot="title">查看日报</template>
                                <el-menu-item index="2-6">查看日报_前期</el-menu-item>
                                <el-menu-item index="2-7">查看日报_拆迁</el-menu-item>
                                <el-menu-item index="2-8">查看日报_建设</el-menu-item>
                            </el-submenu>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="3-1"><i class="el-icon-menu"></i>项目管理</el-menu-item>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1">用户管理</el-menu-item>
                            <el-menu-item index="4-2">角色管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-setting"></i>个人中心</template>
                        <el-menu-item-group>
                            <el-menu-item index="5-1">修改密码</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>

        </el-row>
    </div>
</template>
<style>
    #main-left {
        margin-top: 2px;
    }
</style>
<script>
    import router from '../../router'
    export default {
        data() {
            return {
                defaultactive: 1
            }
        },
        methods: {
            handleSelect(key, keyPath)
            {
                console.log(key, keyPath);
                router.push("/" + key);
                this.defaultactive = key
            }
        },
    }
</script>
