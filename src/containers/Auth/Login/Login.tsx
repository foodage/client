'use client';

import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import Arrow from '/public/assets/icons/arrow-top-right.svg';
import { FOODAGE_VERSION } from '@/common';
import { IconButton } from '@/components';
import { useLogin } from '@/hooks';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

export const Login = () => {
  const { kakaoLogin, googleLogin, naverLogin } = useLogin();

  const naverRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  return (
    <main className={cx('container', 'login-container')}>
      <div className={cx('splash-wrap')}>
        <img alt="foodage" className={cx('background')} src="/assets/images/login-background.svg" />

        <div className={cx('login-section')}>
          <div className={cx('logo-wrap')}>
            <h1 className={cx('logo')}>FOODAGE</h1>
            <span className={cx('introduce')}>나만의 맛집 발자취, 푸디지</span>
          </div>
        </div>
      </div>

      <div className={cx('button-section')}>
        <div className={cx('auth-btn-wrap')}>
          <IconButton
            classNames={'icon-button'}
            colorType={'kakao'}
            iconUrl={'/assets/icons/icon-kakao.svg'}
            text={'카카오로 시작하기'}
            onClick={kakaoLogin}
          />

          <button className={cx('hidden')} id={'naverIdLogin'} ref={naverRef} />
          <IconButton
            classNames={'icon-button'}
            iconUrl={'/assets/icons/icon-naver.svg'}
            text={'네이버로 시작하기'}
            onClick={() => naverLogin(naverRef)}
          />

          <IconButton
            classNames={'icon-button'}
            iconUrl={'/assets/icons/icon-google.svg'}
            text={'구글로 시작하기'}
            onClick={googleLogin}
          />
        </div>

        <div className={cx('inquiry-wrap')}>
          <div className={cx('left')} onClick={() => router.push('/inquiry')}>
            <span className={cx('text-button')}>문의하기</span>
            <Arrow className={cx('arrow-icon')} />
          </div>
          <span className={cx('version')}>{FOODAGE_VERSION}</span>
        </div>
      </div>
    </main>
  );
};
