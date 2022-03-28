import { WordStatus } from '../types';
import React, { FC } from 'react';

interface Props {
	word: string;
	status: WordStatus
}

const Word: FC<Props> = ({ word, status }) => {
  return (
		<div className={status}>{word}</div>
  );
};

export default Word;
