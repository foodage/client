'use client';
import Script from 'next/script';
export default function AuthScript() {
  const kakaoInit = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID);
    console.log('Kakao auth init : ', window.Kakao.isInitialized());
  };

  const naverInit = () => {
    const naverAuth = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: process.env.NEXT_PUBILC_NAVER_REDIRECT_URI,
      isPopup: false,
      loginButton: {
        color: 'green', // 색상
        type: 1, // 버튼 크기
        height: '60', // 버튼 높이
      }, // 로그인 버튼 설정
    });

    naverAuth.init();
    console.log('Naver auth init : ', naverAuth ? true : false);
  };

  console.log('SCRIPT LOAD');
  return (
    <>
      <Script
        src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
        defer
        onLoad={naverInit}
      ></Script>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
        onLoad={kakaoInit}
      ></Script>
    </>
  );
}
