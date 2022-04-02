import React, { FC } from 'react';

import { Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header: FC = () => {
  return (
		<header className='bg-black'>
			<Container>
				<LinkContainer to='/'>
					<h3 className='py-1 text-white user-select-none'>
						<i>
							Typing Test
						</i>
					</h3>
				</LinkContainer>
			</Container>
		</header>

  );
};

export default Header;
