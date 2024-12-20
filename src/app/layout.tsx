import '@/styles/globals.scss';

import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';

import { Providers } from '@/utils';

import AuthScript from './scripts';
export const metadata: Metadata = {
  title: '푸디지 | Meal Diary',
  description: 'Meal Diary',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>{/* <AuthScript /> */}</head>
      <Providers session={null}>
        <body>
          <main className="container">{children}</main>
          {process.env.NODE_ENV !== 'production' && (
            <span className="env_var">{process.env.NODE_ENV}</span>
          )}
        </body>
      </Providers>
    </html>
  );
}
