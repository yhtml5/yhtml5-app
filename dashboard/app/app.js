//'use strict';
/*
 * @require /bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js
 * @require /bower_components/angular/angular.js
 * @require /bower_components/angular-bootstrap/ui-bootstrap-tpls.js
 * @require /bower_components/angular-animate/angular-animate.js
 * @require /bower_components/angular-ui-router/release/angular-ui-router.js
 * @require /bower_components/angular-ui-select/dist/select.js
 *
 */

// Declare app level module which depends on views, and components
angular.module('app', [
		'ui.router',
		'app.navMain',
		'app.appList',
		'app.account'
	])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/authentication")
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
			.state('authentication', {
				url: "/authentication",
				views: {
					"nav": {
						templateUrl: "view/nav-main/nav-main.html"
					},
					"content": {
						templateUrl: "view/authentication/authentication.html"
					}
				}
			})
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
					"nav": {
						templateUrl: "view/nav-main/nav-main.html"
					},
					"content": {
						templateUrl: "view/account.record/account.record.html"
					}
					
				}
			})
			.state('account.withdraw', {
				url: "/withdraw",
				views: {
					"nav": {
						templateUrl: "view/nav-main/nav-main.html"
					},
					"content": {
						templateUrl: "view/account.withdraw/account.withdraw.html"
					}
					
				}
			})
			.state('account.detail', {
				url: "/detail",
				views: {
					"nav": {
						templateUrl: "view/nav-main/nav-main.html"
					},
					"content": {
						templateUrl: "view/account.detail/account.detail.html"
					}
					
				}
			})
			.state('account.topay', {
				url: "/topay",
				views: {
					"nav": {
						templateUrl: "view/nav-main/nav-main.html"
					},
					"content": {
						templateUrl: "view/account.topay/account.topay.html"
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