import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import reactLogo from "../../assets/react.svg";
import Button from "react-bootstrap/Button";

export default function NavbarComponent() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
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
								size="sm"
								className=""
							>
								Login
							</Button>
							<Button
								variant="primary"
								size="sm"
								className="mt-2 mt-md-0 ms-lg-2"
							>
								Create a Card
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
