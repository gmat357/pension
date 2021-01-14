exports.room = ()=>{
    const template = `
    <article class="content_container">
        <div class="title_box">
            <h4>객실안내</h4>
            <div class="submenu_info">
                <p>HOME > 객실안내</p>
            </div>
        </div>
    </article>
    <div class="room_list_box">
        <script>
            $(function(){
                let room = $(".room_list_box > ul > li");
                room.each(function(){
                    $(this).on("click",function(){
                        location.href="/buan/room_sub";
                    });
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
                            등이 이용하기 편리합니다. <br>
                            (방3,화장실3,거실2, 주방2)
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
                            이 사용하시기 편리합니다. <br>
                            (거실,방1,화장실1,주방)
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
        </ul>
        <ul>
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
                            등이 이용하기 편리합니다.<br>
                            (방3,화장실3,거실2, 주방2)
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    `

    return template;
}