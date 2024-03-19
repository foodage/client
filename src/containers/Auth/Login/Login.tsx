'use client';
import axios from 'axios';
import classNames from 'classnames/bind';
import { signIn, signOut } from 'next-auth/react';
import { useRef } from 'react';

import { Button } from '@/components';
import useLogin from '@/hooks/useLogin';

import styles from './Login.module.scss';
const cx = classNames.bind(styles);

export const Login = () => {
  const { kakaoLogin, naverLogin, googleLogin } = useLogin();

  const naverRef = useRef<HTMLButtonElement>(null);

  const handleLogin = (type: 'kakao' | 'naver' | 'google') => {
    signIn(type);
  };

  return (
    <main className={cx('container')}>
      <section className={cx('login-container')}>
        <h2 className={cx('hidden')}>소셜 로그인</h2>
        <div className={cx('image')}></div>
        <div>
          <h1>FOODAGE</h1>
          <h2>매일 기록하는 음식 다이어리</h2>
        </div>
        <div className={cx('btn-wrap')}>
          <Button style={{ backgroundColor: '#fbe84c' }} onClick={kakaoLogin}>
            <img alt="카카오로 시작하기" src="/assets/icon-kakao.svg" />
            <span>카카오로 시작하기</span>
          </Button>
          <div className={cx('hidden')} id="naverIdLogin"></div>
          <Button ref={naverRef} onClick={() => naverLogin(naverRef)}>
            <img alt="네이버로 시작하기" src="/assets/icon-naver.svg" />
            <span>네이버로 시작하기</span>
          </Button>

          <Button onClick={googleLogin}>
            <img alt="구글로 시작하기" src="/assets/icon-google.svg" />
            <span>구글로 시작하기</span>
          </Button>
        </div>
        <button className={cx('inquiry')} type="button">
          문의하기
        </button>
        <button className={cx('inquiry')} type="button" onClick={() => signOut()}>
          로그아웃
        </button>
      </section>
    </main>
  );
};
