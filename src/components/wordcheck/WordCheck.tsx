import React, { FC, useState, useEffect, useRef } from 'react';

import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Loading from '../utils/Loading';
import HeadText from './components/HeadText';
import StartTimer from './components/StartTimer';
import StartTyping from './components/StartTyping';
import checkRightBetweenStrings from './function/checkRightBetweenStrings';
import diffBetweenStrings from './function/diffBetweenStrings';
import styles from './styles/styles.module.css';
import { WordStatus, WordType, Title } from './types';

const WordCheck: FC = () => {
  const [words, setWords] = useState<WordType[]>([{
    word: '',
    status: WordStatus.noncurrent,
    done: false
  }]);
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
    words[wordIndex].done = true;
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
    const wrongChars = diffBetweenStrings(str, words[wordIndex].word);
    if (str[str.length - 1] !== ' ') {
      if (wrongChars !== 0) {
        const text = e.target.value.slice(0, str.length - wrongChars) + '-'.repeat(wrongChars);
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

  const focusInputField = (): void => {
    inputField.current?.focus();
  };

  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
		<Container className={styles['center-items'] + 'flex-column'}>
      <StartTimer
        inputFieldValue={inputField.current?.value}
        words={words}
        duration={50}
      />
      <HeadText />

      {loading
        ? <Loading />
        : <>
          <StartTyping focused={focused} />
          <Container onClick={focusInputField} className={'fs-3 my-3 ' + styles['center-items'] + ' ' + styles['input-box']}>
          {/* Completed words */}
          <div className={'justify-content-end ' + styles['words-bar']} >
            {words.map((word: WordType, index: number) => (
              word.done && <span key={`completed${index}`} className={word.status + ' m-2'}>{word.word}</span>
            ))}
          </div>
          {/* Completed words */}

          {/* Current word */}
          <div className={'m-2 d-flex justify-content-center ' + styles['current-word']}>
            <span className={title.warn ? 'text-danger' : 'text-success'}>
              {title.text}
            </span>
            {focused &&
            <div className={styles['center-items']}>
              <img src='/assets/blinking-line.gif' style={{ height: '25px' }} />
            </div>
            }
            <span className={WordStatus.current}>
              {inputField.current !== null &&
                words[wordIndex].word.slice(
                  checkRightBetweenStrings(inputField.current.value, words[wordIndex].word), words[wordIndex].word.length)
              }
            </span>
          </div>
          {/* Current word */}

          {/* Following words */}
          <div className={'d-flex ' + styles['words-bar']}>
            {words.map((word: WordType, index: number) => (
              index > wordIndex
                ? <span key={index} className={word.status + ' m-2'}>
                    {word.word}
                  </span>
                : ''
            ))}
          </div>
          {/* Following words */}
        </Container>
        </>
      }
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputField}
          type='text'
          className={styles.hidden}
          onChange={(e) => handleChange(e)}
          onKeyUp={(e) => keyUpHandler(e)}
        />
		</Container>
  );
};

export default WordCheck;
