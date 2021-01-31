import React from "react";

const Home_popular_list = (props) => {
  return (
    <div id="popular-list">
      <div className="container">
        <div className="page-header">
          <h3 id="lesson">인기있는 레슨</h3>
          <a href="/%EB%A0%88%EC%8A%A8/">
            더보기
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="row">
          <div className="overflow-box">
            <div className="col-xs-2">
              <a href="/request/일대일-영어회화-과외/">
                <div className="thumbnail">
                  <div className="hover-img-background">
                    <img
                      src="https://d3cwtye3iv0eb9.cloudfront.net/media/images/service/1544383337942000/thumbnail/origin.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="caption">
                    <h4>일대일 영어회화 과외</h4>
                  </div>
                  <div className="thumbnail-ghost-btn hidden" styles="top: 30%">
                    요청하기
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xs-2">
              <a href="/request/퍼스널-트레이닝/">
                <div className="thumbnail">
                  <div className="hover-img-background">
                    <img
                      src="https://d3cwtye3iv0eb9.cloudfront.net/media/images/service/1544383337698000/thumbnail/origin.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="caption">
                    <h4>퍼스널 트레이닝</h4>
                  </div>
                  <div className="thumbnail-ghost-btn hidden" styles="top: 30%">
                    요청하기
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xs-2">
              <a href="/request/보컬-레슨/">
                <div className="thumbnail">
                  <div className="hover-img-background">
                    <img
                      src="https://d3cwtye3iv0eb9.cloudfront.net/media/images/service/1544383337955000/thumbnail/origin.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="caption">
                    <h4>보컬 레슨</h4>
                  </div>
                  <div className="thumbnail-ghost-btn hidden" styles="top: 30%">
                    요청하기
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xs-2">
              <a href="/request/피아노-키보드-레슨/">
                <div className="thumbnail">
                  <div className="hover-img-background">
                    <img
                      src="https://d3cwtye3iv0eb9.cloudfront.net/media/images/service/1544383337682000/thumbnail/origin.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="caption">
                    <h4>피아노·키보드 레슨</h4>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_popular_list;
