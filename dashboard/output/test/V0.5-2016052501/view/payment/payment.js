'use strict';
angular.module('yhtml5.payment', ['ui.bootstrap', 'ngAnimate', 'ui.router']) //可以不加ui模块？
    .controller('yhtml5.payment', function($scope, $http, $uibModal) {
        $http.get('http://admin.jubaobar.com/front/payment/top.htm')
            .success(function(response) {
                console.log(response.data.appTradeInfoList);
                $scope.userApps = response.data.appTradeInfoList;
            })

    })