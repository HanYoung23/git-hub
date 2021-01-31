import React from "react";

const Home_corp_banner = (props) => {
  return (
    <div id="prompie-customer">
      <div className="container">
        <div className="page-header">
          <h3 className="fw-400 text-center">
            어떤회사가 프람피를 이용했을까요?
          </h3>
          <p>
            여러 회사에서 다양한 문제를 해결하기 위해 프람피를 이용하고 있어요
          </p>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <img
              src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/front/root/index/company_gongcha.png"
              alt=""
            ></img>
            <p>대한민국 1위 밀크티 브랜드 공차</p>
            <p className="fw-500">재무분석 및 리서치 지원</p>
          </div>
          <div className="col-xs-4">
            <img
              src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/front/root/index/company_babitalk.png"
              alt=""
            ></img>
            <p>100만여 명이 사용하는 뷰티정보앱</p>
            <p className="fw-500">데이터 분석 및 마케팅</p>
          </div>
          <div className="col-xs-4">
            <img
              src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/front/root/index/company_opengallery.png"
              alt=""
            ></img>
            <p>미술작품 렌탈 및 판매 플랫폼</p>
            <p className="fw-500">디지털 마케팅 자문</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_corp_banner;
