'use client';

import classNames from 'classnames/bind';
import { useRef } from 'react';

import { IconButton } from '@/components';
import useLogin from '@/hooks/useLogin';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

export const Login = () => {
  const { kakaoLogin, naverLogin, googleLogin } = useLogin();

  const naverRef = useRef<HTMLButtonElement>(null);

  return (
    <main className={cx('container', 'login-container')}>
      <div>
        <h1>FOODAGE</h1>
      </div>
      <div className={cx('btn-wrap')}>
        <IconButton
          classNames="icon-button"
          colorType={'kakao'}
          iconUrl="/assets/icon-kakao.svg"
          text="카카오로 시작하기"
          onClick={kakaoLogin}
        />
        <IconButton
          classNames="icon-button"
          iconUrl="/assets/icon-naver.svg"
          ref={naverRef}
          text="네이버로 시작하기"
          onClick={() => naverLogin(naverRef)}
        />
        <IconButton
          classNames="icon-button"
          iconUrl="/assets/icon-google.svg"
          text="구글로 시작하기"
          onClick={googleLogin}
        />
      </div>
    </main>
  );
};
