exports.main = ()=>{
    const template = `
    <article class="menu_list">
        <ul>
            <a href="/buan/about">
                <li>
                    <h5>펜션 소개</h5>
                    <p>
                        부안 펜션의 소개사항을<br>
                        확인해보세요.
                    </p>
                </li>
            </a>
            <a href="/buan/room">
                <li>
                    <h5>객실 안내</h5>
                    <p>
                        여러가지 방의 전체적인<br>
                        이미지를 보실 수 있습니다.
                    </p>
                </li>
            </a>            
            <a href="/buan/travel">
                <li>
                    <h5>여행안내</h5>
                    <p>
                        주변 관광지를 확인후<br>
                        추억을 남길 수 있는 곳으로 찾아가세요~
                    </p>
                </li>
            </a>            
            <a href="/buan/reservation">
                <li>
                    <h5>예약안내</h5>
                    <p>
                        현재 객실의 남은 방을 확인<br>
                        할 수 있는 공간입니다.
                    </p>
                </li>
            </a>            
            <a href="/buan/infomation">
                <li>
                    <h5>고객 센터</h5>
                    <p>
                        여러가지 이벤트 또는 변동사항 을<br>
                        확인하시고 예약 부탁드립니다.
                    </p>
                </li>
            </a>            <a href="/buan">
                <li>
                    <h5>오시는길</h5>
                    <p>
                        부안 펜션으로 오시는 길을<br>
                        확인해보세요.
                    </p>
                </li>
            </a>
        </ul>
    </article>
    <article class="content_container">
        <div class="title_box">
            <h4>Room Preview</h4>
            <h5>객실미리보기</h5>
        </div>
        <div class="room_list_box">
        <script>
        let room = $('.room_list_box > ul > li');
        room.each(function(){
         $(this).on("click", function(){
             location.href="/buan/room_sub";
         });
        });
    </script>
            <ul>
                <li>
                    <ul>
                        <li><img src="../public/buan/img/main/room/room_1.jpg" alt="프리뷰 사진"></li>
                        <li><h5>고향방</h5></li>
                        <li><h6>-기준:14, 최대:24</h6></li>
                        <li>
                            <p>
                                2층 전체 독채방으로 세비나 단체 대가족<br>
                                등이 이용하기 편리합니다. (방3,화장실3,<br>
                                거실2, 주방2)
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><img src="../public/buan/img/main/room/room_2.jpg" alt="프리뷰 사진"></li>
                        <li><h5>온돌방</h5></li>
                        <li><h6>-기준:6, 최대:12</h6></li>
                        <li>
                            <p>
                                2층방으로 넓은 거실과 방이 있어서 가족<br>
                                이 사용하시기 편리합니다. (거실,방1,화<br>
                                장실1,주방)
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><img src="../public/buan/img/main/room/room_3.jpg" alt="프리뷰 사진"></li>
                        <li><h5>사랑방</h5></li>
                        <li><h6>-기준:6, 최대:10</h6></li>
                        <li>
                            <p>
                                2층방으로 두커플이나 두가족이 이용하시<br>
                                기 편리합니다.<br>
                                (방2,주방,화장실2)
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><img src="../public/buan/img/main/room/room_4.jpg" alt="프리뷰 사진"></li>
                        <li><h5>황토방</h5></li>
                        <li><h6>-기준:6, 최대:10</h6></li>
                        <li>
                            <p>
                                방 전체벽이 황토벽돌로 만든 가족용 1층<br>
                                방입니다.<br>
                                (방1,화장실1,거실, 주방)
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><img src="../public/buan/img/main/room/room_5.jpg" alt="프리뷰 사진"></li>
                        <li><h5>하늘채</h5></li>
                        <li><h6>-기준:6, 최대:12</h6></li>
                        <li>
                            <p>
                                방 안쪽에 하늘그림의 벽지에 무드등이 있어서<br>
                                밤에 좋은 분위기를 낼 수있습니다. <br>
                                (방3,화장실3,거실2, 주방2)
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><img src="../public/buan/img/main/room/room_6.jpg" alt="프리뷰 사진"></li>
                        <li><h5>고향방</h5></li>
                        <li><h6>-기준:14, 최대:24</h6></li>
                        <li>
                            <p>
                                2층 전체 독채방으로 세비나 단체 대가족<br>
                                등이 이용하기 편리합니다. (방3,화장실3,<br>
                                거실2, 주방2)
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="service_box">
            <div class="title_box">
                <h4>Pension Service</h4>
                <h5>펜션 서비스</h5>
            </div>
            <div class="service_list_box">
                <ul>
                    <li>
                        <img src="../public/buan/img/main/service/service_1.jpg" alt="서비스">
                        <h4>바베큐 용품 대여</h4>
                    </li>
                    <li><img src="../public/buan/img/main/service/service_2.jpg" alt="서비스">
                        <h4>운동 및 낚시 용품 대여</h4>
                    </li>
                    <li><img src="../public/buan/img/main/service/service_3.jpg" alt="서비스">
                        <h4>전경 좋은 풀 빌라</h4>
                    </li>
                </ul>
            </div>
        </div>
    </article>
    `
    return template;
}