import React, { FC } from 'react';

import WordCheck from '../wordcheck/WordCheck';
import styles from './styles/styles.module.css';

const MainScreen: FC = () => {
  return (
    <div className={styles['checkword-background']}>
     <WordCheck/>
    </div>
  );
};

export default MainScreen;
