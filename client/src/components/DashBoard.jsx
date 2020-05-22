import React from 'react';
import { Link } from 'react-router-dom';
import PasswordList from './PasswordList';

function DashBoard() {
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

export default DashBoard;
