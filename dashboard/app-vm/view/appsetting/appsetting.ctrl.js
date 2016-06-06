'use strict';
angular.module('yhtml5.appsetting', ['ui.bootstrap', 'ngAnimate', 'factory'])
    .controller('yhtml5.appsetting', function($scope, $state, $rootScope, $uibModal, $http, $interval) {
        $scope.rootUserApp = $rootScope.rootUserApp;
        console.log("rootUserApp", $rootScope.rootUserApp);
        // If freshen browser,I'll go to dashboard
        $scope.goToApplist = function() {
            if ($scope.rootUserApp == undefined) {
                $state.go('dashboard');
                console.log("I'll go to index")
            }
        };
        $scope.goToApplist()
        $http({
            method: "get",
            url: "http://admin.jubaobar.com/front/appsetting/channel/app/find.htm",
            params: {
                appId: "1482479002"
            }
        }).success(function(response) {
            $scope.appsetting = response.data;
        });
        /** =============================== 银燕 应用信息 =============================== B**/
        $http({
            method: "post",
            url: "http://admin.jubaobar.com/front/appemanage/appdetatls.htm",
            params: {
                id: 1
            }
        }).success(function(response) {
            $scope.appInfo = response.data;
        });
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
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/appemanage/editappdetatls.htm",
                params: {
                    id: 1,
                    appType: $scope.appInfo.appType,
                    appName: $scope.appInfo.appName,
                    appUrl: $scope.appInfo.appUrl,
                    signature: $scope.appInfo.signature,
                    appPackage: $scope.appInfo.appPackage,
                    bundleId: $scope.appInfo.bundleId,
                    webIcp: $scope.appInfo.webIcp
                }
            }).success(function(res) {
                $scope.savingBase = false;
                if (res.resultCode == 0) {
                    $scope.app.proxy_base_objectid = res.objectid;
                    $scope.view.state = $scope.view.stateMachine["fullfill_base"];
                    $anchorScroll();
                }
            })
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                backdrop: 'static',
                templateUrl: 'noteSimple.html',
                controller: 'appsettingInfoNoteSimpleCtrl',
                size: size
            })
        };
        /** =============================== 银燕 技术对接 =============================== B**/
        $scope.appApiInformUrlUpdate = true;
        $scope.appApiInformUrlSave = true;
        $scope.appApiRepayUrlUpdate = true;
        $scope.appApiRepayUrlSave = true;
        $http({
            method: "post",
            url: "http://admin.jubaobar.com/front/appsetting/api/info.htm",
            params: {
                id: 31470
            }
        }).success(function(response) {
            if (response.result == '0') {
                $scope.appApi = response.data;
                if ($scope.appApi.callBackURL == '' || $scope.appApi.callBackURL == null) {
                    $scope.appApiInformUrlUpdate = false;
                    $scope.appApiInformUrlSave = true;
                } else {
                    $scope.appApiInformUrlUpdate = true;
                    $scope.appApiInformUrlSave = false;
                }
                if ($scope.appApi.repeatPayURL == '' || $scope.appApi.repeatPayURL == null) {
                    $scope.appApiRepayUrlUpdate = false;
                    $scope.appApiRepayUrlSave = true;
                } else {
                    $scope.appApiRepayUrlUpdate = true;
                    $scope.appApiRepayUrlSave = false;
                }
            }
        });
        /** =============================== 银燕 技术对接 =============================== E**/
        // ========== #appsetting/api ==========
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
            }
            /** =============================== 银燕 应用信息 =============================== E**/
            /** =============================== 银燕 删除应用 =============================== B**/
        $scope.appsettingDeleteOpen = function(size) {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    backdrop: 'static',
                    templateUrl: 'appsettingDeleteForm.html',
                    controller: 'appsettingDeleteCtrl',
                    size: size
                })
            }
            /** =============================== 银燕 删除应用 =============================== E**/
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
        /** Writed by 银燕 应用通知地址我 */
        $scope.appsettingApiInformUrlOpen = function(size) {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    backdrop: 'static',
                    templateUrl: 'appsettingApiInformUrl.html',
                    controller: 'appsettingApiInformUrlCtrl',
                    size: size
                })
            }
            /** Writed by 银燕 重新支付地址 */
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
    /** Writed by 银燕 删除应用 */
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
                $http({
                    method: "post",
                    url: "http://admin.jubaobar.com/front/common/getSmsCode.htm",
                    params: {
                        smsChannel: 17
                    }
                }).success(function(response) {
                    if (res.result == 0) {
                        $scope.appDel = response.data;
                    }
                });
            }
            /** ====================== 获取验证码 ======================= E**/
            /** ======================= 删除应用 ======================= B**/
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
            }
            /** ======================= 删除应用 ======================= E**/
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    /** Writed by 银燕 应用通知地址 */
    .controller('appsettingApiInformUrlCtrl', function($scope, $http, $uibModalInstance, $uibModal) {
        $scope.appsettingApiInformUrlSave = function(size) {
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/appsetting/api/informURL/save.htm",
                params: {
                    callbackurl: $scope.callbackurl,
                    returnurl: $scope.returnurl
                }
            }).success(function(res) {
                console.log("保存成功");
                $uibModalInstance.dismiss('cancel');
            }).error(function(res) {
                console.log("保存失败")
            })
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
    /** Writed by 银燕 重新支付地址 */
    .controller('appsettingApiRepayUrlCtrl', function($scope, $http, $uibModalInstance, $uibModal) {
        $scope.appsettingApiRepayUrlSave = function(size) {
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/appsetting/api/rePayURL/save.htm",
                params: {
                    payurl: $scope.payurl
                }
            }).success(function(res) {
                console.log("保存成功");
                $uibModalInstance.dismiss('cancel');
            }).error(function(res) {
                console.log("保存失败")
            })
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
    // ========= #appsetting/api ==========
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
    .controller('appsettingInfoChannelCtrl', function($scope, $uibModalInstance, Data) {
        $scope.data = Data;
        console.log("factory data : ", Data);
        $scope.channels = $scope.data.channels;
        console.log("data.channels : ", $scope.channels);
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })