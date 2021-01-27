exports.content = ()=>{
    var template = `
    <main class="main_container">
        <article class="one_content_box">
            <div class="one_content_title_box">
                <h3>"김제" 펜션</h3>
                <p>깨끗하고 친절한 바다보기 펜션!<br>포근하고 아늑한 공간, 특별하고 기분 좋은 여행</p>
            </div>
            <div class="one_content_menu">
                <ul>
                    <a href="/kimje/travel">
                        <li>
                            <img src="../public/kimje/img/main/scenery.jpg" alt="메뉴 이미지">
                            <h3>외부 풍경</h3>
                            <p>김제 펜션의 풍경을 소개합니다.</p>
                        </li>
                    </a>
                    <a href="/kimje/room">
                        <li>
                            <img src="../public/kimje/img/main/room.jpg" alt="메뉴 이미지">
                            <h3>객실 보기</h3>
                            <p>김제 펜션의 객실을 소개합니다.</p>
                        </li>
                    </a>
                    <a href="/kimje/service">
                        <li>
                            <img src="../public/kimje/img/main/service.jpg" alt="메뉴 이미지">
                            <h3>서비스</h3>
                            <p>김제 펜션의 서비스를 소개합니다.</p>
                        </li>
                    </a>
                </ul>
            </div>
        </article>
        <div class="attech_bg"></div>
        <article class="two_content_box">
            <div class="two_content_title_box">
                <h3>"김제" 펜션</h3>
                <p>최선을 다해 준비하는 바다보기 펜션!<br><br>행복한 여행 아름다운 추억을 "김제펜션" 에서 만드세요!</p>
            </div>
        </article>
    </main>
    `
    return template;
}