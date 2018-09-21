$(".product-detail-thumb-image").click(function(){
    var item = $(this).attr("data-item");
    $(".product-detail-image-item").has($(this)).find(".product-detail-big-image").removeClass("active");
    $(".product-detail-image-item").has($(this)).find(".product-detail-big-image[data-item='"+item+"']").addClass("active");
    $(".product-detail-image-item").has($(this)).find(".product-detail-thumb-image").removeClass("active");
    $(".product-detail-image-item").has($(this)).find(".product-detail-thumb-image[data-item='"+item+"']").addClass("active");
});
$(window).scroll(function(){
	var relate_position = $(".relateproduct").offset().top - 400;
    if($(window).scrollTop() >= 550 && $(window).scrollTop()<=relate_position){
        $(".fixed-right-block").addClass("show-right-block");
    }else{
        $(".fixed-right-block").removeClass("show-right-block");
    }
});
