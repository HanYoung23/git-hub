import React from "react";

const Home_header_navbar = props => {
  return (
    <div id="header-navbar">
      <div class="header-navbar-left">
        <div id="header-navbar-logo">
          <a href="/">
            <img
              src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/base/logo/logo_wide_blue.png"
              alt=""
              class="only-desktop-visible"
            ></img>
            <img
              src="https://d3cwtye3iv0eb9.cloudfront.net/static/images/base/logo/logo_wide_blue.png"
              alt=""
              class="only-mobile-visible"
            ></img>
          </a>
        </div>
      </div>
      <div id="partnerNavigation" data-is-partner="false"></div>
      <div id="header-navbar-right">
        <ul class="only-desktop-visible">
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
        <ul class="mobile-menu only-mobile-visible">
          <li class="mobile-nav-alarm">
            <a href="/chats/list/">
              <i class="fas fa-comments"></i>
            </a>
          </li>
          <li class="mobile-nav-alarm">
            <a href="/notifications/center/list/">
              <i class="fas fa-bell"></i>
            </a>
          </li>
          <li>
            <button class="openbtn" onclick="openNav()">
              <i class="icon-menu"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home_header_navbar;
