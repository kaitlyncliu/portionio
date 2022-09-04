import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-5wo5d4cr.us.auth0.com"
			clientId="lRYuYE8S0WeXzJD20Lvk37gv80k6jyR7"
			redirectUri={window.location.origin}
			audience="https://dev-5wo5d4cr.us.auth0.com/api/v2/"
			scope="read:current_user update:current_user_metadata"
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
