exports.content = ()=>{
    var template = `
    <main>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                        <img src="../public/jeongeup/img/slide/slide_1.jpg" alt="슬라이드 이미지">
                </div>
                <div class="swiper-slide">
                    <img src="../public/jeongeup/img/slide/slide_2.jpg" alt="슬라이드 이미지">
                </div>
            </div>
        </div>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>
    
        <script src="../public/jeongeup/js/slide.js"></script>

        <div class="about">
            <h3>About Jeongeup</h3>
            <pre>
안녕하세요. 정읍펜션을 찾아주셔서 감사합니다.
아름다운 남이섬인근 가평에 자리잡고 있는 Modern house
각 객실마다 스파&개별바베큐 장이 설치되어있는,
스트레스와 피로를 풀어 줄 휴식 공간입니다.

자연으로 둘러쌓인 야외수영장에서 신나는 물놀이도 즐기며
가족,연인 사랑하는 사람과 즐거운 추억을 만들 수 있습니다.
행복하고 아름다운 추억을 이곳
정읍펜션에서 만들어보세요.
            </pre>
        </div>
        <div class="room">
            <div class="room_left">
                <div class="room_text">

                    <h6>rooms</h6>
                    <h3></h3>
                    <p>THEME INTERIOR ROOMS</p>
                    <a href="/room">객실보기</a>
                    <div class="room_btn_box">
                        <span class="left">
                            <img src="../public/jeongeup/img/main/left_arrow.png" alt="왼쪽 화살표">
                        </span>
                        <span class="right">
                            <img src="../public/jeongeup/img/main/right_arrow.png" alt="오른쪽 화살표">
                        </span>
                    </div>
                </div>
            </div>
            <div class="room_right">
                <ul>
                    <li class="room_dp"><img src="../public/jeongeup/img/main/room_1.jpg" alt="방썸네일"></li>
                    <li><img src="../public/jeongeup/img/main/room_2.jpg" alt="방썸네일"></li>
                    <li><img src="../public/jeongeup/img/main/room_3.jpg" alt="방썸네일"></li>
                </ul>
            </div>
            <script src="../public/jeongeup/js/room.js"></script>
        </div>
        <div class="service">
            <ul>
                <li>
                    <a href="/jeongeup/service">
                        <img src="../public/jeongeup/img/main/service_1.jpg" alt="서비스 이미지">
                    </a>
                    <div class="service_bg">
                        <h3>BBQ</h3>
                    </div>
                </li>
                <li>
                    <a href="/jeongeup/service">
                        <img src="../public/jeongeup/img/main/service_2.jpg" alt="서비스 이미지">
                    </a>
                    <div class="service_bg">
                        <h3>CAFE</h3>
                    </div>
                </li>
                <li>
                    <a href="/jeongeup/service">
                        <img src="../public/jeongeup/img/main/service_3.jpg" alt="서비스 이미지">
                    </a>
                    <div class="service_bg">
                        <h3>CARDEN</h3>
                    </div>
                </li>
            </ul>
        </div>
        <div class="end_content"></div>
    </main>
    `

    return template;
}