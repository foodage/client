'use client';

import Script from 'next/script';
export default function Head() {
  console.log(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID);
  const kakaoInit = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID);
    console.log('Kakao auth init : ', window.Kakao.isInitialized());
  };

  return (
    <>
      <title>FOODAGE | Meal Diary</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="Foodage, Meal Diary" name="description" />
      <link href="/favicon.ico" rel="icon" />
      <Script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js" defer></Script>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
        defer
        onLoad={kakaoInit}
      ></Script>
    </>
  );
}
