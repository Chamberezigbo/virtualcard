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
				<Modal.Footer>{/* need to add something here */}</Modal.Footer>
			</Modal>
		</>
	);
}
