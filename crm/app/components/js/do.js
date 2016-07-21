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
        interval: 5000
    })

    
});




