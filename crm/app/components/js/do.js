/*
 * @require fn.js
 */

/************  do  ************/

$(function () {
    $("[y-popoper='uploadQRcode'] a").mouseenter(function () {
        $("[y-popoper='ewmsml']").fadeIn();
    });
    $("[y-popoper='uploadQRcode'] a").mouseleave(function () {
        $("[y-popoper='ewmsml']").fadeOut();
    });
    $("[y-popoper='noopsycheMoney']").mouseenter(function () {
        $("[y-popoper='infoUl']").fadeIn();
    })
    $("[y-popoper='noopsycheMoney']").mouseleave(function () {
        $("[y-popoper='infoUl']").fadeOut();
    })
    $("[y-carousel='scanPayDemo']").carousel({
        interval: 4000
    })
    $("[y-carousel='scanPayDemo']").on('slid.bs.carousel', function () {
        a = $("[y-carousel='scanPayDemo'] .carousel-inner > .active").attr("y-value")
        console.log(a)
        $(".y-breadcrumb-pay li").removeClass("active")
        $(".y-breadcrumb-pay li:eq(" + a + ")").addClass("active")
    })
    $("[y-button='quickLink']").click(function () {
        $(this).fadeOut(1000)
        S.init();
        setTimeout(function () {
            $("[y-card='quickLink']").fadeIn(2000)
        }, 9000);
    })
});




