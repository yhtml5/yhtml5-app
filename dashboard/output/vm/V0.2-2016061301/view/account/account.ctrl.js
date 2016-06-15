'use strict';
angular.module('yhtml5.account', ['ui.bootstrap', 'ngAnimate', 'factory'])
    .controller('yhtml5.account', function($scope, $http, $uibModal, $timeout, $log, Data) {
        $scope.detail = {};
        $http.get("../../server/account.detail.json")
            .success(function(response) {
                $scope.accountDetail = response.accountDetail //$scope.names 为一个数组
            });
        $scope.animationsEnabled = true;
        $scope.toggleAnimation = function() {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        }
        $scope.accountDetailMoreOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'accountDetailMore.html',
                controller: 'accountDetailMoreCtrl',
                size: size
            })
        };
        $scope.accountTopayBatchOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'accountTopayBatch.html',
                controller: 'accountTopayBatchCtrl',
                size: size
            })
        };
        $scope.accountTopayConfirmOpen = function(size) {
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/cashFlow/payForAnotherInformation.htm",
                params: {
                    accountName: $scope.accountName,
                    accountNum: $scope.accountNum,
                    bankId: $scope.bank.id,
                    bankBranch: $scope.bankBranch,
                    bankProvId: $scope.bankProvId,
                    bankCityId: $scope.bankCityId,
                    accountType: $scope.accountType,
                    remark: $scope.remark,
                    withdrawAmount: $scope.withdrawAmount
                }
            }).success(function(res) {
                $scope.savingBase = false;
                if (res.resultCode == 0) {
                    $scope.app.proxy_base_objectid = res.objectid;
                    $scope.view.state = $scope.view.stateMachine["fullfill_base"];
                    $anchorScroll();
                }
            });
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'accountTopayConfirm.html',
                controller: 'accountTopayConfirmCtrl',
                size: size
            })
        };
        $scope.accountTopayDeleteOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'accountTopayDelete.html',
                controller: 'accountTopayDeleteCtrl',
                size: size
            })
        };
        $scope.realNameRemindOpen = function(size) {
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/cashFlow/withdrawRecord.htm",
                params: {
                    payAmount: $scope.payAmount
                }
            }).success(function(res) {
                $scope.savingBase = false;
                if (res.resultCode == 0) {
                    $scope.app.proxy_base_objectid = res.objectid;
                    $scope.view.state = $scope.view.stateMachine["fullfill_base"];
                    $anchorScroll();
                }
            });
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'realNameRemind.html',
                controller: 'realNameRemindCtrl',
                size: size
            })
        };

    })
    .controller('accountDetailMoreCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    })
    .controller('accountTopayBatchCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    })
    .controller('accountTopayConfirmCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    })
    .controller('accountTopayDeleteCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    })
    .controller('realNameRemindCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    })