import { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import reactLogo from "../../assets/react.svg";
import NavbarModal from "./NavbarModal";

export default function NavbarComponent() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="white"
				variant="light"
				className="mt-lg-5"
				sticky="top"
			>
				<Container>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src={reactLogo}
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						React Bootstrap
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto ms-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link>
						</Nav>
						<Nav className="">
							<Button
								variant="outline-secondary"
								size="md"
								className=""
							>
								Login
							</Button>
							<Button
								variant="primary"
								size="md"
								className="mt-2 mt-md-0 ms-lg-2"
								onClick={handleShow}
							>
								Create a account
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<NavbarModal show={show} onHandleClose={handleClose} />
		</>
	);
}
