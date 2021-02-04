exports.footer = ()=>{
    var template = `
    <footer class="footer_container">        
        <div class="footer_box">
            <div class="footer_left">
                <img src="../public/jeonju/img/nav/logo.png" alt="로고이미지"><br>
                <b>Copyright ⓒ 전주펜션 All Rights Reserved </b>
                <p>
                    Tel. 1644-9565 | 상호 : 전주펜션 | 대표자명 : 정인균<br>
                    전북 익산시 부송로 117 인우빌딩 5층 | 사업자번호 : 826-48-00215
                </p>
            </div>
            <ul class="footer_right">
                <li><a href="/about">하늘펜션</a></li>
                <li><a href="/about">방 소개</a></li>
                <li><a href="/about">서비스</a></li>
                <li><a href="/about">주변여행지</a></li>
                <li><a href="/about">공지사항</a></li>
            </ul>
        </div>
    </footer>
    `
    return template;
}