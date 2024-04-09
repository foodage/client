export const useLogin = () => {
  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
      scope: 'account_email',
    });
  };

  const naverLogin = (ref: React.RefObject<HTMLButtonElement>) => {
    if (!ref.current || !ref.current.children) {
      return;
    }
    const loginButton = ref.current.children[0] as HTMLImageElement;
    loginButton.click();
  };

  const googleLogin = () => {
    const client = google.accounts.oauth2.initCodeClient({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
      ux_mode: 'redirect',
      scope: 'email profile',
    });
    client.requestCode();
  };
  return { kakaoLogin, naverLogin, googleLogin };
};
