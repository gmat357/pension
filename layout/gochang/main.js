exports.content = ()=>{
    var template = `
    <header class="header_container">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                        <img src="../public/gochang/img/header/slide_1.jpg" alt="슬라이드 이미지">
                </div>
                <div class="swiper-slide">
                    <img src="../public/gochang/img/header/slide_2.jpg" alt="슬라이드 이미지">
                </div>
            </div>
        </div>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>
    
        <script src="../public/gochang/js/slide.js"></script>
    </header>
    <main class="content_container">
        <div class="first_text">
            <h3>Hotel Gochang Pension</h3>
            <h5>고창펜션에 오신 여러분들을 환영합니다.</h5>
<pre>
고창펜션은 가족 또는 친구,연인이 조용하고 안락한 분위기에서 자유롭게 지내실 수
있는 독립된 별장식 구조로 되어있으며 데크 또는 바베큐장에서 바비큐구이를 하실수있습니다.
백설공주와 난쟁이가 나올 것 같은 통나무집 푸른 청정제주의 통나무파크에서 나만의 별장을
갖게됩니다. 내집처럼 편한 쉼터를 제공해드릴 것을 약속드립니다.
</pre>
        </div>
        <div class="room_box">
            <ul>
                <a href="/gochang/room">
                    <li>
                        <img src="../public/gochang/img/main/room_1.jpg" alt="방사진">
                        <h4>A-TYPE</h4>
                        <p>
                            <b>객실정보</b><br>
                            복층형(침대, 주방, 욕실) / 총 4개실
                        </p>
                    </li>
                    <li>
                        <img src="../public/gochang/img/main/room_2.jpg" alt="방사진">
                        <h4>B-TYPE</h4>
                        <p>
                            <b>객실정보</b><br>
                            복층형(침대, 주방, 욕실) / 총 4개실
                        </p>
                    </li>
                    <li>
                        <img src="../public/gochang/img/main/room_3.jpg" alt="방사진">
                        <h4>C-TYPE</h4>
                        <p>
                            <b>객실정보</b><br>
                            복층형(침대, 주방, 욕실) / 총 4개실
                        </p>
                    </li>
                    <li>
                        <img src="../public/gochang/img/main/room_4.jpg" alt="방사진">
                        <h4>D-TYPE</h4>
                        <p>
                            <b>객실정보</b><br>
                            복층형(침대, 주방, 욕실) / 총 4개실
                        </p>
                    </li>
                </a>
            </ul>
        </div>
    </main>
    `

    return template;
}