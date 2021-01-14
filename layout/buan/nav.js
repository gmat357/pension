exports.nav = ()=>{
    const template = `
    <nav class="nav_container">
    <a href="/" style="position:absolute; top:15px; left:50px; background-color:black; color:white; padding: 10px 20px; border-radius:10px;">메인으로</a>
        <div class="nav_box">
            <a href="/buan"><img src="../public/buan/img/nav/logo.png" alt="로고"></a>
            <div class="menu_box">
                <ul>
                    <li><a href="/buan/about">펜션소개</a></li>
                    <li><a href="/buan/room">객실안내</a></li>
                    <li><a href="/buan/travel ">여행안내</a></li>
                    <li><a href="/buan/reservation">예약안내</a></li>
                    <li><a href="/buan/infomation">게시판</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `
    return template;
}