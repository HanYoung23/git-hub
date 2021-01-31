import React from "react";

const Home_ad_banner = (props) => {
  return (
    <div
      id="main-cover-ad"
      styles={{
        backgroundImage: `url('
          https://d3cwtye3iv0eb9.cloudfront.net/static/images/front/root/index/hakwon_beta.jpg'
        )`,
      }}
    >
      <div className="container text-center">
        <h3 className="" styles="font-weight:500 ;margin-bottom: 16px;">
          프람피 학원 서비스 Beta 오픈!
        </h3>
        <h6 className="" styles="color: #fff; margin-bottom: 32px;">
          원하는 학원 정보를 바로 쉽게 확인해보세요
        </h6>
        <a href="https://academy.prompie.com/">지금 보러가기</a>
      </div>
    </div>
  );
};

export default Home_ad_banner;

// backgroundImage: url(`https://d3cwtye3iv0eb9.cloudfront.net/static/images/front/root/index/hakwon_beta.jpg`)
