import React, { FC } from 'react';

import { Spinner } from 'react-bootstrap';

interface Props {
	height?: string;
}

const Loading: FC<Props> = ({ height = '20vh' }) => {
  return (
		<div className='d-flex justify-content-center align-items-center' style={{ height }}>
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
  );
};

export default Loading;
