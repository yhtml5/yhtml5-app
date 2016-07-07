/*
 * @require components/js/ctrl.js
 * @require bower_components/angular-ui-router/release/angular-ui-router.js
 */
'use strict';
// Declare app level module which depends on views, and components
angular.module('yhtml5', [
        'ui.router',
        'controllers',
        'factory',
        'directive',
        'yhtml5.nav',
        'yhtml5.appList',
        'yhtml5.appsetting',
        'yhtml5.authentication'
    ])
    .config(['$compileProvider', function($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/);
    }])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("dashboard")
    })
    