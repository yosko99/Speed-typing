import React, { FC } from 'react';

import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Screen404 from '../screens/Screen404';
import Loading from '../utils/Loading';
import WordCheck from './WordCheck';

const SpeedType: FC = () => {
  const { language } = useParams();

  const { isLoading, isError, error, data } = useQuery(['words', language],
    () => axios.get(`https://random-word-api.herokuapp.com/word?number=300&lang=${language}`)
      .then((response) => response.data));

  if (isLoading) {
    return <Loading/>;
  }
  if (isError) {
    const err = error as Error;
    return <Screen404 error={err.message}/>;
  }

  return (
		<WordCheck data={data}/>
  );
};

export default SpeedType;
