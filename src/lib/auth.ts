import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

/**
 * api/auth/[...next auth]/route.ts 에서 사용
 *
 * [Note]
 * - kakao login 🏂
 * - naver login
 * - google login
 *
 * 임의 작성
 */

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {},

      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        if (!username || !password) {
          return null;
        }

        try {
          const res = {
            id: 'id',
            token: 'token',
          };

          return {
            id: res.id,
            token: res.token,
          };
        } catch (err) {
          console.log(err);

          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      /*@ts-ignore */
      session = token.user;
      return Promise.resolve(session);
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  session: {
    strategy: 'jwt',
  },
};
