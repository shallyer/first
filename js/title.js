$(document).ready(function(){
	$("li").click(function() {
		var num = $(this).attr("data-menuanchor");
		for(var i = 0; i < num; i++) {
			swiper.slideTo(i, 1000, true);
		}
		alert(num)
		$("li").removeClass("active");
		$($("li").children("a")).css("color", "#ccc");
		$($(this).children("a")).css("color", "#00dfb9");
		$(this).addClass("active");
	});
})
