exports.content = ()=>{
    
    var template = `
    <main class="main_container">
        <div class="main_box">
            <ul>
                <li>
                    <img src="../public/jeonju/img/main/content_1.jpg" alt="컨텐츠 이미지">
                </li>
                <li>
                    <img src="../public/jeonju/img/main/content_2.jpg" alt="컨텐츠 이미지">
                </li>
                <li>
                    <div class="about_text_box">
                        <h3>About us</h3>
                        <pre>
    안녕하세요!
    전주펜션 홈페이지를 방문해주셔서 감사드립니다.

    저희 펜션에 오셔서 즐거운 시간 보내시고 좋은 추억 만들어 가세요.
    도심의 소음과 공해 속을 벗어나,
    전주의 아름다운 자연 속에서의 달콤한 휴식을 취하실 수 있습니다!
    저희 펜션에 오신 여러분들이 가조과 친구, 연인들과 함께,
    아름답고 소중한 추억과 휴식을 가득 담아갈 수 있도록 최선을 다하겠습니다.
                        </pre>
                        <a href="/jeonju/about">READ MORE</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="attach_box">
            <div class="attach_text">
                <h4>Ocean View & Mountain view</h4>
                <h4>with Speciality</h4>
                <p>
                    푸르른 산과 시원한 바다에서 편히 쉬다 가세요.<br>
                    편안한 휴식처에서 즐거운 추억을 만드실 수 있도록 노력합니다.
                </p>
            </div>
        </div>
        <div class="room_sum_title">
            <div class="room_sum_box">
                <h3>방 미리보기</h3>
                <p>
                    전주의 하늘과 풍경을 만끽하며 아늑한 분위기의 펜션에서 편안히 쉴 수 있습니다.<br>
                    공기 좋고 조용한 곳에서 행복한 시간과 쉬어가는 여유로움을 느껴보세요.
                </p>
            </div>
        </div>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <a href="/jeonju/room">
                <img src="../public/jeonju/img/main/slide1.jpg" alt="방 썸네일">
            </a>
        </div>
        <div class="swiper-slide">
            <a href="/jeonju/room">
            <img src="../public/jeonju/img/main/slide2.jpg" alt="방 썸네일">
            </a>
    </div>
        <div class="swiper-slide">
            <a href="/jeonju/room">
            <img src="../public/jeonju/img/main/slide3.jpg" alt="방 썸네일">
            </a>
        </div>
        <div class="swiper-slide">
            <a href="/jeonju/room">
            <img src="../public/jeonju/img/main/slide4.jpg" alt="방 썸네일">
            </a>
        </div>
        <div class="swiper-slide">
            <a href="/jeonju/room">
            <img src="../public/jeonju/img/main/slide5.jpg" alt="방 썸네일">
            </a>
        </div>
        <div class="swiper-slide">
            <a href="/jeonju/room">
            <img src="../public/jeonju/img/main/slide1.jpg" alt="방 썸네일">
            </a>
        </div>
        <div class="swiper-slide">
        <a href="/jeonju/room">
            <img src="../public/jeonju/img/main/slide2.jpg" alt="방 썸네일">
        </a>
        </div>
        <div class="swiper-slide">
            <a href="/jeonju/room">
                <img src="../public/jeonju/img/main/slide3.jpg" alt="방 썸네일">
            </a>
        </div>
        <div class="swiper-slide">
            <a href="/jeonju/room">
                <img src="../public/jeonju/img/main/slide4.jpg" alt="방 썸네일">
            </a>
        </div>
        <div class="swiper-slide">
            <a href="/jeonju/room">
                <img src="../public/jeonju/img/main/slide5.jpg" alt="방 썸네일">
            </a>
        </div>
    </div>
    </div>

    <!-- Swiper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>


    <!-- Initialize Swiper -->
    <script>
    var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
        // centeredSlides: true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false
    }
    });
    </script>
    <div class="service_container">
    <div class="service_box">
        <div class="service_title">
            <h3>Our Facilities</h3>
            <p>전주펜션만의 특별한 부대시설을 경험해보세요.</p>
        </div>
        <ul>
            <a href="/">
                <li>
                    <img src="../public/jeonju/img/main/service1.png" alt="">
                    <h5>Service 1</h5>
                    <p>공동바베큐장</p>
                </li>
            </a>
            <a href="/">
                <li>
                    <img src="../public/jeonju/img/main/service2.png" alt="">
                    <h5>Service 2</h5>
                    <p>애견카페</p>
                </li>
            </a>
            <a href="/">
                <li>
                    <img src="../public/jeonju/img/main/service3.png" alt="">
                    <h5>Service 3</h5>
                    <p>주변관광지</p>
                </li>
            </a>
            <a href="/">
                <li>
                    <img src="../public/jeonju/img/main/service4.png" alt="">
                    <h5>Service 4</h5>
                    <p>주차시설</p>
                </li>
            </a>
            <a href="/">
                <li>
                    <img src="../public/jeonju/img/main/service5.png" alt="">
                    <h5>Service 5</h5>
                    <p>와이파이</p>
                </li>
            </a>
        </ul>
    </div>
    </div>
    <div class="end_text_box">
    <div class="end_text">

        <h6>Ocean view pension with speciality</h6>
        <h2>SKY RENSION</h2>
        <p>
            따뜻한 햇살이 들어오는 넓은 창과 모던하고 세련된 객실로 안락한 휴식공간을 제공합니다.<br>바쁜 일상에서 벗어나 편안함과 여유로움이 가득한 전주펜션에서 추억을 만들어가세요.
            </p>
        </div>
    </div>
    </main> 
    `

    return template;
}