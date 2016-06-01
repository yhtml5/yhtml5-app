'use strict';
angular.module('yhtml5.user', ['ui.bootstrap', 'ngAnimate', 'ngFileUpload', 'factory'])
    .controller('yhtml5.user', function($scope, $uibModal, $http, Upload, $timeout, Data) {
        $scope.dataInit = Data;
        $scope.banks = Data.banks;

        /** ========================= 银燕 获取 经营范围、地市字典 ========================= B**/
        $http.get("http://admin.jubaobar.com/front/common/region/all.htm")
            .success(function(response) {
                $scope.dataInit.division = response.data;
            });
        $http.get("http://admin.jubaobar.com/front/homePage/queryEnumData.htm")
            .success(function(response) {
                console.log(angular.isArray(response.data));
                $scope.dataInit.businessTypes = response.data;
            });
        /** ========================= 银燕 获取 经营范围、地市字典 ========================= **/

        $scope.bankSelect = {};
        $scope.bankprovAccount = {};
        $scope.bankcityAccount = {};
        $http.get('http://admin.jubaobar.com/front/myAccount/queryAccountMessage.htm')
            .success(function(response) {
                $scope.userAccount = response.data;
                $scope.bankSelect.id = $scope.userAccount.bankid;
                $scope.bankSelect.bank = $scope.userAccount.bankname;
                $scope.bankprovAccount.id = $scope.userAccount.bankprov;
                $scope.bankcityAccount.id = $scope.userAccount.bankcity;
                $http({
                    method: "post",
                    url: "http://admin.jubaobar.com/front/common/region/get.htm",
                    params: {
                        id: $scope.userAccount.bankprov
                    }
                }).success(function(response) {
                    $scope.bankprovAccount = response.data;
                });
            });
        $scope.userAccountFormSave = function(size) {
            $scope.userPersonFormEnabled = true
            $scope.userPersonUpdate = true
            $scope.userPersonSave = true;
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/authentication/settleAccountMessage.htm",
                params: {
                    accountname: $scope.userAccount.accountname,
                    accounttype: $scope.userAccount.accounttype,
                    accountnum: $scope.userAccount.accountnum,
                    bankid: $scope.bankSelect.id,
                    bankname: $scope.bankSelect.bank,
                    bankprov: $scope.bankprovAccount.id,
                    bankcity: $scope.bankcityAccount.id,
                    bankbranch: $scope.userAccount.bankbranch,
                    alipayname: $scope.userAccount.alipayname,
                    alipay: $scope.userAccount.alipay,
                    id: $scope.userAccount.id
                }
            }).success(function(res) {
                $scope.savingBase = false;
                if (res.resultCode == 0) {
                    $scope.app.proxy_base_objectid = res.objectid;
                    $scope.view.state = $scope.view.stateMachine["fullfill_base"];
                    $anchorScroll();
                }
            })
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'noteSimple.html',
                controller: 'userAccountNoteSimpleCtrl',
                size: size
            })
        };
        $scope.businessTypeUser = {};
        $scope.businessSubTypeUser = {};
        $scope.provUser = {};
        $scope.cityUser = {};
        $http.get('http://admin.jubaobar.com/front/user/person/info.htm')
            .success(function(response) {
                console.log(response);
                $scope.userInfo = response.data;
                console.log(response.data.contactProvIdShow);
                $scope.businessTypeUser.dictCode = $scope.userInfo.businessType;
                $scope.businessSubTypeUser.dictCode = $scope.userInfo.businessSubType;
                $scope.provUser.id = $scope.userInfo.contactProvId;
                $scope.cityUser.id = $scope.userInfo.contactCityId;
                $http({
                    method: "post",
                    url: "http://admin.jubaobar.com/front/common/dict/type.htm",
                    params: {
                        dictType: "businessSubType"
                    }
                }).success(function(response) {
                    $scope.businessTypeUser.subList = response.data;
                });
                $scope.dataInit.businessTypes = [];
                $http({
                    method: "post",
                    url: "http://admin.jubaobar.com/front/common/region/get.htm",
                    params: {
                        id: $scope.userInfo.contactProvId
                    }
                }).success(function(response) {
                    $scope.provUser = response.data;
                });
            });
        $scope.userPersonFormEnabled = true
        $scope.userPersonUpdate = true
        $scope.userPersonSave = true
        $scope.userPersonFormTotal = function() {
            $scope.userPersonFormEnabled = !$scope.userPersonFormEnabled
            $scope.userPersonUpdate = false
            $scope.userPersonSave = false
        };
        $scope.animationsEnabled = true;
        $scope.userPersonFormSave = function(size, file, upload) {
            $scope.userPersonFormEnabled = true;
            $scope.userPersonUpdate = true;
            $scope.userPersonSave = true;
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/authentication/businessInformation.htm",
                params: {
                    companyType: $scope.userInfo.companyType,
                    subCompanyType: $scope.userInfo.subCompanyType,
                    userName: $scope.userInfo.userName,
                    businessType: $scope.userInfo.businessType1.dictCode,
                    businessSubType: $scope.userInfo.businessType2.dictCode,
                    businessTypeAll: $scope.userInfo.businessType1 + "/" + $scope.userInfo.businessType2,
                    companyName: $scope.userInfo.companyName,
                    companyAddress: $scope.userInfo.companyAddress,
                    licenseNo: $scope.userInfo.licenseNo,
                    contactName: $scope.userInfo.contactName,
                    contactEmail: $scope.userInfo.contactEmail,
                    contactTelephone: $scope.userInfo.contactTelephone,
                    contactQQ: $scope.userInfo.contactQQ,
                    contactProvId: $scope.provUser.id,
                    contactCityId: $scope.cityUser.id,
                    contactAddress: $scope.userInfo.contactAddress,
                    contactAddressAll: $scope.userInfo.contactProvId.name + $scope.userInfo.contactCityId.name + $scope.userInfo.contactAddress,
                    idCard: $scope.userInfo.idCard,
                    idCardPic: $scope.userInfo.idCardPic,
                    idCardFrontPic: $scope.userInfo.idCardFrontPic,
                    idCardReversePic: $scope.userInfo.idCardReversePic,
                    licensePic: $scope.userInfo.licensePic,
                    taxCertPic: $scope.userInfo.taxCertPic,
                    orgCodeCertPic: $scope.userInfo.orgCodeCertPic,
                    openPermitPic: $scope.userInfo.openPermitPic,
                    otherTypePic: $scope.userInfo.otherTypePic,
                    companyId: $scope.userInfo.companyId
                }
            }).success(function(res) {
                $scope.savingBase = false;
                if (res.resultCode == 0) {
                    console.log("应用信息保存成功")
                }
            });
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'noteSimple.html',
                controller: 'userPersonNoteSimpleCtrl',
                size: size
            });
            $scope.uploadPic = function(file) {
                file.upload = Upload.upload({
                    url: 'http://admin.jubaobar.com/api/upload/imageupload.htm',
                    data: {
                        username: $scope.username,
                        file: file
                    },
                });
                file.upload.then(function(response) {
                    $timeout(function() {
                        file.result = response.data;
                    });
                }, function(response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function(evt) {
                    // Math.min is to fix IE which reports 200% sometimes
                    file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                })
            };
        };
        // ==== check password
        var vm = $scope.vm = {
            show_error: false,
            user: {}
        };
        vm.submit = function(userPasswordLoginForm) {
            vm.show_error = true;
            userPasswordLoginForm.$setDirty();
            if (userPasswordLoginForm.$valid) {
                alert("提交成功！");
            }
        };
        /** writed by 白豆腐  密码修改*/
        $scope.data = {};
        $scope.userPasswordLoginSave = function(size) {
                $scope.data = {};
                console.log($scope.data.confirmPwd)
                $http({
                    method: "post",
                    url: "http://admin.jubaobar.com/front/pwd/update.htm",
                    params: {
                        loginPwd: $scope.data.loginPwd,
                        confirmPwd: $scope.data.confirmPwd
                    }
                }).success(function() {

                })
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'noteSimple.html',
                    controller: 'userPasswordLoginCtrl',
                    size: size
                })
            }
            /** writed by 白豆腐  安全密码修改*/
        $scope.userPasswordSecuritySave = function(size) {
                console.log($scope.data.safetyPwd)
                $http({
                    method: "post",
                    url: "http://admin.jubaobar.com/front/safetypwd/update.htm",
                    params: {
                        safetyPwd: $scope.data.safetyPwd,
                        confirmSafetyPwd: $scope.data.confirmSafetyPwd
                    }
                }).success(function() {

                })
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'noteSimple.html',
                    controller: 'userPasswordSecurityCtrl',
                    size: size
                })
            }
            /** writed by 白豆腐  安全密码修改*/
        $scope.userPasswordSecurityRetrieveOpen = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'userPasswordSecurityRetrieve.html',
                controller: 'userPasswordSecurityRetrieveCtrl',
                size: size
            })
        };
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
    .controller('userPasswordSecurityRetrieveCtrl', function($scope, $uibModalInstance, $uibModal, $interval, $http) {
        $scope.passwordFormEnabled = true;
        $scope.newPasswordFormEnabled = false;
        //		$scope.next = function() {
        //			$scope.passwordFormEnabled = false
        //			$scope.newPasswordFormEnabled = true
        //			$scope.isNext = true
        //			$scope.isConfirm = true
        //		}
        //		$scope.cancel = function() {
        //			$uibModalInstance.dismiss('cancel');
        //		}
        //		$scope.animationsEnabled = true;
        //		$scope.confirm = function(size) {
        //			$uibModalInstance.dismiss('cancel');
        //			var modalInstance = $uibModal.open({
        //				animation: $scope.animationsEnabled,
        //				templateUrl: 'noteSimple.html',
        //				controller: 'userPasswordSecurityCtrl',
        //				size: size
        //			})
        //		};
        $scope.buttonText = "获取验证码";
        $scope.send = function() {
            // ========= 倒计时 =========
            //          $scope.buttonText = "获取验证码";
            $scope.isDisabled = false;
            //          $scope.paraevent = true;
            var second = 60;
            timePromise = undefined;
            timePromise = $interval(function() {
                if (second <= 0) {
                    $interval.cancel(timePromise);
                    timePromise = undefined;
                    second = 60;
                    $scope.buttonText = "重发验证码";
                    $scope.isDisabled = false;
                    //                  $scope.paraevent = true;
                } else {
                    $scope.buttonText = second + "秒后可重发";
                    $scope.isDisabled = true;
                    second--;
                }
            }, 1000, 0);
        };
        /* writed by 白豆腐  找回安全密码*/
        $scope.next = function(size) {
            $scope.data = {};
            $scope.passwordFormEnabled = false
            $scope.newPasswordFormEnabled = true
            $scope.isNext = true
            $scope.isConfirm = true
            console.log($scope.data.pwdAnswer)
            console.log($scope.data.authCode)
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/safetypwd/find.htm",
                params: {
                    pwdAnswer: $scope.data.pwdAnswer,
                    authCode: $scope.data.authCode
                }
            }).success(function(response) {

            })
        };
        /* writed by 白豆腐  找回安全密码*/

        /* writed by 白豆腐  发送验证码   */
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/safetypwd/sendCode.htm",
            }).success(function() {})
        }
        $scope.animationsEnabled = true;
        /* writed by 白豆腐  发送验证码   */

        /* writed by 白豆腐  重设安全密码*/
        $scope.confirm = function(size) {
            $uibModalInstance.dismiss('cancel');
            console.log($scope.data.newSafetyPwd)
            console.log($scope.data.confirmPwd)
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/safetypwd/reset.htm",
                params: {
                    newSafetyPwd: $scope.data.newSafetyPwd,
                    confirmPwd: $scope.data.confirmPwd
                }
            }).success(function() {})
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'noteSimple.html',
                controller: 'userPasswordSecurityCtrl',
                size: size
            })
        };
        /* writed by 白豆腐  重设安全密码*/
    });