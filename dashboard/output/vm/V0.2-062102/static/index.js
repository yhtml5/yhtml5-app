;/*!/server/author.js*/
/*=============================================================================
 * Author:Kyle|张大漾
 * Website:http://yhtml5.com
 * Gihub:https://github.com/yhtml5
 * Description: A Website disgned by AngularJS Boostrap and NodeJS
 *              It requires AngularJS 1.5.x or higher and it has been tested
 *              Do something awesome and have fun !
 *=============================================================================*/

;/*!/components/js/ctrl.js*/
/*
 * @require components/js/router.js
 *
 */
'use strict';
angular.module('controllers', ['ui.bootstrap', 'ngAnimate'])
    .controller('controllers', function($scope, $uibModal) {
        $scope.animationsEnabled = true;
        $scope.smsConfirmOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'smsConfirm.html',
                controller: 'smsConfirmCtrl',
                size: size
            })
        }
    })
    .controller('smsConfirmCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
;/*!/components/js/router.js*/
/*
 * @require components/js/ctrl.js
 * @require bower_components/angular-ui-router/release/angular-ui-router.js
 */
'use strict';
// Declare app level module which depends on views, and components
angular.module('yhtml5', [
        'ui.router',
        'controllers',
        'factory',
        'directive',
        'yhtml5.nav',
        'yhtml5.appList',
        'yhtml5.appsetting',
        'yhtml5.authentication'
    ])
    .config(['$compileProvider', function($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/);
    }])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("dashboard")
    })
