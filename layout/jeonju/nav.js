exports.nav = ()=>{
    var template = `
    <nav class="nav_container">
        <div class="nav_box">
            <a href="/jeonju"><img src="../public/jeonju/img/nav/logo.png" alt="로고 이미지"></a>
            <ul class="menu_box">
                <li><a href="/jeonju/about">펜션소개</a></li>
                <li><a href="/jeonju/room">방 소개</a></li>
                <li><a href="/jeonju/service">서비스</a></li>
                <li><a href="/jeonju/travel">주변여행지</a></li>
                <li><a href="/jeonju/infomation">공지사항</a></li>
            </ul>
        </div>
        <script src="../public/jeonju/js/nav.js"></script>
    </nav>
    `

    return template;
}