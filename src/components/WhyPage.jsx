import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import sideImage from "../assets/whysection.png";

export default function WhyPage() {
	return (
		<div className="pt-5">
			<Container>
				<Row>
					<Col lg={6}>
						<h1 className="lh-1">
							The best contactless business card.
						</h1>
						<p>
							HiHello’s digital business cards are germ-free—no
							physical contact is necessary to send or receive a
							virtual card. Electronic business cards can be
							shared with anyone, anywhere, anytime. Using a
							digital business card means you can update your
							information with a single tap, so you don’t need to
							go through ordering and shipping new cards.
						</p>
					</Col>
					<Col lg={6}>
						<Image src={sideImage} fluid />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
