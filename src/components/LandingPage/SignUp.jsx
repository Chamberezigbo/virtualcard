import { Form, Button } from "react-bootstrap";
import { UilGoogle, UilLinkedin } from "@iconscout/react-unicons";

export default function SignUp() {
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<div className="d-grid gap-2 mt-3">
						<Button variant="secondary" size="md">
							Sign in
						</Button>
						<hr />
						<Button variant="secondary" size="md">
							<UilGoogle /> Sign in with Google
						</Button>
						<Button variant="outline-secondary" size="md">
							<UilLinkedin /> Sign in with LinkedIn
						</Button>
					</div>
				</Form.Group>
			</Form>
		</div>
	);
}
