$(function(){
    var left_btn = $('.left');
    var right_btn = $('.right');
    var title_text = $('.room_text > h3');
    var text = ["정읍A","정읍B","정읍C"];
    var room_list = $('.room_right > ul > li');
    var btn_max_val = room_list.length;
    var btn_val = 0;

    function click_fc(btn_val){
        room_list.fadeOut();
        room_list.eq(btn_val).fadeIn();
        title_text.text(text[btn_val]);
    }

    title_text.text(text[btn_val]);
    room_list.eq(btn_val).fadeIn();

    right_btn.on('click', function(){
        btn_val++;
        btn_val %= btn_max_val;
        click_fc(btn_val);
    });
    left_btn.on('click', function(){
        btn_val--;
        if(btn_val < 0){
            btn_val = btn_max_val - 1;
        }
        click_fc(btn_val);
    });

});