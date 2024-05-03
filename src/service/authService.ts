import { AxiosPromise } from 'axios';

import { axiosClient } from '@/lib';
import { SignupCredentials } from '@/types';

interface AuthService {
  /**
   * @description 서비스 회원가입 완료 요청
   * @name authService.signup
   * @method {POST}
   * @body {SignupCredentials}
   * @return {AxiosPromise}
   */
  readonly signup: (data: SignupCredentials) => AxiosPromise;
}

const authService: AuthService = {
  signup: (data: SignupCredentials) => {
    return axiosClient.post('member/join', data);
  },
};

export { authService };
export type { AuthService };
