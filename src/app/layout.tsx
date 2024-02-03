import '@/styles/globals.scss';

import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth';
import { Providers } from '@/utils';

import Head from './head';

// export const metadata: Metadata = {
//   title: '푸디지 | Meal Diary',
//   description: 'Meal Diary',
// };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="ko">
      <Head />
      <Providers session={session}>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
