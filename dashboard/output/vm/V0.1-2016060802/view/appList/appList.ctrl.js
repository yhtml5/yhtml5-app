'use strict';
angular.module('yhtml5.appList', ['ui.bootstrap', 'ngAnimate', 'factory'])
    .controller('yhtml5.appList', function($scope, $rootScope, $http, $uibModal, Data) {
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
        /** ============================== Writed By 银燕 创建应用 Start ==========================*/
        $scope.data = {};
        $scope.userAppFormSave = function(size) {

            $scope.userPersonFormEnabled = true;
            $scope.userPersonUpdate = true;
            $scope.userPersonSave = true;
            console.log("应用信息保存成功");
            $uibModalInstance.dismiss('cancel');
            $state.reload('dashboard');
        };
        $scope.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            }
            /** ============================== Writed By 银燕 创建应用 End ==========================*/
    });