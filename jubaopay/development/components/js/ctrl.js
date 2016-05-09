'use strict';

angular.module('controllers', ['ui.bootstrap', 'ngAnimate'])
    .controller('controllers', function($scope, $uibModal) {
        $scope.downloadRecord = [{
            "sdkName": "JAVA包",
            "sdkNote": "（PC支付）",
            "sdkClass": "icon-iconanzhuo"
        }, {
            "sdkName": ".NET包",
            "sdkNote": "（PC支付）",
            "sdkClass": "icon-iconanzhuo"
        }, {
            "sdkName": "PHP包",
            "sdkNote": "（PC支付）",
            "sdkClass": "icon-iconanzhuo"
        }, {
            "sdkName": "COCS2D包",
            "sdkNote": "（SDK开发包）",
            "sdkClass": "icon-iconanzhuo"
        }, {
            "sdkName": "IOS包",
            "sdkNote": "（SDK开发包）",
            "sdkClass": "icon-iconanzhuo"
        }, {
            "sdkName": "商户接入文档",
            "sdkNote": "下载文档",
            "sdkClass": "icon-iconanzhuo"
        }]
    })