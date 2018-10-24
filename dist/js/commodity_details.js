$(function(){
	var oImg_left = $(".main").find(".main-in").find(".goods").find(".left");
	var oLittle = $(".main").find(".main-in").find(".goods").find(".magnifying-glass-little");
	var oBig = $(".main").find(".main-in").find(".goods").find(".magnifying-glass-big");

	oImg_left.mouseover(function() {
   	 	oLittle.show()
    	oBig.show()
	})
	oImg_left.mouseout(function() {
    	oLittle.hide()
    	oBig.hide()
	})

oImg_left.mousemove(function(e) {
    var l = e.pageX - oLittle.offset().left - (oLittle.width() / 2)
    var t = e.pageY - oLittle.offset().left - (oLittle.height() / 2)
    if (l < 0) {
        l = 0
    }
    if (l > $(this).width() - oLittle.width()) {
        l = $(this).width() - oLittle.width()
    }
    if (t < 0) {
        t = 0
    }
    if (t > $(this).height() - oLittle.height()) {
        t = $(this).height() - oLittle.height()
    }

    oLittle.css({
        left: e.pageX - oLittle.width() - (oLittle.width() / 2),
        top: e.pageY - oLittle.height()
    })
    var pX = (e.pageX - oLittle.width() - (oLittle.width() / 2)) / (oImg_left.width() - oLittle.width())
    var pY = (e.pageY - oLittle.height()) / (oImg_left.height() - oLittle.height())
    oBig.find("img").css({
        left: -pX * (oBig.find("img").width() - oBig.width()),
        top: -pY * (oBig.find("img").height() - oBig.height())
   	 })

    })

})