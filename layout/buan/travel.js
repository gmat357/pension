exports.travel = ()=>{
    const template = `
    <article class="content_container">
        <div class="title_box">
            <h4>여행안내</h4>
            <div class="submenu_info">
                <p>HOME > 여행안내</p>
            </div>
        </div>
    </article>
    <div class="travel_list_box">
        <ul>
            <li>
                <ul>
                    <li><img src="../public/buan/img/travel/travel_1.jpg" alt="프리뷰 사진"></li>
                    <li><h5>내소사</h5></li>
                    <li><h6>관광지</h6></li>
                    <li>
                        <p>
                            대한불교조계종 제24교구 본사 선운사의 말사로<br>
                            633년 백제의 승려 혜구두타가 창건하여 처음에 소래사라하였고<br>
                            여기 내소사는 소소래사라고한다.
                        </p>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <li><img src="../public/buan/img/travel/travel_2.jpg" alt="프리뷰 사진"></li>
                    <li><h5>채석강</h5></li>
                    <li><h6>관광지</h6></li>
                    <li>
                        <p>
                            이곳 채석강의 차곡차곡 퇴적틍은 쌓아 올려진 것처럼<br>
                            굉장이 특이한 모양ㅇ다. 중생대 백악기 지층이라고 한다.<br>
                            백악기는 약 1억 4,000만 년전에서 6,500만 년 전이라고한다.
                        </p>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <li><img src="../public/buan/img/travel/travel_3.jpg" alt="프리뷰 사진"></li>
                    <li><h5>개암사</h5></li>
                    <li><h6>관광지</h6></li>
                    <li>
                        <p>
                            우금바위는 우금산 정상에 있는 바위이며<br>
                            그 아래에는 변한의 왕궁터였다고 전해지는 곳에<br>
                            개암사가 위치해 있다.
                        </p>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <li><img src="../public/buan/img/travel/travel_4.jpg" alt="프리뷰 사진"></li>
                    <li><h5>변산해수욕장</h5></li>
                    <li><h6>관광지</h6></li>
                    <li>
                        <p>
                            넓은 바다 전경과 모래사장으로<br>
                            밤이되면 노을이 엄청 예쁘게 지는 풍경을 볼수있습니다.<br>
                            주변에 야영장도 있고 바베큐장도 있으므로 즐기고 오세요~
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    `
    return template;
}