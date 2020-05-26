import React from 'react';
import { Link } from 'react-router-dom';
import PasswordList from './PasswordList';
import EmptyDashBoard from './EmptyDasboard';
import { connect } from 'react-redux';
import NavBar from './Navbar';
import './DashBoard.css';

function DashBoard({ passwordList }) {
	const renderDashBoard = () => {
		if (passwordList.length === 0) {
			return (
				<>
					<EmptyDashBoard />
				</>
			);
		} else {
			return (
				<>
					<div className="container">
						<div className="row pt-3">
							<Link to="/new" className="mx-auto">
								<button className="add-button-style">Add New Password</button>
							</Link>
						</div>
					</div>

					<div>
						<PasswordList />
					</div>
				</>
			);
		}
	};
	return <>{renderDashBoard()}</>;
}

const mapStateToProps = (state) => {
	return { passwordList: state.auth.passwordList };
};

export default connect(mapStateToProps)(DashBoard);
