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