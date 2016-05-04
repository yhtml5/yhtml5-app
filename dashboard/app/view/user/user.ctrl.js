'use strict';
/*
 * @require ../../app.js
 *
 */
angular.module('yhtml5.user', ['ui.bootstrap', 'ngAnimate'])
	.controller('yhtml5.user', function($scope, $uibModal) {
		$scope.userPersonFormEnabled = true
		$scope.userPersonUpdate = true
		$scope.userPersonSave = true
		$scope.userPersonFormTotal = function() {
			$scope.userPersonFormEnabled = !$scope.userPersonFormEnabled
			$scope.userPersonUpdate = false
			$scope.userPersonSave = false
		}
		$scope.animationsEnabled = true;
		$scope.userPersonFormSave = function(size) {
			$scope.userPersonFormEnabled = true
			$scope.userPersonUpdate = true
			$scope.userPersonSave = true
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'noteSimple.html',
				controller: 'userPersonNoteSimpleCtrl',
				size: size
			})
		}
	})
	.controller('userPersonNoteSimpleCtrl', function($scope, $uibModalInstance) {
		$scope.text = "资料修改成功，信息正在审核中，请耐心等候！"
		$scope.isInfo = true
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})