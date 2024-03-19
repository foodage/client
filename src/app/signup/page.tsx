'use client';

import React from 'react';
import { useEffect } from 'react';

const Page = () => {
  console.log(document.cookie);
  function getCookie(name: string) {
    const parts = document.cookie.split(name + '=');
    if (parts.length === 2) {
      return parts[1].split(';')[0];
    }
  }

  useEffect(() => {
    console.log('#', document.cookie);
    console.log('# get-cookie : ', getCookie('Oauth-Access-Token'));
    console.log('# get-cookie : ', getCookie('Oauth-Server-Type'));
  }, []);
  return <div>미가입 회원에게 보이는 회원가입 페이지입니다.</div>;
};

export default Page;
