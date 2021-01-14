$(function(){
    let slide_container = $(".swiper-slide");
    let one_slide = $(".swiper-slide").eq(0);
    let two_slide = $(".swiper-slide").eq(1);
    $(slide_container).mousemove(function(){
        if(one_slide.hasClass("swiper-slide-active")){
            one_slide.children("h3").fadeIn(1000);
        }else{
            one_slide.children("h3").fadeOut();
        }

        if(two_slide.hasClass("swiper-slide-active")){
            two_slide.children(".content_right").animate({"margin":"0"},1000);
        }
    })
})