import React, { FC } from 'react';

interface Props {
	remainingTime: number;
}

const RemainingTime: FC<Props> = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <p className='fs-4 text-danger'>Time over</p>;
  }

  return (
    <div className="timer text-center">
      <div className="text text-muted">Remaining</div>
      <div className="value fs-2">{remainingTime}</div>
      <div className="text text-muted">seconds</div>
    </div>
  );
};

export default RemainingTime;
