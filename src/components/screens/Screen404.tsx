import React, { FC } from 'react';

import { Image } from 'react-bootstrap';

import CenteredItems from '../../styles/CenteredItems';

interface Props {
  error?: string;
}

const Screen404: FC<Props> = ({ error }) => {
  return (
      <CenteredItems flexColumn>
        <Image src='/assets/error-404.webp' />
        {error !== undefined &&
            <h4 className='text-center'>
              {error}
            </h4>
          }
          <h1>asd</h1>
      </CenteredItems>
  );
};

export default Screen404;
