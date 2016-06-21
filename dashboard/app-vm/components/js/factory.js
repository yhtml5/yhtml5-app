'use strict';
angular.module('factory', [])
    .factory('uploadAuth', function($http) {
        uploadAuth = [{
            text: "",
            url: ""
        }]
    })
    .factory('Data', function($http) {
        userInfo = {};
        return {
            userInfo
        };
    });