import React from "react";

const Home_link_banner = (props) => {
  return (
    <div id="main-cover-bottom">
      <div className="container text-center">
        <h3 className="only-desktop-visible">
          믿고 맡길 수 있는 프람피, 지금 바로 시작하세요
        </h3>
        <h3 className="only-mobile-visible">
          믿고 맡길 수 있는 프람피<br></br>지금 바로 시작하세요
        </h3>
        <a href="#popular-list" id="animate-scroll-btn" className="blue-btn">
          지금 바로 의뢰하기
        </a>
        <a href="/partners/register/" className="ghost-btn-white">
          전문가 등록하기
        </a>
      </div>
    </div>
  );
};

export default Home_link_banner;
