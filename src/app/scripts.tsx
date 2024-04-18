'use client';

import Script from 'next/script';
import { useCallback } from 'react';

export default function AuthScript() {
  //카카오 스크립트 로드
  const kakaoInit = useCallback(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID);
    console.log('Kakao auth init : ', window.Kakao.isInitialized(), window.Kakao);
  }, []);

  //네이버 스크립트 로드
  const naverInit = useCallback(() => {
    const naverAuth = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI,
      isPopup: false,
      loginButton: {
        color: 'green',
        type: 1,
        height: '30',
      },
      response_type: 'code',
    });

    naverAuth.init();
    console.log('Naver auth init : ', naverAuth ? true : false, naverAuth);
  }, []);

  //구글 스크립트 로드
  const googleInit = useCallback(() => {
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: handleGoogleCallback,
    });
    console.log('Google Auth init : ', google ? true : false, google);
  }, []);

  const handleGoogleCallback = (response: unknown) => {
    console.log(response);
  };

  return (
    <>
      <Script crossOrigin="anonymous" src="/naver-login-sdk.js" async onLoad={naverInit}></Script>
      <Script
        crossOrigin="anonymous"
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
        async
        onLoad={kakaoInit}
      ></Script>
      <Script
        crossOrigin="anonymous"
        src="https://accounts.google.com/gsi/client"
        async
        onLoad={googleInit}
      ></Script>
    </>
  );
}
