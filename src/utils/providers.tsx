'use client';

import { ReactNode } from 'react';

export const Providers = ({ children, session }: { children: ReactNode; session: null }) => {
  // <SessionProvider session={session}>{children}</SessionProvider>;
  return <>{children}</>;
};
