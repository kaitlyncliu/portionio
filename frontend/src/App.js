import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
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
							<NavLink to="/">
								<Button>Home</Button>
							</NavLink>
						</Container>
						{isLoading ? <ClipLoader /> : <></>}
						{!isLoading && isAuthenticated ? (
							<>
								<Container>
									<NavLink to="/profile">
										<Button>Profile</Button>
									</NavLink>
								</Container>
								<Container>
									<Nav.Item>
										<Button onClick={() => logout()}>Logout</Button>
									</Nav.Item>
								</Container>
							</>
						) : (
							<Container>
								<Button onClick={() => loginWithRedirect()}>Login</Button>
							</Container>
						)}

						<Container>
							<NavLink to="/social">
								<Button>Social</Button>
							</NavLink>
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
						<Route path="/social" element={<ShareScreen />} />
					</Routes>
				</Container>
			</main>
		</BrowserRouter>
	);
}

export default App;
