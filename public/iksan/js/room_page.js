$(function(){
    const content_text = $('.content_text > .text_box > h3');
    const content_text_after = $('.content_text > .text_box');
    // console.log(content_text_after);
    let text_array = "HOTEL CLASS ROOMS PREVIEW";
    let cnt = 0;
    let max_cnt = 0;
    window.setInterval(function(){
        if(cnt < text_array.length && max_cnt == 0){
            content_text.append(text_array[cnt]);
            content_text_after.css({"width":30 + (cnt*20) + "px"});
            cnt++;
            if(cnt == text_array.length){
                max_cnt = text_array.length + 1;
            }
        }else{
            window.setTimeout(function(){
                if(max_cnt > 0){
                    max_cnt--;
                    content_text.text(text_array.slice(0,max_cnt));
                    content_text_after.css({"width":20 + (cnt*20) + "px"});
                    cnt--;
                }
            },1000);
        }
    },100);
});