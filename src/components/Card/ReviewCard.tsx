import classNames from 'classnames/bind';

import StarIcon from '../../../public/assets/icon-green-star.svg';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

interface Props {
  thumbnail?: string;
  name: string;
  location: string;
  rate: number | string;
}
export const ReviewCard = ({ thumbnail, name, location, rate }: Props) => {
  return (
    <div className={cx('card-container')}>
      <img alt="리뷰 썸네일" className={cx('img-round')} src={thumbnail} />
      <p className={cx('card-text')}>
        <p className={cx('title')}>{name}</p>
        <p className={cx('subtext')}>{location}</p>
      </p>
      <div className={cx('card-rate')}>
        <StarIcon />
        <span className={cx('rate-number')}>{rate}</span>
      </div>
    </div>
  );
};
