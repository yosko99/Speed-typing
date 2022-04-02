import React, { FC } from 'react';

import { Image, Row, Col } from 'react-bootstrap';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
import { LinkContainer } from 'react-router-bootstrap';

import styles from './styles/styles.module.css';

const LanguageSelect: FC = () => {
  const flags = ['zh', 'de', 'en', 'it', 'es'];

  return (
		<div className={styles['language-select-div'] + ' flex-column'}>
			<Zoom top>
				<h1 className='text-white pb-3'>Select a language</h1>
			</Zoom>
			<Row>
				{flags.map((flag) => (
				<Col key={flag}>
					<Zoom bottom>
						<LinkContainer to={`/speedtype/${flag}`}>
							<Image
								alt={flag}
								fluid
								className='cursor-pointer'
								src={`/assets/flags/${flag}-flag.png`}
							/>
						</LinkContainer>
					</Zoom>
				</Col>
				))}
			</Row>
		</div>
  );
};

export default LanguageSelect;
