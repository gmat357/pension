exports.room = ()=>{
    const template = `
    <article class="room_container">
        <h3>단체룸</h3>
        <div class="room_list_box">
            <ul>
                <li>
                    <ul>
                        <li><img src="../public/gunsan/img/room/room_1.jpg" alt="방이미지"></li>
                        <li>별빛채</li>
                        <li>크기 12평(복층)</li>
                        <li>인원 : 기준2명/최대4명</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><img src="../public/gunsan/img/room/room_2.jpg" alt="방이미지"></li>
                        <li>군산채</li>
                        <li>크기 15평(복층)</li>
                        <li>인원 : 기준2명/최대6명</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><img src="../public/gunsan/img/room/room_4.jpg" alt="방이미지"></li>
                        <li>사랑방</li>
                        <li>크기 15평(복층)</li>
                        <li>인원 : 기준2명/최대6명</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><img src="../public/gunsan/img/room/room_2.jpg" alt="방이미지"></li>
                        <li>굴림방</li>
                        <li>크기 20평(2층2룸)</li>
                        <li>인원 : 기준4명/최대6명</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><img src="../public/gunsan/img/room/room_1.jpg" alt="방이미지"></li>
                        <li>하늘채</li>
                        <li>크기 26평(2층)</li>
                        <li>인원 : 기준6명/최대10명</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><img src="../public/gunsan/img/room/room_4.jpg" alt="방이미지"></li>
                        <li>사과방</li>
                        <li>크기 35평(2층)</li>
                        <li>인원 : 기준8명/최대13명</li>
                    </ul>
                </li>
            </ul>
        </div>
        <h3>커플룸</h3>
        <div class="room_list_box">
            <ul>
                <li>
                    <ul>
                        <li><img src="../public/gunsan/img/room/room_1.jpg" alt="방이미지"></li>
                        <li>별빛채</li>
                        <li>크기 12평(복층)</li>
                        <li>인원 : 기준2명/최대4명</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><img src="../public/gunsan/img/room/room_2.jpg" alt="방이미지"></li>
                        <li>군산채</li>
                        <li>크기 15평(복층)</li>
                        <li>인원 : 기준2명/최대6명</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><img src="../public/gunsan/img/room/room_4.jpg" alt="방이미지"></li>
                        <li>사랑방</li>
                        <li>크기 15평(복층)</li>
                        <li>인원 : 기준2명/최대6명</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><img src="../public/gunsan/img/room/room_2.jpg" alt="방이미지"></li>
                        <li>굴림방</li>
                        <li>크기 20평(2층2룸)</li>
                        <li>인원 : 기준4명/최대6명</li>
                    </ul>
                </li>
            </ul>
        </div>
        <h3>예약안내</h3>
        <div class="price_box">
            <table>
                <thead>
                    <tr>
                        <td rowspan="2">객실명</td>
                        <td rowspan="2">평형</td>
                        <td>인원</td>
                        <td colspan="2">비수기</td>
                        <td colspan="2">준성수기</td>
                        <td colspan="2">성수기</td>
                    </tr>
                    <tr>
                        <td>(기준/최대)</td>
                        <td>주중</td>
                        <td>주말</td>
                        <td>주중</td>
                        <td>주말</td>
                        <td>주중</td>
                        <td>주말</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>별빛채</td>
                        <td>7</td>
                        <td>2명/2명</td>
                        <td>8만원</td>
                        <td>10만원</td>
                        <td>10만원</td>
                        <td>12만원</td>
                        <td>12만원</td>
                        <td>12만원</td>
                    </tr>
                    <tr>
                        <td>군산채</td>
                        <td>7</td>
                        <td>2명/2명</td>
                        <td>8만원</td>
                        <td>10만원</td>
                        <td>10만원</td>
                        <td>12만원</td>
                        <td>12만원</td>
                        <td>12만원</td>
                    </tr>
                    <tr>
                        <td>사랑방</td>
                        <td>8</td>
                        <td>2명/2명</td>
                        <td>8만원</td>
                        <td>10만원</td>
                        <td>10만원</td>
                        <td>12만원</td>
                        <td>12만원</td>
                        <td>12만원</td>
                    </tr>
                    <tr>
                        <td>굴림방</td>
                        <td>7</td>
                        <td>2명/2명</td>
                        <td>9만원</td>
                        <td>11만원</td>
                        <td>11만원</td>
                        <td>13만원</td>
                        <td>13만원</td>
                        <td>13만원</td>
                    </tr>
                    <tr>
                        <td>하늘채</td>
                        <td>12</td>
                        <td>2명/4명</td>
                        <td>10만원</td>
                        <td>13만원</td>
                        <td>13만원</td>
                        <td>16만원</td>
                        <td>16만원</td>
                        <td>16만원</td>
                    </tr>
                    <tr>
                        <td>사과방</td>
                        <td>13</td>
                        <td>2명/6명</td>
                        <td>12만원</td>
                        <td>15만원</td>
                        <td>15만원</td>
                        <td>18만원</td>
                        <td>18만원</td>
                        <td>18만원</td>
                    </tr>
                    <tr>
                        <td>사과방</td>
                        <td>13</td>
                        <td>2명/6명</td>
                        <td>12만원</td>
                        <td>15만원</td>
                        <td>15만원</td>
                        <td>18만원</td>
                        <td>18만원</td>
                        <td>18만원</td>
                    </tr>
                    <tr>
                        <td>별빛채</td>
                        <td>13</td>
                        <td>2명/6명</td>
                        <td>12만원</td>
                        <td>15만원</td>
                        <td>15만원</td>
                        <td>18만원</td>
                        <td>18만원</td>
                        <td>18만원</td>
                    </tr>
                    <tr>
                        <td>사랑방</td>
                        <td>8</td>
                        <td>2명/2명</td>
                        <td>8만원</td>
                        <td>10만원</td>
                        <td>10만원</td>
                        <td>12만원</td>
                        <td>12만원</td>
                        <td>12만원</td>
                    </tr>
                    <tr>
                        <td>굴림방</td>
                        <td>7</td>
                        <td>2명/2명</td>
                        <td>9만원</td>
                        <td>11만원</td>
                        <td>11만원</td>
                        <td>13만원</td>
                        <td>13만원</td>
                        <td>13만원</td>
                    </tr>
                </tbody>
            </table>
            <p>*주중 : 일요일 ~ 목요일까지 / 주말 : 금요일 ~ 토요일까지, 공휴일 전날</p>
        </div>
        <div class="price_info">
            <ul>
                <li>
                    <h2>입퇴실 안내</h2>
                    <pre>
    1. 입퇴실 시간은 입실 14시, 퇴실 11시를 원칙으로 합니다.
    2. 퇴실 30분전에 객실점검을 해주세요.
    3. 23시 이후 도착하실 경우에는 사전에 연락주시기 바랍니다.
    4. 퇴실 전에는 잊으신 물건이 없나 살펴주시고, 시설물 및 소모품은 원위치에 정돈해 주세요.
    5. 수영장 사용을 원하시는 이용객께서는 수용복을 준비하여 주시기 바랍니다.
    (성수기 수영장 운영기간 중)
                    </pre>
                </li>
                <li>
                    <h2>기본 사항</h2>
                    <pre>
    1. 예약 후 전액 입금하셔야 예약이 완료됩니다.
    2. 예약 후 6시간 이내에 객실 이용 요금을 완불해 주셔야 합니다. (*미입금시 자동 예약취소 됩니다.)
    3. 예약금 입금시 예약자 성함으로 임금해주시기 바랍니다. (성함이 다른 경우 연락주세요)
    4. 기준인원 초과시 1인당 10,000원씩 추가요금(24개월미만 유아 무료) 있습니다.
    5. 최대인원 초과가 불가피하신 경우 연락주시기 바랍니다.
    6. 바베큐그릴 이용시 대형 20,000원의 추가 요금이 적용됩니다.
                    </pre>
                </li>
                <li>
                    <h2>유의 사항</h2>
                    <pre>
    1. 객실내 기타시설물은 다음 사람을 위하여 깨끗이 사용해 주세요.
    2. 객실내에서는 금연하여 주시기 바랍니다.
    3. 애완동물은 입실불가 합니다. 애완동물 동반시 강제 퇴실 되실 수 있습니다. (환불불가)
    4. 객실내에서는 육류등의 직접조리는 불가하며, 외부에서 조리하여 드시기 바랍니다.
    5. 무분별한 오락 및 고성방가 등 다른 이용객에게 불쾌감을 주는 행동은 삼가해 주세요.
    6. 미성년자는 부모의 동의없이 예약과 입실 불가이며, 혼숙은 절대 금지됩니다.
    7. 음식물 및 기타 쓰레기는 지정된 장소에 분리수거하여 주시기 바랍니다.
    8. 시설물의 파손 및 훼손시 원상복구를 원칙으로 합니다. 소중히 다뤄주세요.
    9. 퇴실 전 사용하신 주방기구는 세척하여 원위치에 정돈해 주세요.
                    </pre> 
                </li>
                <li>
                    <h2>환불 규정</h2>
                    <pre>
    1. 올바른 예약문화의 정착을 위하여 불가피한 조치이오니 양해 부탁드립니다.
    2. 객실과 예약날짜는 신중히 결정하여주시기 바랍니다.
    3. 환불수수료 안내(주중 예약취소시 10% 추가 환불 됩니다.)
                    </pre> 
                </li>
            </ul>
        </div>
    </article>
    `

    return template;
}