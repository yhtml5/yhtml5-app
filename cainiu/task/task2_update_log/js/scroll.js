var winHeight=$(window).height();//屏幕高度
var now=0;//当前页
var pageSize=5;//总页数
var scrollFlag=false;//防止滚轮事件连续触发
$(function(){
	//设置全屏
	fullScreen();
	//鼠标滚轮事件
	$('#fullpage').mousewheel(function(event, delta) {
		if (scrollFlag){
			return;	
		}
		fullScroll(delta);
	});
	//第二屏图片轮播
	var slider = Swipe(document.getElementById('slider'), {
		auto: 3000, //设置自动切换时间，单位毫秒
		continuous: true,  //无限循环的图片切换效果
		disableScroll: false,  //阻止由于触摸而滚动屏幕
		stopPropagation: false  //停止滑动事件
		
	});
	//窗口拉伸时,重置全屏
	$(window).resize(function(){
		
		fullScreen();
	});
	//左侧导航切换
	$('.cn_nav li').click(function(){
		var b = $(this).index();
		now=-b;
		screenEvent(b);
	});
	//底部箭头导航切换
	$("#navArrow").on('click',function(){
		var i=$('.cn_nav li.on').index()+1;
		$('.cn_nav li:eq('+i+')').trigger('click');
	});
	//下载按钮浮动显示二维码
	var downTimer;
	$('.download a').on('mouseenter',function(){
		var t=$(this).attr('type');
		clearTimeout(downTimer);
		var _src=t=='iphone'?'images/ewm_0922.png':'images/erweima_android.png';
		$(".ewmbox img").prop('src',_src);
		$(".ewmbox span").text(t+'正式版下载');
		$(".logobox").animate({'margin-left':-9999},800);
		$(".ewmbox").animate({'right':'50%'},600);
	});
	$('.download a').on('mouseleave',function(){
		downTimer=setTimeout(function(){
			$(".logobox").animate({'margin-left':0},300);
			$(".ewmbox").animate({'right':'-200'},200);
		},200);
		
	});
});
//分屏滚动事件
function fullScroll(a){
	var b = now;
	if(a<0){
		if(-b==pageSize-1){
			return;
		}
		b-=1;
	}else if(a>0){
		if(-b==0){
			return;
		}
		b+=1;
	}
	scrollFlag = true;
	var v=-b;
	now = b;
	screenEvent(v);
	setTimeout(function(){
		scrollFlag = false;
	},1000);
}
function screenEvent(v){
	$('.cn_nav li').eq(v).addClass('on').siblings('li').removeClass('on');
	$('.section').removeClass('active');
	setTimeout(function(){
		$('.section:eq('+v+')').addClass('active');
	},200);
	if(v==3){
		$('.circle').addClass('revolving');
		setTimeout(function(){
			$('.circle').removeClass('revolving');
		},2500);
	}
	v==4?$("#navArrow").hide():$("#navArrow").show();
	var single_hh = $(window).height();
	$('.fullpage-wrapper').animate({'bottom': single_hh*v},500);
}

//全屏设置
function fullScreen(){
	var single_hh = $(window).height();
	$('.section').height(single_hh);
	var v=-now;
	$('.fullpage-wrapper').animate({'bottom': single_hh*v},100);
}
