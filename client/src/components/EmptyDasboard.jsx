import React from 'react';
import { Link } from 'react-router-dom';

import passwordLogo from '../passwordlogo.png';
import './EmptyDashboard.css';

function EmptyDashBoard() {
	return (
		<div className="bg-empty-dashboard d-flex">
			<div className="container my-auto">
				<div className="row pt-5">
					<img
						className="empty-dashboard-logo-size mx-auto"
						src={passwordLogo}
						alt="Key Logo"
					/>
				</div>
				<div className="row pt-2 pb-5">
					<h3 className="mx-auto text-center text-white">
                        Password <br/> Storage
                    </h3>
				</div>

				<div className="row pt-5">
					<Link className="mx-auto" to="/new">
						<button className="mx-auto btn-start-empty-dashboard">Start</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default EmptyDashBoard;
