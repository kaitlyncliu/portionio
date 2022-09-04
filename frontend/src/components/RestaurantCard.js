import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const RestaurantCard = (name, address, relativePortionSize, image) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Address: {address}
            Your portion: {relativePortionSize}
          </Card.Text>
          <Button variant="primary"> More Details </Button>
        </Card.Body>
      </Card>
  );
}
export default RestaurantCard;
