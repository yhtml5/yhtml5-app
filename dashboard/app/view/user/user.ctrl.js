'use strict';
angular.module('yhtml5.user', ['ui.bootstrap', 'ngAnimate', 'ngFileUpload', 'factory'])
    .controller('yhtml5.user', function($scope, $uibModal, $http, Upload, $timeout, Data) {
        $scope.data = Data;
        console.log("factory data : ",Data);
        $http.get('http://admin.jubaobar.com/front/user/person/info.htm')
            .success(function(response) {
                console.log(response);
                $scope.userInfo = response.data;
                console.log(response.data.contactProvIdShow);
            });
        $scope.userPersonFormEnabled = true
        $scope.userPersonUpdate = true
        $scope.userPersonSave = true
        $scope.userPersonFormTotal = function() {
            $scope.userPersonFormEnabled = !$scope.userPersonFormEnabled
            $scope.userPersonUpdate = false
            $scope.userPersonSave = false
        }
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
                    businessType1: $scope.userInfo.businessType1,
                    businessType2: $scope.userInfo.businessType2,
                    businessTypeAll: $scope.userInfo.businessType1 + "/" + $scope.userInfo.businessType2,
                    companyName: $scope.userInfo.companyName,
                    companyAddress: $scope.userInfo.companyAddress,
                    licenseNo: $scope.userInfo.licenseNo,
                    contactName: $scope.userInfo.contactName,
                    contactEmail: $scope.userInfo.contactEmail,
                    contactTelephone: $scope.userInfo.contactTelephone,
                    contactQQ: $scope.userInfo.contactQQ,
                    contactProvId: $scope.userInfo.contactProvId,
                    contactCityId: $scope.userInfo.contactCityId,
                    contactAddress: $scope.userInfo.contactAddress,
                    contactAddressAll: $scope.userInfo.contactProvId + $scope.userInfo.contactCityId + $scope.userInfo.contactAddress,
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
                    $scope.app.proxy_base_objectid = res.objectid;
                    $scope.view.state = $scope.view.stateMachine["fullfill_base"];
                    $anchorScroll();
                }
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
        };
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
        };
    });