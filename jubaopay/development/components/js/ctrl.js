'use strict';

angular.module('controllers', ['ui.bootstrap', 'ngAnimate'])
    .controller('controllers', function($scope, $uibModal) {
        $scope.downloadRecord = [{
            "sdkName": "JAVA包",
            "sdkNote": "（PC支付）",
            "sdkClass": "icon-java"
        }, {
            "sdkName": ".NET包",
            "sdkNote": "（PC支付）",
            "sdkClass": "icon-windows"
        }, {
            "sdkName": "PHP包",
            "sdkNote": "（PC支付）",
            "sdkClass": "icon-php"
        }, {
            "sdkName": "COCS2D",
            "sdkNote": "（SDK开发包）",
            "sdkClass": "icon-weibiaoti4zhuanhuan"
        }, {
            "sdkName": "IOS包",
            "sdkNote": "（SDK开发包）",
            "sdkClass": "icon-ios"
        }, {
            "sdkName": "商户文档",
            "sdkNote": "下载接入文档",
            "sdkClass": "icon-iconanzhuo"
        }]
    })