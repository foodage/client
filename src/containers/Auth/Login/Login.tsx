'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

export const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    console.log('login clicked!');
  };

  return (
    <main className={cx('container')}>
      <section className={cx('login-container')}>
        <h2 className={cx('visually-hidden')}>login</h2>
        <div className={cx('image')}></div>
        <div className={cx('btns-wrap')}>
          <ul className={cx('icons-wrap')}>
            <li className={cx('icon')} onClick={handleLogin}>
              <Image alt="google" height={40} src={'/assets/icon-google.png'} width={40} priority />
            </li>
            <li className={cx('icon')} id="naverIdLogin">
              <Image alt="naver" height={40} src={'/assets/icon-naver.png'} width={40} priority />
            </li>
            <li className={cx('icon')} onClick={() => signIn('kakao')}>
              <Image alt="kakao" height={40} src={'/assets/icon-kakao.png'} width={40} priority />
            </li>
          </ul>
          <button className={cx('inquiry')} type="button" onClick={() => router.push('/inpuiry')}>
            문의하기
          </button>
        </div>
      </section>
    </main>
  );
};
