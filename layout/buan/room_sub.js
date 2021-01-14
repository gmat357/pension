exports.room_sub = ()=>{
    const template = `
    <article class="content_container">
        <div class="title_box">
            <h4>하늘채</h4>
            <div class="submenu_info">
                <p>HOME > 객실안내 > 하늘채</p>
            </div>
        </div>
    </article>
    <div class="text_box">
        <img src="../public/buan/img/main/room/room_5.jpg" alt="객실이미지">
        <div class="text">
            <h4>하늘채</h4>
            <p>
                객실유형 : <br>
                면적 : 125.4㎡<br>
                기준/최대인원 : 14명 / 24명<br>
                접기시설 : TV, 에어컨, 냉장고, 선풍기, 벽난로, 세탁기, 가스렌지, 드라이기, 취사, 전기밥솥, 전자레인지, 욕실용품
            </p>
            <h4>객실 요금표</h4>
            <table>
                <thead>
                    <tr>
                        <td>요금구분</td>
                        <td>주중</td>
                        <td>주말</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>표준요금</td>
                        <td>280,000원</td>
                        <td>390,000원</td>
                    </tr>
                    <tr>
                        <td>여름준성수기</td>
                        <td>340,000원</td>
                        <td>440,000원</td>
                    </tr>
                    <tr>
                        <td>성수기</td>
                        <td>390,000원</td>
                        <td>490,000원</td>
                    </tr>
                    <tr>
                        <td>겨울준성수기</td>
                        <td>340,000원</td>
                        <td>440,000원</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `

    return template;
}