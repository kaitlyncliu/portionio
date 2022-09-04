import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';


function RestaurantInfo() {
	return (
		<Container>
			<Row>
				<Col><Image src="___" rounded /></Col>
			</Row>
			<Row>
				<Stack gap={2}>
      				<div className="bg-light border">Name__</div>
      				<div className="bg-light border">Address__</div>
      				<div className="bg-light border">Relative Portion Size__</div>
    			</Stack>
			</Row>
			<Row>
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Description</Accordion.Header>
						<Accordion.Body>___</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Row>
		</Container>
	)
}

export default RestaurantInfo;