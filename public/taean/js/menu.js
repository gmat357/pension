var onOff = {
    on: 0,
    off: 100,
    position: "top",
}
$(function () {
    $(window).load(function () {

        var menuBtn = $('.menu_btn');
        var navOff = $('.x_btn');
        var navPage = $('.navi');

        function navPageOnOff(percent, movePosition) {
            if (movePosition == "right") {
                navPage.css({
                    "right": percent + "%",
                    "transitionDuration": "1s",
                });
            }
            else {
                navPage.css({
                    "top": percent + "%",
                    "transitionDuration": "1s",
                });
            }
        };


        menuBtn.on("click", function () {
            navPageOnOff(onOff.on, onOff.position);
        });
        navOff.on("click", function () {
            navPageOnOff(onOff.off, onOff.position);
        });

    });
});