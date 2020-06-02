import React from 'react';
import { Link } from 'react-router-dom';

import safety from '../safety.png';
import './EmptyDashboard.css';

function EmptyDashBoard() {
	return (
		<div className="bg-empty-dashboard d-flex">
			<div className="container my-auto">
				<div className="row pt-5">
					<img
						className="empty-dashboard-logo-size mx-auto"
						src={safety}
						alt="Safety"
					/>
				</div>
				<div className="row pt-5">
					<Link className="mx-auto" to="/new">
						<button className="mx-auto btn-start-empty-dashboard"><h4>START</h4></button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default EmptyDashBoard;
