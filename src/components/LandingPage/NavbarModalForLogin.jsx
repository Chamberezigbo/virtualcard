import React from "react";
import LoginForm from "./LoginForm";
import { Modal } from "react-bootstrap";

export default function NavbarModalForLogin({ show, onHandleClose }) {
	return (
		<>
			<Modal show={show} onHide={onHandleClose}>
				<Modal.Header closeButton>
					<Modal.Title className="ms-auto">Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<LoginForm />
				</Modal.Body>
				<Modal.Footer>{/* need to add something here */}</Modal.Footer>
			</Modal>
		</>
	);
}
