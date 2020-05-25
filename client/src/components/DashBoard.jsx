import React from 'react';
import { Link } from 'react-router-dom';
import PasswordList from './PasswordList';
import EmptyDashBoard from './EmptyDasboard';
import { connect } from 'react-redux';
import NavBar from './Navbar';

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
					
					<Link to="/new">
						<button>New</button>
					</Link>
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
