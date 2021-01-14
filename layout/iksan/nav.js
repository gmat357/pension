exports.nav = ()=>{
    const template = `
    <a href="/" style="position:absolute; top:45px; left:50px; background-color:black; color:white; padding: 10px 20px; border-radius:10px;">메인으로</a>
    <nav class="nav_container">
        <div class="nav_box">
            <div class="nav_left">
                <ul>
                    <li><a href="/iksan/welcome">WELCOME</a></li>
                    <li><a href="/iksan/room">ROOM</a></li>
                    <li><a href="/iksan/service">SERVICE</a></li>
                </ul>
            </div>
            <div class="nav_logo">
                <a href="/iksan"><img src="../public/iksan/img/nav/logo.png" alt="로고"/></a>
            </div>
            <div class="nav_right">
                <ul>
                    <li><a href="/iksan">RESERVE</a></li>
                    <li><a href="/iksan/community">COMMUNITY</a></li>
                    <li><a href="/iksan">SNS</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `

    return template;
}