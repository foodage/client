import classNames from 'classnames/bind';

import styles from './IconButton.module.scss';

const cx = classNames.bind(styles);

import Image from 'next/image';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Button } from '../Button';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconUrl: string;
  text: string;
  colorType?: 'kakao' | 'white';
  classNames?: string;
  iconSize?: number;
}

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ iconUrl, text, colorType, iconSize = 20, ...rest }, ref) => {
    const classes = cx('button-wrap', colorType, classNames);

    return (
      <Button ref={ref} {...rest} className={classes}>
        <div className={cx('contents')}>
          <Image
            alt={`${text}이미지`}
            className={cx('icon')}
            height={iconSize}
            src={iconUrl}
            width={iconSize}
          />
          <span className={cx('inner-text')}>{text}</span>
        </div>
      </Button>
    );
  },
);

IconButton.displayName = 'IconButton';
