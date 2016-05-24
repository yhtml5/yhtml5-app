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
    .controller('ModalInstanceCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });