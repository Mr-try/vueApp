<template>
    <div id="main-left">
        <el-row class="tac">
            <el-col :span="24">
                <el-menu :unique-opened="true" default-active="1" class="el-menu-vertical-demo" @select="handleSelect"
                         theme="dark">
                    <el-submenu index="1">
                        <template slot="title"><i class="icon-loop2"></i>攻坚进度</template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">行动汇总</el-menu-item>
                            <el-menu-item index="1-2">项目进度</el-menu-item>
                            <el-menu-item index="1-3">地图展示</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="icon-clock"></i>进度管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">项目上报情况汇总</el-menu-item>
                            <el-menu-item index="2-2">最新日报</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="3-1"><i class="el-icon-menu"></i>项目管理</el-menu-item>
                    <el-submenu index="4">
                        <template slot="title"><i class="icon-cog"></i>系统设置</template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1">用户管理</el-menu-item>
                            <el-menu-item index="4-2">角色管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="icon-user"></i>个人中心</template>
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
                var fatherTree = document.getElementsByClassName("is-opened");
              console.log(fatherTree)
                console.log(key, keyPath);
                router.push("/" + key);
                this.defaultactive = key
            }
        },
    }
</script>
