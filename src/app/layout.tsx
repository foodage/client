import '@/styles/globals.scss';

import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib';
import { Providers } from '@/utils';

import AuthScript from './scripts';

export const metadata: Metadata = {
  title: '푸디지',
  description: '나만의 음식 발자취',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="ko">
      <head>
        <AuthScript />
      </head>
      <Providers session={session}>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
