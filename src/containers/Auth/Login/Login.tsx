'use client';
import classNames from 'classnames/bind';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef, useState } from 'react';

import AuthScript from '@/app/scripts';
import { Button } from '@/components';
import useLogin from '@/hooks/useLogin';

import LoginAnimation from '../../../../public/assets/animation/login.json';
import InquiryIcon from '../../../../public/assets/icon-inquiry.svg';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);

export const Login = () => {
  const { kakaoLogin, naverLogin, googleLogin } = useLogin();

  const animationRef = useRef<LottieRefCurrentProps>(null);
  animationRef.current?.setSpeed(1.3);

  const naverRef = useRef<HTMLButtonElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <AuthScript />
      <div className={cx('mobile-screen-only', 'login-container', { 'fade-in': isVisible })}>
        <h2 className={cx('hidden')}>소셜 로그인</h2>
        <div className={cx('login-animation')}>
          <Lottie animationData={LoginAnimation} loop={false} lottieRef={animationRef} />
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
          <footer className={cx('login-footer')}>
            <div className={cx('inquiry')}>
              <span>문의하기</span>
              <InquiryIcon className={cx('inquiry-icon')} />
            </div>
            <span>{process.env.NEXT_PUBLIC_APP_VERSION}</span>
          </footer>
        </div>
      </div>
    </>
  );
};
