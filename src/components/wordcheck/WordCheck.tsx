import React, { FC, useState, useEffect, useRef } from 'react';
import diffBetweenStrings from './function/diffBetweenStrings';
import { WordStatus, WordType, Title } from './types';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Loading from '../utils/Loading';
import axios from 'axios';
import checkRightBetweenStrings from './function/checkRightBetweenStrings';

const WordCheck: FC = () => {
  const [words, setWords] = useState<WordType[]>([{ word: '', status: WordStatus.noncurrent }]);
  const inputField = useRef<HTMLInputElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [title, setTitle] = useState<Title>({
    text: '',
    warn: false
  });

  const checkWord = (str: string) => {
    if (str === words[wordIndex].word + ' ' || str === words[wordIndex].word) {
      nextWord(WordStatus.completed);
    } else {
      nextWord(WordStatus.failed);
    }
    setTitle({
      text: '',
      warn: false
    });
  };

  const nextWord = (status: WordStatus): void => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const str = e.target.value;
    const index = diffBetweenStrings(str, words[wordIndex].word);
    if (str[str.length - 1] !== ' ') {
      if (index !== 0) {
        const text = e.target.value.slice(0, str.length - index) + '-'.repeat(index);
        setTitle({
          text: text,
          warn: true
        });
      } else {
        setTitle({
          text: str,
          warn: false
        });
      }
    }
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
      <div className='d-flex justify-content-center align-items-center' style={{ height: '20vh' }}>
        <h1 className={title.warn ? 'text-danger' : 'text-success'}>
          {title.text}
        </h1>
        <h1>
          {inputField.current !== null &&
            words[wordIndex].word.slice(
              checkRightBetweenStrings(inputField.current.value, words[wordIndex].word), words[wordIndex].word.length)
          }
        </h1>
      </div>
      {loading
        ? <Loading />
        : words.map((word: WordType, index: number) => (
        <p key={index} className={word.status}>
          {word.word}
        </p>
        ))}
        <input
          ref={inputField}
          type='text'
          onChange={(e) => handleChange(e)}
          onKeyUp={(e) => keyUpHandler(e)}
        />
		</Container>
  );
};

export default WordCheck;
