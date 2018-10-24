$(function(){
	//nav下拉部分
	
	pull_down($("#a1-all"), $(".nav").find(".all"));
	pull_down($("#a2-skin-care"), $(".nav").find(".skin-care"));
	pull_down($("#a3-Makeup"), $(".nav").find(".Makeup"));
	pull_down($("#a4-bath"), $(".nav").find(".bath"));
	pull_down($("#a5-VBYJ"), $(".nav").find(".VBYJ"));
	pull_down($("#a6-man"), $(".nav").find(".man"));
	pull_down($("#a7-Nichijou"), $(".nav").find(".Nichijou"));
	function pull_down(node1, node2){
			ayes(node1,node2);
			dyes(node1,node2);
	}
	function ayes(node1,node2){
			node1.mouseover(function(){
				node2.css("display", "block");
				node1.css("backgroundColor","#fff");
				node1.css("color","#c40452");
			});
			node1.mouseout(function(){
				node2.css("display", "none");
				node1.css("backgroundColor","#c40452");
				node1.css("color","#fff");
			});
		}
		function dyes(node1,node2){
			node2.mouseover(function(){
				node2.css("display", "block");
				node1.css("backgroundColor","#fff");
				node1.css("color","#c40452");
			});
			node2.mouseout(function(){
				node2.css("display", "none");
				node1.css("backgroundColor","#c40452");
				node1.css("color","#fff");
			});
		}
		//选项卡下拉部
		var oH2a = $(".nav").find(".all").find(".h2a");
		var oH2b = $(".nav").find(".all").find(".h2b");
		var oAll = $(".nav").find(".all");
		var oGoods = $(".nav").find(".all").find(".goods");
		var oBrand = $(".nav").find(".all").find(".brand");
		oH2b.mouseover(function(){
			oAll.css("height","460px");
			oH2b.css("borderBottom", "5px solid #c40452");
			oH2a.css("border","none");
			oBrand.css("display","block");
			oGoods.css("display","none");
			oH2b.mouseout(function(){
				oH2a.mouseover(function(){
					oAll.css("height","682px");
					oH2a.css("borderBottom", "5px solid #c40452");
					oGoods.css("display","block");
					oH2b.css("border","none");
				})
			})
		})
		oH2a.mouseover(function(){
			oAll.css("height","682px");
			oH2a.css("borderBottom", "5px solid #c40452");
			oBrand.css("display","none");
			oH2a.mouseout(function(){
				oH2b.mouseover(function(){
					oAll.css("height","460px");
					oH2b.css("borderBottom", "5px solid #c40452");
					oBrand.css("display","block");
					oH2a.css("border","none");
				})
			})
		})

		//banner
	var oAs = $(".blank").find(".blank-in").find("a");
	var oUl = $(".banner").find(".banner-content").find("ul");
	var aLi = oUl.find("li");

	carousel(oAs,oUl,$(".banner-content"),oAs.size(),1423,10000);

	function carousel(node1,node2,node3,num,num2,time){
		var iNow = 0;
		var timer = null;

		timer = setInterval(timerInner, time);

		function timerInner(){
			iNow++;
			tab();
		}

		function tab(){
			if(iNow == node1.size())//返回获取到的元素个数
			{
				node1.attr("calss", "");
				node1.eq(iNow).attr("class", "active");
				node1.eq(0).attr("class", "active");
			}else{
				node1.attr("class", "");
				node1.eq(iNow).attr("class", "active");
			}

			node2.animate({left: iNow * - num2},
				function(){
					if(iNow == num){
						iNow = 0;
						node2.css("left", "0px");
					}
				})
		}

		node1.click(function(){
			iNow = $(this).index();
			tab();
		})
		node3.hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(timerInner, time)
		})
	}


	//logo列表部分
	var oUl_logo = $(".Logo-column").find(".Logo-column-in").find("ul");
	var aLis_logo = oUl_logo.find("li");
	var iNow_logo = 0;

	$.ajax({
		url: "data/index-logo.json",
		type: "GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				var back = (i * 170) + "px";
				$(`<li style = "background:url(${arr[i].logo}) no-repeat;">
						<a href=""></a>
					</li>`).appendTo($(".Logo-column .Logo-column-in ul"));
			}
		},error: function(msg){
			alert(msg);
		} 
	})

	var timer_logo = setInterval(timerinner_logo, 4000);
	function timerinner_logo(){
		iNow_logo += 1,
		tab_logo(oUl_logo,6);
	}
	function tab_logo(node1,num){
		node1.animate({left: iNow_logo * - 1020}, 900,
			function(){
				if(iNow_logo == num){
					iNow_logo = 0;
					node1.css("left", "0px");
				}
			})
	}


	// new-product部分
	
	$.ajax({
		url : "data/product.json",
		type : "GET",
		success : function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li>
					<a href="commodity_details.html" style = "overflow:hidden">
						<img src="${arr[i].img}" alt="i" id = "${arr[i].id}">
					</a>
					<div>
						<h3>${arr[i].title}</h3>
						<a href="">${arr[i].introduce}</a>
						<p>
							<span>${arr[i].price}</span>
						</p>
					</div></li>`).appendTo($(".new-product .new-product-in .content ul"));
			}
		},error : function(msg){
			alert(msg);
		}
	})

	var oAs2 = $(".new-product").find(".new-product-in").find(".new-click").find("div").find("a");
	var oUl2 = $(".new-product").find(".new-product-in").find(".content").find("ul");
	carousel(oAs2,oUl2,$(".content"),2,1169,5000);

	// 大图广告部分
	$.ajax({
		url : "data/advertising.json",
		type : "GET",
		success : function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li>
					<a href="" style = "overflow:hidden">
						<img src="${arr[i].img}" alt="i" id = "${arr[i].id}">
					</a>
					<div>
						<h3>${arr[i].title}</h3>
						<a href="">${arr[i].introduce}</a>
						<p>
							<span>${arr[i].price}</span>
						</p>
					</div></li>`).appendTo($(".banner-advertising .banner-advertising-in .banner-advertising-in-left .banner-advertising-in-left-bottom ul"));
			}
		},error : function(msg){
			alert(msg);
		}
	})

	var oAs3 = $(".banner-advertising").find(".banner-advertising-in").find(".banner-advertising-in-left").find(".banner-advertising-in-left-blank").find(".in").find("a");
	var oUl3 = $(".banner-advertising").find(".banner-advertising-in").find(".banner-advertising-in-left").find(".banner-advertising-in-left-bottom").find("ul");
	carousel(oAs3,oUl3,$(".banner-advertising-in-left-bottom"),3,585,5000);


	//live商品部分
	$.ajax({
		url : "data/live.json",
		type : "GET",
		success : function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li>
					<a href="commodity_details.html" style = "overflow:hidden">
						<img src="${arr[i].img}" alt="i" id = "${arr[i].id}">
					</a>
					<div>
						<h3>${arr[i].title}</h3>
						<a href="">${arr[i].introduce}</a>
						<p>
							<span>${arr[i].price}</span>
						</p>
					</div></li>`).appendTo($(".live .live-in .live-goods ul"));
			}
		},error : function(msg){
			alert(msg);
		}
	})
	//图片变大部分
	
		// whoo后图片变大
		var topa = $(".whoo").find(".whoo-in").find(".whoo-content").find(".top").find(".a1");
		var topimg = topa.find("img");
		var bottoma = $(".whoo").find(".whoo-in").find(".whoo-content").find(".bottom").find(".a1");
		var bottomimg = bottoma.find("img");
		function  Dynamic(node1, node2,num1,num2,num3){
			node1.hover(function(){
				node2.stop().animate({width:num1,height:num2,marginLeft:num3, marginTop:num3},300);
			},function(){
				node2.stop().animate({width:num1 - 20,height:num2 - 20,marginLeft:num3 + 10,marginTop:num3 + 10},300);
			})
		}
		Dynamic(topa,topimg,272,252,-10);
		Dynamic(bottoma,bottomimg,272,252,-10);

		var oNewa1 = $(".new-product").find(".new-product-in").find(".content").find("ul").find("a");
		var oNewm1 = oNewa1.find("img");
		// cnp图片变大
		var oCnpTopa = $(".cnp").find(".cnp-in").find(".cnp-content").find(".top").find("a");
		var oCnpTopimg = oCnpTopa.find("img");
		var oCnpBottoma = $(".cnp").find(".cnp-in").find(".cnp-content").find(".bottom").find("a");
		var oCnpBottomimg = oCnpBottoma.find("img");
		Dynamic(oCnpTopa,oCnpTopimg,272,252,-10);
		Dynamic(oCnpBottoma,oCnpBottomimg,272,252,-10);
		// live图片变大
		var oSua1 = $(".banner-advertising").find(".banner-advertising-in").find(".banner-advertising-in-left").find(".banner-advertising-in-left-content").find("a");
		var oSu1 = oSua1.find("img");
		var oSua2 = $(".banner-advertising").find(".banner-advertising-in").find(".banner-advertising-in-right").find(".banner-advertising-in-right-content").find("a");
		var oSu2 = oSua2.find("img");
		Dynamic(oSua1, oSu1,605,503,-10);
		Dynamic(oSua2, oSu2,605,503,-10)

		//div放大
		// var whooLeft = $(".whoo").find(".whoo-in").find(".whoo-content").find(".left");
		var whooa = $(".whoo").find(".whoo-in").find(".whoo-content").find(".left").find(".lucency");
		var whood = whooa.find(".amplification");
		amplification(whooa,whood)
		function amplification(node1,node2){
			node1.mouseover(function(){
				node1.stop().animate({opacity:0.4},300,"linear");
				node2.stop().animate({width:546,height:404,left:-136,top:-101},300, "linear");
			node1.mouseout(function(){
				node1.stop().animate({opacity:0},300,"linear");
				node2.stop().animate({width:0,height:0,left:0,top:0},300, "linear");
				})
			})
		}
		function color(node1,node3,node4){
			node1.mouseover(function(){
				node3.css("color","#fff");
				node4.css("color","#fff");
				node1.mouseout(function(){
					node3.css("color","rgb(31,31,31)");
					node4.css("color","black");
				})
			})
		}

		var cnpa = $(".cnp").find(".cnp-in").find(".cnp-content").find(".left").find(".lucency");
		var cnpd = cnpa.find(".amplification");
		amplification(cnpa,cnpd)

		var livea1 = $(".live").find(".live-in").find(".live-banner").find(".d1").find(".lucency");
		var lived1 = livea1.find(".amplification");
		var livep1 = $(".live").find(".live-in").find(".live-banner").find(".d1").find(".banner").find("p");
		var liveb1 = $(".live").find(".live-in").find(".live-banner").find(".d1").find(".banner").find("b");
		amplification(livea1,lived1,livep1,liveb1);
		color(livea1,livep1,liveb1);
		var livea2 = $(".live").find(".live-in").find(".live-banner").find(".d2").find(".lucency");
		var lived2 = livea2.find(".amplification");
		var livep2 = $(".live").find(".live-in").find(".live-banner").find(".d2").find(".banner").find("p");
		var liveb2 = $(".live").find(".live-in").find(".live-banner").find(".d2").find(".banner").find("b");
		amplification(livea2,lived2,livep2,liveb2);
		color(livea2,livep2,liveb2);
		var livea3 = $(".live").find(".live-in").find(".live-banner").find(".d3").find(".lucency");
		var lived3 = livea3.find(".amplification");
		var livep3 = $(".live").find(".live-in").find(".live-banner").find(".d3").find(".banner").find("p");
		var liveb3 = $(".live").find(".live-in").find(".live-banner").find(".d3").find(".banner").find("b");
		amplification(livea3,lived3,livep3,liveb3);
		color(livea3,livep3,liveb3);
		var livea4 = $(".live").find(".live-in").find(".live-banner").find(".d4").find(".lucency");
		var lived4 = livea4.find(".amplification");
		var livep4 = $(".live").find(".live-in").find(".live-banner").find(".d4").find(".banner").find("p");
		var liveb4 = $(".live").find(".live-in").find(".live-banner").find(".d4").find(".banner").find("b");
		amplification(livea4,lived4,livep4,liveb4);
		color(livea4,livep4,liveb4);

		var oA_shop = $("#header-content").find("#header-content-in").find(".right").find("a");
		var oCar = $("#header-content").find("#header-content-in").find(".right").find(".shopping-trolley");
		var oDelete = oCar.find(".delete");
		var oNo = oCar.find(".no");
		oDelete.on("click",function(){
			oCar.css("display","none");
		})
		oA_shop.on("click",function(){
			oCar.css("display","block");
		})

		//json图片变大
		var oUl_new = $(".new-product").find(".new-product-in").find(".content").find("ul");
			function blow_json(node1,node2){
				node1.on("mouseover",node2,function(){
					$(this).stop().animate({width:272,height:272,marginLeft:-10, marginTop:-10},300);
					node1.on("mouseout",node2,function(){
						$(this).stop().animate({width:252,height:252,marginLeft:0, marginTop:0},300);
					})
				})
			}
			blow_json(oUl_new,"#0");
			blow_json(oUl_new,"#1");
			blow_json(oUl_new,"#2");
			blow_json(oUl_new,"#3");
			blow_json(oUl_new,"#4");
			blow_json(oUl_new,"#5");
			blow_json(oUl_new,"#6");
			blow_json(oUl_new,"#7");

			var oUl_bottom = $(".banner-advertising").find(".banner-advertising-in").find(".banner-advertising-in-left").find(".banner-advertising-in-left-bottom").find("ul");
			blow_json(oUl_bottom,"#0");
			blow_json(oUl_bottom,"#1");
			blow_json(oUl_bottom,"#2");
			blow_json(oUl_bottom,"#3");
			blow_json(oUl_bottom,"#4");
			blow_json(oUl_bottom,"#5");

			var oUl_live = $(".live").find(".live-in").find(".live-goods").find("ul");
			blow_json(oUl_live,"#0");
			blow_json(oUl_live,"#1");
			blow_json(oUl_live,"#2");
			blow_json(oUl_live,"#3");
			blow_json(oUl_live,"#4");
			blow_json(oUl_live,"#5");
			blow_json(oUl_live,"#6");
})