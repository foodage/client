'use client';

import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

import { Navigation } from '../Navigation';

interface Props {
  children: ReactNode;
}

export const GNBLayout = ({ children }: Props) => {
  const pathName = usePathname();

  const gnbHidden = ['/login', '/signup', 'inquiry'];
  const isHidden: boolean = gnbHidden.includes(pathName);

  return (
    <>
      {isHidden ? (
        <>{children}</>
      ) : (
        <>
          {children}
          <Navigation />
        </>
      )}
    </>
  );
};
