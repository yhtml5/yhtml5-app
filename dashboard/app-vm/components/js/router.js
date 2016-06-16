/*
 * @require ../../components/js/ctrl.js
 * @require ../../bower_components/angular-ui-router/release/angular-ui-router.js
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
        $urlRouterProvider
        //.when('/dashboard/*', '/dashboard')
            .otherwise("dashboard")
        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                views: {
                    "nav": {
                        templateUrl: "view/nav-main/nav-main.html"
                    },
                    "content": {
                        templateUrl: "view/appList/appList.html"
                    }

                }
            })
            .state('account', {
                url: "/account",
                views: {
                    "nav": {
                        templateUrl: "view/nav-main/nav-main.html"
                    },
                    "content": {
                        templateUrl: "view/account/account.html"
                    }
                }
            })
            .state('account.record', {
                url: "/record",
                views: {
                    "content": {
                        templateUrl: "view/account.record/account.record.html"
                    }

                }
            })
            .state('account.withdraw', {
                url: "/withdraw",
                views: {
                    "content": {
                        templateUrl: "view/account.withdraw/account.withdraw.html"
                    }

                }
            })
            .state('account.detail', {
                url: "/detail",
                views: {
                    "content": {
                        templateUrl: "view/account.detail/account.detail.html"
                    }

                }
            })
            .state('account.topay', {
                url: "/topay",
                views: {
                    "content": {
                        templateUrl: "view/account.topay/account.topay.html"
                    }

                }
            })
            //======== real-name authentication ========
            .state('authentication', {
                url: "/authentication",
                views: {
                    "nav": {
                        templateUrl: "view/nav-authentication/nav-authentication.html"
                    },
                    "content": {
                        templateUrl: "view/authentication/authentication.html"
                    }
                }
            })
            .state('authentication.agreement', {
                url: "/agreement",
                views: {
                    "content": {
                        templateUrl: "view/authentication.agreement/authentication.agreement.html"
                    }
                }
            })
            .state('authentication.person', {
                url: "/person",
                views: {
                    "content": {
                        templateUrl: "view/authentication.person/authentication.person.html"
                    }
                }
            })
            .state('authentication.company', {
                url: "/company",
                views: {
                    "content": {
                        templateUrl: "view/authentication.company/authentication.company.html"
                    }
                }
            })
            .state('authentication.account', {
                url: "/account",
                views: {
                    "content": {
                        templateUrl: "view/authentication.account/authentication.account.html"
                    }
                }
            })
            //======== app ========
            .state('payment', {
                url: "/payment",
                views: {
                    "nav": {
                        templateUrl: "view/nav-app/nav-app.html"
                    },
                    "content": {
                        templateUrl: "view/payment/payment.html"
                    }
                }
            })
            .state('appsetting', {
                url: "/appsetting",
                views: {
                    "nav": {
                        templateUrl: "view/nav-app/nav-app.html"
                    },
                    "content": {
                        templateUrl: "view/appsetting/appsetting.html"
                    },
                    "modal": {
                        templateUrl: "view/noteSimple/noteSimple.html"
                    }
                }
            })
            .state('appsetting.info', {
                url: "/info",
                views: {
                    "content": {
                        templateUrl: "view/appsetting.info/appsetting.info.html"
                    }
                }
            })
            .state('appsetting.channel', {
                url: "/channel",
                views: {
                    "content": {
                        templateUrl: "view/appsetting.channel/appsetting.channel.html"
                    }
                }
            })
            .state('appsetting.api', {
                url: "/api",
                views: {
                    "content": {
                        templateUrl: "view/appsetting.api/appsetting.api.html"
                    }
                }
            })
            .state('appsetting.canal', {
                url: "/canal",
                views: {
                    "content": {
                        templateUrl: "view/appsetting.canal/appsetting.canal.html"
                    },
                    "modal": {
                        templateUrl: "view/smsConfirm/smsConfirm.html"
                    }
                }
            })
            //======== user ========
            .state('user', {
                url: "/user",
                views: {
                    "nav": {
                        templateUrl: "view/nav-main/nav-main.html"
                    },
                    "content": {
                        templateUrl: "view/user/user.html"
                    }
                }
            })
            .state('user.person', {
                url: "/person",
                views: {
                    "content": {
                        templateUrl: "view/user.person/user.person.html"
                    },
                    "modal": {
                        templateUrl: "view/noteSimple/noteSimple.html"
                    }
                }
            })
            .state('user.account', {
                url: "/account",
                views: {
                    "content": {
                        templateUrl: "view/user.account/user.account.html"
                    },
                    "modal": {
                        templateUrl: "view/noteSimple/noteSimple.html"
                    }
                }
            })
            .state('user.password', {
                url: "/password",
                views: {
                    "content": {
                        templateUrl: "view/user.password/user.password.html"
                    },
                    "modal": {
                        templateUrl: "view/noteSimple/noteSimple.html"
                    }
                }
            })
            .state('user.data', {
                url: "/data",
                views: {
                    "content": {
                        templateUrl: "view/user.data/user.data.html"
                    },
                    "modal": {
                        templateUrl: "view/noteSimple/noteSimple.html"
                    }
                }
            })
            .state('user.agreement', {
                url: "/agreement",
                views: {
                    "content": {
                        templateUrl: "view/user.agreement/user.agreement.html"
                    }
                }
            })
            //======== public ========
            .state('smsConfirm', {
                url: "/smsConfirm",
                views: {
                    "content": {
                        templateUrl: "view/smsConfirm/smsConfirm.html"
                    }
                }
            })
            .state('undeveloped', {
                url: "/undeveloped",
                views: {
                    "nav": {
                        templateUrl: "view/nav-main/nav-main.html"
                    },
                    "content": {
                        templateUrl: "view/undeveloped/undeveloped.html"
                    }
                }
            })
    })