//  .config(function($stateProvider, $urlRouterProvider) {
//      $urlRouterProvider
//      //.when('/dashboard/*', '/dashboard')
//          .otherwise("dashboard")
//      $stateProvider
//          .state('dashboard', {
//              url: "/dashboard",
//              views: {
//                  "nav": {
//                      templateUrl: "view/nav-main/nav-main.html"
//                  },
//                  "content": {
//                      templateUrl: "view/appList/appList.html"
//                  }
//
//              }
//          })
//          .state('account', {
//              url: "/account",
//              views: {
//                  "nav": {
//                      templateUrl: "view/nav-main/nav-main.html"
//                  },
//                  "content": {
//                      templateUrl: "view/account/account.html"
//                  }
//              }
//          })
//          .state('account.record', {
//              url: "/record",
//              views: {
//                  "content": {
//                      templateUrl: "view/account.record/account.record.html"
//                  }
//
//              }
//          })
//          .state('account.withdraw', {
//              url: "/withdraw",
//              views: {
//                  "content": {
//                      templateUrl: "view/account.withdraw/account.withdraw.html"
//                  }
//
//              }
//          })
//          .state('account.detail', {
//              url: "/detail",
//              views: {
//                  "content": {
//                      templateUrl: "view/account.detail/account.detail.html"
//                  }
//
//              }
//          })
//          .state('account.topay', {
//              url: "/topay",
//              views: {
//                  "content": {
//                      templateUrl: "view/account.topay/account.topay.html"
//                  }
//
//              }
//          })
//          //======== real-name authentication ========
//          .state('authentication', {
//              url: "/authentication",
//              views: {
//                  "nav": {
//                      templateUrl: "view/nav-authentication/nav-authentication.html"
//                  },
//                  "content": {
//                      templateUrl: "view/authentication/authentication.html"
//                  }
//              }
//          })
//          .state('authentication.agreement', {
//              url: "/agreement",
//              views: {
//                  "content": {
//                      templateUrl: "view/authentication.agreement/authentication.agreement.html"
//                  }
//              }
//          })
//          .state('authentication.person', {
//              url: "/person",
//              views: {
//                  "content": {
//                      templateUrl: "view/authentication.person/authentication.person.html"
//                  }
//              }
//          })
//          .state('authentication.company', {
//              url: "/company",
//              views: {
//                  "content": {
//                      templateUrl: "view/authentication.company/authentication.company.html"
//                  }
//              }
//          })
//          .state('authentication.account', {
//              url: "/account",
//              views: {
//                  "content": {
//                      templateUrl: "view/authentication.account/authentication.account.html"
//                  }
//              }
//          })
//          //======== app ========
//          .state('payment', {
//              url: "/payment",
//              views: {
//                  "nav": {
//                      templateUrl: "view/nav-app/nav-app.html"
//                  },
//                  "content": {
//                      templateUrl: "view/payment/payment.html"
//                  }
//              }
//          })
//          .state('appsetting', {
//              url: "/appsetting",
//              views: {
//                  "nav": {
//                      templateUrl: "view/nav-app/nav-app.html"
//                  },
//                  "content": {
//                      templateUrl: "view/appsetting/appsetting.html"
//                  },
//                  "modal": {
//                      templateUrl: "view/noteSimple/noteSimple.html"
//                  }
//              }
//          })
//          .state('appsetting.info', {
//              url: "/info",
//              views: {
//                  "content": {
//                      templateUrl: "view/appsetting.info/appsetting.info.html"
//                  }
//              }
//          })
//          .state('appsetting.channel', {
//              url: "/channel",
//              views: {
//                  "content": {
//                      templateUrl: "view/appsetting.channel/appsetting.channel.html"
//                  }
//              }
//          })
//          .state('appsetting.api', {
//              url: "/api",
//              views: {
//                  "content": {
//                      templateUrl: "view/appsetting.api/appsetting.api.html"
//                  }
//              }
//          })
//          .state('appsetting.canal', {
//              url: "/canal",
//              views: {
//                  "content": {
//                      templateUrl: "view/appsetting.canal/appsetting.canal.html"
//                  },
//                  "modal": {
//                      templateUrl: "view/smsConfirm/smsConfirm.html"
//                  }
//              }
//          })
//          //======== user ========
//          .state('user', {
//              url: "/user",
//              views: {
//                  "nav": {
//                      templateUrl: "view/nav-main/nav-main.html"
//                  },
//                  "content": {
//                      templateUrl: "view/user/user.html"
//                  }
//              }
//          })
//          .state('user.person', {
//              url: "/person",
//              views: {
//                  "content": {
//                      templateUrl: "view/user.person/user.person.html"
//                  },
//                  "modal": {
//                      templateUrl: "view/noteSimple/noteSimple.html"
//                  }
//              }
//          })
//          .state('user.account', {
//              url: "/account",
//              views: {
//                  "content": {
//                      templateUrl: "view/user.account/user.account.html"
//                  },
//                  "modal": {
//                      templateUrl: "view/noteSimple/noteSimple.html"
//                  }
//              }
//          })
//          .state('user.password', {
//              url: "/password",
//              views: {
//                  "content": {
//                      templateUrl: "view/user.password/user.password.html"
//                  },
//                  "modal": {
//                      templateUrl: "view/noteSimple/noteSimple.html"
//                  }
//              }
//          })
//          .state('user.data', {
//              url: "/data",
//              views: {
//                  "content": {
//                      templateUrl: "view/user.data/user.data.html"
//                  },
//                  "modal": {
//                      templateUrl: "view/noteSimple/noteSimple.html"
//                  }
//              }
//          })
//          .state('user.agreement', {
//              url: "/agreement",
//              views: {
//                  "content": {
//                      templateUrl: "view/user.agreement/user.agreement.html"
//                  }
//              }
//          })
//          //======== public ========
//          .state('smsConfirm', {
//              url: "/smsConfirm",
//              views: {
//                  "content": {
//                      templateUrl: "view/smsConfirm/smsConfirm.html"
//                  }
//              }
//          })
//          .state('undeveloped', {
//              url: "/undeveloped",
//              views: {
//                  "nav": {
//                      templateUrl: "view/nav-main/nav-main.html"
//                  },
//                  "content": {
//                      templateUrl: "view/undeveloped/undeveloped.html"
//                  }
//              }
//          })
//  })
;/*!/components/js/factory.js*/
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
;/*!/components/js/directive.js*/
'use strict';
angular.module('directive', [])
    .directive("repeat", [function() {
        return {
            restrict: 'A',
            require: "ngModel",
            link: function(scope, element, attrs, ctrl) {
                if (ctrl) {
                    var otherInput = element.inheritedData("$formController")[attrs.repeat];
                    var repeatValidator = function(value) {
                        var validity = value === otherInput.$viewValue;
                        ctrl.$setValidity("repeat", validity);
                        return validity ? value : undefined;
                    };
                    ctrl.$parsers.push(repeatValidator);
                    ctrl.$formatters.push(repeatValidator);
                    otherInput.$parsers.push(function(value) {
                        ctrl.$setValidity("repeat", value === ctrl.$viewValue);
                        return value;
                    });
                }
            }
        };
    }]);
;/*!/view/nav/nav.ctrl.js*/
/*
 * @require components/js/ctrl.js
 *
 */
