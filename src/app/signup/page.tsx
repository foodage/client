'use client';
// import { cookies } from 'next/headers';
import React, { useEffect } from 'react';

import { Profile } from "@/containers";
import { credentialsSignIn } from '@/utils/serverAction';

interface Token {
  name: string;
  value: string;
}
const Page = () => {
  // console.log('로그인 중...');
  //
  // useEffect(() => {
  //   credentialsSignIn({ token: 'hh', service: 'kakao' });
  // }, []);

  //credentialsSignIn({ token: 'hh', service: 'kakao' });
  // const cookie = cookies();
  // const getToken = cookie.get('Oauth-Access-Token') as Token;
  // const getService = cookie.get('Oauth-Server-Type') as Token;
  // console.log('server Type', getService);
  // function getCookie(name: string) {
  //   const parts = document.cookie.split(name + '=');
  //   if (parts.length === 2) {
  //     return parts[1].split(';')[0];
  //   }
  // }

  // const token = getCookie('Oauth-Access-Token');
  // const login = async () => {
  //   await signIn('credentials', {
  //     token: getToken.value,
  //     service: getService.value,
  //     redirectTo: '/test',
  //   });
  // };

  // login();

  return <Profile />;
};

export default Page;
