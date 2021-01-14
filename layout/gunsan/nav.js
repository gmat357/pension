exports.nav = ()=>{
    const template = `
    <nav class="menu_container">
        <ul>
            <li><a href="/gunsan/about">펜션소개</a></li>
            <li><a href="/gunsan/room">객실소개</a></li>
            <li><a href="/gunsan/service">서비스</a></li>
            <li><a href="/gunsan/travel">관광지</a></li>
            <li><a href="/gunsan/infomation">고객센터</a></li>
        </ul>
        <div class="logo_box">
            <a href="/gunsan"><img src="../public/gunsan/img/nav/logo.png" alt="로고"/></a>
        </div>
        <div class="reservation_box">
            <a href="/"><div>메인으로</div></a>
        </div>
    </nav>
    `

    return template;
}