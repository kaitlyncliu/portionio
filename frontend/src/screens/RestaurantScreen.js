import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import mcdonaldsImg from '../images/mcdonalds.jpg';

function RestaurantScreen() {
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
						<Card.Subtitle>
							280 Old McDonald Road, Philadelphia, PA, 16821
						</Card.Subtitle>
					</Row>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
			<br />
			<br />
			<br />
		</Container>
	);
}

export default RestaurantScreen;
