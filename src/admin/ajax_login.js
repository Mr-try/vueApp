/**
 * Created by ty on 2017/3/2.
 */
var Mock = require('mockjs');

Mock.mock('/login', {
    'name'       : '@name()',
    'age|1-100': 100,
    'color'       : '@color'
});