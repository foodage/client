import axios from 'axios';
import { getServerSession } from 'next-auth';

import { authOptions } from '.';

export const axiosServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 클라이언트와 서버가 통신할때 쿠키 값을 공유하겠다는 설정
});

axiosServer.interceptors.request.use(
  async (request) => {
    const auth_header = request.headers['x-auth-not-required'];

    const session = await getServerSession(authOptions);

    if (auth_header) return request;

    if (session) {
      request.headers['Authorization'] = `JWT ${session.jwt.accessToken}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosServer.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const { config } = error;

    return axios(config);
  },
);
