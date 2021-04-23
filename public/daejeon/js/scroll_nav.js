document.addEventListener('scroll', function () {
  var scroll = document.documentElement.scrollTop;
  if (scroll >= 100) {
    $(".navi").css({
      "background-color": "rgb(56, 34, 4)",
    });
  }
  else {
    $(".navi").css({
      "background-color": "rgba(0.4, 0.4, 0.4, 0.3)",
    });
  }
});