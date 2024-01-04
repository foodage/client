import '@/styles/globals.scss';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '푸디지 | Meal Diary',
  description: 'Meal Diary',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
