/*
 * @require fn.js
 */
/************  do  ************/
$(function () {
    $("[y-popoper='uploadQRcode'] a").mouseenter(function () {
        $("[y-popoper='ewmsml'] img").fadeIn();
    });
    $("[y-popoper='uploadQRcode'] a").mouseleave(function () {
        $("[y-popoper='ewmsml'] img").fadeOut();
    });
    $("[y-popoper='noopsycheMoney']").mouseenter(function () {
        $("[y-popoper='infoUl']").fadeIn();
    });
    $("[y-popoper='noopsycheMoney']").mouseleave(function () {
        $("[y-popoper='infoUl']").fadeOut();
    });
    $("[y-carousel='scanPayDemo']").carousel({
        interval: 4000
    });
    $("[y-carousel='scanPayDemo']").on('slid.bs.carousel', function () {
        a = $("[y-carousel='scanPayDemo'] .carousel-inner > .active").attr("y-value")
        console.log(a);
        $(".y-breadcrumb-pay li").removeClass("active");
        $(".y-breadcrumb-pay li:eq(" + a + ")").addClass("active")
    });
    $("[y-navbar='user.img']").mouseenter(function () {
        $("[y-navbar='float.window']").fadeIn();
    });
    $("[y-navbar='float.window']").mouseleave(function () {
        $("[y-navbar='float.window']").fadeOut();
    });
    $("[y-popoper='show.code']").mouseenter(function () {
        $("[y-popoper='modified.code'] img").fadeIn();
    });
    $("[y-popoper='show.code']").mouseleave(function () {
        $("[y-popoper='modified.code'] img").fadeOut();
    });
    $("[y-button='quickLinkStart']").click(function () {
        $(this).fadeOut(1000);
        setTimeout(function () {
            $("[y-button='quickLinkSlip']").fadeIn()
        }, 1000);
        S.init();
        setTimeout(function () {
            $("[y-button='quickLinkSlip']").fadeOut();
            $("[y-card='quickLink']").fadeIn(2000)
        }, 9000);
    });
    $("[y-button='quickLinkSlip']").click(function () {
        $(this).fadeOut(1000);
        $("[y-card='quickLink']").fadeIn(2000)
    });
    $('#defaultForm').formValidation({
        message: 'This value is not valid',
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        locale: 'zh_CN',
        fields: {
            email: {
                validators: {
                    emailAddress: {}
                }
            },
            phoneNumber: {
                validators: {
                    notEmpty: {},
                    digits: {},
                    phone: {
                        country: 'CN'
                    }
                }
            }
        }
    });
    /*function: changing active when url changed*/
});




