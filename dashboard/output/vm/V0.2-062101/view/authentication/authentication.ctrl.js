'use strict';
angular.module('yhtml5.authentication', ['ui.bootstrap', 'ngAnimate', 'factory'])
    .controller('yhtml5.authentication', function($scope, $uibModal, $state, $http, $interval,$timeout, Data) {
        $scope.data = Data;
        console.log("factory data : ", Data);
        $scope.userInfo = $scope.data.userInfo;
        console.log("data.userInfo : ", $scope.userInfo);
        $scope.userAccount = {};
        $scope.bank = {};
        $scope.isStep1 = true;
        $scope.toStep1 = function() {
            $scope.isStep1 = true
            $scope.isStep2 = false
            $scope.isStep3 = false
        };
        // ========= 倒计时 =========
        var second = 6;
        $scope.num = "(" + second + ")";
        $scope.isDisabled = true;
        //      timePromise = undefined;
        timePromise = $interval(function() {
            if (second <= 0) {
                $interval.cancel(timePromise);
                timePromise = undefined;
                $scope.num = "";
                $scope.isDisabled = false;
            } else {
                $scope.num = "(" + second + ")";
                $scope.isDisabled = true;
                second--;
            }
        }, 1000, 0);
        $scope.toStep2 = function() {
            /** 基本信息 **/
            $http.get('http://admin.jubaobar.com/front/user/person/info.htm')
                .success(function(response) {
                    $scope.userInfo = response.data;
                    console.log(response.data.contactProvIdShow);
                });
            $scope.isStep1 = true
            $scope.isStep2 = true
            $scope.isStep3 = false
        }
        $scope.toStep3 = function() {
            /** ======================================== writed by Yangjb 实名认证 Start========================================= */
            /** 基本信息 **/
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
                    contactProvId: $scope.userInfo.contactProvId.id,
                    contactCityId: $scope.userInfo.contactCityId.id,
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
                if (res.result == 0) {
                    console.log("应用信息保存成功");
                    $http.get('http://admin.jubaobar.com/front/myAccount/queryAccountMessage.htm')
                        .success(function(response) {
                            $scope.userAccount = response.data;
                        });
                }
            });
            /** ======================================== writed by Yangjb 实名认证 End========================================= */
            $scope.isStep1 = true
            $scope.isStep2 = true
            $scope.isStep3 = true
        }
        $scope.animationsEnabled = true;
        $scope.authenticationAccountConfirmOpen = function(size) {
            /** ======================================== writed by Yangjb 实名认证 Start========================================= */
            /** 结算信息 **/
            $http({
                method: "post",
                url: "http://admin.jubaobar.com/front/authentication/settleAccountMessage.htm",
                params: {
                    accountname: $scope.userAccount.accountname,
                    accounttype: $scope.userAccount.accounttype,
                    accountnum: $scope.userAccount.accountnum,
                    bankid: $scope.bank.id,
                    bankname: $scope.bank.bank,
                    bankprov: $scope.userAccount.bankprov,
                    bankcity: $scope.userAccount.bankcity,
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
            });
            /** ======================================== writed by Yangjb 实名认证 End========================================= */
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