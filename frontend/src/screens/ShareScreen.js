import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Badge from 'react-bootstrap/Badge';


function ShareScreen() {
    return (
        <div>
        <div>
			<br />
			<Card className="w-50 mx-auto">
				<Card.Body>
					<Row>
						<Col>
							<h2>Chat with Andrew</h2>
						</Col>
					</Row>
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <h8> Hey! Wanna grab Fujiya with me?</h8>
                        </Col>
					</Row>
                    <Row>
                        <Col>
                            <h8> I don't think I can eat a whole bowl</h8>
                        </Col>
					</Row>
                    <Row>
                        <Col>
                            <h8> :( </h8>
                        </Col>
					</Row>
                    <br />
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <h8> </h8>
                        </Col>
                        <Col>
                            <h8> </h8>
                        </Col>
                        <Col>
                            <h8> </h8>
                        </Col>
                        <Col>
                            <h8 class="ml-5"> Heyy let's go! </h8>
                        </Col>
					</Row>
                    <br />
                    <br />
                    <Row>
                        {/* <form>
                            <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="message"></input>
                            </div>
                        </form> */}
                        <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Message..." aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">{'>'}</span>
                        </div>
                        </div>
                    </Row>
				</Card.Body>
			</Card>
		</div>
        </div>
    );
}

export default ShareScreen;