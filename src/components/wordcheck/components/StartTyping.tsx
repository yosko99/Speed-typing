import React, { FC } from 'react';

import styled, { keyframes } from 'styled-components';

import CenteredItems from '../../../styles/CenteredItems';

interface Props {
	focused: boolean;
}

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
}
`;

const StartTypingImage = styled.img`
  animation: ${bounce} 1.5s infinite;
  margin-top: 1em;
  margin-bottom: -2em;
`;

const StartTyping: FC<Props> = ({ focused }) => {
  return (
    <CenteredItems>
      {!focused
        ? <StartTypingImage src='/assets/start-typing.png' />
        : <p className='mt-3'></p>
        }
    </CenteredItems>
  );
};

export default StartTyping;
