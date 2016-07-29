/*
 * @require ../../server/author.js
 */

/************  UI-Router  ************/

angular.module('yhtml5', [
        'ui.router',
        'controllers'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise("/index");
        $stateProvider
            .state('index', {
                url: "/index",
                views: {
                    "header": {
                        templateUrl: "view/header/index.html"
                    },
                    "nav": {
                        templateUrl: "view/nav/transparent.html"
                    },
                    "sidebar": {
                        templateUrl: "view/sidebar/qq.html"
                    },
                    "content": {
                        templateUrl: "view/display/index.html"
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
                        templateUrl: "view/nav/blue.html"
                    },
                    "nav-right": {
                        templateUrl: "view/nav-right/nav-right.html"
                    },
                    "content": {
                        templateUrl: "view/download/download.html"
                    },
                    "footer": {
                        templateUrl: "view/footer/footer.html"
                    }
                }
            })
            .state('production', {
                url: "/production",
                views: {
                    "nav": {
                        templateUrl: "view/nav/blue.html"
                    },
                    "nav-right": {
                        templateUrl: "view/nav-right/nav-right.html"
                    },
                    "content": {
                        templateUrl: "view/production/production.html"
                    },
                    "footer": {
                        templateUrl: "view/footer/footer.html"
                    }
                }
            })
            .state('production.accounting', {
                url: "/accounting",
                views: {
                    "content": {
                        templateUrl: "view/production.accounting/production.accounting.html"
                    }
                }
            })
            .state('production.credit', {
                url: "/credit",
                views: {
                    "content": {
                        templateUrl: "view/production.credit/production.credit.html"
                    }
                }
            })
            .state('cost', {
                url: "/cost",
                views: {
                    "nav": {
                        templateUrl: "view/nav/blue.html"
                    },
                    "nav-right": {
                        templateUrl: "view/nav-right/nav-right.html"
                    },
                    "content": {
                        templateUrl: "view/cost/cost.html"
                    },
                    "footer": {
                        templateUrl: "view/footer/footer.html"
                    }
                }
            })
            .state('contact', {
                url: "/contact",
                views: {
                    "nav": {
                        templateUrl: "view/nav/blue.html"
                    },
                    "nav-right": {
                        templateUrl: "view/nav-right/nav-right.html"
                    },
                    "content": {
                        templateUrl: "view/contact/contact.html"
                    },
                    "footer": {
                        templateUrl: "view/footer/footer.html"
                    }
                }
            });
    });