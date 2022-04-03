import React, { FC, useState, useEffect } from 'react';

import styled from 'styled-components';

import CenteredItems from '../../../../styles/CenteredItems';
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

const StatBtn = styled(CenteredItems)`
	border-radius: 20px;
	background-color: rgb(231, 231, 231);
	font-size: 2em;
	width:75px;
	height:75px;
	margin:0 1em 0 1em;
`;

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
		<CenteredItems>
			<CenteredItems flexColumn>
					<StatBtn>
						{stats.wordsPerMin}
					</StatBtn>
					<p>words/min</p>
			</CenteredItems>
			<CenteredItems flexColumn>
					<StatBtn>
						{stats.charsPerMin}
					</StatBtn>
					<p>chars/min</p>
			</CenteredItems>
			<CenteredItems flexColumn>
					<StatBtn>
						{stats.accuracy}
					</StatBtn>
					<p>%accuracy</p>
			</CenteredItems>
		</CenteredItems>
  );
};

export default Counter;
