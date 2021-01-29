import React from "react";
import Home_header_navbar from "./home_header_navbar";
import Home_banner from "./home_banner";
import Home_category from "./home_category";
import Home_popular_list from "./home_popular_list";
import Home_recommend_list from "./home_recommend_list";
import Home_review_list from "./home_review_list";
import Home_ad_banner from "./home_ad_banner";

const Home = props => {
  return (
    <>
      <Home_header_navbar />
      <Home_banner />
      <Home_category />
      <Home_popular_list />
      <Home_recommend_list />
      <Home_review_list />
      <Home_ad_banner />
    </>
  );
};

export default Home;
