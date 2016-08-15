/*
 * @require components/js/fn.js
 * @require components/js/shape-shifter.js
 */
/************  do  ************/
$(function () {
    getStart();
    doCarouselScanPayDemo(4000)
    toggleValue("[y-menu='record.status'] > li > a", "click", "[y-input='record.status']");
    yFadeToggle("[y-popoper='uploadQRcode'] a", "mouseenter", "mouseleave", "[y-popoper='payee.ewmsml'] img");
    yFadeToggle("[y-popoper='noopsycheMoney']", "mouseenter", "mouseleave", "[y-popoper='infoUl']");
    yFadeToggle("[y-popoper='payee.modified.show.QRcode']", "mouseenter", "mouseleave", "[y-popoper='payee.modified.QRcode'] img");
    $("[y-navbar='nav.user.img']").mouseover(function () {
        $("[y-navbar='nav.float.window']").fadeIn();
    });
    $("[y-close='nav.userPanel']").mouseleave(function () {
        $("[y-navbar='nav.float.window']").fadeOut();
    });
    $('[y-date="payTime"] .input-daterange').datepicker({
        format: "yyyy-mm-dd",
        todayBtn: "linked",
        clearBtn: true,
        language: "zh-CN",
        defaultViewDate: {year: 2016, month: 08, day: 02}
    });
    countdown(2);
});
