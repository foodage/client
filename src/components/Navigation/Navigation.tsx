import classNames from 'classnames/bind';

import Plus from '/public/assets/icons/nav-add.svg';
import Clock from '/public/assets/icons/nav-clock.svg';
import Home from '/public/assets/icons/nav-home.svg';
import Search from '/public/assets/icons/nav-search.svg';
import User from '/public/assets/icons/nav-user.svg';

import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

export const Navigation = () => {
  return (
    <nav className={cx('navigation')}>
      <div className={cx('btn-plus')}>
        <Plus />
        <i></i>
      </div>
      <ul className={cx('menu')}>
        <li>
          <Home />
        </li>
        <li>
          <Search />
        </li>
        <li></li>
        <li>
          <Clock />
        </li>
        <li>
          <User />
        </li>
      </ul>
    </nav>
  );
};
