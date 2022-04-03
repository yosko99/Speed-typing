import React, { FC } from 'react';

import { Image, Row, Col } from 'react-bootstrap';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

import CenteredItems from '../../styles/CenteredItems';

const LanguageSelectDiv = styled(CenteredItems)`
	height: 100vh;
	margin-top: -1em;
	background-color: black;
`;

const LanguageSelect: FC = () => {
  const flags = ['zh', 'de', 'en', 'it', 'es'];

  return (
		<LanguageSelectDiv flexColumn>
			<Zoom top>
				<h1 className='text-white pb-3'>
					Select a language
				</h1>
			</Zoom>
			<Row>
				{flags.map((flag) => (
				<Col key={flag}>
					<Zoom bottom>
						<LinkContainer to={`/speedtype/${flag}`}>
							<Image
								role='button'
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
		</LanguageSelectDiv>
  );
};

export default LanguageSelect;
