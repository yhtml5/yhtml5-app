'use strict';
angular.module('yhtml5.appsetting', ['ui.bootstrap', 'ngAnimate'])
	.controller('yhtml5.appsetting', function($scope, $uibModal, $http) {
		/** Writed by 银燕 应用已开通支付通道查询 */
		$http({
			method: "get",
			url: "http://admin.jubaobar.com/front/appsetting/channel/app/find.htm",
			params: {
				appId: "1482479002"
			}
		}).success(function(response) {
			$scope.appsetting = response.data;
		})
		$http.get('http://admin.jubaobar.com/front/user/person/info.htm')
			.success(function(response) {
				console.log(response);
				$scope.userInfo = response.data;
			})
		$scope.appsettingInfoFormEnabled = true
		$scope.appsettingInfoUpdate = true
		$scope.appsettingInfoSave = true
		$scope.appsettingInfoFormTotal = function() {
			$scope.appsettingInfoFormEnabled = !$scope.appsettingInfoFormEnabled
			$scope.appsettingInfoUpdate = false
			$scope.appsettingInfoSave = false
		}
		$scope.animationsEnabled = true;
		$scope.appsettingInfoFormSave = function(size) {
			$scope.appsettingInfoFormEnabled = true
			$scope.appsettingInfoUpdate = true
			$scope.appsettingInfoSave = true
			$http({
				method: "post",
				url: "http://admin.jubaobar.com/front/authentication/businessInformation.htm",
				params: {
					companyType: $scope.userInfo.companyType,
					subCompanyType: $scope.userInfo.subCompanyType,
					userName: $scope.userInfo.userName,
					businessType: $scope.userInfo.businessType,
					companyName: $scope.userInfo.companyName,
					companyAddress: $scope.userInfo.companyAddress,
					licenseNo: $scope.userInfo.licenseNo,
					contactName: $scope.userInfo.contactName,
					contactTelephone: $scope.userInfo.contactTelephone,
					contactQQ: $scope.userInfo.contactQQ,
					contactProvId: $scope.userInfo.contactProvId,
					contactCityId: $scope.userInfo.contactCityId,
					contactAddress: $scope.userInfo.contactAddress,
					idCard: $scope.userInfo.idCard,
					idCardPic: $scope.userInfo.idCardPic,
					idCardFrontPic: $scope.userInfo.idCardFrontPic,
					idCardReversePic: $scope.userInfo.idCardReversePic,
					licensePic: $scope.userInfo.licensePic,
					taxCertPic: $scope.userInfo.taxCertPic,
					orgCodeCertPic: $scope.userInfo.orgCodeCertPic,
					openPermitPic: $scope.userInfo.openPermitPic,
					otherTypePic: $scope.userInfo.otherTypePic
				}
			}).success(function(res) {
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
				controller: 'appsettingInfoNoteSimpleCtrl',
				size: size
			})
		}
		$scope.animationsEnabled = true;
		$scope.appsettingCanalResetOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingCanalReset.html',
				controller: 'appsettingCanalResetCtrl',
				size: size
			})
		}
		$scope.appsettingCanalCreateOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingCanalCreate.html',
				controller: 'appsettingCanalCreateCtrl',
				size: size
			})
		}
		$scope.appsettingChannelAgreementOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingChannelAgreement.html',
				controller: 'appsettingChannelAgreementCtrl',
				size: size
			})
		}
		$scope.appsettingChannelRechanrgecardOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingChannelRechanrgecard.html',
				controller: 'appsettingChannelRechanrgecardCtrl',
				size: size
			})
		}
		$scope.appsettingChannelPointcardOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingChannelPointcard.html',
				controller: 'appsettingChannelPointcardCtrl',
				size: size
			})
		}
	})
	.controller('appsettingCanalResetCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})
	.controller('appsettingCanalCreateCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})
	.controller('appsettingChannelAgreementCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})
	.controller('appsettingChannelRechanrgecardCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})
	.controller('appsettingChannelPointcardCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})
	.controller('appsettingInfoNoteSimpleCtrl', function($scope, $uibModalInstance) {
		$scope.text = "资料修改成功，信息正在审核中，请耐心等候！"
		$scope.isInfo = true
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})