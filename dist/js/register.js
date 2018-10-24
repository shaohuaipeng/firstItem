$(function(){
	var oRed_surname = $(".main").find(".main-in").find(".left").find(".surname").find(".red");
	var oInput_surname = $(".main").find(".main-in").find(".left").find(".surname").find("input");
	isChinese(oInput_surname,oRed_surname);

	function isChinese(node1,node2){
		node1.on("blur",function(){
			var oVal = node1.val();
			if(!oVal){
				node2.html("不能为空 ！");
				node1.css("borderColor","#c40452")
				.css("color","#c40452");
			} 
			else if(oVal == /^[u4E00-u9FA5]+$/){
				node2.html("输入正确").css("color","green");
				node1.css("borderColor","green")
				.css("color","green");
			}else{
				node2.html("必须为中文 ！");
				node1.css("borderColor","#c40452")
				.css("color","#c40452");
			}
		})
	}

	var oRed_name = $(".main").find(".main-in").find(".left").find(".name").find(".red");
	var oInput_name = $(".main").find(".main-in").find(".left").find(".name").find("input");
	isChinese(oInput_name,oRed_name);

	// 手机号
	var oRed_phone = $(".main").find(".main-in").find(".left").find(".phone_number").find(".red");
	var oInput_phone = $(".main").find(".main-in").find(".left").find(".phone_number").find("input");
	oInput_phone.on("blur",function(){
			var oVal = oInput_phone.val();
			if(!oVal){
				oRed_phone.html("不能为空 ！");
				oInput_phone.css("borderColor","#c40452")
				.css("color","#c40452");
			} 
			else if(oVal = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/){
				oRed_phone.html("输入正确").css("color","green");
				oInput_phone.css("borderColor","green")
				.css("color","green");
			}else{
				oRed_phone.html("请输入正确格式的手机号 ！");
				oInput_phone.css("borderColor","#c40452")
				.css("color","#c40452");
			}
		})

	//邮箱
	var oInput_email = $(".main").find(".main-in").find(".right").find(".email").find("input");
	var oHint_email = $(".main").find(".main-in").find(".right").find(".email").find(".hint");
	oInput_email.on("blur",function(){
		var oVal = oInput_email.val();
		if(!oVal){
			oHint_email.text("邮箱不能为空 !").css("color","red");
			oInput_email.css("borderColor","#c40452")
			.css("color","#c40452");
		}else if(oVal != "/^(\w-.)+@(\w-?)+(.\w{2,})+$/"){
			oHint_email.text("输入正确").css("color","green");
			oInput_email.css("borderColor","green")
			.css("color","green");
		}else{
			oHint_email.text("请输入格式正确的邮箱 !").css("color","red");
			oInput_email.css("borderColor","#c40452")
			.css("color","#c40452");
		}
	})


	//注册
	//
	// .main .main-in .right .register
				$("#register-btn").click(function(){
					var str = `username=${$("#username_register").val()}&password=${$("#password_register").val()}&repassword=${$("#repassword").val()}`;
					ajax({
						type: "POST",
						url: "test.php?type=register",
						data: str,
						success: function(data){
							alert(data);
						},
						error: function(msg){
							alert(msg);
						}
					});
				})
})