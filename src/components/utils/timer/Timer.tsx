import React, { FC } from 'react';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import RemainingTime from './RemainingTime';

interface Props {
	duration: number;
	isPlaying: boolean;
}

const Timer:FC<Props> = ({ duration, isPlaying }) => {
  return (
		<div className="timer-wrapper">
		<CountdownCircleTimer
			isPlaying={isPlaying}
			duration={duration}
			colors={['#004777', '#F7B801', '#A30000', '#A30000']}
			colorsTime={[10, 6, 3, 0]}
		>
			{RemainingTime}
		</CountdownCircleTimer>
	</div>
  );
};

export default Timer;
