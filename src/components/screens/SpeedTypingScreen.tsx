import React, { FC } from 'react';

import styled from 'styled-components';

import SpeedType from '../wordcheck/SpeedType';

const CheckwordBackground = styled.div`
  background-image: url(https://res.cloudinary.com/dn1j6dpd7/image/upload/f_auto,q_auto/v1600423784/typing-speed-test/test-bg-left.png), 
  url(https://res.cloudinary.com/dn1j6dpd7/image/upload/f_auto,q_auto/v1600423784/typing-speed-test/test-bg-right.png);
  background-size: 393px auto;
  background-position: calc(40% - 650px) 0, calc(60% + 650px) 0;
  background-repeat: repeat-y;
  height: 90vh;
`;

const SpeedTypingScreen: FC = () => {
  return (
    <CheckwordBackground>
      <SpeedType/>
    </CheckwordBackground>
  );
};

export default SpeedTypingScreen;
