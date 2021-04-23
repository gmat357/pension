var onOff = {
    on: 50,
    off: -100,
    position: "left",
    // onOff.on = 50;
    // onOff.off = -100;
    // onOff.position ="left";
};

$(function () {
    $(window).load(function () {

        //서브페이지 효과
        var mapBtn = $('.map_btn');
        var mapWrap = $('.map_wrap');
        var mapXBtn = $('.x_btn');
        var roomSubBtn = $('.contents_li');
        var roomSubPage = $('.room_sub');
        var roomXBtn = $('.xBtn');
        var special_subBtn = $('.deg_box');
        var specialXBtn = $('.special_xBtn');
        var special_subPage = $('.special_sub1');

        //네비게이션
        var moblie_menu = $('.hidden');
        var menu_btn = $('.menu_btn');
        var logo = $('.logo')
        var nav_about = $(".nav1");
        var nav_map = $(".nav2");
        var nav_room = $(".nav3");
        var nav_special = $(".nav4");
        var nav_cummunity = $(".nav5");
        function navPageOnOff(percent, movePosition, panel) {
            panel.css({
                "left": percent + "%",
                "transitionDuration": "1s",
            });

        };

        //서브페이지
        mapBtn.on("click", function () {
            navPageOnOff(onOff.on, onOff.position, mapWrap);
        });
        mapXBtn.on("click", function () {
            navPageOnOff(onOff.off, onOff.position, mapWrap);
        });

        roomSubBtn.on("click", function () {

            navPageOnOff(onOff.on, onOff.position, roomSubPage);
        });
        roomXBtn.on("click", function () {
            navPageOnOff(onOff.off, onOff.position, roomSubPage);
        });
        special_subBtn.on("click", function () {
            navPageOnOff(onOff.on, onOff.position, special_subPage);
        });
        specialXBtn.on("click", function () {
            navPageOnOff(onOff.off, onOff.position, special_subPage);
        });


        //네비게이션
        menu_btn.on("click", function () {
            moblie_menu.height() == 300 ? upAndDown(0) : upAndDown(300);
            function upAndDown(value) {
                moblie_menu.css({
                    "height": value + "px",
                    "transitionDuration": "0.8s",
                });
            }
        });
        logo.on("click", function () {
            fullpage.moveTo(1);
        });
        nav_about.on("click", function () {
            navPageOnOff(onOff.off, onOff.position, mapWrap);
            fullpage.moveTo(2);
        });
        nav_map.on("click", function () {
            navPageOnOff(onOff.on, onOff.position, mapWrap);
            fullpage.moveTo(2);
        });
        nav_room.on("click", function () {
            fullpage.moveTo(3);
        });
        nav_special.on("click", function () {
            fullpage.moveTo(4);
        });
        nav_cummunity.on("click", function () {
            fullpage.moveTo(5);
        });




    });
});