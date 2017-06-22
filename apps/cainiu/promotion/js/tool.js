define(function (require, exports, module) {
	var d=require('../js/dialog');
	module.exports={
		ajax:function(url,data,callBack,type){
		    $.ajax({
		        type:type||'GET',
		        url:url,
		        data:data,
		        dataType:'json',
		        success:function(res){
		            if(callBack)callBack(res);
		        },
		        error:function(XMLHttpRequest, textStatus, errorThrown) {
		         	d({
						content: '服务器连接失败',
					}).show();
		        },
		    });
		},
		checkPhone:function(v){
			var reg=/^1[3|4|5|8|7]\d{9}$/;
			if(!reg.test(v)){
				$("#phone_error").show();
				return false;
			}else{
				$("#phone_error").hide();
			}
		},
		checkPwd:function(v){
			//var reg=/((?=.*\\d)(?=.*\\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{8,16}$/g;
			if(v.length<6){
				$("#pwd_error").show();
				return false;
			}else{
				$("#pwd_error").hide();
			}
		}
	}

});