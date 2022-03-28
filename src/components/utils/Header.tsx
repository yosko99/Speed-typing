import { LinkContainer } from 'react-router-bootstrap';
import { Container } from 'react-bootstrap';
import React, { FC } from 'react';

const Header: FC = () => {
  return (
		<div className='bg-primary'>
			<Container>
				<LinkContainer to='/'>
					<h3 className='py-2 text-white user-select-none'>
						<i>
							Typing Test
						</i>
					</h3>
				</LinkContainer>
			</Container>
		</div>

  );
};

export default Header;
