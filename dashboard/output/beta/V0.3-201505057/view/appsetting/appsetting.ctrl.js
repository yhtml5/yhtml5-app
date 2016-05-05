'use strict';
/*
 * @require app.js
 *
 */
angular.module('yhtml5.appsetting', ['ui.bootstrap', 'ngAnimate'])
	.controller('yhtml5.appsetting', function($scope, $uibModal) {
		$scope.animationsEnabled = true;
		$scope.appsettingCanalResetOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingCanalReset.html',
				controller: 'appsettingCanalResetCtrl',
				size: size
			})
		}
		$scope.appsettingCanalCreateOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingCanalCreate.html',
				controller: 'appsettingCanalCreateCtrl',
				size: size
			})
		}
		$scope.appsettingChannelAgreementOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingChannelAgreement.html',
				controller: 'appsettingChannelAgreementCtrl',
				size: size
			})
		}
		$scope.appsettingChannelRechanrgecardOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingChannelRechanrgecard.html',
				controller: 'appsettingChannelRechanrgecardCtrl',
				size: size
			})
		}
		$scope.appsettingChannelPointcardOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingChannelPointcard.html',
				controller: 'appsettingChannelPointcardCtrl',
				size: size
			})
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