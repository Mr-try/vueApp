/**
 * Created by ty on 2017/3/2.
 */
/**
 * Created by ty on 2017/3/2.
 */
var Mock = require('mockjs');

var data = [
    {proNumber:"0001",proName:"岐安村1期安置点",proTotal:'111111111',proPlace:"青口镇1",proDepartment:"闽侯县政府",proStep:"拆迁",preStepNum:1,proIndustry:"建筑",proPerson:"黄飞鸿",proLeader:"进去了"},
    {proNumber:"0002",proName:"岐安村2期安置点",proTotal:'222222',proPlace:"青口镇2",proDepartment:"闽侯县政府",proStep:"交地",preStepNum:2,proIndustry:"建筑",proPerson:"黄飞鸿",proLeader:"进去了"},
    {proNumber:"0003",proName:"岐安村3期安置点",proTotal:'33333333',proPlace:"青口镇3",proDepartment:"闽侯县政府",proStep:"拆迁",preStepNum:3,proIndustry:"建筑",proPerson:"黄飞鸿",proLeader:"进去了"},
    {proNumber:"0004",proName:"岐安村4期安置点",proTotal:'4444444444',proPlace:"青口镇4",proDepartment:"闽侯县政府",proStep:"交地",preStepNum:1,proIndustry:"建筑",proPerson:"黄飞鸿",proLeader:"进去了"},
    {proNumber:"0005",proName:"岐安村5期安置点",proTotal:'555555555',proPlace:"青口镇5",proDepartment:"闽侯县政府",proStep:"拆迁",preStepNum:2,proIndustry:"建筑",proPerson:"黄飞鸿",proLeader:"进去了"},
    {proNumber:"0006",proName:"岐安村6期安置点",proTotal:'6666666666',proPlace:"青口镇6",proDepartment:"闽侯县政府",proStep:"交地",preStepNum:3,proIndustry:"建筑",proPerson:"黄飞鸿",proLeader:"进去了"},
];
Mock.mock('/getProjectList', {
    data :data
});