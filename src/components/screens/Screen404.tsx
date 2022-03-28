import { Image } from 'react-bootstrap';
import React, { FC } from 'react';

const Screen404: FC = () => {
  return (
		<div className='d-flex justify-content-center align-items-center'>
      <Image src='/error-404.webp' />
    </div>
  );
};

export default Screen404;
