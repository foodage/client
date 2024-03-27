'use client';

import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';

import IconX from '/public/assets/icon-x.svg';
import { Button } from '@/components';
import { SignupCredentials } from '@/types';

import { characters } from './content';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const info =
  '푸디지에서 사용할 닉네임과 프로필을 선택해주세요. \n 닉네임은 최대 10자까지 입력이 가능해요!';

export const Profile = () => {
  const router = useRouter();
  const [cookies] = useCookies();

  const [nickname, setNickname] = useState<string>('');
  const [character, setCharacter] = useState({
    image: characters[2].image2,
    character: characters[2].value,
  });

  const nicknameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nicknameRef.current?.focus();
  }, []);

  const handleDeleteNickname = () => {
    setNickname('');
    nicknameRef.current?.focus();
  };

  const handleImage = (e: React.MouseEvent<HTMLImageElement>) => {
    const id = e.currentTarget.id;
    const img = characters.find((v) => v.value === id)?.image2;
    setCharacter({
      image: img!,
      character: id,
    });
  };

  const handleSubmit = async () => {
    const accessToken = cookies['Oauth-Access-Token'];
    const serverToken = cookies['Oauth-Server-Token'];

    if (!accessToken || !serverToken) {
      return;
    }
    const formData: SignupCredentials = {
      oauthServerType: 'kakao',
      accessToken: accessToken,
      accountEmail: '',
      profileImage: '',
      nickname: nickname,
      character: character.character,
    };
    try {
      const res = await signIn('credentials', {
        ...formData,
        redirect: false,
      });
      if (res?.ok) {
        router.push('/');
        //✅ Todo: 로그인 or 가입 후 쿠키에 저장할 값 정하기
        //- 최근 로그인한 oauth 타입, nickname
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className={cx('profile-wrap', 'container')}>
      <div className={cx('header-section')}>
        <h1 className={cx('title')}>프로필 만들기</h1>
        <div className={cx('profile-image')}>
          <img alt="프로필 이미지" className={cx('profile')} src={character.image} />
        </div>

        <div className={cx('nickname-wrap')}>
          <div className={cx('input-wrap')}>
            <input
              className={cx('input')}
              maxLength={10}
              ref={nicknameRef}
              type="text"
              value={nickname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}
            />
            <div className={cx('icon-wrap')} onClick={handleDeleteNickname}>
              <IconX />
            </div>
          </div>
          <div className={cx('desc-wrap')}>
            <p className={cx('desc')} dangerouslySetInnerHTML={{ __html: info }}></p>
          </div>
        </div>
      </div>

      <section className={cx('bottom-section')}>
        <h2 className={cx('title')}>프로필 캐릭터</h2>
        <div className={cx('characters')}>
          {characters.map((profile, index) => (
            <ProfileImage
              key={index}
              name={profile.value}
              url={profile.image}
              onClick={handleImage}
            />
          ))}
        </div>
        <div className={cx('btn-wrap')}>
          <Button colorType={'primary'} onClick={handleSubmit}>
            가입하기
          </Button>
        </div>
      </section>
    </main>
  );
};

const ProfileImage = ({
  url,
  name,
  onClick,
}: {
  url: string;
  name: string;
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
}) => {
  return (
    <div className={cx('image-wrap')}>
      <img alt={name} className={cx('image')} id={name} src={url} onClick={onClick} />
    </div>
  );
};
