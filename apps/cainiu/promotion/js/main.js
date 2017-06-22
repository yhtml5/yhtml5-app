define(function (require, exports, module)  {
	var tool=require('../js/tool');
	var glume=require('../js/banner');
	module.exports={
		loginIn:function(){
			var phone=$("#tel").val();
			var pwd=$("#password").val();
			tool.ajax('/promote/login',{loginName:phone,password:pwd},function(d){
				if(d.code==200){

				}
			})
		},
		loginOut:function(){
			tool.ajax('/promote/unlogin',{},function(d){
				if(d.code==200){

				}
			});
		},
		init:function(){
			// //导航选中效果
			// $(".nav ul li").click(function(){
			// 	$(this).children("a").addClass("nav_click");
			// 	$(this).siblings().children("a").removeClass("nav_click");
			// })
			// $(".nav ul li:first-child").children("a").addClass("nav_click");
			//商户选中效果
			$(".sum_ul li").click(function(){
				$(this).children("a").addClass("sum_ulclick");
				$(this).siblings().children("a").removeClass("sum_ulclick");
			})
			//点击登录后效果
			$(".user_text").click(
				function () {
					$(".login-out").hide();
					$(".login-in").show();
				}
			);
			//点击登录后效果
			$(".exit-text").click(
				function () {
					$(".login-out").show();
					$(".login-in").hide();
				}
			);

			//底部icon鼠标经过信息
			$('.qq-icon').hover(
				function () {
					$(this).siblings('.icon-hover').show(100);
				}
			);
			$('#hoverweixin').hover(
				function () {
					$(this).siblings('.icon-hover-weixin').show();
					$('.icon-hover').hide(100);
				},
				function () {
					$(this).siblings('.icon-hover-weixin').hide(500);
				}
			);
			var player1 = new glume('glume');
		}
	}

});


