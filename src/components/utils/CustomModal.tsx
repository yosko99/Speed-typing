import React, { FC, useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

interface Props {
	show: boolean;
	title: any;
	body: any;
}

const CustomModal:FC<Props> = ({ title, body, show }) => {
  return (
		<Modal show={show}>
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{body}
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary">Close</Button>
				</Modal.Footer>
			</Modal.Dialog>
		</Modal>
  );
};

export default CustomModal;
