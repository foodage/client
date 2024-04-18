import classNames from 'classnames/bind';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: React.ReactNode;
  classNames?: string;
  colorType?: 'primary' | 'gray-20';
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ disabled, colorType = 'primary', classNames, children, type = 'button', ...rest }, ref) => {
    const classes = cx('button', classNames, colorType);

    return (
      <button className={classes} disabled={disabled} ref={ref} type={type} {...rest}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
