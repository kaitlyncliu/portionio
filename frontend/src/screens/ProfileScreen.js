import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export default function ProfileScreen() {
	const { isLoading, user, getAccessTokenSilently } = useAuth0();
	const [userMetadata, setUserMetadata] = useState(null);
	const domain = 'dev-5wo5d4cr.us.auth0.com';
	useEffect(() => {
		const getUserMetadata = async () => {
			try {
				const accessToken = await getAccessTokenSilently({
					audience: `https://${domain}/api/v2/`,
					scope: 'read:current_user',
				});

				const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

				const metadataResponse = await fetch(userDetailsByIdUrl, {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});

				const { user_metadata } = await metadataResponse.json();

				setUserMetadata(user_metadata);
				console.log('successfully got metadata');
			} catch (e) {
				console.log(e.message);
			}
		};

		getUserMetadata();
	}, [getAccessTokenSilently, user?.sub]);
	const userInfo = { fullName: '', age: 0, BMI: 0, activityLevel: 0 };
	if (user) {
		userInfo.fullName = user.name;
	}
	if (userMetadata) {
		userInfo.age = userMetadata.age;
		userInfo.BMI = userMetadata.BMI;
		userInfo.activityLevel = userMetadata.activityLevel;
	}
	const [age, setAge] = useState(userInfo.age);
	const [BMI, setBMI] = useState(userInfo.BMI);
	const [activityLevel, setActivityLevel] = useState(userInfo.activityLevel);
	const submitHandler = async (e) => {
		e.preventDefault();
		const accessToken = await getAccessTokenSilently({
			audience: `https://${domain}/api/v2/`,
			scope: 'update:current_user_metadata',
		});
		const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
		console.log(user.sub);
		const data = {
			user_metadata: { age: age, BMI: BMI, activityLevel: activityLevel },
		};
		try {
			axios.patch(userDetailsByIdUrl, data, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});

			toast.success('User updated successfully', {
				position: toast.POSITION.TOP_CENTER,
			});
			console.log(data);
		} catch (err) {
			toast.error('Unable to update user information');
		}
	};

	return (
		<>
			{isLoading ? (
				<ClipLoader />
			) : (
				<Row>
					<Form onSubmit={submitHandler}>
						<Form.Label column sm={2}>
							{user.name}'s Profile
						</Form.Label>
						<Form.Group as={Row} className="mb-3" controlId="formHorizontalBMI">
							<Form.Label column sm={2}>
								BMI
							</Form.Label>
							<Col sm={10}>
								<Form.Control
									value={BMI}
									required
									onChange={(e) => setBMI(e.target.value)}
									placeholder="BMI"
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} className="mb-3" controlId="formHorizontalAge">
							<Form.Label column sm={2}>
								Age
							</Form.Label>
							<Col sm={10}>
								<Form.Control
									value={age}
									required
									onChange={(e) => setAge(e.target.value)}
									placeholder="Age"
								/>
							</Col>
						</Form.Group>

						<Form.Group
							as={Row}
							className="mb-3"
							controlId="formHorizontalActivityLevel"
						>
							<Form.Label column sm={2}>
								Activity Level
							</Form.Label>
							<Form.Range
								value={activityLevel}
								min={1}
								max={5}
								onChange={(e) => setActivityLevel(e.target.value)}
							></Form.Range>
						</Form.Group>
						<Form.Group as={Row} className="mb-3">
							<Col sm={{ span: 10, offset: 2 }}>
								<Button type="submit">Submit</Button>
							</Col>
						</Form.Group>
					</Form>
				</Row>
			)}
		</>
	);
}
