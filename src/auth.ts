import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

interface User {
  token: string | unknown;
  service: string | unknown;
}

const BASE_PATH = '/login';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'foodage-token',
      credentials: {
        token: { label: 'jwt', type: 'text' },
        service: { label: 'oauth', type: 'text' },
      },
      authorize: async (credentials): Promise<User | null> => {
        const user = { id: 'user', token: credentials.token, service: credentials.service };
        console.log('credentials!!!!!!!!!!!!!!', user);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/test',
  },
  callbacks: {
    signIn: async (token) => {
      console.log('signin?', token);
      return true;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.jwt = user.token;
        token.service = user.service;
      }
      console.log('---------jwt token--------', token);
      return token;
    },
    session: async ({ session, token }) => {
      console.log('----session-----', session);
      session.user.name = 'sam';
      session.token = token.accessToken;
      return session;
    },
    redirect: async ({ url, baseUrl }) => {
      console.log('-----redirect url------', baseUrl, url);
      return url;
    },
  },
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
});
