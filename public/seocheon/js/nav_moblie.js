
var hiddenDiv = $(".mobile_menu");
var viewBtn = $(".moblie_icon");
$(function () {
    viewBtn.on("click", function () {
        hiddenDiv.css("right") == "0px" ? slider(-105, 0,) : slider(0, 0);
    });
    function slider() {
        arguments[2] = arguments[2] ? arguments[2] : 0;
        hiddenDiv.css({
            "right": arguments[0] + "px",
            "transitionDuration": "1.0s"
        })
        viewBtn.parent(".bg_text").css({
            "right": arguments[2] + "%",
            "transitionDuration": "1.0s"
        });
    };
});
