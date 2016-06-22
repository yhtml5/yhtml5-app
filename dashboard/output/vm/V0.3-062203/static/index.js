;/*!/server/author.js*/
/*=============================================================================
 * Author:Kyle|张大漾
 * Website:http://yhtml5.com
 * Gihub:https://github.com/yhtml5
 * Description: A Website disgned by AngularJS Boostrap and NodeJS
 *              It requires AngularJS 1.5.x or higher and it has been tested
 *              Do something awesome and have fun !
 *=============================================================================*/

;/*!/server/console.js*/
console.log("%c 凡伟科技 %c Copyright \xa9 2010-%s", 'font-family: "microsoft yahei", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;', "font-size:12px;color:#999999;", (new Date).getFullYear())
//console.log("%c " + "温馨提示：请不要调皮地在此粘贴执行任何内容，这可能会导致您的账户受到攻击，给您带来损失 ！^_^", "color:#333;font-size:16px;");
console.log("%c " + "We work hard to contribute our work back to the web, mobile, big data, & new technology.", "color:#333;font-size:16px;margin:4px;");
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

;/*!/components/js/factory.js*/
'use strict';
angular.module('factory', [])
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
        return  userInfo
    });

;/*!/components/js/factory-channels.js*/
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
;/*!/components/js/vm.js*/
$(function() {
    $(".form_datetime").datetimepicker({
        language: 'zh-CN',
        format: "dd MM yyyy",
        autoclose: true,
        todayBtn: true,
        inline: true
    });
    $('.dropdown-menu li').click(function() {
        $('.j-pay-btn,.j-settlement,.j-channel,.j-settlement').text($(this).text());
    });
})
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
                backdrop: 'static',
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
                backdrop: 'static',
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
         $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }

        $scope.appsettingApiPasswordDownload = function(type) {

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
        console.log('Channels:',Channels)
        $scope.channels = Channels;
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