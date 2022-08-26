import { Modal, Button } from "react-bootstrap";
import SignUp from "./SignUp";

export default function NavbarModal({ show, onHandleClose }) {
	return (
		<>
			<Modal show={show} onHide={onHandleClose}>
				<Modal.Header closeButton>
					<Modal.Title className="ms-auto">Sign up form</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<SignUp />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={onHandleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={onHandleClose}>
						Sign Up
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
