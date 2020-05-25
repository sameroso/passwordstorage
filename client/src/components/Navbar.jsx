import React from 'react';
import './Navbar.css';
import passwordLogo from '../passwordlogo.png';
import { connect } from 'react-redux';

function Navbar({ auth }) {
	const renderProfile = () => {
		if (auth === false) {
			return null;
		} else if (auth === null) {
			return null;
		} else {
			return (
				<div className="d-flex mr-4">
					<div class="dropdown my-auto">
						<button
							className="dropdown-config dropdown-toggle"
							type="button"
							id="dropdownMenu"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<div className="d-flex">
								<img className="profile-pic my-auto mr-2" src={auth.profilePic} />
								<p className="text-white mb-0 my-auto">{auth.profileName} &#8609;</p>
							</div>
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenu">
							<button className="dropdown-item" type="button">
								About Us
							</button>
							<button className="dropdown-item" type="button">
								Delete Account
							</button>
							<button className="dropdown-item" type="button">
								<a href="api/logout" className="logout-link">
									Logout
								</a>
							</button>
						</div>
					</div>
				</div>
			);
		}
	};
	return (
		<div className="background py-2">
			<div className="container">
				<div className="row justify-content-between">
					<div className="d-flex ml-3">
						<img className="config-image my-auto" src={passwordLogo}></img>
						<h5 className="ml-2 pt-3 font-header">
							Password
							<br />
							Storage
						</h5>
					</div>
					{renderProfile()}
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return { auth: state.auth };
};

export default connect(mapStateToProps)(Navbar);
