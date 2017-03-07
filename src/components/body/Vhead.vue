<template>
    <div id="vhead">
        <div class="head-title">闽侯攻坚2017</div>
        <div class="head-content">马上就办 真抓实干</div>
    </div>
</template>
<style scope>
    #vhead{
        position: absolute;
        top: 0;
        height: 60px;
        line-height: 60px;
        background-color: #324157;
        color: #ccc;
        width: 100%;
    }
    .head-title{
        float: left;
        margin-left: 20px;
        font-family: "微软雅黑";
        font-size: 1.5em;
    }
    .head-content{
        font-family: STXingkai ;
        font-size: 1.5em;
    }
</style>
<script>
    export default {
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
