
(function() {

	//qq&weixin
	var fliterTimer;
	$(".show_fliter").on('mouseenter',function(){
		clearTimeout(fliterTimer);
		var me=$(this);
		me.find('div').fadeIn(200);
	});
	$(".show_fliter").on('mouseleave',function(){
		var me=$(this);
		fliterTimer=setTimeout(function(){
			$(".show_fliter").find('div').fadeOut(200);
		},300); 
	});
	//hr岗位说明弹窗
	$('.close').on('click',function(){
		$(this).parents('.marker').hide();
	})
	$(".sosts li").on('click',function(){
		var o=$(this);
		var type=o.attr('data-sost');
		$('.marker[data-sost="'+type+'"]').show();
	});
})();

var sost_slide={
	index:0,
	length:$(".sosts li").length,
	next:function(){
		$(".sosts ul").animate({'margin-left':-410*this.index})
	},
	init:function(){
		var right=$('.sost_right');
		var left=$('.sost_left');
		if(this.length>3){
			right.removeClass('none');
		}
		right.on('click',function(){
			if(right.hasClass('none')){
				return false;
			}
			sost_slide.index++;
			sost_slide.next();
			
			left.removeClass('none');
			if(sost_slide.length<=(sost_slide.index+3)){
				right.addClass('none');
			}
		});
		left.on('click',function(){
			if(left.hasClass('none')){
				return false;
			}
			sost_slide.index--;
			sost_slide.next();
			right.removeClass('none');
			
			if(sost_slide.index==0){
				left.addClass('none');
			}
		});
	}
}