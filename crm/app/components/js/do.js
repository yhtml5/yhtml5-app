/*
 * @require fn.js
 */

/************  do  ************/

$(function () {
    $("[y-popoper='uploadQRcode'] a").mouseenter(function () {
        $("[y-img='ewmsml']").fadeIn();
    });
    $("[y-popoper='uploadQRcode'] a").mouseleave(function () {
        $("[y-img='ewmsml']").fadeOut();
    });
});
  
