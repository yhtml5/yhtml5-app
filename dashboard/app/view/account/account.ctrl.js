'use strict';
/*
 * @require ../../app.js
 *
 */
angular.module('app.account', ['ui.bootstrap', 'ngAnimate'])
	.controller('app.account', function($scope, $http, $uibModal) {
		//get json
		$http.get("../../server/account.record.json")
			.success(function(response) {
				$scope.accountRecord = response.accountRecord //$scope.names 为一个数组
			})
		$http.get("../../server/account.detail.json")
			.success(function(response) {
				$scope.accountDetail = response.accountDetail //$scope.names 为一个数组
			})
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