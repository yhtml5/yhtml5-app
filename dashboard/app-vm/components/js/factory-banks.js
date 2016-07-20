angular.module('factory', [])
    .factory('Banks', function() {
        banks = [{
            id: 100,
            bank: "中国邮政储蓄银行"
        }, {
            id: 102,
            bank: "中国工商银行"
        }, {
            id: 103,
            bank: "中国农业银行"
        }, {
            id: 104,
            bank: "中国银行"
        }, {
            id: 105,
            bank: "中国建设银行"
        }, {
            id: 301,
            bank: "交通银行"
        }, {
            id: 302,
            bank: "中信银行"
        }, {
            id: 303,
            bank: "中国光大银行"
        }, {
            id: 304,
            bank: "华夏银行"
        }, {
            id: 305,
            bank: "中国民生银行"
        }, {
            id: 306,
            bank: "广东发展银行"
        }, {
            id: 307,
            bank: "平安银行"
        }, {
            id: 308,
            bank: "招商银行"
        }, {
            id: 309,
            bank: "兴业银行"
        }, {
            id: 310,
            bank: "浦东发展银行"
        }, {
            id: 317,
            bank: "渤海银行"
        }, {
            id: 1000,
            bank: "北京银行"
        }, {
            id: 1003,
            bank: "宁波银行"
        }, {
            id: 1004,
            bank: "上海银行"
        }, {
            id: 1007,
            bank: "杭州银行"
        }];
       return banks;
    });