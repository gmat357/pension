exports.content = ()=>{
    var template = `
    <main class="content_container">
        <div class="about">
            <h3>Notice Jeongeup</h3>
        </div>
        <table class="notice">
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
                    <td>코로나 관련 공지사항</td>
                    <td>관리자</td>
                    <td>2020-02-08</td>
                    <td>20</td>
                </tr>
            </tbody>
        </table>
        <div class="search_box">
            <select>
                <option>제목</option>
                <option>작성자</option>
                <option>날짜</option>
            </select>
            <input type="text"/>
            <input type="button" value="검색"/>
        </div>
    </main>
    `

    return template;
}