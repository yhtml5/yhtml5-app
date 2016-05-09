'use strict';

angular.module('yhtml5', [
        'ui.router',
        'controllers'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
        //.when('/dashboard/*', '/dashboard')
            .otherwise("/index")
        $stateProvider
            .state('index', {
                url: "/index",
                views: {
                    "nav": {
                        templateUrl: "view/nav/nav.html"
                    },
                    "content": {
                        templateUrl: "view/show/show.html"
                    },
                    "footer": {
                        templateUrl: "view/footer/footer.html"
                    }

                }
            })
            .state('download', {
                url: "/download",
                views: {
                    "nav": {
                        templateUrl: "view/nav/nav.html"
                    },
                    "content": {
                        templateUrl: ""
                    },
                    "footer": {
                        templateUrl: "view/footer/footer.html"
                    }
                }
            })
    })