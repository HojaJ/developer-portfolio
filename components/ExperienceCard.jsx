import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardHeader,
	Col,
} from "reactstrap";

import { Fade } from "react-reveal";


const ExperienceCard = ({ data }) => {
	return (
		<Col lg="4">
			<Fade left duration={1000} distance="40px">
				<Card
					style={{ flex: 1 }}
					className="shadow-lg--hover shadow border-0 text-center rounded"
				>
					<CardHeader>
						<h5>{data.company}</h5>
					</CardHeader>
					<CardBody className="py-5">
						<CardTitle tag="h5">{data.role}</CardTitle>
						<CardSubtitle>{data.date}</CardSubtitle>
						<CardText className="description my-3 text-left">
							{data.desc}
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</CardText>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ExperienceCard;
