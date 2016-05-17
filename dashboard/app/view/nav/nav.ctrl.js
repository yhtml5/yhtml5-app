/*
 * @require ../../components/js/ctrl.js
 *
 */
'use strict';
angular.module('yhtml5.nav', ['ui.bootstrap', 'ngAnimate', 'ui.router']) //可以不加ui模块？
	.controller('yhtml5.nav', function($scope, $http, $uibModal) {
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