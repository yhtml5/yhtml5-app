$(document).ready(function() {
    var heght1 = $(".fw-content3").width();
    var heght2 = heght1 * 0.5
    $("#down1").css("marginTop", heght2)
    $(window).resize(function() {
        var heght1 = $(".fw-content3").width();
        var heght2 = heght1 * 0.5
        $("#down1").css("marginTop", heght2)
    })
})