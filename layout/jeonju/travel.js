exports.content = ()=>{
    var template = `

    <article class="content_container">
            <img src="../public/jeonju/img/about/banner.jpg" alt="배너"/>
        <div class="service_title">
            <div class="service_box">
                <h3>Travel</h3>
                <p>전주펜션의 주변 여행지를 소개합니다.</p>
                <div class="service_content">
                    <div class="one_content">
                        <div class="one_left">
                            <img src="../public/jeonju/img/travel/travel_1.png" alt="서비스 이미지"/>
                            <p>
                                <b>전주 전동성당</b><br>전동성당은 경기전 맞은 편에 위치해 있어 비잔틴 양식과 로마네스트 양식을 절충한 <br>건물 형태로 우리나라에서 가장 아름다운 건물로 꼽히는 성당입니다.
                            </p>
                        </div>
                        <div class="one_right">
                            <img src="../public/jeonju/img/travel/travel_2.png" alt="서비스 이미지"/>
                        </div>
                    </div>

                    <div class="two_content">
                        <div class="two_left">
                            <img src="../public/jeonju/img/travel/travel_3.png" alt="서비스 이미지"/>
                            <p>
                                <b>전주 한옥마을</b><br>1930년대 일본인들이 전주시내로 세력을 확장해오자 전주시민들은 이에 대한 반발로 교동과<br>풍남동 일대에 한옥촌을 형성했습니다.
                            </p>
                        </div>
                        <div class="two_right">
                            <img src="../public/jeonju/img/travel/travel_2.png" alt="서비스 이미지"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
    <div class="service_attach">
        <h3>JEONJU Pension</h3>
        <p>머무시는분 만을 위한, 전주펜션의 특별한 부대시설이 준비되어 있습니다.<br>다양하게 준비된 서비스를 직접 느껴보세요!</p>
    </div>

    `
    return template;
}