import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import sideimage from "../assets/howsection.png";

export default function HowSection() {
	return (
		<div className="pt-5 bg-whiteMoke">
			<Container>
				<Row>
					<Col lg={6}>
						<Image src={sideimage} fluid />
					</Col>
					<Col lg={6}>
						<h1 className="lh-1">
							How do HiHello's digital cards work?
						</h1>
						<p>
							HiHello’s digital business cards are free,
							completely customizable, and you can share your card
							with anyone—no app is required to receive a card.{" "}
							<br /> <br />
							After you sign up on iOS, Android, or the web,
							you’ll be able to create and personalize your first
							virtual business card. You can create multiple cards
							with different information on each card. Make a card
							for work contacts, one for clients or customers, and
							one for your friends.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
