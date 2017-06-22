/*
 * @require ../../../server/author.js
 */
/************  fn  ************/
function toggleValue(selector, event, eventObject) {
    $(selector).on(event, function () {
        $(eventObject).val($(this).text());
    });
};
function toggleActive(selector, event) {
    $(selector).on(event, function () {
        $(selector).removeClass('active');
        $(this).addClass('active');
    });
};
function openModalSimple(btn, text, time, fun) {
    $(btn).on('click', function () {
        $('[y-text="simple"]').text(text);
        $('[y-modal="simple"]').fadeIn();
        setTimeout(function () {
            $('[y-modal="simple"]').fadeOut();
        }, time);
        fun;
    });
};
function yFadeToggle(selector, event, event2, eventObject) {
    $(selector).on(event, function () {
        $(eventObject).fadeIn();
    });
    $(selector).on(event2, function () {
        $(eventObject).fadeOut();
    });
};
(function () {
    var urlId = window.location.hash.replace(/^(.*[n])*.*(.|n)$/g, "$2") - 1;
    if (urlId >= 0) {
        $('.y-nav a').removeClass('active');
        $('.y-nav a:eq(' + urlId + ')').addClass('active');
    }
})();

