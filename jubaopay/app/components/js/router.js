/*
 * @require ../../server/author.js
 */

/************  UI-Router  ************/

angular.module('yhtml5', [
        'ui.router',
        'controllers'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        var domainUrl="//static.jubaobar.cn/project/jubaopay/V0.4/"
        $urlRouterProvider
            .otherwise("/");
        $stateProvider
            .state('index', {
                url: "/",
                views: {
                    "header": {
                        templateUrl: domainUrl+"view/header/index.html"
                    },
                    "nav": {
                        templateUrl: domainUrl+"view/nav/transparent.html"
                    },
                    "sidebar": {
                        templateUrl: domainUrl+"view/sidebar/qq.html"
                    },
                    "content": {
                        templateUrl: domainUrl+"view/display/index.html"
                    },
                    "footer": {
                        templateUrl: domainUrl+"view/footer/index.html"
                    }
                }
            })
            .state('download', {
                url: "/download",
                views: {
                    "nav": {
                        templateUrl: domainUrl+"view/nav/blue.html"
                    },
                    "sidebar": {
                        templateUrl: domainUrl+"view/sidebar/qq.html"
                    },
                    "content": {
                        templateUrl: domainUrl+"view/download/index.html"
                    },
                    "footer": {
                        templateUrl: domainUrl+"view/footer/index.html"
                    }
                }
            })
            .state('production', {
                url: "/production",
                views: {
                    "nav": {
                        templateUrl: domainUrl+"view/nav/blue.html"
                    },
                    "sidebar": {
                        templateUrl: domainUrl+"view/sidebar/qq.html"
                    },
                    "content": {
                        templateUrl: domainUrl+"view/production/index.html"
                    },
                    "footer": {
                        templateUrl: domainUrl+"view/footer/index.html"
                    }
                }
            })
            .state('production.accounting', {
                url: "/accounting",
                views: {
                    "content": {
                        templateUrl: domainUrl+"view/production/accounting.html"
                    }
                }
            })
            .state('production.credit', {
                url: "/credit",
                views: {
                    "content": {
                        templateUrl: "view/production/credit.html"
                    }
                }
            })
            .state('cost', {
                url: "/cost",
                views: {
                    "nav": {
                        templateUrl: "view/nav/blue.html"
                    },
                    "sidebar": {
                        templateUrl: "view/sidebar/qq.html"
                    },
                    "content": {
                        templateUrl: "view/cost/index.html"
                    },
                    "footer": {
                        templateUrl: "view/footer/index.html"
                    }
                }
            })
            .state('contact', {
                url: "/contact",
                views: {
                    "nav": {
                        templateUrl: "view/nav/blue.html"
                    },
                    "sidebar": {
                        templateUrl: "view/sidebar/qq.html"
                    },
                    "content": {
                        templateUrl: "view/contact/index.html"
                    },
                    "footer": {
                        templateUrl: "view/footer/index.html"
                    }
                }
            });
    });