import React from "react";

const Home_review_list = (props) => {
  return (
    <div id="service-list-thumbnail">
      <div className="container text-center">
        <div className="page-header">
          <h3 className="fw-400">수강생들의 생생후기</h3>
          <a href="/reviews/list/">
            더보기
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
        <div id="representative-partners" className="form-box-style">
          <div
            className="swiper-container swiper-container-horizontal"
            id="main-swiper"
          >
            <div
              className="swiper-wrapper"
              styles="transform: translate3d(-6300px, 0px, 0px); transition-duration: 0ms;"
            >
              <div
                className="swiper-slide swiper-slide-duplicate"
                href="#rep-review-modal17"
                data-index="17"
                data-toggle="modal"
                data-swiper-slide-index="16"
                styles="width: 1050px;"
              >
                <div className="rep-partner-contents" styles="cursor:pointer;">
                  <h3 className="rep-service-name">시창청음·화성 레슨</h3>
                  <h6 className="review-detail-text">
                    <i className="fas fa-quote-left text-gray fa-lg only-desktop-visible"></i>
                    <i className="fas fa-quote-right text-gray fa-lg only-desktop-visible"></i>
                    상담을 통해서 수업을 결정하게 되었습니다! 너무 친절하시고
                    저의 부족한 부분을 알기 쉽게 설명해주셔서 수업 또한 지루하지
                    않게 받을 수 있었습니다! 학생의 수준에 맞게 수업을
                    진행해주시는 것이 만족스러웠습니다! 추천드려요!!
                  </h6>
                  <div>
                    <span className="fas fa-star text-warning mr-1"></span>
                    <span className="fas fa-star text-warning mr-1"></span>
                    <span className="fas fa-star text-warning mr-1"></span>
                    <span className="fas fa-star text-warning mr-1"></span>
                    <span className="fas fa-star text-warning mr-1"></span>
                    <span className="star-points">5.0</span>
                    <span styles="margin: 4px;">·</span>
                    <span className="client-name">수강생 박*유님</span>
                  </div>
                </div>
              </div>

              <div
                className="swiper-slide"
                href="#rep-review-modal1"
                data-index="1"
                data-toggle="modal"
                data-swiper-slide-index="0"
                styles="width: 1050px;"
              >
                <div className="rep-partner-contents" styles="cursor:pointer;">
                  <h3 className="rep-service-name">일대일 영어회화 과외</h3>
                  <h6 className="review-detail-text">
                    <i className="fas fa-quote-left text-gray fa-lg only-desktop-visible"></i>
                    <i className="fas fa-quote-right text-gray fa-lg only-desktop-visible"></i>
                    적극적으로 저의 요청사항에 대해 답변을 해주셨고 딱딱한 수업
                    방식이 아닌 흥미유발이 될 수 있는 방향성을 제시해주셔서 믿고
                    수업을 받기로 결정했습니다.
                  </h6>
                  <div>
                    <span className="fas fa-star text-warning mr-1"></span>
                    <span className="fas fa-star text-warning mr-1"></span>
                    <span className="fas fa-star text-warning mr-1"></span>
                    <span className="fas fa-star text-warning mr-1"></span>
                    <span className="fas fa-star text-warning mr-1"></span>
                    <span className="star-points">5.0</span>
                    <span styles="margin: 4px;">·</span>
                    <span className="client-name">수강생 유*문님</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_review_list;
