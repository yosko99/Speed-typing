import React, { FC, useState, useEffect } from 'react';

import styles from '../../styles/styles.module.css';
import { WordType } from '../../types';
import { wordMin, charMin, checkAccuracy } from './function/calculations';

interface Props {
	words: WordType[];
	isCounting: boolean;
}

interface Stats {
	wordsPerMin: number;
	charsPerMin: number;
	accuracy: number;
}

const Counter:FC<Props> = ({ words, isCounting }) => {
  const [stats, setStats] = useState<Stats>({
    wordsPerMin: 0,
    charsPerMin: 0,
    accuracy: 0
  });

  // listen for done words
  useEffect(() => {
    isCounting && setStats({
      accuracy: checkAccuracy(words),
      wordsPerMin: wordMin(words),
      charsPerMin: charMin(words)
    });
  }, [words.filter((word) => word.done).length]);

  return (
		<div className={styles['center-items']}>
			<div className={styles['center-items'] + ' flex-column'}>
				<p className={styles['stat-button'] + ' ' + styles['center-items']}>{stats.wordsPerMin}</p>
				<p>words/min</p>
			</div>
			<div className={styles['center-items'] + ' flex-column'}>
				<p className={styles['stat-button'] + ' ' + styles['center-items']}>{stats.charsPerMin}</p>
				<p>char/min</p>
			</div>
			<div className={styles['center-items'] + ' flex-column'}>
				<p className={styles['stat-button'] + ' ' + styles['center-items']}>{stats.accuracy}</p>
				<p>%accuracy</p>
			</div>
		</div>
  );
};

export default Counter;
