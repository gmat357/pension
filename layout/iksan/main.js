exports.main = ()=>{
    const template = `
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../public/iksan/img/slide/1.jpg" alt="슬라이드 이미지"/></div>
        <div class="swiper-slide"><img src="../public/iksan/img/slide/2.jpg" alt="슬라이드 이미지"/></div>
        <div class="swiper-slide"><img src="../public/iksan/img/slide/3.jpg" alt="슬라이드 이미지"/></div>
        <div class="swiper-slide"><img src="../public/iksan/img/slide/4.jpg" alt="슬라이드 이미지"/></div>
        <div class="swiper-slide"><img src="../public/iksan/img/slide/5.jpg" alt="슬라이드 이미지"/></div>
        <div class="swiper-slide"><img src="../public/iksan/img/slide/6.jpg" alt="슬라이드 이미지"/></div>
        <div class="swiper-slide"><img src="../public/iksan/img/slide/7.jpg" alt="슬라이드 이미지"/></div>
        <div class="swiper-slide"><img src="../public/iksan/img/slide/8.jpg" alt="슬라이드 이미지"/></div>
        <div class="swiper-slide"><img src="../public/iksan/img/slide/9.jpg" alt="슬라이드 이미지"/></div>
        <div class="swiper-slide"><img src="../public/iksan/img/slide/10.jpg" alt="슬라이드 이미지"/></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  
    <!-- Swiper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>
  
    <!-- Initialize Swiper -->
    <script>
      var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
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
  
    <article class="welcome_container">
      <ul>
          <li><img src="../public/iksan/img/nav/logo.png" alt="로고"/></li>
          <li>
              <p>
                  <b>익산 다놀자펜션</b><br>
                  다놀자펜션에 방문하여 주신 여러분을 환영합니다!<br>
                  하루하루가 바쁜도시의 복잡한 삶을 벗어나<br><br>
                  신라 천년 역사가 살아 숨 쉬는 익산으로 즐거운 여행을 떠나오세요!<br><br>
                  새만금과 넓은 바다가 있는 관광유적지에 가까운 위치에 자리하고 있어<br>
                  익산 관광을 더욱 쉽고 편안하게 즐기실 수 있습니다.<br><br>
                  방문하시는 모든 분들의 즐거운 여행을 위해 항상 노력하겠습니다.
              </p>
          </li>
      </ul>
    </article>
    <article class="content_container">
          <ul class="content_odd">
              <li><img src="../public/iksan/img/content/bbq.jpg" alt="바베큐 셋트"/></li>
              <li>
                  <h3>바베큐 셋트</h3>
                  <p>
                      바베큐 셋트 식사메뉴 : 2인기준 60,000원<br>
                      (바베큐그릴 포함, 삼겹/목살 500g, 새우, 소시지, 밥, 기본반찬, 파채, 김치, 쌈채소, 양념, 마늘, 고추, 쌈장, 버섯 등 제공)<br>
                      현장결제
                  </p>
              </li>
          </ul>
          <ul class="content_even">
              <li>
                  <h3>미온수 서비스</h3>
                  <p>
                      풀빌라 객실 및 스파객실 미온수 무료.<br>
                      단, 7~8월에는 미온수 요금이 3만원 부과됩니다.<br>
                  </p>
              </li>
              <li><img src="../public/iksan/img/content/pool.jpg" alt="바베큐 셋트"/></li>
          </ul>
          <ul class="content_odd">
              <li><img src="../public/iksan/img/content/hotel.jpg" alt="바베큐 셋트"/></li>
              <li>
                  <h3>호텔식 침구류</h3>
                  <p>
                      편안하고 포근한 호텔식 침구류가 마련되어있습니다.<br>
                  </p>
              </li>
          </ul>
          <ul class="content_even">
              <li>
                  <h3>애견용품 대여</h3>
                  <p>
                      배변판, 펫드라이기, 애견식기류 등 무료 대여<br>
                  </p>
              </li>
              <li><img src="../public/iksan/img/content/animal.jpg" alt="바베큐 셋트"/></li>
          </ul>
          <ul class="content_odd">
              <li><img src="../public/iksan/img/content/boardgame.jpg" alt="바베큐 셋트"/></li>
              <li>
                  <h3>보드게임 대여</h3>
                  <p>
                      보드게임 대여해드리고 있습니다.<br>
                  </p>
              </li>
          </ul>
          <ul class="content_even">
              <li>
                  <h3>픽업 서비스</h3>
                  <p>
                      펜션픽업 : 15시 30분 / 익산역 / 익산 롯데마트 / 체크인 전날까지 신청해야 이용 가능<br>(미신청시 이용불가)<br>
                      마트픽업 : 아트박스 앞에서 우측으로 약 200m '롯데마트' 에서 무료 픽업 해드립니다.<br>(업체 문의필수)
                  </p>
              </li>
              <li><img src="../public/iksan/img/content/bus.jpg" alt="바베큐 셋트"/></li>
          </ul>
          <ul class="content_odd">
              <li><img src="../public/iksan/img/content/tv.jpg" alt="바베큐 셋트"/></li>
              <li>
                  <h3>와이파이 및 IPTV 이용가능</h3>
                  <p>
                      전객실 모두 무료 인터넷 뿐만 아니라,<br>
                      VOD 까지 자유롭게 이용하실 수 있습니다.
                  </p>
              </li>
          </ul>
          <script>
              $(function(){
                  let left_li_odd = $(".content_odd");
                  let left_li_even = $(".content_even");
                  $(window).scroll(function(){
                      if(scrollY >= 400){
                          left_li_odd.eq(0).children("li").css({"margin":"0","transitionDuration":"1s"});
                      }
                      if(scrollY >= 800){
                          left_li_even.eq(0).children("li").css({"margin":"0","transitionDuration":"1s"});
                      }
                      if(scrollY >= 1162){
                          left_li_odd.eq(1).children("li").css({"margin":"0","transitionDuration":"1s"});
                      }
                      if(scrollY >= 1500){
                          left_li_even.eq(1).children("li").css({"margin":"0","transitionDuration":"1s"});
                      }
                      if(scrollY >= 1900){
                          left_li_odd.eq(2).children("li").css({"margin":"0","transitionDuration":"1s"});
                      }
                      if(scrollY >= 2300){
                          left_li_even.eq(2).children("li").css({"margin":"0","transitionDuration":"1s"});
                      }
                      if(scrollY >= 2700){
                          left_li_odd.eq(3).children("li").css({"margin":"0","transitionDuration":"1s"});
                      }
                      if(scrollY >= 3300){
                          left_li_even.eq(3).children("li").css({"margin":"0","transitionDuration":"1s"});
                      }
                      if(scrollY >= 3700){
                          left_li_odd.eq(4).children("li").css({"margin":"0","transitionDuration":"1s"});
                      }
                      
                  });
              });
          </script>
    </article>
    `
    return template;
}