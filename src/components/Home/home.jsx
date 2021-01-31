import React from "react";
import Home_banner from "./home_banner";
import Home_category from "./home_category";
import Home_popular_list from "./home_popular_list";
import Home_recommend_list from "./home_recommend_list";
import Home_review_list from "./home_review_list";
import Home_ad_banner from "./home_ad_banner";
import Home_procedure from "./home_procedure";
import Home_link_banner from "./home_link_banner";
import Home_corp_banner from "./home_corp_banner";
import Home_experts_intro from "./home_experts_intro";
import "./home.css";

const Home = (props) => {
  return (
    <>
      <Home_banner />
      <Home_category />
      <Home_popular_list />
      <Home_recommend_list />
      <Home_review_list />
      <Home_ad_banner />
      <Home_procedure />
      <Home_link_banner />
      <Home_corp_banner />
      <Home_experts_intro />
    </>
  );
};

export default Home;
