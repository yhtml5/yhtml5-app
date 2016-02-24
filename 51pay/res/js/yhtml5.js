/*=========================================================================================
 * Author:Kyle|张大漾
 * Author Website:http://yhtml5.com
 * Author Gihub:https://github.com/yhtml5
 * Description: A Website disgned by boostrap and Jquery.Do something awesome and have fun !
 *==========================================================================================*/


/* General
 * ======= */
$(function() {
	$('.pagination li').click(function(e) {
		e.preventDefault();
		$('.pagination li').removeClass('active');
		$(this).addClass('active');
	});
	$('.list-group > a').click(function(e) {
		e.preventDefault();
		$('.list-group > a').removeClass('active');
		$(this).addClass('active');
	});
	/* index.html
	 * ========== */
	$("[data-toggle='popover']").popover();
	/* login.html
	 * ========== */
	$(".js-go-sign").click(function() {
		$(".js-form-login").fadeOut(500)
		setTimeout(function() {
			$(".js-form-sigin").fadeIn(500)
		}, 600);
	})
	$(".js-go-login").click(function() {
		$(".js-form-sigin").fadeOut(500)
		setTimeout(function() {
			$(".js-form-login").fadeIn(500)
		}, 600);
	});
	/* pay-info.html
	 * ============= */
	$(".js-goto-detail").click(function() {
		$(".js-pay-info").fadeOut(500)
		setTimeout(function() {
			$(".js-pay-detail").fadeIn(500)
		}, 600);
	})
	$(".js-goto-info").click(function() {
		$(".js-pay-detail").fadeOut(500)
		setTimeout(function() {
			$(".js-pay-info").fadeIn(500)
		}, 600);
	})
});