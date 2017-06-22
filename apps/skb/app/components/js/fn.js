/*
 * @require ../../server/author.js
 */
/************  fn  ************/
function changeimg() {
    var myimg = document.getElementById("code");
    now = new Date();
    myimg.src = "yzm.php?code=" + now.getTime();
}
function getUrl() {

}
function toggleValue(selector, event, eventObject) {
    $(selector).on(event, function () {
        $(eventObject).val($(this).text())
    })
}
function getStart() {
    $("[y-card='quickLinkStart']").click(function () {
        $(this).fadeOut(1000);
        setTimeout(function () {
            $("[y-card='quickLinkSlip']").fadeIn()
        }, 1000);
        S.init();
        setTimeout(function () {
            $("[y-card='quickLinkSlip']").fadeOut();
            $("[y-card='quickLink']").fadeIn(2000)
        }, 9000);
    });
    $("[y-card='quickLinkSlip']").click(function () {
        $(this).fadeOut(1000);
        $("[y-card='quickLink']").fadeIn(2000)
    });
}
function doCarouselScanPayDemo(time) {
    $("[y-carousel='scanPayDemo']").carousel({
        interval: time
    });
    $("[y-carousel='scanPayDemo']").on('slid.bs.carousel', function () {
        a = $("[y-carousel='scanPayDemo'] .carousel-inner > .active").attr("y-value");
        $(".y-breadcrumb-pay li").removeClass("active");
        $(".y-breadcrumb-pay li:eq(" + a + ")").addClass("active")
    });
}
function yFadeToggle(selector, event, event2, eventObject) {
    $(selector).on(event, function () {
        $(eventObject).fadeIn();
    });
    $(selector).on(event2, function () {
        $(eventObject).fadeOut();
    });
}

function countdown(count) {
    if (count === 0) {
        $("[y-notice='QRcode']").hide();
        $('[y-img="QRcode"]').show();
        console.log(1)
    } else {
        down()
        var num = count;
        $('[y-countdown="scanPay.QRcode"]').text(num + 1)
        function down() {

            if (num === 0) {
                $("[y-notice='QRcode']").hide();
                $('[y-img="QRcode"]').fadeIn(2000);
                return;
            } else {
                $('[y-countdown="scanPay.QRcode"]').text(num)
                num--;
            }
            setTimeout(function () {
                    down();
                }
                , 1000)
        }
    }
}

$("[y-popoper='uploading']").on("click",function () {

    $("[y-popoper='uploading']").hide();
    $("[y-popoper='circle']").show();
});
$("[y-popoper='test']").on("click",function () {
    $("[y-popoper='uploading']").show();
    $("[y-popoper='circle']").hide();
})



