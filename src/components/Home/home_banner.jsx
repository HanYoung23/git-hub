import React from "react";

const Home_banner = (props) => {
  return (
    <div id="main-cover">
      <div id="main-cover-img">
        <div className="container-fluid">
          <div className="main-cover-text">
            <h1>
              나에게 딱 맞는 레슨·과외<br></br>선생님을 만나보세요
            </h1>
            <p>1분 요청서 작성 후 선생님들의 제안을 받아보세요</p>
            <div className="mobile-search">
              <div className="search-box">
                <div className="icon-area"></div>
                <input
                  type="text"
                  placeholder="서비스를 찾아보세요"
                  className="form-control ui-autocomplete-input"
                  id="query"
                  autoComplete="off"
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
