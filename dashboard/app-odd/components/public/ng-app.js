/*
 *@require jq-index.js
 *@require /static/lib/angular/angular.js
 *@require /static/lib/angular/ui-bootstrap-tpls.js
 *@require /static/lib/angular/angular-animate.js
 *
 */
angular.module('app', ['ui.bootstrap', 'ngAnimate'])
	.controller('ctrl', function($scope, $http) {
		$scope.tabs = [{
			title: 'Dynamic Title 1',
			content: 'Dynamic content 1'
		}, {
			title: 'Dynamic Title 2',
			content: 'Dynamic content 2',
			disabled: true
		}];
		$scope.alertMe = function() {
			setTimeout(function() {
				$window.alert('You\'ve selected the alert tab!');
			});
		};
		$scope.model = {
			name: 'Tabs'
		};
		//appShowmodule
		$scope.appTypes = ['PC', 'WAP', 'Android', 'IOS'];
		$scope.appTypeSelect = $scope.appTypes[0];
		//userServer
		$scope.userVerify = true
		$scope.userCenter = true
		$scope.toggle = function() {
				$scope.userCenter = !$scope.userCenter
			}
			//get json
		$http.get("/server/init.json")
			.success(function(response) {
				$scope.userApps = response.userApps //$scope.names 为一个数组
			})
	})