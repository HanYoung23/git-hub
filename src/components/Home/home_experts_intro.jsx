import React from "react";

const Home_experts_intro = (props) => {
  return (
    <div id="prompie-partner">
      <div className="container text-center">
        <div className="page-header">
          <h3 className="fw-400 text-center">
            프람피엔 어떤 전문가들이 있을까요?
          </h3>
          <p>
            각 분야에서 전문성을 가진 다양한 전문가들이 여러분들을 기다리고
            있습니다.
          </p>
        </div>

        <div className="review-box">
          <h3 className="fw-400">
            포토샵, 일러스트<br></br>쉽게 알려드려요
          </h3>
          <hr></hr>
          <p className="text-left text-justify">
            저는 다양한 분들과 디자인 작업을 할때 즐거워요. 현재 프리랜서로
            다양한 국내외 기업, 창업자분들과 함께 다양한 디자인 작업을 하고
            있습니다. 미국에서는 Esquire Magazine과 Carnegie Hall 등에서 일을
            했었구요, 여러 직업들을 통해 쌓은 경험을 바탕으로 디자이너의 손길이
            필요한 곳에 도움을 드리고 싶습니다.
          </p>
          <div className="review-profile-box">
            <div className="row">
              <div className="col-xs-4">
                <img
                  src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/front/root/index/reviewer_soomin.png"
                  alt=""
                ></img>
                <p className="fw-400">김수민</p>
              </div>
              <div className="col-xs-8 text-left">
                <p>UI/UX 디자인·</p>
                <p>편집디자인·패키지 디자인</p>
                <p>- 뉴욕 프랫대학원</p>
                <p>- 4년차 프리랜서 디자이너</p>
              </div>
            </div>
          </div>
        </div>
        <div className="review-box">
          <h3 className="fw-400">
            더 많은 분들을 만날 수<br></br>있기를 기대하고 있어요
          </h3>
          <hr></hr>
          <p className="text-left text-justify">
            어렸을 때부터 피아노를 시작해서, 현재는 실용음악과 작곡전공으로
            가요와, 피아노를 함께 하고 있습니다. 그동안 종종 레슨을 해왔는데
            앞으로도 반주나 곡을 쓰는데 어려움이 있으신 분들과 함께하고
            싶습니다. 밴드나 교회, 결혼식 이벤트를 위해, 또는 그냥 취미로
            피아노/작곡을 배우고 싶으신 분들 모두 환영합니다!
          </p>
          <div className="review-profile-box">
            <div className="row">
              <div className="col-xs-4">
                <img
                  src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/front/root/index/reviewer_seunghee.png"
                  alt=""
                ></img>
                <p className="fw-400">이승희</p>
              </div>
              <div className="col-xs-8 text-left">
                <p>뉴에이지·가요·CCM반주/</p>
                <p>작곡/음악이론기초</p>
                <p>- 동덕여대실용음악과</p>
                <p>- 공연경험 다수, 레슨 3년차</p>
              </div>
            </div>
          </div>
        </div>
        <div className="review-box">
          <h3 className="fw-400">
            영어회화 과외는<br></br>저에게 맡겨주세요
          </h3>
          <hr></hr>
          <p className="text-left text-justify">
            어렸을 때부터 영어에 친숙한 환경에서 자라왔어요. 외고를 다녔고
            대학에서도 대부분의 강의를 영어로 들어서 한국에서도 영어로 생활을 한
            시간이 많았구요. 짧지 않은 기간 해외에 거주하기도 했습니다. 이러한
            배경을 가지고 현재는 다양한 분야에서 영어가 필요한 경우에 도움을
            드리고 있어요.
          </p>
          <div className="review-profile-box">
            <div className="row">
              <div className="col-xs-4">
                <img
                  src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/front/root/index/reviewer_kunwoo.png"
                  alt=""
                ></img>
                <p className="fw-400">박건우</p>
              </div>
              <div className="col-xs-8 text-left">
                <p>한영·영한번역/영어레슨</p>
                <p>- 대원외고 졸업</p>
                <p>- 고려대 경영 재학 </p>
                <p>- 프리랜서 3년차</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_experts_intro;
