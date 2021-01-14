exports.community = ()=>{
    const template = `
    <article class="community_container">
    <div class="table_box">
        <h5>공지사항</h5>
        <table>
            <thead>
                <tr>
                    <td>번호</td>
                    <td>제목</td>
                    <td>글쓴이</td>
                    <td>날짜</td>
                    <td>조회</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>공지사항입니다.</td>
                    <td>관리자</td>
                    <td>2020-08-26</td>
                    <td>58</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>펜션 홈페이지 오픈을 축하드립니다.</td>
                    <td>관리자</td>
                    <td>2020-08-26</td>
                    <td>55</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>펜션 리모델링 및 펜션 홈피 리뉴얼 안내.</td>
                    <td>관리자</td>
                    <td>2020-08-26</td>
                    <td>124</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>열심히 일한 당신 이제 가볍게 떠나자~</td>
                    <td>관리자</td>
                    <td>2020-08-26</td>
                    <td>205</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>바베큐 패키지와 조식 서비스 개시</td>
                    <td>관리자</td>
                    <td>2020-08-26</td>
                    <td>125</td>
                </tr>

            </tbody>
        </table>
        <div class="search_box">
            <input type="text"/>
            <input type="button" value="검색">
        </div>
    </div>
</article>
    `
    return template;
}