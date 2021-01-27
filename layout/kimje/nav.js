exports.nav = ()=>{
    var template = `
    <nav class="nav_container">
        <a href="/kimje"><img src="../public/kimje/img/nav/logo.png" alt="로고" class="logo"></a>
        <img src="../public/kimje/img/nav/menu_icon.png" alt="메뉴 아이콘" class="menu">
    </nav>
    <div class="submenu_container">
        <img src="../public/kimje/img/nav/cross_icon.png" alt="닫기 버튼" class="close_btn">
        <ul>
            <li><a href="/kimje/about">펜션소개</a></li>
            <li><a href="/kimje/room">객실소개</a></li>
            <li><a href="/kimje/service">서비스소개</a></li>
            <li><a href="/kimje/travel">주변관광지</a></li>
            <li><a href="/kimje/infomation">공지사항</a></li>
        </ul>
    </div>
    <script>
        $(function(){
            var nav_container = $(".nav_container");
            var menu_btn = $(".menu");
            var submenu_container = $(".submenu_container");
            var close_btn = $(".close_btn");
            menu_btn.on("click", function(){
                submenu_container.fadeIn();
                $("body").css("overflow-y","hidden");
            });

            close_btn.on("click", function(){
                submenu_container.fadeOut();
                $("body").css("overflow-y","unset");
            });

            $(window).scroll(function(){
                if(scrollY >= 80){
                    nav_container.css({"backgroundColor":"white","transitionDuration":"0.5s"});
                }else if(scrollY < 80){
                    nav_container.css({"backgroundColor":"unset","transitionDuration":"0.5s"});
                }
            });
        });
    </script>
    `
    return template;
}