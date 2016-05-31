'use strict';
angular.module('yhtml5.payment', ['ui.bootstrap', 'ngAnimate', 'ui.router']) //可以不加ui模块？
	.controller('yhtml5.payment', function($scope, $http, $uibModal) {
		/** ======================= 支付订单 银燕 分页控件 Start ======================== **/
		$scope.trade ={};
		$http({
			method: "post",
			url: "http://admin.jubaobar.com/front/payment/index.htm"
		}).success(function(response) {
			if (response.result == 0) {
				$scope.userTrades = response.data.page;
				$scope.trade.totalItems = response.data.page.totalRecords;
				$scope.trade.currentPage = response.data.page.currentPage;
				$scope.trade.maxSize = 5;
            }
		});
		$scope.trade_pageChanged = function() {
			$log.log('Page changed to: ' + $scope.trade.currentPage);
			$http({
				method: "post",
				url: "http://admin.jubaobar.com/front/payment/query.htm",
				params: {
					pageNo: $scope.trade.currentPage
				}
			}).success(function(response) {
				if (response.result == 0) {
					$scope.userTrades = response.data.page;
					$scope.trade.totalItems = response.data.page.totalRecords;
					$scope.trade.currentPage = response.data.page.currentPage;
					$scope.trade.maxSize = 5;
	            }
			});
		};
		/** ======================= 支付订单 银燕 分页控件 End   ======================== **/
		
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