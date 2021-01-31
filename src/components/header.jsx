import React from "react";

const Header = (props) => {
  return (
    <div id="header-navbar">
      <div className="header-navbar-left">
        <div id="header-navbar-logo">
          <a href="/">
            <img
              src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/base/logo/logo_wide_blue.png"
              alt=""
              className="only-desktop-visible"
            ></img>
            <img
              src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/base/logo/logo_wide_blue.png"
              alt=""
              className="only-mobile-visible"
            ></img>
          </a>
        </div>
      </div>
      <div id="partnerNavigation" data-is-partner="false"></div>
      <div id="header-navbar-right">
        <ul className="only-desktop-visible">
          <li>
            <a href="/partners/register/">전문가 등록</a>
          </li>
          <li>
            <a href="/%EB%A0%88%EC%8A%A8/">수업 요청하기</a>
          </li>
          <li>
            <a href="/accounts/login/">로그인</a>
          </li>
        </ul>
        <ul className="mobile-menu only-mobile-visible">
          <li className="mobile-nav-alarm">
            <a href="/chats/list/">
              <i className="fas fa-comments"></i>
            </a>
          </li>
          <li className="mobile-nav-alarm">
            <a href="/notifications/center/list/">
              <i className="fas fa-bell"></i>
            </a>
          </li>
          <li>
            <button className="openbtn" onClick="openNav()">
              <i className="icon-menu"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
