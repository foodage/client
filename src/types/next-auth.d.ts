import NextAuth from 'next-auth';

import { SignupResponse } from '.';

declare module 'next-auth' {
  interface Session extends SignupResponse {}
}
