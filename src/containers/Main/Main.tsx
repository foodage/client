'use client';

import { useEffect, useState } from 'react';

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

  return <div>오늘 {timeText} 뭐예요?</div>;
};
