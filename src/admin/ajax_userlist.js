/**
 * Created by ty on 2017/3/2.
 */
/**
 * Created by ty on 2017/3/2.
 */
var Mock = require('mockjs');

var data = [
    {account:"xxxx1",realName:"不是我",belong:'东街村',userType:"项目管理人员",accountState:"正常"},
    {account:"xxxx2",realName:"不是你",belong:'南街村',userType:"乡镇上报人员",accountState:"正常"},
    {account:"xxxx3",realName:"不是他",belong:'西街村',userType:"领导",accountState:"锁定"},
    {account:"xxxx4",realName:"不是她",belong:'北街村',userType:"项目管理人员",accountState:"正常"},
];
Mock.mock('/getUserList', {
    data :data
});