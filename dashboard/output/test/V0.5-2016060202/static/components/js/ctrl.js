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