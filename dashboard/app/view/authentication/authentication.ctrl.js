'use strict';
/*
 * @require ../../app.js
 *
 */
angular.module('app.authentication', ['ui.bootstrap', 'ngAnimate'])
	.controller('app.authentication', function($scope, $http, $uibModal, $state) {
		$scope.isStep1 = true
		$scope.toStep1 = function() {
			$scope.isStep1 = true
			$scope.isStep2 = false
			$scope.isStep3 = false
		}
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

	})