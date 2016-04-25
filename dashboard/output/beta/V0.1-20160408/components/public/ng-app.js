/*
 *@require components/public/jq-index.js
 *@require static/lib/angular/angular.min.js
 *
 */
angular.module('app', [])
	.controller('ctrl', function($scope, $http) {
		$http.get("../server/init.json")
			.success(function(response) {
				$scope.userApps = response.userApps //$scope.names 为一个数组
			})
	})