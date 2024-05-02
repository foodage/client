'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Plus from '/public/assets/icons/nav-add.svg';
import Feed from '/public/assets/icons/nav-clock.svg';
import FeedActive from '/public/assets/icons/nav-clock-fill.svg';
import Home from '/public/assets/icons/nav-home.svg';
import HomeActive from '/public/assets/icons/nav-home-fill.svg';
import Search from '/public/assets/icons/nav-search.svg';
import SearchActive from '/public/assets/icons/nav-search-fill.svg';
import Subtract from '/public/assets/icons/nav-subtract.svg';
import User from '/public/assets/icons/nav-user.svg';
import UserActive from '/public/assets/icons/nav-user-fill.svg';
import { PATH_LINK } from '@/common';

import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

export const Navigation = () => {
  const pathName = usePathname();

  return (
    <nav className={cx('navigation')}>
      <ul className={cx('menu')}>
        <div className={cx('left')}>
          <li className={cx('tab-button', 'home', 'active')}>
            <Link href={PATH_LINK.home}>
              {pathName === PATH_LINK.home ? <HomeActive /> : <Home />}
            </Link>
          </li>
          <li className={cx('tab-button', 'search')}>
            <Link href={PATH_LINK.search}>
              {pathName.startsWith(PATH_LINK.search) ? <SearchActive /> : <Search />}
            </Link>
          </li>
        </div>

        <li className={cx('tab-button', 'plus')}>
          <Link href={PATH_LINK.review}>
            <i className={cx('btn-plus')}>
              <Plus />
            </i>
          </Link>
          <Subtract className={cx('subtrack')} />
        </li>

        <div className={cx('right')}>
          <li className={cx('tab-button', 'feed')}>
            <Link href={PATH_LINK.reviewList}>
              {pathName.startsWith(PATH_LINK.reviewList) ? <FeedActive /> : <Feed />}
            </Link>
          </li>
          <li className={cx('tab-button', 'profile')}>
            <Link href={PATH_LINK.profile}>
              {pathName.startsWith(PATH_LINK.profile) ? <UserActive /> : <User />}
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
