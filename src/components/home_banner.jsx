import React from "react";

const Home_banner = props => {
  return (
    <div id="main-cover">
      <div id="main-cover-img">
        <div class="container-fluid">
          <div class="main-cover-text">
            <h1>
              나에게 딱 맞는 레슨·과외<br></br>선생님을 만나보세요
            </h1>
            <p>1분 요청서 작성 후 선생님들의 제안을 받아보세요</p>
            <div class="mobile-search">
              <div class="search-box">
                <div class="icon-area"></div>
                <input
                  type="text"
                  placeholder="서비스를 찾아보세요"
                  class="form-control ui-autocomplete-input"
                  id="query"
                  autocomplete="off"
                ></input>
              </div>
            </div>
          </div>
          <img
            id="main-cover-img-desktop"
            src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/front/root/index/prompie_main.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home_banner;
