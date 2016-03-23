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
		//点击更新文字
	y('.j-dashboard-header-function .dropdown-menu a').click(function() {
		var a = y(this).text()
		y('.j-dashboard-header-function span').text(a)
	})
	y('.j-dashboard-header-app .dropdown-menu a').click(function() {
		var a = y(this).text()
		y('.j-dashboard-header-app span').text(a)
	})
	y('.y-dashboard-payment-filter .j-menu-date a').click(function() {
		var a = y(this).text()
		y('.y-dashboard-payment-filter .j-date').text(a)
	})
	y('.y-dashboard-payment-filter .j-menu-pay a').click(function() {
		var a = y(this).text()
		y('.y-dashboard-payment-filter .j-pay').text(a)
	})
	y('.y-dashboard-payment-filter .j-menu-settlement a').click(function() {
		var a = y(this).text()
		y('.y-dashboard-payment-filter .j-settlement').text(a)
	})
	y('.y-dashboard-payment-filter .j-menu-channel a').click(function() {
			var a = y(this).text()
			y('.y-dashboard-payment-filter .j-channel').text(a)
		})
		//按钮点击等待逻辑
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
	y("[data-js='send-message']").on('click', function() {
		var btn = y(this).button('loading')
			//business logic
		setTimeout(function() {
			btn.button('reset')
		}, 1000)
	})
	y(".y-dashboard-set-update").on('click', function() {
			var btn = y(this).button('loading')
				//business logic
			setTimeout(function() {
				btn.button('reset')
			}, 1000)
		})
		//弹窗显示删除中 display

	function btnLoadingReset() {
		setInterval(function() {
			a = y("[data-modal='dashboard-delete']").css("display")
			if (a == "none") {
				y("[data-js='dashboard-delete']").button('loading').button('reset')
			}
		}, 500)
	}
	btnLoadingReset()
	y("[data-js='dashboard-delete']").on('click', function() {
		var btn = y(this).button('loading')
			//business logic
	})

	function yDashboardPaymentFilter() {
		var a = y('.y-template-panel').width()
		var b = 450

		function small() {
			y('.y-dashboard-payment-filter .j-date').text("日期")
			y('.y-dashboard-payment-filter .j-pay').text("支付")
			y('.y-dashboard-payment-filter .j-settlement').text("结算")
			y('.y-dashboard-payment-filter .j-channel').text("渠道")
		}

		function big() {
			y('.y-dashboard-payment-filter .j-date').html("选择日期")
			y('.y-dashboard-payment-filter .j-pay').html("支付状态")
			y('.y-dashboard-payment-filter .j-settlement').html("结算状态")
			y('.y-dashboard-payment-filter .j-channel').html("全部渠道")
		}
		if (a < b) {
			small()
		}
		y(window).resize(function() {
			var c = y('.y-template-panel').width()
			if (c < b) {
				small()
			} else {
				big()
			}
			console.log(c)
			console.log("不要调皮地频繁调节窗口")
		})
	}
	//	yDashboardPaymentFilter()
	y(window).resize(function() {
		console.log("不要调皮地频繁调节窗口")
	})

	function yExpandTable() {
		var tbody = y('[data-page="canal-manage"] tbody,.y-dashboard-payment tbody').html()
		for (var i = 0; i < 9; i++) {
			y('[data-page="canal-manage"] tbody,.y-dashboard-payment tbody').append(tbody)
		}
	}
	yExpandTable();
	y('[data-toggle="y-hover-show"]').hover(function() {
		y(this).fadeOut()
			//loading date logic
		setTimeout(function() {
			y('[data-toggle="y-hover-shown"]').fadeIn()
		}, 800)
	})
	y("[data-toggle='popover']").popover()

	function urlIdActive() {
		var urlId = window.location.hash.replace(/^(.*[n])*.*(.|n)$/g, "$2") - 1;
		console.log("请不要调皮，在这里测试即将导致系统崩溃")
		if (urlId >= 0) {
			y('.y-template-dashboard .tab-pane').removeClass('active in');
			y('.y-template-dashboard .tab-pane:eq(' + urlId + ')').addClass('active in').tab('show');
		}
	}
	urlIdActive();
})