import React from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import landingImage from "../../assets/landingpage-image.png";
import landingImage2 from "../../assets/landingpage-image-1.png";

export default function LandingSection() {
	return (
		<>
			<Carousel variant="dark">
				<Carousel.Item>
					<Container className="mt-3 mb-5">
						<div className="px-lg-5">
							<Row>
								<Col lg={6} className="pt-5">
									<h1 className="landingFont lh-1">
										<span>Digital</span>
										<br />
										<span className="landingFont1">
											Business <br /> Card
										</span>
									</h1>
									<div>
										<p>
											Create and customize stylish digital
											business cards and share them with
											anyone, near or far.
										</p>
									</div>
								</Col>
								<Col lg={6}>
									<Image src={landingImage} fluid />
								</Col>
							</Row>
						</div>
					</Container>
				</Carousel.Item>
				<Carousel.Item>
					<Container className="mt-3">
						<div className="px-5">
							<Row>
								<Col lg={6} className="pt-5">
									<h1 className="lh-1">
										What is a digital business card?
									</h1>{" "}
									<br />
									<div>
										<p>
											Digital business cards are the
											modern way to share contact
											information. Also known as virtual
											and electronic business cards,
											digital business cards are more
											interactive, cost-effective, and
											sustainable than their physical
											counterparts. One significant
											benefit of digital business cards is
											that they can be shared with anyone,
											anywhere. HiHello’s digital business
											cards can be created on iOS,
											Android, or computer and can be
											completely customized to fit your
											style.
										</p>
									</div>
								</Col>
								<Col lg={6} sm={{ order: "first" }}>
									<Image src={landingImage2} fluid />
								</Col>
							</Row>
						</div>
					</Container>
				</Carousel.Item>
			</Carousel>
		</>
	);
}
