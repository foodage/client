import classNames from 'classnames/bind';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '@/styles/pages/login.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  const router = useRouter();
  const handleLogin = () => {
    console.log('login clicked!');
  };

  const kakaoAuth = () => {
    console.log('kakao login attempted');
  };
  return (
    <main className={cx('container')}>
      <section className={cx('login-container')}>
        <h2 className={cx('visually-hidden')}>login</h2>
        <div className={cx('image')}></div>
        <div className={cx('btns-wrap')}>
          <ul className={cx('icons-wrap')}>
            <li className={cx('icon')} onClick={handleLogin}>
              <Image
                alt="google"
                height={40}
                layout="responsive"
                src={'/assets/icon-google.png'}
                width={40}
                priority
              />
            </li>
            <li className={cx('icon')} id="naverIdLogin">
              <Image
                alt="naver"
                height={40}
                layout="responsive"
                src={'/assets/icon-naver.png'}
                width={40}
                priority
              />
            </li>
            <li className={cx('icon')} onClick={kakaoAuth}>
              <Image
                alt="kakao"
                height={40}
                layout="responsive"
                src={'/assets/icon-kakao.png'}
                width={40}
                priority
              />
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

export default Page;
