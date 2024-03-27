export const useLogin = () => {
  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
    });
  };

  const naverLogin = (naverRef: React.RefObject<HTMLButtonElement>) => {
    const loginButton = naverRef.current!.previousSibling!.firstChild as HTMLAnchorElement;
    loginButton.click();
  };

  const googleLogin = () => {
    const client = google.accounts.oauth2.initCodeClient({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      ux_mode: 'redirect',
      scope: 'email profile',
      redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
    });
    client.requestCode();
  };
  return { kakaoLogin, naverLogin, googleLogin };
};
