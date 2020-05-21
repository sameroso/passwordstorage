import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './Navbar';
import LandingPage from './LandingPage';
import CreatePassword from './CreatePasword';
import { fetchUser } from '../actions/index';


function App({ fetchUser }) {
	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<>
			<NavBar />
			<BrowserRouter>
				<Route exact path="/" component={LandingPage} />
				<Route path="/new" component={CreatePassword} />
			</BrowserRouter>
		</>
	);
}

export default connect(null, { fetchUser })(App);
