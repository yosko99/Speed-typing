import React, { FC, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { WordStatus, WordType } from './types';
import { Container } from 'react-bootstrap';
import Loading from '../utils/Loading';
import axios from 'axios';

const WordCheck: FC = () => {
  const [words, setWords] = useState<WordType[]>([{ word: '', status: WordStatus.noncurrent }]);
  const inputField = useRef<HTMLInputElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const checkWord = (str: string) => {
    if (str === words[wordIndex].word + ' ') {
      nextWord(WordStatus.completed);
    } else {
      nextWord(WordStatus.failed);
    }
  };

  const nextWord = (status: WordStatus) => {
    const temp = words;
    words[wordIndex].status = status;
    words[wordIndex + 1].status = WordStatus.current;
    setWordIndex(wordIndex + 1);
    setWords(temp);
    inputField.current!.value = '';
  };

  const keyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Space' || e.code === 'Enter') {
      checkWord(e.currentTarget.value);
    };
  };

  useEffect(() => {
    axios.get('https://random-word-api.herokuapp.com/word?number=10').then((response) => {
      setWords(response.data.map((word: string, index: number) => {
        return {
          word: word,
          status: index === wordIndex ? WordStatus.current : WordStatus.noncurrent
        };
      }));
      setLoading(false);
    }).catch((error) => {
      navigate('/404', { state: { error } });
    });
  }, []);

  return (
		<Container>
      {loading
        ? <Loading />
        : words.map((word: WordType, index: number) => (
        <p key={index} className={word.status}>
          {word.word}
        </p>
        ))}
        <input ref={inputField} type='text' onKeyUp={(e) => keyUpHandler(e)}/>
		</Container>
  );
};

export default WordCheck;
