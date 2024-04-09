type AuthType = 'kakao' | 'naver' | 'google';
interface SignupCredentials {
  //회원가입 Request body
  oauthServerType: AuthType;
  accessToken: string;
  accountEmail: string;
  profileImage: string;
  nickname: string;
  character: string;
}

interface SignupResponse {
  //회원가입 Response data
  memberInfoDto: MemberInfo;
  jwt: JWTResponse;
}

interface MemberInfo {
  //유저 회원가입 정보
  nickname: string;
  profileImage: string;
  character: string;
  createdAt: string;
  updatedAt: string;
}

interface JWTResponse {
  //토큰
  accessToken: string;
  refreshToken: string;
}

interface UserInfo {
  id: number;
  oauthId: {
    oauthServerId: string;
    oauthServerType: string;
  };
  accountEmail: string;
  nickname: string;
  profileImage: string;
  character: string;
  state: string;
  createdAt: string;
  updatedAt: string;
  lastLoginAt: string;
  authorities: [
    {
      authorityName: string;
    },
  ];
}

export type { JWTResponse, MemberInfo, SignupCredentials, SignupResponse, UserInfo };
