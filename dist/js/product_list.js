$(function(){
	var oCategory = $(".main").find(".content").find(".left").find(".category");
	var oDown = oCategory.find(".down");
	click(oCategory,oDown,193);
	var oPrice = $(".main").find(".content").find(".left").find(".price");
	var oDown2 = oPrice.find(".down");
	click(oPrice,oDown2,193);
	var oBrand = $(".main").find(".content").find(".left").find(".brand");
	var oDown3 = oBrand.find(".down");
	click(oBrand,oDown3,648);

	function click(node1,node2,num){
		var isNum = 0;
			node1.on("click",function(){
				isNum++;
				if(isNum % 2 == 0){
					node1.animate({height:48},500,function(){
						node2.css("display","none");
					});
				}else{
					node1.animate({height:num},500,function(){
						node2.css("display","block");
					})
				}
			})

	}


	$.ajax({
				url: "data/product_list.json",
				type: "GET",
				success: function(arr){
					for(var i = 0; i < 12; i++){
						$(`<li>	
								<img src="${arr[i].img}" alt="">
								<div class="bottom">
									<p>${arr[i].p}</p>
									<a href="commodity_details.html">	
                                     	${arr[i].a}     
									</a>
									<div class = "price">
										<span>${arr[i].span}</span>
									</div>
									<div class="foot">
										<a href="" class = "iconfont">&#xe6b3;</a>
										<button class = "join-car" id = "${arr[i].id}">加入购物车</button>
									</div>
								</div>
							</li>`).appendTo($(".main .content .right .goods ul"));
				}
			},error: function(msg){
				alert(msg);
			} 
		})
	var oMin = $(".main");
	var oContent = $(".main").find(".content");
	var oRight = oContent.find(".right");
	var oGoods = oRight.find(".goods");
	var oUl_goods = oGoods.find("ul");
	var oA1_show = oRight.find(".header").find(".show").find(".a1");
	var oA2_show = oRight.find(".header").find(".show").find(".a2");
	var oA3_show = oRight.find(".header").find(".show").find(".a3");
	to_load(oA1_show,oMin,oContent,oRight,oGoods,oUl_goods,oA2_show,oA3_show,"1930px","1940px",12);
	to_load(oA2_show,oMin,oContent,oRight,oGoods,oUl_goods,oA1_show,oA3_show,"3670px","3690px",24);
	to_load(oA3_show,oMin,oContent,oRight,oGoods,oUl_goods,oA1_show,oA2_show,"5100px","5300px",36);
	function to_load(node1,node2,node3,node4,node5,node6,node7,node8,num1,num2,num3){
			node1.on("click",function(){
			node6.html("");
			node1.css("color","#c40452");
			node6.css("height",num1);
			node5.css("height",num1);
			node4.css("height",num1);
			node3.css("height",num2);
			node2.css("height",num2);
			node7.css("color","#1f1f1f");
			node8.css("color","#1f1f1f");
			$.ajax({
				url: "data/product_list.json",
				type: "GET",
				success: function(arr){
					for(var i = 0; i < num3; i++){
						$(`<li>	
								<img src="${arr[i].img}" alt="">
								<div class="bottom">
									<p>${arr[i].p}</p>
									<a href="commodity_details.html">	
                                     	${arr[i].a}     
									</a>
									<div class = "price">
										<span>${arr[i].span}</span>
									</div>
									<div class="foot">
										<a href="" class = "iconfont">&#xe6b3;</a>
										<button class = "join_car" id = "${arr[i].id}">加入购物车</button>
									</div>
								</div>
							</li>`).appendTo($(".main .content .right .goods ul"));
				}
			},error: function(msg){
				alert(msg);
			} 
		})
		})
	}



	//购物车部分
		var oA_shop = $("#header-content").find("#header-content-in").find(".right").find("a");
		var oCar = $("#header-content").find("#header-content-in").find(".right").find(".shopping-trolley");
		var oTop = oCar.find(".top");
		var oDelete = oCar.find(".delete");
		var oNo = oCar.find(".no");
		var oGoods = $(".main").find(".content").find(".right").find(".goods");
		oDelete.on("click",function(){
			oCar.css("display","none");
		})
		oA_shop.on("click",function(){
			oCar.css("display","block");
			goods_msg();
			goods_car("#header-content #header-content-in .right .shopping-trolley .top .header");
		})

		var first_show = $.cookie("goods") == null ? true : false;
				
				if(!first_show){
					oNo.css("display","none");
					oCar.css("height","280px");
					oCar.find(".bottom").css("display","block").css("height","140px");
					oTop.css("display","block");
				}else{
					oNo.css("display","block");
					oCar.find(".bottom").css("display","none");
					oTop.css("display","none");
				}
		//给购物车添加商品
		goods_car("#header-content #header-content-in .right .num");
		oGoods.on("click",".join-car",function(){
				oCar.css("display","none");
				var id = this.id;
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					$.cookie("goods",`[{id:${id},num:1}]`,{
						raw : true,
						expires : 7
					});
				}else{
					goods_msg();
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);
					var same = false;
					for(var i = 0 ; i < arr.length; i++){
						if(arr[i].id == id){
							arr[i].num++;
							same = true;
							break;
						}
					}
					if(!same){
						var obj = {id:id,num:1};
						arr.push(obj);
					}$.cookie("goods",JSON.stringify(arr),{
						raw : true,
						expires : 7
					})
				}
				goods_car("#header-content #header-content-in .right .shopping-trolley .top .header");
				goods_car("#header-content #header-content-in .right .num");
			})
			//加载已经加入购物车的商品
			function goods_msg(){
				$.ajax({
					url: "data/product_list.json",
					type: "GET",
					success: function(res){
						var arr = eval($.cookie("goods"));
						var html = "";
						for(var i = 0; i < arr.length; i++){
							html += `
						<div class="bottom-in">
							<a class = "title"
							href="#">${res[arr[i].id].a}</a>
							<div class="left">
								<img src="${res[arr[i].id].img}" alt="">
							</div>
							<div class="top-right">
								<span>
									￥ 657.00
								</span>
								<p>数量 :</p>
								<input
								value = "${arr[i].num}" type="text">
							</div>
							<div class="foot-right">
								<span>编辑</span>
								<span id = "${arr[i].id}">删除</span>
							</div>
						</div>`;
						}
						$("#header-content #header-content-in .right .shopping-trolley .bottom").html(html);
					}
				})
			}
			//删除商品
		/*	var oBottom_car = $("#header-content").find("#header-content-in").find(".right").find(".shopping-trolley").find(".bottom");
			oBottom_car.on("click","#0",function(){
				var first = $.cookie("goods") == null ? true : false;
				if(first){
				}else{
					goods_msg();
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);
					for(var i = 0 ; i < arr.length; i++){
						if(arr[i].num == 1){
							$(this).parent().parent("div").remove();
						}else{
							if(arr[i].id == id){
								arr[i].num--;
								same = true;
								break;
							}
						}
					}
				}
			})*/


			//购物车数字
			function goods_car(node){
				var sc_str = $.cookie("goods");
				if(sc_str){
					var sc_arr = eval(sc_str);
					var sum = 0;
					for(var i = 0; i < sc_arr.length; i++){
						sum += sc_arr[i].num;
					}
					$(node).html(sum);
				}
			}
	

})