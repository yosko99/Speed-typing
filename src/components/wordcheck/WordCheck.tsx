import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import React, { FC, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../utils/Loading';
import Word from './components/Word';
import { WordStatus } from './types';
import axios from 'axios';

const WordCheck: FC = () => {
  const navigate = useNavigate();
  const [wordIndex, setWordIndex] = useState(0);
  const [wordStatus, setWordStatus] = useState<WordStatus>(WordStatus.current);

  const { isLoading, isError, error, data } = useQuery(
    'words',
    () => axios.get('https://random-word-api.herokuapp.com/word?number=10')
      .then((response) => response.data));

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    navigate('/404', { state: { error } });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === data[wordIndex]) {
      setWordIndex(wordIndex + 1);
      e.target.value = '';
    }
  };

  const keyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Space' || e.code === 'Enter') {
      setWordIndex(wordIndex + 1);
      e.currentTarget.value = '';
    };
  };

  return (
		<Container>
      {data.map((word: string, index: number) => (
        <Word
          key={index}
          word={word}
          status={index === wordIndex ? wordStatus : WordStatus.noncurrent}
        />
      ))}
      <input type='text' onChange={(e) => handleChange(e)} onKeyUp={(e) => keyUpHandler(e)}/>
		</Container>
  );
};

export default WordCheck;
