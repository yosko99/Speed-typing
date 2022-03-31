import React, { FC } from 'react';

import { Image } from 'react-bootstrap';

import styles from '../styles/styles.module.css';

interface Props {
	focused: boolean;
}

const StartTyping: FC<Props> = ({ focused }) => {
  return (
		<div className={styles['center-items']}>
    {!focused
      ? <Image className={styles['start-typing']} src='/assets/start-typing.png' />
      : <p className='mt-3'></p>
			}
		</div>
  );
};

export default StartTyping;
