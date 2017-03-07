<template>
    <div>
        <div id="allmap" style="width: 100%;height: 100%"></div>
        <div class="rank-marker1 rank-marker" @click="getRank(1)">拆迁<br>排名</div>
        <div class="rank-marker2 rank-marker" @click="getRank(2)">交地<br>排名</div>
        <div class="rank-marker3 rank-marker" @click="getRank(3)">征迁<br>排名</div>
        <article id="rankDetail">
            <el-tabs v-model="activeName">
                <el-tab-pane label="完成量排名" name="first">完成量排名</el-tab-pane>
                <el-tab-pane label="完成率排名" name="second">完成率排名</el-tab-pane>
            </el-tabs>
        </article>
    </div>
</template>

<style scoped>
    .rank-marker {
        position: absolute;
        width: 50px;
        height: 70px;
        line-height: 35px;
        background-color: #fff;
        cursor: pointer;
    }
    .rank-marker1 {
        top: 120px;
        right: 15px;
    }
    .rank-marker2 {
        top: 200px;
        right: 15px;
    }
    .rank-marker3 {
        top: 280px;
        right: 15px;
    }
    #rankDetail{
        position: absolute;
        top: 60px;
        right: 0px;
        background-color: #fff;
        opacity: 0.7;
        min-width: 250px;
        z-index: 99;
        min-height: 450px;
    }
</style>

<script>
    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            getRank(type){
                alert(type)
            }
        },
        mounted: function () {
            this.$forceUpdate();
            console.log(111111)
            var map = new BMap.Map("allmap");    // 创建Map实例
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

        }
    };
</script>