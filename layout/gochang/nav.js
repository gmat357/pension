exports.nav = ()=>{
    var template = `
    <nav class="nav_container">
        <div class="nav_box">
            <div class="logo_box">
                <a href="/gochang"><img src="../public/gochang/img/nav/logo.png" alt="로고"></a>
            </div>
            <ul class="menu_box">
                <li><a href="/gochang/about">펜션소개</a></li>
                <li><a href="/gochang/room">객실소개</a></li>
                <li><a href="/gochang/service">서비스</a></li>
                <li><a href="/gochang/travel">주변관광지</a></li>
                <li><a href="/gochang/infomation">공지사항</a></li>
            </ul>
        </div>
    </nav>
    `

    return template;
}