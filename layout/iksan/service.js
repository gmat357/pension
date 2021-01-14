exports.service = ()=>{
    const template = `
    <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../public/iksan/img/service/beaf.jpg" alt="바베큐"/>
                <h3>BBQ<br>
                    <div>
                        <h6>바베큐</h6>
                        <b>다놀자 펜션을 이용하는 분들을 위해 바베큐 숯과 그릴을 준비해 드립니다.</b><br>
                        그릴 사용시 소정의 사용료가 있습니다.<br>
                        그릴 소(2인이하) 10,000원 / 그릴 중(4인이하) 20,000원 / 그릴 대(8인이상)40,000원<br>
                        바베큐 가능시간은 오후 3시부터 11시까지 입니다.
                    </div>
                </h3>
            </div>
            <div class="swiper-slide">
                <img src="../public/iksan/img/service/pool.jpg" alt="수영장"/>
                <h3>SWIMMING POOL<br>
                    <div>
                        <h6>수영장</h6>
                        <b>시원하고 깨끗한 펜션 수영장에서 즐거운 여름을 만끽하시고 올 여름 무더위를 날려버리세요.</b><br>
                        펜션 투숙시 무료로 운영되며, 유의사항을 꼭 지켜주ㅗ시기 바랍니다.(안전사고에 대한 책임을 지지 않습니다.)<br>
                        <b>[유의사항]</b><br>
                        - 수영복,수영모 착용 필수<br>
                        - 썬텐 오일을 바르시고 들어가지 마세요.<br>
                        - 안전을 위해 어린이는 반드시 보호자와 함께 이용하세요<br>
                        - 지정된 시간만 이용 가능하며, 이른 아침이나 밤시간에는 이용이 불가 합니다.<br>
                        - 음주시 수영장 이용 불가<br>
                        - 이용시간은 오후 2시부터 8시까지입니다.
                    </div>
                </h3>
            </div>
            <div class="swiper-slide">
                <img src="../public/iksan/img/service/billiard.jpg" alt="당구장"/>
                <h3>BILLIARD ROOM<br>
                    <div>
                        <h6>당구장</h6>
                        <b>팬션 투숙객에 한하여 무료로 즐기실 수 있으며,<br>서로간의 원활한 여가 활동을 위해 1시간 사용을 권장합니다.</b><br>
                        포켓볼, 4구 당구대가 있어, 친구, 연인과 함께 즐길 수 있습니다<br>
                        당구대 이용시간은 오후 3시부터 오후 10시까지입니다.<br>
                        다놀자 펜션 과 같은 쾌적한 환경에서 여가생활을 즐기세요.<br>
                    </div>
                </h3>
            </div>
            <div class="swiper-slide">
                <img src="../public/iksan/img/service/leports.jpg" alt="당구장"/>
                <h3>LEPORTS<br>
                    <div>
                        <h6>레포츠</h6>
                        <b>다놀자 펜션에서는 래프팅, ATV, 서바이벌, 수상스키 등<br>다양한 레포츠를 즐길 수 있는 서비스를 연계하여 손님들께 제공하고 있습니다.</b><br>
                        주변 요금보다 저렴한 가격으로 연계해 드리오니 많이 이용해 주세요.<br>
                        다놀자 펜션 과 같은 쾌적한 환경에서 여가생활을 즐기세요.<br>
                        안전수칙 위반시 본 펜션과는 무관합니다.<br>
                    </div>
                </h3>
            </div>
            <div class="swiper-slide">
                <img src="../public/iksan/img/service/bbq_package.jpg" alt="당구장"/>
                <h3>BBQ PACKAGE<br>
                    <div>
                        <h6>바베큐 패키지</h6>
                        <b>특별한 바베큐 서비스를 원하시는 분들을 위해 정성껏 바베큐 패키지를 준비해 드립니다.</b>
                        <br>
                        패키지 구성 : 삼겹살과 목살 250g, 각종 야채쌈, 찌개, 골뱅이 무침, 밥, 콘치즈, 버섯, 소시지
                        <br>
                        1인당 가격 : 30,000원(초등학생 이상)<br>
                        2인이상 주문가능합니다.<br><br>
                        바베큐 그릴비는 별도입니다.<br>
                    </div>
                </h3>
            </div>
            <div class="swiper-slide">
                <img src="../public/iksan/img/service/meal.jpg" alt="당구장"/>
                <h3>MEAL SERVICE<br>
                    <div>
                        <h6>식사 서비스</h6>
                        <b>특별한 조식을 원하시는 분들을 위해 조식 서비스를 해드립니다.</b><br>
                        구성 : 김치찌개, 전복죽, 여러가지 반찬
                        <br>
                        1인당 가격 : 7,000원<br><br>
                        단체식사 : 닭백숙, 닭볶음탕 (예약주문 필수)<br>
                    </div>
                </h3>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div> 
    </div>
      <!-- Swiper JS -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>
      <script src="../public/iksan/js/service.js"></script>
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