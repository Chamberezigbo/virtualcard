import { Modal, Button } from "react-bootstrap";

export default function NavbarModal({ show, onHandleClose }) {
	return (
		<>
			<Modal show={show} onHide={onHandleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Woohoo, you're reading this text in a modal!
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={onHandleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={onHandleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
