import React from "react";

import { Card, Col, Row, Container } from "reactstrap";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="text-center">
						<h2 className="text-white">Reach Out to me!</h2>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
