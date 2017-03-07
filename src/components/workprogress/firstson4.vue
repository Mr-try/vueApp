<template>
    <el-row :gutter="24">
        <el-col :span="24">
            <div id="maincharts2" style="width:100%;height: 350px"></div>
        </el-col>
    </el-row>
</template>

<script>
    var echarts = require('echarts');
    export default {
        data() {
            return {
                formInline: {
                    department: '',
                    startdate: '',
                    enddate: ""
                },
                radio: '1',
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
            onSubmit() {
                console.log(this.formInline);
            }
        },
        mounted: function () {
            var myChart = echarts.init(document.getElementById('maincharts2'));
            myChart.setOption(
                    {
                        backgroundColor: "#324157",
                        "title": {
                            "text": "拆迁进度2",
                            x: "4%",

                            textStyle: {
                                color: '#fff',
                                fontSize: '16'
                            },
                            subtextStyle: {
                                color: '#90979c',
                                fontSize: '16',

                            },
                        },
                        "tooltip": {
                            "trigger": "axis",
                            "axisPointer": {
                                "type": "shadow",
                                textStyle: {
                                    color: "#fff"
                                }

                            },
                        },
                        "grid": {
                            "borderWidth": 0,
                            "top": 110,
                            "bottom": 95,
                            textStyle: {
                                color: "#fff"
                            }
                        },
                        "legend": {
                            x: '4%',
                            top: '11%',
                            textStyle: {
                                color: '#90979c',
                            },
                            "data": ['已完成', '未完成']
                        },


                        "calculable": true,
                        "xAxis": [{
                            "type": "category",
                            "axisLine": {
                                lineStyle: {
                                    color: '#90979c'
                                }
                            },
                            "splitLine": {
                                "show": false
                            },
                            "axisTick": {
                                "show": false
                            },
                            "splitArea": {
                                "show": false
                            },
                            "axisLabel": {
                                "interval": 0,

                            },
                            "data": ["甘蔗镇", "白沙镇", "南屿镇", "尚干镇", "祥谦镇", "青口镇", "南通镇", "上街镇", "荆溪镇", "竹岐乡", "鸿尾乡", "洋里乡"],
                        }],
                        "yAxis": [{
                            "type": "value",
                            "splitLine": {
                                "show": false
                            },
                            "axisLine": {
                                lineStyle: {
                                    color: '#90979c'
                                }
                            },
                            "axisTick": {
                                "show": false
                            },
                            "axisLabel": {
                                "interval": 0,

                            },
                            "splitArea": {
                                "show": false
                            },

                        }],
                        "dataZoom": [{
                            "show": true,
                            "height": 30,
                            "xAxisIndex": [
                                0
                            ],
                            bottom: 30,
                            "start": 10,
                            "end": 80,
                            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                            handleSize: '110%',
                            handleStyle: {
                                color: "#d3dee5",

                            },
                            textStyle: {
                                color: "#fff"
                            },
                            borderColor: "#90979c"


                        }, {
                            "type": "inside",
                            "show": true,
                            "height": 15,
                            "start": 1,
                            "end": 35
                        }],
                        "series": [{
                            "name": "已完成",
                            "type": "bar",
                            "stack": "总量",
                            "barMaxWidth": 35,
                            "barGap": "10%",
                            "itemStyle": {
                                "normal": {
                                    "color": "rgba(255,144,128,1)",
                                    "label": {
                                        "show": true,
                                        "textStyle": {
                                            "color": "#fff"
                                        },
                                        "position": "insideTop",
                                        formatter: function (p) {
                                            return p.value > 0 ? (p.value) : '';
                                        }
                                    }
                                }
                            },
                            "data": [
                                709,
                                1917,
                                2455,
                                2610,
                                1719,
                                1433,
                                1544,
                                3285,
                                5208,
                                3372,
                                2484,
                                4078
                            ],
                        },

                            {
                                "name": "未完成",
                                "type": "bar",
                                "stack": "总量",
                                "itemStyle": {
                                    "normal": {
                                        "color": "rgba(0,191,183,1)",
                                        "barBorderRadius": 0,
                                        "label": {
                                            "show": true,
                                            "position": "top",
                                            formatter: function (p) {
                                                return p.value > 0 ? (p.value) : '';
                                            }
                                        }
                                    }
                                },
                                "data": [
                                    327,
                                    1776,
                                    507,
                                    1200,
                                    800,
                                    482,
                                    204,
                                    1390,
                                    1001,
                                    951,
                                    381,
                                    220
                                ]
                            }
                        ]
                    }
            );
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
