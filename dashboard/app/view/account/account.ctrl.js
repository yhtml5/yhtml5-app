'use strict';
/*
 * @require ../../app.js
 *
 */
angular.module('app.account', [])
	.controller('app.account', function($scope, $http) {
		//get json
		$http.get("../../server/account.record.json")
			.success(function(response) {
				$scope.accountRecord = response.accountRecord //$scope.names 为一个数组
			})
		$http.get("../../server/account.detail.json")
			.success(function(response) {
				$scope.accountDetail = response.accountDetail //$scope.names 为一个数组
			})
	})