'use strict';
angular.module('yhtml5.nav', ['ui.bootstrap', 'ngAnimate', 'ui.router'])
    .controller('yhtml5.nav', function($scope, $http, $uibModal, $log) {
        $scope.items = [
            '极品飞车',
            '极品装备',
            '极品女友'
        ];
        $scope.status = {
            isopen: false
        };
        $scope.toggled = function(open) {
            $log.log('Dropdown is now: ', open);
        };
        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
        $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
        $scope.userVerify = true
        $scope.userCenter = true
        $scope.toggle = function() {
            $scope.userCenter = !$scope.userCenter
        }
        $scope.animationsEnabled = true;
        $scope.open = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'helpCenter.html',
                controller: 'ModalInstanceCtrl',
                size: size
            })
        };
        $scope.toggleAnimation = function() {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    })
    .controller('ModalInstanceCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
;/*!/view/appList/appList.ctrl.js*/
'use strict';
angular.module('yhtml5.appList', ['ui.bootstrap', 'ngAnimate'])
    .controller('yhtml5.appList', function($scope, $http, $uibModal) {
        $scope.animationsEnabled = true;
        $scope.open = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'appList-add.html',
                controller: 'ModalInstanceCtrl',
                size: size
            })
        };
        $scope.toggleAnimation = function() {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    })
    .controller('ModalInstanceCtrl', function($state, $scope, $http, $uibModalInstance, $uibModal, $state) {
        $scope.userAppFormSave = function(size) {
            $scope.userPersonFormEnabled = true;
            $scope.userPersonUpdate = true;
            $scope.userPersonSave = true;
            $uibModalInstance.dismiss('cancel');
            $state.reload('dashboard');
        };
        $scope.cancel = function() {
                $uibModalInstance.dismiss('cancel');
        }
    });
