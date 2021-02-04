$(function(){
    var nav_container = $('.nav_container');
    var nav_menu = $(".menu_box > li > a");
    var nav_logo = $('.nav_box > a > img');
    $(window).scroll(function(){
        if(scrollY >= 80){
            nav_container.css({"backgroundColor":"white","transitionDuration":"0.5s"});
            nav_menu.css({"color":"black","transitionDuration":"0.5s"});
            nav_logo.attr('src',"../public/jeonju/img/nav/logo_scroll.png");
        }else if(scrollY < 80){
            nav_container.css({"backgroundColor":"unset","transitionDuration":"0.5s"});
            nav_menu.css({"color":"white","transitionDuration":"0.5s"});
            nav_logo.attr('src',"../public/jeonju/img/nav/logo.png");

        }
    });
});