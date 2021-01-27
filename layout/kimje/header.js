exports.header = ()=>{
    var template = `
    <header class="header_container">
        <img src="../public/kimje/img/header/content_img.jpg" alt="시작 이미지">
        <div class="header_text_box">
            <img src="../public/kimje/img/header/arrow_icon.png" alt="꺽쇠 아이콘">
            <p>더 알아보기</p>
        </div>
    </header>
    <script>
        $(function(){
            var header_text_box = $('.header_text_box');

            window.setInterval(function(){
                if(header_text_box.css("bottom") != "10px"){
                    header_text_box.css({"bottom":"10px","transitionDuration":"0.9s"});
                }else{
                    header_text_box.css({"bottom":"0px","transitionDuration":"0.9s"});
                }
            },1300);
        });
    </script>
    `
    return template;
}