$(function() {
    $(".form_datetime").datetimepicker({
        language: 'zh-CN',
        format: "dd MM yyyy",
        autoclose: true,
        todayBtn: true,
        inline: true
    });
    $('.dropdown-menu li').click(function() {
        $('.j-pay-btn,.j-settlement,.j-channel,.j-settlement').text($(this).text());
    });
    console.log("hello world")
})