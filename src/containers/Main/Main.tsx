'use client';

import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Main.module.scss';

const cx = classNames.bind(styles);

export const Main = () => {
  const [timeText, setTimeText] = useState('');

  // 21:00 - 04:59 야식
  //5:00 - 11:59 아침
  //12:00 - 16:59 점심
  //17:00 - 20:59 저녁

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 21 || hours < 5) {
      setTimeText('야식');
    } else if (hours >= 5 && hours < 12) {
      setTimeText('아침');
    } else if (hours >= 12 && hours < 17) {
      setTimeText('점심');
    } else if (hours >= 17 && hours < 21) {
      setTimeText('저녁');
    }
  }, []);

  return (
    <div className={cx('container')}>
      <section>
        <h2>00님 오늘 {timeText}은 뭐예요?</h2>
        <div>calender</div>
      </section>
      <div className={cx('background')}>
        <section>
          <h2>최근에 작성했어요</h2>
        </section>
        <section>
          <h2>지금 00동에 계신가요?</h2>
        </section>
        <section>
          <h2>가장 많이 사용한 태그</h2>
        </section>
        <section>
          <h2>오늘의 미션</h2>
        </section>
      </div>
    </div>
  );
};
