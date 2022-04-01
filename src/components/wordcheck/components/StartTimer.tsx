import React, { FC, useState, useEffect, useRef } from 'react';

import Timer from '../../utils/timer/Timer';
import styles from '../styles/styles.module.css';
import { WordType } from '../types';
import Counter from './counter/Counter';

interface Props {
	inputFieldValue: string | undefined;
	words: WordType[];
  duration: number;
}
const StartTimer:FC<Props> = ({ inputFieldValue, words, duration }) => {
  const [start, setStart] = useState<boolean>(false);
  const triggered = useRef<boolean>(false);
  const finished = useRef<boolean>(false);

  const handleTrigger = () => {
    if (!triggered.current) {
      setTimeout(() => {
        alert('done');
        setStart(false);
        finished.current = true;
      }, duration * 1000);
      triggered.current = true;
    }
  };

  useEffect(() => {
    if (inputFieldValue !== '' && inputFieldValue !== undefined) {
      !finished.current && setStart(true);
      handleTrigger();
    } else if (words.find((word) => word.done)) {
      !finished.current && setStart(true);
      handleTrigger();
    }
  }, [inputFieldValue]);

  return (
    <>
      <div className={styles['center-items'] + ' mb-4'}>
        <Timer duration={duration} isPlaying={start}/>
      </div>
      <div>
        <Counter words={words} isCounting={start}/>
      </div>
    </>
  );
};

export default StartTimer;
