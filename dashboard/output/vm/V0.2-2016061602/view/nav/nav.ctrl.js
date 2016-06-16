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