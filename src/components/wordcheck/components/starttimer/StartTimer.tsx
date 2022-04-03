import React, { FC, useState, useEffect, useRef } from 'react';

import CenteredItems from '../../../../styles/CenteredItems';
import Timer from '../../../utils/timer/Timer';
import { WordStatus, WordType } from '../../types';
import Counter from '../counter/Counter';
import ShowResults from './components/ShowResults';

interface Props {
	inputFieldValue: string | undefined;
	words: WordType[];
  duration: number;
}
const StartTimer:FC<Props> = ({ inputFieldValue, words, duration }) => {
  const [finished, setFinished] = useState<boolean>(false);
  const [start, setStart] = useState<boolean>(false);
  const triggered = useRef<boolean>(false);
  const completedWords = useRef<WordType[]>([{
    done: false,
    status: WordStatus.noncurrent,
    word: ''
  }]);

  const handleTrigger = () => {
    if (!triggered.current) {
      setTimeout(() => {
        setStart(false);
        setFinished(true);
        completedWords.current = words.filter((word) => word.status === WordStatus.completed);
      }, duration * 1000);
      triggered.current = true;
    }
  };

  useEffect(() => {
    if (inputFieldValue !== '' && inputFieldValue !== undefined) {
      !finished && setStart(true);
      handleTrigger();
    } else if (words.find((word) => word.done)) {
      !finished && setStart(true);
      handleTrigger();
    }
  }, [inputFieldValue, words.filter((word) => word.done).length]);

  return (
    <>
      <CenteredItems flexColumn className='mb-4'>
        <Timer duration={duration} isPlaying={start}/>
        <ShowResults show={finished} results={completedWords.current}/>
      </CenteredItems>
      <div className='text-center mb-3'>
        <Counter words={words} isCounting={start}/>
      </div>
    </>
  );
};

export default StartTimer;
