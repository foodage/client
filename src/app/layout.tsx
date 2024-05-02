import '@/styles/globals.scss';

import { getServerSession } from 'next-auth';

import { GNBLayout } from '@/components';
import { authOptions } from '@/lib';
import { Providers } from '@/utils';

import Head from './head';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="ko">
      <Head />
      <Providers session={session}>
        <body>
          <GNBLayout>{children}</GNBLayout>
        </body>
      </Providers>
    </html>
  );
}
