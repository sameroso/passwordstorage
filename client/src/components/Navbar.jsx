import React from 'react';
import './Navbar.css';
import passwordLogo from '../passwordlogo.png';
import { connect } from 'react-redux';

function Navbar({ auth }) {
	const renderLogout = () => {
		if (auth === false) {
			return null;
		} else if (auth === null) {
			return null;
		} else {
			return (
				<a href="api/logout">
					<h5 className="font-header ml-5 pt-3 flex-end">logout</h5>
				</a>
			);
		}
	};
	return (
		<div className="background py-2">
			<div className="container">
				<div className="row justify-content-between">
					<div className="d-flex">
						<img className="config-image mt-1" src={passwordLogo}></img>
						<h5 className="ml-2 pt-3 font-header">Password Storage</h5>
					</div>
					{renderLogout()}
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return { auth: state.auth };
};

export default connect(mapStateToProps)(Navbar);
