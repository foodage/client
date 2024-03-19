import classNames from 'classnames/bind';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: React.ReactNode;
  styleType?: 'primary';
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ disabled, styleType = 'primary', children, type = 'button', ...rest }, ref) => {
    return (
      <button
        className={cx('button', styleType)}
        disabled={disabled}
        ref={ref}
        type={type}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
