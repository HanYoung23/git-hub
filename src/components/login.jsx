import React, { useEffect, useState } from "react";
import KakaoLogin from "react-kakao-login";

const Login = (props) => {
  const [data, setData] = useState(null);

  const responseKaKao = (res) => {
    setData(res);

    fetch(`127.0.0.1:3000/user/signin/kakao`, {
      //백엔드에서 원하는 형태의 endpoint로 입력해서 fetch한다.
      method: "GET",
      headers: {
        Authorization: res.response.access_token,
        //받아오는 response객체의 access_token을 통해 유저 정보를 authorize한다.
      },
    })
      .then((res) => res.json())
      .then(
        (res) => localStorage.setItem("token", res.token),
        //백엔드에서 요구하는 key 값(token)으로 저장해서 localStorage에 저장한다.
        //여기서 중요한것은 처음에 console.log(res)해서 들어오는
        //access_token 값을 백엔드에 전달해줘서 백엔드에 저장 해두는
        //절차가 있으므로 까먹지 말 것!
        alert("로그인 성공하였습니다")
      );
  };

  return (
    <div id="section">
      <div className="container">
        <div className="content">
          <KakaoLogin
            //styled component 통해 style을 입혀 줄 예정
            jsKey={"0efa68368c54fb21fd95c729812ceef4"}
            //카카오에서 할당받은 jsKey를 입력
            buttonText="카카오 계정으로 로그인해버리기"
            //로그인 버튼의 text를 입력
            onSuccess={responseKaKao}
            //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장
            getProfile={true}
          />
          <a
            className="text-center"
            href="javascript:allauth.facebook.login%28%27%27%2C%20%27authenticate%27%2C%20%27login%27%2C%20%27%27%29"
          >
            <i className="icon-facebook"></i>페이스북으로 로그인하기
          </a>

          <div id="fb-root" className=" fb_reset">
            <div styles="position: absolute; top: -10000px; width: 0px; height: 0px;">
              <div></div>
            </div>
          </div>
          {/* <script id="allauth-facebook-settings" type="application/json">
{"appId": "603462573179333", "version": "v3.2", "sdkUrl": "//connect.facebook.net/ko_KR/sdk.js", "initParams": {"appId": "603462573179333", "version": "v3.2", "cookie": true}, "loginOptions": {"scope": "email,public_profile"}, "loginByTokenUrl": "https://prompie.com/accounts/facebook/login/token/", "cancelUrl": "https://prompie.com/accounts/social/login/cancelled/", "logoutUrl": "https://prompie.com/accounts/logout/", "loginUrl": "https://prompie.com/accounts/facebook/login/", "errorUrl": "https://prompie.com/accounts/social/login/error/", "csrfToken": "D81v3C9MtjjqmEMOT7Sh8C9GpU5Iu4sJBWfzsiQVloWI7w4s7jYd0LCT2OJ4mW4m"}
</script> */}
          <script
            type="text/javascript"
            src="https://d3cwtye3iv0eb9.cloudfront.net/static/facebook/js/fbconnect.js"
          ></script>

          <hr className="nth-first"></hr>
          <span className="text-center">또는</span>
          <hr className="nth-second"></hr>

          <form className="login" action="/accounts/login/" method="post">
            <input
              type="hidden"
              name="csrfmiddlewaretoken"
              value="Cuh7uo389QDn74B7sJuDq6bnIDiR1aifAivbT4Kh1VgFSWTLGVAzifEAlxWdT2US"
            ></input>
            <input
              autoFocus=""
              className="nth-first"
              id="id_login"
              name="login"
              type="email"
              placeholder="이메일 주소"
              required=""
            ></input>
            <input
              className="nth-second"
              id="id_password"
              name="password"
              type="password"
              placeholder="비밀번호"
              required=""
            ></input>
            <p className="text-center">
              <a href="/accounts/password/reset/">비밀번호를 잊으셨나요?</a>
            </p>

            <button type="submit" className="blue-btn" id="login_login">
              로그인
            </button>
          </form>
        </div>
        <p className="text-center">
          <a href="/accounts/signup/">계정이 없으신가요?</a>
        </p>
      </div>
    </div>
  );
};
export default Login;
