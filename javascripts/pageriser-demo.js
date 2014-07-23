(function ( $ ) {
	//accessibility tweaks - make tabbing go through pages rather than individual items
	$.fn.slickPages = function() {
		var carousel = $(this);
		carousel.find(".slick-cloned a").attr("tabindex", "-1");
		carousel.find(".slick-slide").each(function(index,obj) {
			var slide = $(obj);
			slide.attr("data-slick-slideNum",index);
			slide.find("a").focus(function(event) {
				var focus = parseInt(slide.attr("data-slick-slideNum"), 10);
				var pageSize = carousel.slickGetOption("slidesToShow")
				var pos = focus - focus%pageSize;
				carousel.slickGoTo(pos);
			});
		});
		return carousel;
	}
	$("#theParent").pagerise({pageRows:2,pageCols:5}).slick({
		accessiblity: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		infinite: false,
	}).slickPages();
}( jQuery ));
