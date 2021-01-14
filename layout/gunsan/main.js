exports.main = ()=>{
    const template = `
    <main class="main_container">
        <div class="one">
            <h3>There are Beauty<br>And Natural</h3>
        </div>
        <div class="line">
            <div class="star">*</div>
            <script>
                $(function(){
                    const star = $('.star');
                    window.setInterval(function(){
                        if(star.css("top") == "-10px"){
                            console.log("업")
                            star.css({
                                "top":"130px",
                                "transitionDuration":"2s"
                            });
                        }
                        if(star.css("top") == "130px"){
                            console.log("다운")
                            star.css({
                                "top":"-10px",
                                "transitionDuration":"2s"
                            });
                        }
                    },2500);
                });
            </script>
        </div>
        <div class="title_box">
            <h3>Where Beautiful nature is together<br>Enjoy your Relaxing Trip</h3>
            <h4>아름다운 풍경 속 즐거운 여행</h4>
            <h5>A beautiful and enjoyable day in a tranquil space</h5>
        </div>
        <div class="two">
            
        </div>
        <div class="three">
            <div class="title_box">
                <h3>자연 속 낭만이 있는 곳</h3>
                <h5>A beautiful and enjoyable day in a tranquil space</h5>
                <div class="line"></div>
                <h4>별과 달빛이 아름다운 곳<br>푸른 자연 속 낭만이 함께하는 장소<br>고풍스러운 분위기가 당신을 반기는 이 곳</h4>
            </div>
        </div>
        <div class="four">
            <h4>
                Where Beautiful Nature Is Together<br>
                Colorful Landscapes Welcome You.
            </h4>
            <h5>
                자연에 둘러싸인 모든 풍경이 한 눈에 바라보이는 곳에서 편안한 휴식을 즐겨보세요.<br>여름에는 시원한 계곡에서 신나는 물놀이를, 가을에는 아름다운 단풍과 행복한 이야기를...<br>넓은 객실에서 가족, 워크샵, MT 등 자연 가득한 이 곳에서 특별한 추억을 만들어 가시길 바랍니다.
            </h5>
        </div>
        <div class="five">
            <!-- Swiper -->
    <div class="swiper-container">
    <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="../public/gunsan/img/slide/slide_1.jpg" alt="슬라이드 이미지"></div>
    <div class="swiper-slide"><img src="../public/gunsan/img/slide/slide_2.jpg" alt="슬라이드 이미지"></div>
    <div class="swiper-slide"><img src="../public/gunsan/img/slide/slide_3.jpg" alt="슬라이드 이미지"></div>
    <div class="swiper-slide"><img src="../public/gunsan/img/slide/slide_4.jpg" alt="슬라이드 이미지"></div>
    </div>

    <!-- Swiper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>


    <!-- Initialize Swiper -->
    <script>
    var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });
    </script>
    </div>
    </main>
    `

    return template;
}