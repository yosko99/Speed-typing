import { useLocation } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import React, { FC } from 'react';

interface LocationParams {
  state? : {
    error: any
  }
}

const Screen404: FC = () => {
  const location = useLocation() as LocationParams;

  return (
		<div className='d-flex justify-content-center align-items-center'>
      <Image src='/error-404.webp' />
      {location.state &&
          <h4 className='text-center'>{location.state.error.toString() || ''}</h4>
        }
    </div>
  );
};

export default Screen404;
