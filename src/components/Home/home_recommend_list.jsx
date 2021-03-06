import React from "react";

const Home_recommend_list = (props) => {
  return (
    <div id="popular-list">
      <div className="container">
        <div className="page-header">
          <h3 id="lesson">추천하는 레슨</h3>
          <a href="/%EB%A0%88%EC%8A%A8/">
            더보기
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="row">
          <div className="overflow-box">
            <div className="col-xs-2">
              <a href="/request/골프-레슨/">
                <div className="thumbnail">
                  <div className="hover-img-background">
                    <img
                      src="https://d3cwtye3iv0eb9.cloudfront.net/media/images/service/1544383337703000/thumbnail/origin.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="caption">
                    <h4>골프 레슨</h4>
                  </div>
                  <div className="thumbnail-ghost-btn hidden" styles="top: 30%">
                    요청하기
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xs-2">
              <a href="/request/DELE-과외/">
                <div className="thumbnail">
                  <div className="hover-img-background">
                    <img
                      src="https://d3cwtye3iv0eb9.cloudfront.net/media/images/service/1544383337807000/thumbnail/origin.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="caption">
                    <h4>DELE 과외</h4>
                  </div>
                  <div className="thumbnail-ghost-btn hidden" styles="top: 30%">
                    요청하기
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xs-2">
              <a href="/request/고등-수학-과외/">
                <div className="thumbnail">
                  <div className="hover-img-background">
                    <img
                      src="https://d3cwtye3iv0eb9.cloudfront.net/media/images/service/1544383337949000/thumbnail/origin.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="caption">
                    <h4>고등 수학 과외</h4>
                  </div>
                  <div className="thumbnail-ghost-btn hidden" styles="top: 30%">
                    요청하기
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xs-2">
              <a href="/request/종합-독일어-과외/">
                <div className="thumbnail">
                  <div className="hover-img-background">
                    <img
                      src="https://d3cwtye3iv0eb9.cloudfront.net/media/images/service/1544383337961000/thumbnail/origin.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="caption">
                    <h4>종합 독일어 과외</h4>
                  </div>
                  <div className="thumbnail-ghost-btn hidden" styles="top: 30%">
                    요청하기
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xs-2">
              <a href="/request/트럼펫-레슨/">
                <div className="thumbnail">
                  <div className="hover-img-background">
                    <img
                      src="https://d3cwtye3iv0eb9.cloudfront.net/media/images/service/1544383337856000/thumbnail/origin.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="caption">
                    <h4>트럼펫 레슨</h4>
                  </div>
                  <div className="thumbnail-ghost-btn hidden" styles="top: 30%">
                    요청하기
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_recommend_list;
