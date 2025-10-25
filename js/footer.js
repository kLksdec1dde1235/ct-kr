const footer = document.getElementById('footer_template');
footer.innerHTML = `
<section id="footer-section">
  <!-- 상단: 로고 + 네비 -->
  <div class="footer-top">
    <div class="footer-logo">
      <img src="./img/logo-wh.png" style="width:110px;">
    </div>
   
  </div>

  <!-- 본문: 왼쪽 기관정보 + 오른쪽 링크리스트 -->
  <div class="footer-main">
    <div class="footer-info">
      <p>  사이트명 : 사이트명: 한국언론미디어지원센터 | 상호 : (주)컨텐츠킬러 | 대표 : 이수연 | 사업자등록번호 : 110 - 86 - 10089<br><br>

                        한국언론미디어지원센터는 국내 최대 ‘디지털 사진, 영상 렌탈장비를 보유’한 컨텐츠킬러의 고유한 서비스로 렌탈서비스, 인력매칭, 투자 및 매각을 위한 투자사들의 고유정보를 제공한 것으로, 이를 무단 복제·배포할 경우 관계 법령에 따라 처벌받을 수 있음을 알려드립니다. 
                        content K © All Rights Reserved.</a></p>
   

    </div>

  </div>

  <!-- 저작권 -->
  <div class="footer-copy">
    <small>content K © All Rights Reserved.</small>
  </div>
</section>


	
`;

document.body.appendChild(footer.content);