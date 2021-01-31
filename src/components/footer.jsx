import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <div id="footer-navigation" className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              <h6 className="footer-navigation-toggle navigation-title fw-400">
                프람피
                <span
                  className="glyphicon glyphicon-menu-down only-mobile-visible"
                  aria-hidden="true"
                ></span>
              </h6>
              <ul className="footer-navigation-toggle-target">
                <li>
                  <a href="/intro/about-us/" className="navigation-category">
                    회사소개
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-2">
              <h6 className="footer-navigation-toggle navigation-title fw-400">
                전문가
                <span
                  className="glyphicon glyphicon-menu-down only-mobile-visible"
                  aria-hidden="true"
                ></span>
              </h6>
              <ul className="footer-navigation-toggle-target">
                <li>
                  <a href="/intro/partners/" className="navigation-category">
                    이용안내
                  </a>
                </li>
                <li>
                  <a
                    href="https://prompie.com/s/a6eufo0a/"
                    className="navigation-category"
                  >
                    온라인 수업 가이드
                  </a>
                </li>
                <li>
                  <a href="/intro/direct/" className="navigation-category">
                    다이렉트 안내
                  </a>
                </li>
                <li>
                  <a
                    href="/intro/safety-contract/"
                    className="navigation-category"
                  >
                    안전한 거래
                  </a>
                </li>

                <li>
                  <a href="/partners/register/" className="navigation-category">
                    전문가 등록
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-2">
              <h6 className="footer-navigation-toggle navigation-title fw-400">
                의뢰인
                <span
                  className="glyphicon glyphicon-menu-down only-mobile-visible"
                  aria-hidden="true"
                ></span>
              </h6>
              <ul className="footer-navigation-toggle-target">
                <li>
                  <a href="/intro/clients/" className="navigation-category">
                    이용안내
                  </a>
                </li>
                <li>
                  <a href="/intro/safety/" className="navigation-category">
                    안전한 거래
                  </a>
                </li>
                <li>
                  <a href="/prices/" className="navigation-category">
                    레슨 예상 비용
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-2">
              <h6 className="footer-navigation-toggle navigation-title fw-400">
                의뢰하기
                <span
                  className="glyphicon glyphicon-menu-down only-mobile-visible"
                  aria-hidden="true"
                ></span>
              </h6>
              <ul className="footer-navigation-toggle-target">
                <li>
                  <a
                    href="/%EB%A0%88%EC%8A%A8/%EC%99%B8%EA%B5%AD%EC%96%B4/"
                    className="navigation-category"
                  >
                    외국어
                  </a>
                </li>
                <li>
                  <a
                    href="/%EB%A0%88%EC%8A%A8/%EC%8A%A4%ED%8F%AC%EC%B8%A0-%EB%8C%84%EC%8A%A4/"
                    className="navigation-category"
                  >
                    스포츠·댄스
                  </a>
                </li>
                <li>
                  <a
                    href="/%EB%A0%88%EC%8A%A8/%EC%9D%8C%EC%95%85/"
                    className="navigation-category"
                  >
                    음악
                  </a>
                </li>
                <li>
                  <a
                    href="/%EB%A0%88%EC%8A%A8/%EC%98%88%EC%88%A0-%EC%9A%94%EB%A6%AC/"
                    className="navigation-category"
                  >
                    예술·요리
                  </a>
                </li>
                <li>
                  <a
                    href="/%EB%A0%88%EC%8A%A8/%EC%8B%A4%EB%AC%B4%EA%B5%90%EC%9C%A1/"
                    className="navigation-category"
                  >
                    실무교육
                  </a>
                </li>
                <li>
                  <a
                    href="/%EB%A0%88%EC%8A%A8/%EA%B5%90%EA%B3%BC%EB%AA%A9-%EC%A0%84%EA%B3%B5/"
                    className="navigation-category"
                  >
                    교과목·전공
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-2 last-component">
              <h6 className="footer-navigation-toggle navigation-title fw-400">
                도움이 필요하세요?
                <span
                  className="glyphicon glyphicon-menu-down only-mobile-visible"
                  aria-hidden="true"
                ></span>
              </h6>
              <ul className="footer-navigation-toggle-target">
                <li>
                  <a
                    href="https://prompie.com/s/abmwqhg9/"
                    target="_blank"
                    className="navigation-category"
                  >
                    자주 묻는 질문 (FAQ)
                  </a>
                </li>
                <li>
                  <a
                    href="https://prompie.com/s/ah9wxqr9/"
                    target="_blank"
                    className="navigation-category"
                  >
                    업데이트 소식
                  </a>
                </li>
                <li>
                  <a href="/blogs/posts/" className="navigation-category">
                    블로그 소식
                  </a>
                </li>
                <li>
                  <a
                    href="/intro/safety-contract/"
                    className="navigation-category"
                  >
                    프람피 레슨·과외 표준계약서
                  </a>
                </li>
                <li>
                  <a
                    className="navigation-category"
                    href="https://pf.kakao.com/_Zxciwu"
                    target="_blank"
                  >
                    <img
                      src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/base/icons/kakao_plusfriend_squared.png"
                      alt="@프람피를 카카오톡 친구로 등록하세요"
                    ></img>
                    고객센터
                  </a>
                </li>
                <li className="navigation-category">
                  평일 AM 10:00 ~ PM 18:00<br></br>점심 13:00 ~ 14:00 (토, 일,
                  공휴일 휴무)
                </li>
              </ul>
            </div>
            <div id="footer-images" className="col-xs-4">
              <a href="/">
                <img
                  src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/base/logo/logo_wide_blue.png"
                  alt=""
                ></img>
              </a>
              <div id="athenaslab-information">
                <p>아테나스랩 주식회사(대표 임효원)</p>
                <br></br>
                <p>
                  서울특별시 구로구 디지털로 32길 55,<br></br> IBK기업은행
                  구로동 지점 5층 창공
                </p>
                <br></br>
                <p>사업자등록번호 145-87-01021</p>
                <br></br>
                <p>통신판매업신고증 2018-서울금천-0031</p>
                <br></br>
                <p>대표번호 02-2088-0171</p>
                <br></br>
                <p>전자우편주소 support@prompie.com</p>
                <br></br>
              </div>
              <div className="social-icon">
                <a
                  href="https://www.facebook.com/prompie.official/"
                  target="_blank"
                >
                  <img
                    src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/base/icons/facebook_round.png"
                    alt=""
                  ></img>
                </a>
                <a href="https://blog.naver.com/prompie/" target="_blank">
                  <img
                    src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/base/icons/naver_blog_round.png"
                    alt=""
                  ></img>
                </a>
                <a href="https://m.post.naver.com/prompie/" target="_blank">
                  <img
                    src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/base/icons/naver_post_round.png"
                    alt=""
                  ></img>
                </a>
                <a
                  href="https://www.instagram.com/prompie.official/"
                  target="_blank"
                >
                  <img
                    src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/base/icons/instagram_round.png"
                    alt=""
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer-corporation-info" className="container-fluid">
        <div className="container">
          <div className="copyright">© Athena's Lab, Inc.</div>
          <div className="legal">
            <a href="/privacy/">개인정보 취급방침</a>
            <span></span>
            <a href="/terms/" target="_blank">
              이용약관
            </a>
            <span></span>
            <a href="/safety/">안전이용정책</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
