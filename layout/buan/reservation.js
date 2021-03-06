exports.reservation = ()=>{
    const template = `
    <article class="content_container">
    <div class="title_box">
        <h4>예약안내</h4>
        <div class="submenu_info">
            <p>HOME > 예약안내</p>
        </div>
    </div>
</article>
<article class="text_box">
    <h3>예약 안내</h3>
<pre>
* 주중, 주말안내 : 주중 (일~목요일), 주말 (금~토, 공휴일 전날)
* 성수기안내  :여름성수기(7월 15일 ~ 8월 20일),  겨울성수기(12월 20일 ~ 1월31일)
* 준성수기안내:여름준성수기(7월 1일 ~ 7월 14일, 8월 21일 ~ 8월 31일),  겨울준성수기(12월 1일 ~ 12월 19일, 2월 1일 ~ 2월 28일)

* 위 금액은 기준인원 숙박요금이며 기준인원 초과시 1인(어린이, 유아포함)당 10,000 원 추가요금이 부과되며,
  객실 최대인원을 초과 입실하실 수 없으며 만약 초과시 1인당 30,000원의 할증요금이 부과됩니다.
* 단, 부안펜션(펜션사이트)는 예외이며, 지참하신 텐트 종류와 사이즈 구성에 따라 변동될 수 있습니다. 

* 전화로 예약을 신청하신 뒤 숙박료를 전액 입금해주셔야 예약이 완료됩니다.
* 입금은 꼭 예약자 이름으로 해주시고 전화로 확인해 주세요.
* 무분별한 오락, 음주 및 고성방가등으로 인하여 다른 투숙객에게 피해시에는 강제 퇴실조치 됩니다.
* 이용시 시설물 훼손, 분실에 대한 책임은 투숙객에게 있으므로 유의 하시기 바랍니다.
* 객실정리 후 퇴실점검을 받으셔야 합니다. 점검 후 객실키를 반납해 주세요.
* 쓰레기는 지정된 장소에 분리수거하여 주세요.
</pre>
<h3>이용 안내</h3>
<pre>
* 바베큐 이용시간은 오후 6시 부터 12시까지 입니다.
12시까지는 이용을 완료하여 다른 손님에게 방해가 되지 않도록 유념하여 주십시오.
(바베큐 이용은 숯과 그릴대여비 포함하여 20,000원/(4인기준)입니다.)
* 밤 10시 이후에 도착시에는 사전에 연락을 주시기 바랍니다.
* 퇴실시에 분리수거를 꼭 해주십시오.
(1층과 2층 각각 분리수거통이 있습니다.)

* 사전연락없이 밤 10시까지 입실하지 않는 경우 펜션이용을 포기 하는 것으로 간주합니다.
* 만 4세이상은 성인요금과 동일하게 적용됩니다.

* 사전 동의없이 최대인원 초과시에는 입실불가와 함께 환불이 불가능 하오니 유념하여주시기 바랍니다 .

* 실내에서는 육류 및 어패류의 조리가 금지되며, 실내에서는 금연입니다.
* 보호자를 동반하지 않은 미성년자의 이용은 불가합니다.
</pre>
<h3>
환불 규정
</h3>
<pre>
저희 부안펜션에서는 올바른 예약문화 정착과 다른 분의 이용기회를 확보하기 위해 예약취소시
아래와 같이 환불수수료를 적용하고 있으니 여행일정을 충분히 검토하신 후에 예약신청 하여 주시기 바랍니다.

* 예약접수 당일 취소는 은행송금수수료를 제한 전액 환불 및 예약 날짜 변경 가능합니다. 
* 예약접수 다음날 취소시 부터 10%의 취소 위약금이 있습니다.

*이용일 7일전까지는 예약날짜 변경가능하나 이용일 6일전부터는 예약날짜 변경 불가능 합니다.

소비자 피해 발생시 소비자 분쟁조정위원회 결과를 준수한다.
</pre>
<table>
    <thead>
        <tr>
            <td>이용일기준</td>
            <td>환불금액율</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>9일전</td>
            <td>90% 환불</td>
        </tr>
        <tr>
            <td>8일전</td>
            <td>80% 환불</td>
        </tr>
        <tr>
            <td>7일전</td>
            <td>70% 환불</td>
        </tr>
        <tr>
            <td>6일전</td>
            <td>60% 환불</td>
        </tr>
        <tr>
            <td>5일전</td>
            <td>50% 환불</td>
        </tr>
        <tr>
            <td>4일전</td>
            <td>40% 환불</td>
        </tr>
        <tr>
            <td>3일전</td>
            <td>30% 환불</td>
        </tr>
        <tr>
            <td>2일전</td>
            <td>환불불가</td>
        </tr>
        <tr>
            <td>1일전</td>
            <td>환불불가</td>
        </tr>
        <tr>
            <td>이용일당일</td>
            <td>환불불가</td>
        </tr>
    </tbody>
</table>
</article>
    `
    return template;
}