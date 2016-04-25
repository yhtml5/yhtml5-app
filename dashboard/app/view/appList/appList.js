'use strict';
/*
 * @require ../../app.js
 *
 */
angular.module('app.appList', ['ui.bootstrap', 'ngAnimate'])
	.controller('app.appList', function($scope, $http, $uibModal) {
		//appList add modal
		//$scope.appTypes = ['PC', 'WAP', 'Android', 'IOS'];
		//$scope.appTypeSelect = $scope.appTypes[0];
		//modal
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
		//get json
		$http.get("../../server/init.json")
			.success(function(response) {
				$scope.userApps = response.userApps //$scope.names 为一个数组
			})
	})
	.controller('ModalInstanceCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	});