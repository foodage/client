const useLogin = () => {
  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
    });
  };

  const naverLogin = () => {
    const naverAuth = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000/test',
      callbackHandle: true,
      isPopup: true,
      loginButton: {
        color: 'green',
        type: 1,
        height: '60',
      },
    });
    console.log(naverAuth, 'naver auth');
    //naverAuth.init();
    return naverAuth;
  };
  return { kakaoLogin, naverLogin };
};

export default useLogin;
