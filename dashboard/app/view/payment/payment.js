'use strict';
angular.module('yhtml5.payment', ['ui.bootstrap', 'ngAnimate', 'ui.router']) //可以不加ui模块？
	.controller('yhtml5.payment', function($scope, $http, $uibModal) {
		$http.get('http://admin.jubaobar.com/front/payment/index.htm')
			.success(function(response) {
				console.log(response.data.appTradeInfoList);
				$scope.userTrades = response.data.page;
			})
			/** Writed By 银燕 支付订单导出功能 */
		$scope.paymentExportExcel = function(size) {
			$http({
				method: "post",
				url: "http://admin.jubaobar.com/front/payment/export.htm",
				params: {
					topQueryField: $scope.topQueryField,
					topQueryParam: $scope.topQueryParam,
					fromDate: $scope.fromDate,
					toDate: $scope.toDate,
					payState: $scope.payState,
					payType: $scope.payType
				}
			}).success(function(res) {
				$scope.savingBase = false;
				if (res.resultCode == 0) {
					$scope.app.proxy_base_objectid = res.objectid;
					$scope.view.state = $scope.view.stateMachine["fullfill_base"];
					$anchorScroll();
				}
			});
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'accountTopayConfirm.html',
				controller: 'accountTopayConfirmCtrl',
				size: size
			})
		}
	});