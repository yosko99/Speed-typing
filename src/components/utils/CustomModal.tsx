import React, { FC, useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

interface Props {
	title: any;
	body: any;
	btnText: string;
	reloadOnClose?: boolean;
}

const CustomModal:FC<Props> = ({ btnText, title, body, reloadOnClose = false }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleHide = () => {
    reloadOnClose ? window.location.reload() : setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
		<>
			<Button variant="primary" onClick={handleShow}>
        {btnText}
      </Button>
			<Modal show={show} onHide={handleHide}>
				<Modal.Dialog>
					<Modal.Header closeButton>
						<Modal.Title>{title}</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						{body}
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={handleHide}>Close</Button>
					</Modal.Footer>
				</Modal.Dialog>
			</Modal>
		</>
  );
};

export default CustomModal;
