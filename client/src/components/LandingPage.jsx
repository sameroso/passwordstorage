import React from 'react';
import { connect } from 'react-redux';

import LoginPage from './LoginPage';
import DashBoard from './DashBoard';

function LandingPage({ auth }) {
	if(auth === null){
		return <div>loading</div>
	}else if (auth){
		return(
			<div><DashBoard/></div>
		);
	}else if(auth === false) {
		return(
			<LoginPage/>
		);
	}
}

const mapStateToProps = (state) => {
	return { auth: state.auth };
};

export default connect(mapStateToProps)(LandingPage);
