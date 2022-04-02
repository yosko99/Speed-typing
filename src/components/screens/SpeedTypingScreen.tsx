import React, { FC } from 'react';

import SpeedType from '../wordcheck/SpeedType';
import styles from './styles/styles.module.css';

const SpeedTypingScreen: FC = () => {
  return (
    <div className={styles['checkword-background']}>
     <SpeedType/>
    </div>
  );
};

export default SpeedTypingScreen;
