//自定义扩展

//$.myjq = function() {
//	alert("Hello myjQuery")
//}
//
//$.fn.myjq = function() {
//	$(this).text("Hello")
//}

$(function() {
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
})