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