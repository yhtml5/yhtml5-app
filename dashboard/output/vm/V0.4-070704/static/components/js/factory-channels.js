'use strict';
angular.module('factory', [])
    .factory('Channels',function(){
        channels = [{
            name: "支付宝扫码支付",
            time: "T+1"
        }, {
            name: "微信扫码支付",
            time: "T+1"
        }, {
            name: "银行卡快捷支付",
            time: "T+1"
        }, {
            name: "网银支付",
            time: "T+1"
        }, {
            name: "充值卡支付",
            time: "T+1",
            info: "移动充值卡、联通充值卡、电信充值卡"
        }, {
            name: "点卡支付",
            time: "T+1",
            info: "骏网一卡通、盛大一卡通、Q币卡、征途卡、久游一卡通、网易一卡通、完美一卡通、 搜狐一卡通、 纵友一卡通、 天弘一卡通"
        }];
        return channels;
    })