;/*!/view/appsetting/appsetting.ctrl.js*/
'use strict';
angular.module('yhtml5.appsetting', ['ui.bootstrap', 'ngAnimate', 'factory'])
    .controller('yhtml5.appsetting', function($scope, $state, $rootScope, $uibModal, $http, $interval) {
        $scope.appsettingInfoFormEnabled = true
        $scope.appsettingInfoUpdate = true
        $scope.appsettingInfoSave = true
        $scope.appsettingInfoFormTotal = function() {
            $scope.appsettingInfoFormEnabled = !$scope.appsettingInfoFormEnabled
            $scope.appsettingInfoUpdate = false
            $scope.appsettingInfoSave = false
        }
        $scope.animationsEnabled = true;
        $scope.appsettingInfoFormSave = function(size) {
            $scope.appsettingInfoFormEnabled = true
            $scope.appsettingInfoUpdate = true
            $scope.appsettingInfoSave = true
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'noteSimple.html',
                controller: 'appsettingInfoNoteSimpleCtrl',
                size: size
            })
        };
        $scope.appApiInformUrlUpdate = true;
        $scope.appApiInformUrlSave = true;
        $scope.appApiRepayUrlUpdate = true;
        $scope.appApiRepayUrlSave = true;
        $scope.appsettingApiPasswordOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'appsettingApiPassword.html',
                controller: 'appsettingApiPasswordCtrl',
                size: size
            })
        }
        $scope.appsettingApiTestOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'appsettingApiTest.html',
                controller: 'appsettingApiTestCtrl',
                size: size
            })
        };
        $scope.appsettingDeleteOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'appsettingDeleteForm.html',
                controller: 'appsettingDeleteCtrl',
                size: size
            })
        };
        $scope.animationsEnabled = true;
        $scope.appsettingCanalResetOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'appsettingCanalReset.html',
                controller: 'appsettingCanalResetCtrl',
                size: size
            })
        }
        $scope.appsettingCanalCreateOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'appsettingCanalCreate.html',
                controller: 'appsettingCanalCreateCtrl',
                size: size
            })
        }
        $scope.appsettingChannelAgreementOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'appsettingChannelAgreement.html',
                controller: 'appsettingChannelAgreementCtrl',
                size: size
            })
        }
        $scope.appsettingChannelRechanrgecardOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'appsettingChannelRechanrgecard.html',
                controller: 'appsettingChannelRechanrgecardCtrl',
                size: size
            })
        }
        $scope.appsettingChannelPointcardOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'appsettingChannelPointcard.html',
                controller: 'appsettingChannelPointcardCtrl',
                size: size
            })
        };
        $scope.appsettingApiInformUrlOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'appsettingApiInformUrl.html',
                controller: 'appsettingApiInformUrlCtrl',
                size: size
            })
        }
        $scope.appsettingApiRepayUrlOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'appsettingApiRepayUrl.html',
                controller: 'appsettingApiRepayUrlCtrl',
                size: size
            })
        }
        $scope.appsettingInfoChannelOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'appsettingInfoChannel.html',
                controller: 'appsettingInfoChannelCtrl',
                size: size
            })
        }
    })
    .controller('appsettingDeleteCtrl', function($scope, $http, $interval, $uibModalInstance, $uibModal, $state) {
        $scope.appDel = {};
        /** ====================== 获取验证码 ======================= B**/
        $scope.buttonText = "获取验证码";
        $scope.appsettingDeleteSendMSG = function(size) {
            // ========= 倒计时 =========
            $scope.isDisabled = false;
            var second = 60;
            timePromise = undefined;
            timePromise = $interval(function() {
                if (second <= 0) {
                    $interval.cancel(timePromise);
                    timePromise = undefined;
                    second = 60;
                    $scope.buttonText = "重发验证码";
                    $scope.isDisabled = false;
                } else {
                    $scope.buttonText = second + "秒后可重发";
                    $scope.isDisabled = true;
                    second--;
                }
            }, 1000, 0);
        }
        $scope.appDel = {};
        $scope.appsettingDeleteConfirm = function(size) {
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/app/delete.htm",
                params: {
                    id: 158,
                    securityCode: $scope.appDel.password,
                    smsCode: $scope.appDel.authCode
                }
            }).success(function(res) {
                console.log("删除成功");
                $uibModalInstance.dismiss('cancel');
                $state.reload('dashboard');
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    backdrop: 'static',
                    templateUrl: 'noteSimple.html',
                    controller: 'appsettingInfoNoteSimpleCtrl',
                    size: size
                })
            }).error(function(res) {
                console.log("保存失败")
            })
        };
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('appsettingApiInformUrlCtrl', function($scope, $http, $uibModalInstance, $uibModal) {
        $scope.appsettingApiInformUrlSave = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'noteSimple.html',
                controller: 'appsettingInfoNoteSimpleCtrl',
                size: size
            })
        }
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('appsettingApiRepayUrlCtrl', function($scope, $http, $uibModalInstance, $uibModal) {
        $scope.appsettingApiRepayUrlSave = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'noteSimple.html',
                controller: 'appsettingInfoNoteSimpleCtrl',
                size: size
            })
        }
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('appsettingApiPasswordCtrl', function($scope, $http, $uibModalInstance, $uibModal) {
        $http({
            method: "post",
            url: "http://admin.jubaobar.com/front/appsetting/api/pk/info.htm",
            params: {}
        }).success(function(response) {
            if (response.result == '0') {
                $scope.staticPassword = response.data.staticPassword;
            }
        });
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }

        $scope.appsettingApiPasswordDownload = function(type) {
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/appsetting/api/pk/download.htm",
                params: {
                    keyType: type
                }
            }).success(function(data, status, headers) {

            });
        }
    })
    .controller('appsettingApiTestCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('appsettingCanalResetCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('appsettingCanalCreateCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('appsettingChannelAgreementCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('appsettingChannelRechanrgecardCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('appsettingChannelPointcardCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('appsettingInfoNoteSimpleCtrl', function($scope, $uibModalInstance) {
        $scope.text = "资料修改成功，信息正在审核中，请耐心等候！"
        $scope.isInfo = true
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('appsettingInfoChannelCtrl', function($scope, $uibModalInstance, Channels) {
        $scope.data = Channels;
        $scope.channels = $scope.data.channels;
        console.log("data.channels : ", $scope.channels);
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
;/*!/view/authentication/authentication.ctrl.js*/
'use strict';
angular.module('yhtml5.authentication', ['ui.bootstrap', 'ngAnimate'])
    .controller('yhtml5.authentication', function($scope, $uibModal, $state, $http, $interval, $timeout) {
        $scope.userAccount = {};
        $scope.isStep1 = true;
        $scope.toStep1 = function() {
            $scope.isStep1 = true
            $scope.isStep2 = false
            $scope.isStep3 = false
        };
        // ========= 倒计时 =========
        var second = 6;
        $scope.num = "(" + second + ")";
        $scope.isDisabled = true;
        //      timePromise = undefined;
        timePromise = $interval(function() {
            if (second <= 0) {
                $interval.cancel(timePromise);
                timePromise = undefined;
                $scope.num = "";
                $scope.isDisabled = false;
            } else {
                $scope.num = "(" + second + ")";
                $scope.isDisabled = true;
                second--;
            }
        }, 1000, 0);
        $scope.toStep2 = function() {
            $scope.isStep1 = true
            $scope.isStep2 = true
            $scope.isStep3 = false
        }
        $scope.toStep3 = function() {
            $scope.isStep1 = true
            $scope.isStep2 = true
            $scope.isStep3 = true
        }
        $scope.animationsEnabled = true;
        $scope.authenticationAccountConfirmOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'authenticationAccountConfirm.html',
                controller: 'authenticationAccountConfirmCtrl',
                size: size
            })
        };
    })
    .controller('authenticationAccountConfirmCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })