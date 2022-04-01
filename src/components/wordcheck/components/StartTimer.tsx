import React, { FC, useState, useEffect, useRef } from 'react';

import Timer from '../../utils/timer/Timer';
import styles from '../styles/styles.module.css';
import { WordType } from '../types';

interface Props {
	inputFieldValue: string | undefined;
	words: WordType[];
  duration: number;
}
const StartTimer:FC<Props> = ({ inputFieldValue, words, duration }) => {
  const [startTimer, setStartTimer] = useState<boolean>(false);
  const triggered = useRef<boolean>(false);

  const handleTrigger = () => {
    if (!triggered.current) {
      setTimeout(() => {
        alert('This is an alert');
      }, duration * 1000);
      triggered.current = true;
    }
  };

  useEffect(() => {
    if (inputFieldValue !== '' && inputFieldValue !== undefined) {
      setStartTimer(true);
      handleTrigger();
    } else if (words.find((word) => word.done)) {
      setStartTimer(true);
      handleTrigger();
    }
  }, [inputFieldValue]);

  return (
		<div className={styles['center-items'] + ' mb-4'}>
			<Timer duration={duration} isPlaying={startTimer}/>
		</div>
  );
};

export default StartTimer;
