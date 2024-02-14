'use client';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import Pizon from '/public/assets/characters/비둘기.svg';
import IconX from '/public/assets/icon-x.svg';
import { Button } from '@/components';

import { characters } from './content';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const info =
  '푸디지에서 사용할 닉네임과 프로필을 선택해주세요. \n 닉네임은 최대 10자까지 입력이 가능해요!';

export const Profile = () => {
  const [nickname, setNickname] = useState<string>('');
  const [image, setImage] = useState<string>(characters[0].image);

  const nicknameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nicknameRef.current?.focus();
  }, []);

  const handleDeleteNickname = () => {
    setNickname('');
    nicknameRef.current?.focus();
  };

  const handleImage = (e: React.MouseEvent<HTMLDivElement>) => {
    const imageUrl = e.currentTarget.querySelector('img')?.getAttribute('src');
    setImage(imageUrl!);
  };

  return (
    <main className={cx('profile-wrap', 'container')}>
      <div className={cx('header-section')}>
        <h1 className={cx('title')}>프로필 만들기</h1>
        {/* 프로필 이미지 설정  */}
        <div className={cx('profile-image')}>
          <img alt="프로필 이미지" className={cx('profile')} src={image} />
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
        <Button styleType={'primary'}>가입하기</Button>
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
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div className={cx('image-wrap')} onClick={(e) => onClick(e)}>
      <img alt={name} className={cx('image')} src={url} />
    </div>
  );
};
