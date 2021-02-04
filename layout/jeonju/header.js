exports.header = ()=>{
    var template = `
    <header class="header_container">
        <img src="../public/jeonju/img/slide/slide2.jpg" alt="메인 배너">
        <div class="text_box">
            <h3>JEONJU PENSION</h3>
            <p>전주의 아름다움이 함께한 전주펜션에서</p>
            <p>특별한 시간을 만들어가세요.</p>
            <a href="/jeonju/room">ROOM MORE > </a>
        </div>
        <div class="UD_box">
            <img src="../public/jeonju/img/slide/arrow_icon.png" alt="화살표아이콘">
            <h4>SCROLL VIEW</h4>
        </div>
        <script src="../public/jeonju/js/header.js"></script>
    </header>
    `
    return template;
}