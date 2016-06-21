'use strict';
angular.module('factory', [])
    .factory('UploadAuth', function() {
        uploadAuth = [{
            text: "",
            url: ""
        }]
    })
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
        return{
            channels
        }
    })
    .factory('Data', function($http) {
        userInfo = {};
        accountRecord = [{
            "time": "2016-02-26 19:21:45",
            "name": "Kyle1",
            "account": "yhtml5",
            "bank": "人民银行",
            "subbranch": "杭州支行",
            "province": "浙江省",
            "city": "杭州市",
            "pay": "200W",
            "payed": "10W",
            "fee": "3%",
            "state": "已结算",
            "timedone": "2016-02-27 19:21:45",
            "class": "提现",
            "canal": "Data"
        }, {
            "time": "2016-02-26 19:21:45",
            "name": "Kyle2",
            "account": "yhtml5",
            "bank": "人民银行",
            "subbranch": "杭州支行",
            "province": "浙江省",
            "city": "杭州市",
            "pay": "200W",
            "payed": "10W",
            "fee": "3%",
            "state": "已结算",
            "timedone": "2016-02-27 19:21:45",
            "class": "提现",
            "canal": "Data"
        }, {
            "time": "2016-02-26 19:21:45",
            "name": "Kyle3",
            "account": "yhtml5",
            "bank": "人民银行",
            "subbranch": "杭州支行",
            "province": "浙江省",
            "city": "杭州市",
            "pay": "200W",
            "payed": "10W",
            "fee": "3%",
            "state": "已结算",
            "timedone": "2016-02-27 19:21:45",
            "class": "提现",
            "canal": "Data"
        }, {
            "time": "2016-02-26 19:21:45",
            "name": "Kyle4",
            "account": "yhtml5",
            "bank": "人民银行",
            "subbranch": "杭州支行",
            "province": "浙江省",
            "city": "杭州市",
            "pay": "200W",
            "payed": "10W",
            "fee": "3%",
            "state": "已结算",
            "timedone": "2016-02-27 19:21:45",
            "class": "提现",
            "canal": "Data"
        }, {
            "time": "2016-02-26 19:21:45",
            "name": "Kyle5",
            "account": "yhtml5",
            "bank": "人民银行",
            "subbranch": "杭州支行",
            "province": "浙江省",
            "city": "杭州市",
            "pay": "200W",
            "payed": "10W",
            "fee": "3%",
            "state": "已结算",
            "timedone": "2016-02-27 19:21:45",
            "class": "提现",
            "canal": "Data"
        }, {
            "time": "2016-02-26 19:21:45",
            "name": "Kyle6",
            "account": "yhtml5",
            "bank": "人民银行",
            "subbranch": "杭州支行",
            "province": "浙江省",
            "city": "杭州市",
            "pay": "200W",
            "payed": "10W",
            "fee": "3%",
            "state": "已结算",
            "timedone": "2016-02-27 19:21:45",
            "class": "提现",
            "canal": "Data"
        }, {
            "time": "2016-02-26 19:21:45",
            "name": "Kyle7",
            "account": "yhtml5",
            "bank": "人民银行",
            "subbranch": "杭州支行",
            "province": "浙江省",
            "city": "杭州市",
            "pay": "200W",
            "payed": "10W",
            "fee": "3%",
            "state": "已结算",
            "timedone": "2016-02-27 19:21:45",
            "class": "提现",
            "canal": "Data"
        }, {
            "time": "2016-02-26 19:21:45",
            "name": "Kyle8",
            "account": "yhtml5",
            "bank": "人民银行",
            "subbranch": "杭州支行",
            "province": "浙江省",
            "city": "杭州市",
            "pay": "200W",
            "payed": "10W",
            "fee": "3%",
            "state": "已结算",
            "timedone": "2016-02-27 19:21:45",
            "class": "提现",
            "canal": "Data"
        }, {
            "time": "2016-02-26 19:21:45",
            "name": "Kyle9",
            "account": "yhtml5",
            "bank": "人民银行",
            "subbranch": "杭州支行",
            "province": "浙江省",
            "city": "杭州市",
            "pay": "200W",
            "payed": "10W",
            "fee": "3%",
            "state": "已结算",
            "timedone": "2016-02-27 19:21:45",
            "class": "提现",
            "canal": "Data"
        }];
        accountRecord2 = [{
            "time": "2016-02-26 19:21:45",
            "name": "Kyle1",
            "account": "yhtml5",
            "bank": "人民银行",
            "subbranch": "杭州支行",
            "province": "浙江省",
            "city": "杭州市",
            "pay": "200W",
            "payed": "10W",
            "fee": "3%",
            "state": "已结算",
            "timedone": "2016-02-27 19:21:45",
            "class": "提现",
            "canal": "Data"
        }];
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
        businessTypes = [{
            id: 1,
            name: "数字娱乐",
            children: [{
                id: 2,
                name: "网络游戏/网页游戏/手机网游"
            }, {
                id: 3,
                name: "互联网应用/无线互联网应用（小说/杀毒等）"
            }]
        }];
        //      businessTypes = {
        //          "数字娱乐": ["网络游戏/网页游戏/手机网游", "互联网应用/无线互联网应用（小说/杀毒等）", "直销行业", "SNS社区/微博", "软件/下载", "其他互联网", "视频网站/社区", "  虚拟增值"],
        //          "快消连锁": ["餐饮/娱乐休闲/美容/保健/生活服务等连锁行业", "连锁加盟（食品/饮料/化妆品/服装/日用百货等）", "网上商城（B2C,C2C）", "网上批发（B2B）", "团购（C2B）", "其他连锁零售", "批发市场", "物流配送/快递"],
        //          "电信运营": ["运营商（移动、联通、电信、铁通等）", " 其他与运营商合作的项目", " 运营商合作厅", "网上批发（B2B）"],
        //          "航空旅游": ["机票/火车票代理商", "旅行社/旅游网/旅游平台（OTA）", "旅游局/景区门票", "其他商业旅行", "航空公司", "分销平台", "差旅公司（TMC）", "租车行业", "GDS", "平台化订房中心"],
        //          "行政教育": ["政府考试/人才培训/检测认证/非税业务", "机构教育/学校/学术/研究", "顾问/信息咨询", "出版社", "会议会务", "其他行政教育行业"],
        //          "保险": ["保险公司", "保险代理公司", "其他保险行业"],
        //          "基金": ["基金行业", "其他基金行业"],
        //          "P2P": [],
        //          "跨境业务": ["货物贸易", "服务贸易"],
        //          "现货业务": ["现货交易所", "现货商城", "其他现货行业"],
        //          "其他": ["酒店行业（包括度假）", "会展行业", "医疗行业", "彩票行业", "物业行业", "其他行业"],
        //      };

        var obj = {};
        obj.fetchUserDetails = function() {
            return $http.get('http://admin.jubaobar.com/front/homePage/console.htm')
                .success(function(response) {
                    console.log("applist9 :", response.data);
                    userApps = response.data.appTradeInfoList;
                    return userApps
                })
        };
        return {
            obj,
            banks,
            businessTypes,
            division,
            userInfo,
            userInfo
        };
    });