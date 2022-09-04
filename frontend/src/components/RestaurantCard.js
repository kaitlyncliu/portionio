import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import mcdonaldsImg from '../images/mcdonaldsRectangle.jpg';
import fujiyaImg from '../images/ramen.jpg';
import shakeshackImg from '../images/shakeShackFinal.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

// const RestaurantCard = (name, address, relativePortionSize, image) => {
//   return (
//     <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src={image} />
//         <Card.Body>
//           <Card.Title>{name}</Card.Title>
//           <Card.Text>
//             Address: {address}
//             Your portion: {relativePortionSize}
//           </Card.Text>
//           <Button variant="primary"> More Details </Button>
//         </Card.Body>
//       </Card>
//   );
// }

const RestaurantCard = () => {
	return (
		<Container>
			<br />
			<Card className="mx-auto w-50">
				<Card.Img variant="top" className="h-50" src={mcdonaldsImg} />
				<Card.Body>
					<Row>
						<Col>
							<Card.Title>McDonalds</Card.Title>
						</Col>
						<Col>
							<Card.Title className="text-end align-bottom">
								1 portion
							</Card.Title>
						</Col>
					</Row>
					<Card.Text>
						This restaurant seems to be a good fit portion-wise!
					</Card.Text>
					<NavLink to="/restaurants/1">
						<Button variant="primary">Visit this restaurant</Button>
					</NavLink>
				</Card.Body>
			</Card>
			<br />
			<Card className="mx-auto w-50">
				<Card.Img variant="top" className="h-50" src={shakeshackImg} />
				<Card.Body>
					<Row>
						<Col>
							<Card.Title>Shake Shack</Card.Title>
						</Col>
						<Col>
							<Card.Title className="text-end align-bottom">
								0.75 portions
							</Card.Title>
						</Col>
					</Row>
					<Card.Text>
						This restaurant's portions are a little small for you, so maybe try
						a different restaurant or order a side.
					</Card.Text>
					<NavLink to="/restaurants/0.75">
						<Button variant="primary">Visit this restaurant</Button>
					</NavLink>
				</Card.Body>
			</Card>
			<br />
			<Card className="mx-auto w-50">
				<Card.Img variant="top" className="h-50" src={fujiyaImg} />
				<Card.Body>
					<Row>
						<Col>
							<Card.Title>Fujiya Ramen</Card.Title>
						</Col>
						<Col>
							<Card.Title className="text-end align-bottom">
								2 portions
							</Card.Title>
						</Col>
					</Row>
					<Card.Text>
						This restaurant's portions might be a bit big for you, so bring a
						friend!
					</Card.Text>
					<NavLink to="/social">
						<Button variant="primary">Share with a friend</Button>
					</NavLink>
				</Card.Body>
			</Card>

			<br />
			<br />
			<br />
			<br />
		</Container>
	);
};

export default RestaurantCard;
