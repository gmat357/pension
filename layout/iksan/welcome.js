exports.welcome = ()=>{
    const template = `
    <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../public/iksan/img/welcome/pension_bg.jpg" alt="배경"/>
                <h3>Exterior</h3>
            </div>
            <div class="swiper-slide">
                <div class="content_left">
                    <img src="../public/iksan/img/welcome/pension_content.jpg" alt="마을풍경"/>
                </div>
                <div class="content_right">
                    <h4>LUXURY BOUTIQUE CLASSIC</h4>
                    <h5>잊을 수 없는 기억을 선사해드리는 공간</h5>
                    <p>
                        제각기 다른 모습으로 바다를 품고 있는 모든 객실과 제철 그리고 지역 식재료만으로 제공되는 건강한 음식,<br> 서해안 최고의 바다색과 산을 즐길 수 있는 레저시설.<br>천혜의 자연 속에서 진정한 휴식을 위한 공간을 지향하며 고객의 휴식이 최고의 순간이 되는 그곳, 다놀자 펜션<br>
                        다놀자 펜션에 오신 모든 고객 여러분을 환영합니다.
                    </p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="map_title">
                    <h2>LOCATION</h2>
                </div>
                <div class="map_container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d678.8924398276881!2d126.98940544992467!3d35.96225928716883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3570157171a62dfd%3A0x338aa239d516364b!2z7KCE652867aB64-EIOydteyCsOyLnCDsgrzshLHrj5kg67aA7Iah66GcIDExOQ!5e0!3m2!1sko!2skr!4v1609825146042!5m2!1sko!2skr" width="1900" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
      <!-- Swiper JS -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>
      <script src="../public/js/welcome.js"></script>
      <!-- Initialize Swiper -->
      <script>
      $(function(){

        var swiper = new Swiper('.swiper-container', {
              direction: 'vertical',
              slidesPerView: 1,
              spaceBetween: 30,
              mousewheel: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    })
    </script>
    `
    return template;
}