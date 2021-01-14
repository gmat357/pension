$(function(){
    let slide_container = $(".swiper-slide");
    $(slide_container).mousemove(function(){
        if($(this).hasClass("swiper-slide-active")){
            $(this).children("h3").fadeIn(1000);
        }else{
            slide_container.children("h3").fadeOut();
        }
    })
})