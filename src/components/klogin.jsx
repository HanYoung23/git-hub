// import KakaoLogin from "react-kakao-login";
import React from "react";
import { useHistory } from "react-router-dom";

const Klogin = (props) => {
  const { Kakao } = window;

  const history = useHistory();
  const KakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`http://localhost:3000/accounts/login`, {
          method: "POST",
          body: JSON.stringify({
            access_token: authObj.access_token,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem("Kakao_token", res.access_token);
            if (res.access_token) {
              alert("Welcome");
              history.push("/");
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <article className="socialLogin">
      <button className="btn kakao" onClick={KakaoLoginClickHandler}>
        <img src="https://www.lenstown.co.kr/img/sns/kakao_login.png" alt="" />
      </button>
    </article>
  );
};
export default Klogin;
