/*=========================================================================================
 * Author:Kyle|张大漾
 * Author Website:http://yhtml5.com
 * Author Gihub:https://github.com/yhtml5
 * Description: A Website disgned by boostrap and Jquery.Do something awesome and have fun !
 *==========================================================================================*/


/* General
 * ======= */
$(function() {
	$('.navbar-nav li').click(function() {
		$('.navbar-nav li').removeClass('active');
		$(this).addClass('active');
	});
	$('.pagination li').click(function() {
		$('.pagination li').removeClass('active');
		$(this).addClass('active');
	});
	$('.list-group > a').click(function() {
		$('.list-group > a').removeClass('active');
		$(this).addClass('active');
	});
	$("[data-toggle='popover']").popover();
	//turn
	$(".js-turn").click(function() {
		$(".js-front").fadeOut(500)
		setTimeout(function() {
			$(".js-back").fadeIn(500)
		}, 600);
	})
	$(".js-turn-back").click(function() {
		$(".js-back").fadeOut(500)
		setTimeout(function() {
			$(".js-front").fadeIn(500)
		}, 600);
	});

	function headerNavActive() {
		navId = $(".js-header-nav-active").html();
		if (navId >= 0) {
			$('.js-header-nav').removeClass('active')
			$('.js-header-nav:eq(' + navId + ')').addClass('active')
		}
	}
	headerNavActive();
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
	});
	/* about-us.html
	 * ============= */
	function urlIdActive() {
		var urlId = window.location.hash.replace(/^(.*[n])*.*(.|n)$/g, "$2") - 1;
		if (urlId >= 0) {
			$('.list-group > a').removeClass('active');
			$('.list-group > a:eq(' + urlId + ')').addClass('active').tab('show');
		}
	}
	urlIdActive();
	/* index.html
	 * ============= */
	function loginHide() {
		var loginHide = $(".js-header-nav-active").html();
		console.log(loginHide)
		if (loginHide == 10110) {
			$(".fw-user-nav,.fw-top-bar-login").hide()
		}
	}
	loginHide();
});