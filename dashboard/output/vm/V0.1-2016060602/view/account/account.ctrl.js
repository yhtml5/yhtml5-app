'use strict';

angular.module('yhtml5.account', ['ui.bootstrap', 'ngAnimate', 'factory'])
    .controller('yhtml5.account', function($scope, $http, $uibModal, $timeout, $log, Data) {
        /** =======================  银燕 账户结算统计 Start ======================== **/
        $scope.pageChanged = function() {
            $log.log('Page changed to: ' + $scope.currentPage);
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/cashFlow/queryPayTypeAndTime.htm",
                params: {
                    pageNo: $scope.currentPage
                }
            }).success(function(response) {
                if (response.result == 0) {
                    $scope.accountmanage = response.data.entityList;
                    $scope.totalItems = response.data.totalRecords;
                    $scope.currentPage = response.data.currentPage;
                    $scope.maxSize = 5;
                }
            });
        };
        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };
        /** =======================  银燕 历史记录 分页控件 End   ======================== **/

        /** =======================  writed by 白豆腐  账户明细 | Add 银燕 分页控件 Start ======================== */
        $scope.detail = {};
        $scope.accountSelect = function(size) {
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/accounting/accountdetails.htm",
                params: {
                    pageNo: $scope.currentPage,
                    startTime: $scope.startTime,
                    endTime: $scope.endTime,
                    transNo: $scope.transNo,
                    cashDirection: $scope.cashDirection,
                    changeType: $scope.changeType
                }
            }).success(function(response) {
                $scope.accountdetail = response.data.entityList;
                $scope.detail.totalItems = response.data.totalRecords;
                $scope.detail.currentPage = response.data.currentPage;
                $scope.detail.maxSize = 5;
            });
        }

        $scope.detail_pageChanged = function() {
            $log.log('Page changed to: ' + $scope.detail.currentPage);
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/accounting/accountdetails.htm",
                params: {
                    pageNo: $scope.detail.currentPage,
                    startTime: $scope.detail.startTime,
                    endTime: $scope.detail.endTime,
                    transNo: $scope.detail.transNo,
                    cashDirection: $scope.detail.cashDirection,
                    changeType: $scope.detail.changeType
                }
            }).success(function(response) {
                if (response.result == 0) {
                    $scope.accountdetail = response.data.entityList;
                    $scope.detail.totalItems = response.data.totalRecords;
                    $scope.detail.currentPage = response.data.currentPage;
                    $scope.detail.maxSize = 5;
                }
            });
        };
        /** =======================  writed by 白豆腐  账户明细 | Add 银燕 分页控件 End   ======================== */

        /** writed by 白豆腐  账户明细导出 */
        $scope.accountExportExcel = function(size) {
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/accounting/exportaccountdetails.htm",
                params: {
                    startTime: $scope.startTime,
                    endTime: $scope.endTime,
                    transNo: $scope.transNo,
                    cashDirection: $scope.cashDirection,
                    changeType: $scope.changeType
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
        }
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
            /** writed by yangjb 代付信息录入 */
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