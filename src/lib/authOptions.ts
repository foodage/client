import type { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { authService } from '@/service';
import { SignupCredentials } from '@/types';

export const authOptions: NextAuthOptions = {
  pages: {
    newUser: '/signup',
  },
  providers: [
    CredentialsProvider({
      id: 'signup',
      name: 'signup',
      credentials: {},

      async authorize(credentials: SignupCredentials) {
        if (!credentials) {
          return;
        }
        try {
          const { data } = await authService.signup(credentials);
          if (!data) {
            return;
          }

          return {
            memberInfoDto: data.memberInfoDto,
            token: data.jwt.accessToken,
            refreshToken: data.jwt.refreshToken,
          };
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    } as any),
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      session = token.user as Session;
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
