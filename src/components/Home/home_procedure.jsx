import React from "react";

const Home_procedure = (props) => {
  return (
    <div id="intro-client" className="bg-white">
      <div className="container">
        <div className="page-header text-center">
          <h3 className="fw-400">당신은 정말 중요한 일에 집중하세요</h3>
          <p>
            나머지는 프람피의 전문가들이 해결해 드릴게요.{" "}
            <br className="only-mobile-visible"></br>요청하신 의뢰는 다음과 같이
            진행됩니다.
          </p>
        </div>
        <div className="row nth-first">
          <div className="col-xs-6 text-center">
            <img
              src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/front/root/index/client_01.png"
              alt=""
            ></img>
          </div>
          <div className="col-xs-6">
            <h3>1단계 : 요청하기</h3>
            <p>
              전문가에게 뭘 어떻게 이야기 해야할지 모르시겠다구요?
              <br className="only-desktop-visible"></br>
              걱정마세요. 프람피에서 미리 준비한 쉬운 요청서 폼에
              <br className="only-desktop-visible"></br>
              맞추어 의뢰에 필요한 내용들을 작성해주세요.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-gray">
        <div className="container">
          <div className="row nth-second">
            <div className="col-xs-6 text-center">
              <img
                src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/front/root/index/client_02.png"
                alt=""
              ></img>
            </div>
            <div className="col-xs-6">
              <h3>2단계 : 제안서 받기</h3>
              <p>
                작성된 요청서는 프람피에 등록된 전문가들에게
                <br className="only-desktop-visible"></br>
                전달됩니다. 곧 전문가들의 제안서들이 도착할거에요.
                <br className="only-desktop-visible"></br>
                제안은 최대 7일 간 받을 수 있어요!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row nth-third">
          <div className="col-xs-6 text-center">
            <img
              src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/front/root/index/client_03.png"
              alt=""
            ></img>
          </div>
          <div className="col-xs-6">
            <h3>3단계 : 선택하기</h3>
            <p>
              프람피에서 제공한 안전정책을 참고하여 요청에{" "}
              <br className="only-desktop-visible"></br>적합한 전문가를
              선택하세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_procedure;
