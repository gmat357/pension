$(function(){
    var UD_box = $('.UD_box');

    window.setInterval(function(){
        if(UD_box.css('bottom') == "100px")
            UD_box.css({"bottom":"120px","transitionDuration":"1.1s"});
        else if(UD_box.css('bottom') == "120px")
            UD_box.css({"bottom":"100px","transitionDuration":"1.1s"});
    },1200);
});