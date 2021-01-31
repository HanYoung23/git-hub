import React from "react";

const Request_english_fade = (props) => {
  return (
    <div
      className="modal fade"
      id="prompie-manual-modal"
      tabindex="-1"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="swiper-container" id="prompie-manual-swiper">
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className="close-button"
            >
              ×
            </button>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="bg-field nth-first"
                  data-url="https://d3cwtye3iv0eb9.cloudfront.net/static/images/meta/services/forms/request/modal/1st.jpg?v=3.00"
                ></div>
                <div className="text-field">
                  <p>
                    프람피는 다양한 레슨 전문가를<br></br>쉽게 찾을 수 있는
                    서비스에요
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="bg-field nth-second"
                  data-url="https://d3cwtye3iv0eb9.cloudfront.net/static/images/meta/services/forms/request/modal/2nd.png?v=3.00"
                ></div>
                <div className="text-field">
                  <p>
                    무료로 요청서 1장만 작성하면<br></br>딱 맞는 전문가들을
                    소개해드려요
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="bg-field nth-third"
                  data-url="https://d3cwtye3iv0eb9.cloudfront.net/static/images/meta/services/forms/request/modal/3rd.png?v=3.00"
                ></div>
                <div className="text-field">
                  <p>
                    내 요청서 내용을 바탕으로<br></br>전문가들의 제안을 받게
                    될거에요
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="bg-field nth-fourth"
                  data-url="https://d3cwtye3iv0eb9.cloudfront.net/static/images/meta/services/forms/request/modal/4th.jpg?v=3.00"
                ></div>
                <div className="text-field">
                  <p>
                    지금도 많은 분들이 프람피를 통해<br></br>수업을 진행 하고
                    있어요
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="last-field">
                  <p>그럼 이제 요청서를 작성해볼까요?</p>
                  <button
                    type="button"
                    data-dismiss="modal"
                    className="blue-btn"
                  >
                    요청서 작성하기
                  </button>
                </div>
              </div>
            </div>
            <div
              className="swiper-pagination"
              id="manual-swiper-pagination"
            ></div>
            <div id="manual-swiper-prev-btn" className="hidden">
              <i className="icon-left-open-big"></i>
              이전
            </div>
            <div id="manual-swiper-next-btn">
              다음
              <i className="icon-right-open-big"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Request_english_fade;
