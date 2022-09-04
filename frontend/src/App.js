import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import ShareScreen from './screens/ShareScreen';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';
import ClipLoader from 'react-spinners/ClipLoader';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
	const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

	return (
		<BrowserRouter>
			<ToastContainer position="top-right" limit={1} />
			<header>
				<Navbar fixed="bottom" bg="dark" variant="dark" expand="lg">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav className="d-flex bd-highlight">
						<Container>
							<Nav.Link href="/">Home</Nav.Link>
						</Container>
						{isLoading ? <ClipLoader /> : <></>}
						{!isLoading && isAuthenticated ? (
							<>
								<Container>
									<Nav.Link href="/profile">Profile</Nav.Link>
								</Container>
								<Container>
									<Button onClick={() => logout()}>Log Out</Button>
								</Container>
							</>
						) : (
							<Container>
								<Button onClick={() => loginWithRedirect()}>Login</Button>
							</Container>
						)}

						<Container>
							<Nav.Link href="/social">Social</Nav.Link>
						</Container>
						<Container className="w-50"></Container>
					</Nav>
				</Navbar>
			</header>
			<main>
				<Container>
					<Routes>
						<Route path="/" element={<HomeScreen />} />
						<Route path="/profile" element={<ProfileScreen />} />
						<Route path="/restaurants/:id" element={<RestaurantScreen />} />
						<Route path="/share" element={<ShareScreen />} />
					</Routes>
				</Container>
			</main>
		</BrowserRouter>
	);
}

export default App;
