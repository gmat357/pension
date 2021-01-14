exports.header = ()=>{
    const template = `
    <header class="header_container">
        <!-- Swiper -->
        <div class="swiper-container">
        <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../public/buan/img/header/slide_1.jpg" alt="슬라이드 이미지"/></div>
        <div class="swiper-slide"><img src="../public/buan/img/header/slide_2.jpg" alt="슬라이드 이미지"/></div>
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
    </header>
    `
    return template;
}