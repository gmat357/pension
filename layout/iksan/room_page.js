exports.room_page = ()=>{
    const template = `
    <article class="room_page_container">
    <div class="title_bg">
        <img src="../public/iksan/img/room_page/main_bg.jpg" alt="메인 배경"/>
        <h3>HOTEL CLASS ROOMS PREVIEW
            <p>객실을 미리 둘러보세요</p>
        </h3>
    </div>
    <div class="content_text">
        <div class="text_box">
            <h3></h3>
        </div>
        <p>
            익산 다놀자 펜션에 방문하여 주신 여러분을 환영합니다!<br>
            하루하루가 바쁜도시의 복잡한 삶을 벗어나<br><br>
            자연 풍경과 익산 보석 박물관이 옆에 위치해 있으므로 <br>
            익산 관광을 더욱 쉽고 편안하게 즐기실 수 있습니다.<br>
            방문하시는 모든 분들의 즐거운 여행을 위해 항상 노력하겠습니다.
        </p>
        <!-- <span class="reservation_btn">실시간 예약하기</span> -->
    </div>
    <div class="end_bg_container"></div>
    <div class="m_end_bg_container"></div>

    <div class="product_info_container">
        <h3>SPANILLA 복층형</h3>
        <ul> 구조넓이
            <li>화장실1 + 침대룸A(퀸1)</li>
            <li>20평(약66㎡)</li>
            <li>복층,스파시설보유,테라스바베큐가능</li>
        </ul>
        <ul> 기준인원
            <li>기준 2명 ~ 최대 6명 / 2명 초과시 추가요금 발생</li>
            <li>
                <table>
                    <thead>
                        <tr>
                            <td>시즌</td>
                            <td>성인</td>
                            <td>아동</td>
                            <td>유아</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>비수기</td>
                            <td>20,000원</td>
                            <td>20,000원</td>
                            <td>10,000원</td>
                        </tr>
                        <tr>
                            <td>성수기</td>
                            <td>20,000원</td>
                            <td>20,000원</td>
                            <td>10,000원</td>
                        </tr>
                        <tr>
                            <td>준성수기</td>
                            <td>20,000원</td>
                            <td>20,000원</td>
                            <td>10,000원</td>
                        </tr>
                        <tr>
                            <td>할인기간</td>
                            <td>20,000원</td>
                            <td>20,000원</td>
                            <td>10,000원</td>
                        </tr>
                        <tr>
                            <td>지정기간</td>
                            <td>20,000원</td>
                            <td>20,000원</td>
                            <td>10,000원</td>
                        </tr>
                    </tbody>
                </table>
            </li>
        </ul>
        <ul> 구비시설
            <li>TV,침대,식탁,냉장고,에어컨,드라이기,전자레인지,가스렌지,욕실용품,스파시설,보드게임,전기밥솥,취사도구,객실샤워실</li>
        </ul>
        <ul> 구비시설
            <li>스파사용 무료</li>
        </ul>
    </div>
</article>
<script src="../public/iksan/js/room_page.js"></script>
    `

    return template;
}