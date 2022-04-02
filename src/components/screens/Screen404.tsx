import React, { FC, useState } from 'react';

import { Image } from 'react-bootstrap';

interface Props {
  error?: string;
}

const Screen404: FC<Props> = ({ error }) => {
  return (
		<div className='d-flex justify-content-center align-items-center flex-column'>
      <Image src='/assets/error-404.webp' />
      {error !== undefined &&
          <h4 className='text-center'>{error}</h4>
        }
    </div>
  );
};

export default Screen404;
