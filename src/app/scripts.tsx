'use client';
import Script from 'next/script';
export default function AuthScript() {
  const kakaoInit = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID);
    console.log('Kakao auth init : ', window.Kakao.isInitialized(), window.Kakao);
  };

  const naverInit = () => {
    const naverAuth = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI,
      isPopup: false,
      loginButton: {
        color: 'green', // 색상
        type: 1, // 버튼 크기
        height: '30', // 버튼 높이
      },
      response_type: 'code',
    });

    naverAuth.init();
    console.log('Naver auth init : ', naverAuth ? true : false, naverAuth);
  };

  const googleInit = () => {
    const handleCallback = (response: unknown) => {
      console.log(response);
    };
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: handleCallback,
    });

    console.log('Google Auth init : ', google ? true : false, google);
  };

  return (
    <>
      {/* <Script
        src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
        defer
        onLoad={naverInit}
      ></Script> */}
      <Script src="/naver-login-sdk.js" async defer onLoad={naverInit}></Script>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        onLoad={kakaoInit}
      ></Script>
      {/* <Script
        src="https://apis.google.com/js/api.js"
        async
        defer
        onLoad={() => gapi.load('client', googleInit)}
      ></Script> */}
      <Script src="https://accounts.google.com/gsi/client" async defer onLoad={googleInit}></Script>
    </>
  );
}
