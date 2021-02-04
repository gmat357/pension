exports.content = ()=>{
    var template = `

    <article class="content_container">
            <img src="../public/jeonju/img/about/banner.jpg" alt="배너"/>
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
    </article>

    `
    return template;
}