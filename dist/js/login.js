$(function(){
	//邮箱账号
	var oInput_accoutn = $(".main").find(".main-in").find(".left").find(".login").find(".account").find("input");
	var oHint = $(".main").find(".main-in").find(".left").find(".login").find(".account").find(".hint");
	oInput_accoutn.on("blur",function(){
		var oVal = oInput_accoutn.val();
		if(!oVal){
			oHint.text("邮箱不能为空 !").css("color","red");
			oInput_accoutn.css("borderColor","#c40452")
			.css("color","#c40452");
		}else if(oVal != /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/){
			oHint.text("请输入格式正确的邮箱 !").css("color","red");
			oInput_accoutn.css("borderColor","#c40452")
			.css("color","#c40452");
		}
	})
	// 密码
	var oInput_word = $(".main").find(".main-in").find(".left").find(".login").find(".password").find("input");
	var oHint_word = $(".main").find(".main-in").find(".left").find(".login").find(".password").find(".hint");
	oInput_word.on("blur",function(){
		var oVal = oInput_word.val();
		if(!oVal){
			oHint_word.text("密码不能为空 !").css("color","red");
			oInput_word.css("borderColor","#c40452")
			.css("color","#c40452");
		}else if(oVal != /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/){
			oHint_word.text("密码只能输入5-20个以字母开头、可带数字、“_”、“.”的字符串 !").css("color","red");
			oInput_word.css("borderColor","#c40452")
			.css("color","#c40452");
		}
	})


	// 登录

	$("#login-btn").click(function(){
		var str = `username=${$("#username").val()}&password=${$("#password").val()}`;
					$.ajax({
						type: "POST",
						url: "test.php?type=login",
						data: str, 
						success: function(data){
							alert(data);
						},
						error: function(msg){
							alert(msg);
						}                                       
					});
	})


	//点击切换背景
	var oA_pithOn = $(".main").find(".main-in").find(".main-content").find(".left").find(".login").find(".remember").find("a:nth-of-type(1)");
	var oHtml = oA_pithOn.html();
		oA_pithOn.on("click",function(){
			if(!oHtml){
				oA_pithOn.css("border","1px solid #c40452").css("color","#c40452");
				oA_pithOn.html("&#xe661;");
			}else{
				oA_pithOn.css("border","1px solid #cfcfcf");
				oA_pithOn.html("");
			}

		})
})