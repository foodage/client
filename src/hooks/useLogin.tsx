const useLogin = () => {
  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
    });
  };

  const naverLogin = (naverRef: React.RefObject<HTMLButtonElement>) => {
    const loginButton = naverRef.current!.previousSibling!.firstChild as HTMLAnchorElement;
    loginButton.click();
  };
  return { kakaoLogin, naverLogin };
};

export default useLogin;
