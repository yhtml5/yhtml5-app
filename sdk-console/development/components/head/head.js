/*=========================================================================================
 * Author:Kyle|张大漾
 * Author Website:http://yhtml5.com
 * Author Gihub:https://github.com/yhtml5
 * Description: A Website disgned by boostrap and Jquery.Do something awesome and have fun !
 *==========================================================================================*/

/* General
 * ======= */
var y = $.noConflict()
y(function() {
	y('.list-group a').click(function() {
		y('.list-group a').removeClass('active')
		y(this).addClass('active')
	})
	y('.nav .y-active').click(function() {
		y('.nav .y-active').removeClass('active')
		y(this).addClass('active')
	})
	y('.j-dashboard-breadcrumb .j-app li').click(function() {
		y('.j-dashboard-breadcrumb .j-app li').removeClass('active')
		y(this).addClass('active')
	})
	y('.j-dashboard-breadcrumb .j-function li').click(function() {
		y('.j-dashboard-breadcrumb .j-function li').removeClass('active')
		y(this).addClass('active')
	})
	y('.j-dashboard-header-function .dropdown-menu a').click(function() {
		var a = y(this).text()
		y('.j-dashboard-header-function span').text(a)
	})
	y('.j-dashboard-header-app .dropdown-menu a').click(function() {
		var a = y(this).text()
		y('.j-dashboard-header-app span').text(a)
	})
	y(".y-app-add-create").on('click', function() {
		var btn = y(this).button('loading')
			//business logic
		setTimeout(function() {
			btn.button('reset')
		}, 1000)
	})
	y(".y-member-add-create").on('click', function() {
		var btn = y(this).button('loading')
			//business logic
		setTimeout(function() {
			btn.button('reset')
		}, 1000)
	})
	y(".y-member-delete-create").on('click', function() {
		var btn = y(this).button('loading')
			//business logic
		setTimeout(function() {
			btn.button('reset')
		}, 1000)
	})
	y(".y-member-password-reset-create").on('click', function() {
		var btn = y(this).button('loading')
			//business logic
		setTimeout(function() {
			btn.button('reset')
		}, 1000)
	})

	function yDashboardPaymentFilter() {
		var a = y('.y-dashboard-payment-filter').width()

		function small() {
			y('.y-dashboard-payment-filter .j-date').text("日期")
			y('.y-dashboard-payment-filter .j-pay').text("支付")
			y('.y-dashboard-payment-filter .j-settlement').text("结算")
			y('.y-dashboard-payment-filter .j-channel').text("渠道")
		}

		function big() {
			y('.y-dashboard-payment-filter .j-date').html("选择日期&nbsp;")
			y('.y-dashboard-payment-filter .j-pay').html("支付状态&nbsp;")
			y('.y-dashboard-payment-filter .j-settlement').html("结算状态&nbsp;")
			y('.y-dashboard-payment-filter .j-channel').html("全部渠道&nbsp;")
		}
		if (a < 388) {
			small()
		}
		y(window).resize(function() {
			var w = y('.y-dashboard-payment-filter').width()
			if (w < 388) {
				small()
			} else {
				big()
			}
			console.log(w)
			console.log("不要调皮地频繁调节窗口")
		})
	}
	yDashboardPaymentFilter()

	function yExpandTable() {
		var tbody = y('.y-member tbody,.y-dashboard-payment tbody').html()
		for (var i = 0; i < 9; i++) {
			y('.y-member tbody,.y-dashboard-payment tbody').append(tbody)
		}
	}
	yExpandTable();
	y('.y-member-none').hover(function() {
		y(this).fadeOut()
			//loading date logic
		setTimeout(function() {
			y('.y-member-table').fadeIn()
		}, 800)
	})
	y("[data-toggle='popover']").popover()
})