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
                console.log("applist :", response.data);
                $scope.userApps = response.data.appTradeInfoList;
            })
    })
    .controller('ModalInstanceCtrl', function($state,$scope, $http, $uibModalInstance, $uibModal, $state) {
    	/** ============================== Writed By 银燕 创建应用 Start ==========================*/
        $scope.data = {};
        $scope.userAppFormSave = function(size) {
            $scope.userPersonFormEnabled = true;
            $scope.userPersonUpdate = true;
            $scope.userPersonSave = true;
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/appbanage/save.htm",
                params: {
                    appType: $scope.appTypeSelect,
                    appName: $scope.data.appName,
                    appUrl: $scope.data.appUrl,
                    signature: $scope.data.signature,
                    appPackage: $scope.data.appPackage,
                    bundleId: $scope.data.bundleId,
                    webICP: $scope.data.webICP
                }
            }).success(function(res) {
              if (res.result = '0') {
                    console.log("应用信息保存成功");
                    $uibModalInstance.dismiss('cancel');
                    $state.reload('dashboard');
              }
            }).error(function(res) {
                console.log("保存失败")
            })
        };
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
        /** ============================== Writed By 银燕 创建应用 End ==========================*/
    });