'use client';
import axios from 'axios';
import classNames from 'classnames/bind';
import Lottie from 'lottie-react';
import { signIn, signOut } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components';
import useLogin from '@/hooks/useLogin';

import LoginAnimation from '../../../../public/assets/animation/login.json';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);

export const Login = () => {
  const { kakaoLogin, naverLogin, googleLogin } = useLogin();

  const naverRef = useRef<HTMLButtonElement>(null);

  const handleLogin = (type: 'kakao' | 'naver' | 'google') => {
    signIn(type);
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className={cx('container')}>
      <section className={cx('login-container', { 'fade-in': isVisible })}>
        <h2 className={cx('hidden')}>소셜 로그인</h2>
        <div className={cx('login-animation')}>
          <Lottie animationData={LoginAnimation} loop={false} />
        </div>
        <div className={cx('login-content')}>
          <div className={cx('btn-wrap')}>
            <Button style={{ backgroundColor: '#fbe84c' }} styleType="simple" onClick={kakaoLogin}>
              <div className={cx('btn-content')}>
                <img alt="카카오로 시작하기" className={cx('icon')} src="/assets/icon-kakao.svg" />
                <span>카카오로 시작하기</span>
              </div>
            </Button>
            <div className={cx('hidden')} id="naverIdLogin"></div>
            <Button ref={naverRef} styleType="simple" onClick={() => naverLogin(naverRef)}>
              <div className={cx('btn-content')}>
                <img alt="네이버로 시작하기" className={cx('icon')} src="/assets/icon-naver.svg" />
                <span>네이버로 시작하기</span>
              </div>
            </Button>

            <Button styleType="simple" onClick={googleLogin}>
              <div className={cx('btn-content')}>
                <img alt="구글로 시작하기" className={cx('icon')} src="/assets/icon-google.svg" />
                <span>구글로 시작하기</span>
              </div>
            </Button>
          </div>
          <button className={cx('inquiry')} type="button">
            문의하기
          </button>
        </div>
      </section>
    </main>
  );
};
