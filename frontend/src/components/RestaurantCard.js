import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import mcdonaldsImg from '../images/mcdonalds.jpg';
import fujiyaImg from '../images/fujiya.jpg';
import shakeshackImg from '../images/shakeshack.jpg';

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
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<br />
			<Card className="mx-auto w-50">
				<Card.Img variant="top" className="h-50" src={fujiyaImg} />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<br />
			<Card className="mx-auto w-50">
				<Card.Img variant="top" className="h-50" src={shakeshackImg} />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default RestaurantCard;
