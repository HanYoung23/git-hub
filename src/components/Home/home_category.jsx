import React from "react";

const Home_category = (props) => {
  return (
    <div id="category_nav">
      <div className="category_nav_box">
        <div className="category_nav_box_2">
          <a
            href="/%EB%A0%88%EC%8A%A8/%EC%99%B8%EA%B5%AD%EC%96%B4/"
            className="current_page"
          >
            <span>외국어</span>
          </a>

          <a href="/%EB%A0%88%EC%8A%A8/%EC%8A%A4%ED%8F%AC%EC%B8%A0-%EB%8C%84%EC%8A%A4/">
            <span>스포츠·댄스</span>
          </a>

          <a href="/%EB%A0%88%EC%8A%A8/%EC%9D%8C%EC%95%85/">
            <span>음악</span>
          </a>

          <a href="/%EB%A0%88%EC%8A%A8/%EC%98%88%EC%88%A0-%EC%9A%94%EB%A6%AC/">
            <span>예술·요리</span>
          </a>

          <a href="/%EB%A0%88%EC%8A%A8/%EC%8B%A4%EB%AC%B4%EA%B5%90%EC%9C%A1/">
            <span>실무교육</span>
          </a>

          <a href="/%EB%A0%88%EC%8A%A8/%EA%B5%90%EA%B3%BC%EB%AA%A9-%EC%A0%84%EA%B3%B5/">
            <span>교과목</span>
          </a>
        </div>
      </div>
      <div className="grad"></div>
    </div>
  );
};

export default Home_category;
