;/*!/app.js*/
'use strict';
/*
 * @require bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js
 * @require bower_components/angular/angular.js
 * @require bower_components/angular-bootstrap/ui-bootstrap-tpls.js
 * @require bower_components/angular-animate/angular-animate.js
 * @require bower_components/angular-ui-router/release/angular-ui-router.js
 * @require bower_components/angular-ui-select/dist/select.js
 *
 */

// Declare app level module which depends on views, and components
angular.module('yhtml5', [
		'ui.router',
		'controllers',
		'yhtml5.nav',
		'yhtml5.appList',
		'yhtml5.appsetting',
		'yhtml5.account',
		'yhtml5.authentication',
		'yhtml5.user'
	])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider
		//.when('/dashboard/*', '/dashboard')
			.otherwise("/authentication/agreement")
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
;/*!/view/account/account.ctrl.js*/
'use strict';
/*
 * @require app.js
 *
 */
angular.module('yhtml5.account', ['ui.bootstrap', 'ngAnimate'])
	.controller('yhtml5.account', function($scope, $http, $uibModal) {
		//get json
		$http.get("../../server/account.record.json")
			.success(function(response) {
				$scope.accountRecord = response.accountRecord //$scope.names 为一个数组
			})
		$http.get("../../server/account.detail.json")
			.success(function(response) {
				$scope.accountDetail = response.accountDetail //$scope.names 为一个数组
			})
		$scope.animationsEnabled = true;
		$scope.toggleAnimation = function() {
			$scope.animationsEnabled = !$scope.animationsEnabled;
		}
		$scope.accountDetailMoreOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'accountDetailMore.html',
				controller: 'accountDetailMoreCtrl',
				size: size
			})
		};
		$scope.accountTopayBatchOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'accountTopayBatch.html',
				controller: 'accountTopayBatchCtrl',
				size: size
			})
		};
		$scope.accountTopayConfirmOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'accountTopayConfirm.html',
				controller: 'accountTopayConfirmCtrl',
				size: size
			})
		};
		$scope.accountTopayDeleteOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'accountTopayDelete.html',
				controller: 'accountTopayDeleteCtrl',
				size: size
			})
		};
		$scope.realNameRemindOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'realNameRemind.html',
				controller: 'realNameRemindCtrl',
				size: size
			})
		};
	})
	.controller('accountDetailMoreCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	})
	.controller('accountTopayBatchCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	})
	.controller('accountTopayConfirmCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	})
	.controller('accountTopayDeleteCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	})
	.controller('realNameRemindCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	})
;/*!/view/appList/appList.js*/
'use strict';
/*
 * @require app.js
 *
 */
angular.module('yhtml5.appList', ['ui.bootstrap', 'ngAnimate'])
	.controller('yhtml5.appList', function($scope, $http, $uibModal) {
		//appList add modal
		//$scope.appTypes = ['PC', 'WAP', 'Android', 'IOS'];
		//$scope.appTypeSelect = $scope.appTypes[0];
		//modal
		$scope.animationsEnabled = true;
		$scope.open = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appList-add.html',
				controller: 'ModalInstanceCtrl',
				size: size
			})
		};
		$scope.toggleAnimation = function() {
			$scope.animationsEnabled = !$scope.animationsEnabled;
		};
		//get json
		$http.get("../../server/init.json")
			.success(function(response) {
				$scope.userApps = response.userApps //$scope.names 为一个数组
			})
	})
	.controller('ModalInstanceCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	});
;/*!/view/appsetting/appsetting.ctrl.js*/
'use strict';
/*
 * @require app.js
 *
 */
angular.module('yhtml5.appsetting', ['ui.bootstrap', 'ngAnimate'])
	.controller('yhtml5.appsetting', function($scope, $uibModal) {
		$scope.animationsEnabled = true;
		$scope.appsettingCanalResetOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingCanalReset.html',
				controller: 'appsettingCanalResetCtrl',
				size: size
			})
		}
		$scope.appsettingCanalCreateOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingCanalCreate.html',
				controller: 'appsettingCanalCreateCtrl',
				size: size
			})
		}
		$scope.appsettingChannelAgreementOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingChannelAgreement.html',
				controller: 'appsettingChannelAgreementCtrl',
				size: size
			})
		}
		$scope.appsettingChannelRechanrgecardOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingChannelRechanrgecard.html',
				controller: 'appsettingChannelRechanrgecardCtrl',
				size: size
			})
		}
		$scope.appsettingChannelPointcardOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'appsettingChannelPointcard.html',
				controller: 'appsettingChannelPointcardCtrl',
				size: size
			})
		}
	})
	.controller('appsettingCanalResetCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})
	.controller('appsettingCanalCreateCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})
	.controller('appsettingChannelAgreementCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})
	.controller('appsettingChannelRechanrgecardCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})
	.controller('appsettingChannelPointcardCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})
;/*!/view/authentication/authentication.ctrl.js*/
'use strict';
/*
 * @require app.js
 *
 */
angular.module('yhtml5.authentication', ['ui.bootstrap', 'ngAnimate'])
	.controller('yhtml5.authentication', function($scope, $uibModal, $state) {
		$scope.isStep1 = true
		$scope.toStep1 = function() {
			$scope.isStep1 = true
			$scope.isStep2 = false
			$scope.isStep3 = false
		}
		$scope.toStep2 = function() {
			$scope.isStep1 = true
			$scope.isStep2 = true
			$scope.isStep3 = false
		}
		$scope.toStep3 = function() {
			$scope.isStep1 = true
			$scope.isStep2 = true
			$scope.isStep3 = true
		}
		$scope.animationsEnabled = true;
		$scope.authenticationAccountConfirmOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'authenticationAccountConfirm.html',
				controller: 'authenticationAccountConfirmCtrl',
				size: size
			})
		};
	})
	.controller('authenticationAccountConfirmCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})
;/*!/view/payment/nav-main.js*/
'use strict';
/*
 * @require app.js
 *
 */
angular.module('yhtml5.navMain', ['ui.bootstrap', 'ngAnimate', 'ui.router']) //可以不加ui模块？
	.controller('yhtml5.navMain', function($scope, $http, $uibModal) {
		$scope.userVerify = true
		$scope.userCenter = true
		$scope.toggle = function() {
			$scope.userCenter = !$scope.userCenter
		}
		$scope.animationsEnabled = true;
		$scope.open = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'helpCenter.html',
				controller: 'ModalInstanceCtrl',
				size: size
			})
		};
		$scope.toggleAnimation = function() {
			$scope.animationsEnabled = !$scope.animationsEnabled;
		};
	})
	.controller('ModalInstanceCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
;/*!/view/user/user.ctrl.js*/
'use strict';
/*
 * @require app.js
 *
 */
angular.module('yhtml5.user', ['ui.bootstrap', 'ngAnimate'])
    .controller('yhtml5.user', function($scope, $uibModal) {
        $scope.userPersonFormEnabled = true
        $scope.userPersonUpdate = true
        $scope.userPersonSave = true
        $scope.userPersonFormTotal = function() {
            $scope.userPersonFormEnabled = !$scope.userPersonFormEnabled
            $scope.userPersonUpdate = false
            $scope.userPersonSave = false
        }
        $scope.animationsEnabled = true;
        $scope.userPersonFormSave = function(size) {
            $scope.userPersonFormEnabled = true
            $scope.userPersonUpdate = true
            $scope.userPersonSave = true
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'noteSimple.html',
                controller: 'userPersonNoteSimpleCtrl',
                size: size
            })
        }
        $scope.userAccountFormSave = function(size) {
            $scope.userPersonFormEnabled = true
            $scope.userPersonUpdate = true
            $scope.userPersonSave = true
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'noteSimple.html',
                controller: 'userAccountNoteSimpleCtrl',
                size: size
            })
        }
        $scope.userPasswordLoginSave = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'noteSimple.html',
                controller: 'userPasswordLoginCtrl',
                size: size
            })
        }
        $scope.userPasswordSecuritySave = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'noteSimple.html',
                controller: 'userPasswordSecurityCtrl',
                size: size
            })
        }
        $scope.userPasswordSecurityRetrieveOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'userPasswordSecurityRetrieve.html',
                controller: 'userPasswordSecurityRetrieveCtrl',
                size: size
            })
        }
    })
    .controller('userPersonNoteSimpleCtrl', function($scope, $uibModalInstance) {
        $scope.text = "资料修改成功，信息正在审核中，请耐心等候！"
        $scope.isInfo = true
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('userAccountNoteSimpleCtrl', function($scope, $uibModalInstance) {
        $scope.text = "结算信息修改成功！"
        $scope.isInfo = true
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('userPasswordLoginCtrl', function($scope, $uibModalInstance) {
        $scope.text = "登录密码修改成功！"
        $scope.isInfo = true
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('userPasswordSecurityCtrl', function($scope, $uibModalInstance) {
        $scope.text = "安全密码修改成功！"
        $scope.isInfo = true
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
    .controller('userPasswordSecurityRetrieveCtrl', function($scope, $uibModalInstance, $uibModal) {
        $scope.passwordFormEnabled = true
        $scope.newPasswordFormEnabled = false
        $scope.next = function() {
            $scope.passwordFormEnabled = false
            $scope.newPasswordFormEnabled = true
            $scope.isNext = true
            $scope.isConfirm = true
        }
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
        $scope.animationsEnabled = true;
        $scope.confirm = function(size) {
            $uibModalInstance.dismiss('cancel');
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'noteSimple.html',
                controller: 'userPasswordSecurityCtrl',
                size: size
            })
        }
    })
;/*!/components/nav/nav.js*/
'use strict';
/*
 * @require app.js
 *
 */
angular.module('yhtml5.nav', ['ui.bootstrap', 'ngAnimate', 'ui.router']) //可以不加ui模块？
	.controller('yhtml5.nav', function($scope, $http, $uibModal) {
		$scope.userVerify = true
		$scope.userCenter = true
		$scope.toggle = function() {
			$scope.userCenter = !$scope.userCenter
		}
		$scope.animationsEnabled = true;
		$scope.open = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'helpCenter.html',
				controller: 'ModalInstanceCtrl',
				size: size
			})
		};
		$scope.toggleAnimation = function() {
			$scope.animationsEnabled = !$scope.animationsEnabled;
		};
	})
	.controller('ModalInstanceCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
;/*!/components/public/ctrl.js*/
'use strict';
/*
 * @require app.js
 *
 */

angular.module('controllers', ['ui.bootstrap', 'ngAnimate'])
	.controller('controllers', function($scope, $uibModal) {
		$scope.animationsEnabled = true;
		$scope.smsConfirmOpen = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'smsConfirm.html',
				controller: 'smsConfirmCtrl',
				size: size
			})
		}
	})
	.controller('smsConfirmCtrl', function($scope, $uibModalInstance) {
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	})