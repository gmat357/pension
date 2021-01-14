$(function(){
    const room_title = $(".room_title");
    const hands = $(".hands");
    const room_page_btn = $(".room_title > span");
    window.setInterval(function(){
        if(hands.css("bottom") == "170px"){
            hands.css({"bottom":"160px","transitionDuration":"1s"});
        }else{
            hands.css({"bottom":"170px","transitionDuration":"1s"});
        }
    },1000);

    room_page_btn.on("click", function(){
        location.href="/iksan/room_page";
    });

    room_title.each(function(){
        $(this).hover(function(){
            $(this).children("h3").css({"top":"20%","color":"white","transitionDuration":"0.5s"});
            $(this).children("span").css({"top":"130px","opacity":"1","transitionDuration":"0.5s"});
            $(this).next().children(".room_left_bg").css({"left":"-100%","transitionDuration":"0.5s"});
            $(this).next().next().children(".room_right_bg").css({"right":"-100%","transitionDuration":"0.5s"});
            $(this).next().next().next().css({"opacity":"0","transitionDuration":"0.5s"});
        },function(){
            $(this).children("h3").css({"top":"30%","color":"#444444","transitionDuration":"0.5s"});
            $(this).children("span").css({"top":"100px","opacity":"0","transitionDuration":"0.5s"});
            $(this).next().children(".room_left_bg").css({"left":"0","transitionDuration":"0.5s"});
            $(this).next().next().children(".room_right_bg").css({"right":"0","transitionDuration":"0.5s"});
            $(this).next().next().next().css({"opacity":"1","transitionDuration":"0.5s"});
        });
    });
});