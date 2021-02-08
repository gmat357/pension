exports.nav = ()=>{
    var template = `
    <nav class="nav_container">
        <ul>
            <li><a href="/jeongeup/about">펜션소개</a></li>
            <li><a href="/jeongeup/room">객실안내</a></li>
            <li><a href="/jeongeup/service">서비스</a></li>
            <li><a href="/jeongeup/travel">주변관광지</a></li>
            <li><a href="/jeongeup/infomation">공지사항</a></li>
        </ul>
    </nav>
    `

    return template;
}