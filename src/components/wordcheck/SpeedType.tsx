import React, { FC } from 'react';

import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import Loading from '../utils/Loading';
import WordCheck from './WordCheck';

const SpeedType: FC = () => {
  const navigate = useNavigate();
  const { language } = useParams();

  const { isLoading, isError, error, data } = useQuery(['words', language],
    () => axios.get(`https://random-word-api.herokuapp.com/word?number=300&lang=${language}`)
      .then((response) => response.data));

  if (isLoading) {
    return <Loading/>;
  }
  if (isError || data === undefined) {
    navigate('/404', { state: { error } });
  }

  return (
		<WordCheck data={data}/>
  );
};

export default SpeedType;
