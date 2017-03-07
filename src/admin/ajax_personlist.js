/**
 * Created by ty on 2017/3/2.
 */
/**
 * Created by ty on 2017/3/2.
 */
var Mock = require('mockjs');

var data = [
    {personName:"yyyy1",realName:"不是我",belong:'东街村',accountState:"正常"},
    {personName:"yyyy2",realName:"不是你",belong:'南街村',accountState:"正常"},
    {personName:"yyyy3",realName:"不是他",belong:'西街村',accountState:"锁定"},
    {personName:"yyyy4",realName:"不是她",belong:'北街村',accountState:"正常"},
];
Mock.mock('/getPersonList', {
    data :data
});