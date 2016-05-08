/*
 * @require ../../bower_components/jquery/dist/jquery.js
 * @require ../../bower_components/bootstrap/dist/js/bootstrap.js
 * @require ../../bower_components/fullpage.js/dist/jquery.fullpage.js
 *
 */

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['slides', 'channel', 'client', 'process', 'strength', 'footer'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 1000,
        lockAnchors: false,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['slides', 'channel', 'client', 'process', 'strength', 'footer'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom'
    });
});