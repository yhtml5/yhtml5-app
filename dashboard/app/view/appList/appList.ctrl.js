'use strict';
angular.module('yhtml5.appList', ['ui.bootstrap', 'ngAnimate'])
	.controller('yhtml5.appList', function($scope, $http, $uibModal) {
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
		//      var localURL = __uri('../../server/init2.json');
		//      var domainURL = 'http://admin.jubaobar.com/front/homePage/console.htm?callback=JSON_CALLBACK';
		//      $http.jsonp('http://admin.jubaobar.com/front/homePage/console.htm?callback=JSON_CALLBACK')
		$http.get('http://admin.jubaobar.com/front/homePage/console.htm')
			.success(function(response) {
				console.log(response.data);
				$scope.userApps = response.data.appTradeInfoList;
			})
	})
	.controller('ModalInstanceCtrl', function($scope, $http, $uibModalInstance, $uibModal) {
		/** ============================== Writed By 银燕 创建应用 Start ==========================*/
		$scope.data = {};
		$scope.userAppFormSave = function(size) {
			$scope.userPersonFormEnabled = true
			$scope.userPersonUpdate = true
			$scope.userPersonSave = true;
			$http({
				method: "post",
				url: "http://admin.jubaobar.com/front/appbanage/save.htm",
				params: {
					appId: "test123456789",
					partnerId: "15111830332155681475",
					appType: $scope.data.appType,
					appName: $scope.data.appName,
					appUrl: $scope.data.appUrl,
					signature: $scope.data.signature,
					appPackage: $scope.data.appPackage,
					bundleId: $scope.data.bundleId,
					webICP: $scope.data.webICP
				}
			}).success(function(res) {
				console.log("hello2")
				$scope.savingBase = false;
				if (res.resultCode == 0) {
					$scope.app.proxy_base_objectid = res.objectid;
					$scope.view.state = $scope.view.stateMachine["fullfill_base"];
					$anchorScroll();
				}
			})
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'noteSimple.html',
				controller: 'userAccountNoteSimpleCtrl',
				size: size
			})
		};
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	});