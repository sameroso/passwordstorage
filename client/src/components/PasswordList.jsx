import React from 'react';
import { connect } from 'react-redux';

function PasswordList({ passwordList }) {
	const renderList = () => {
		return passwordList.map((el) => {
			return (
				<div style={{border:"red solid 1px"}} key={`${el.domain}+${el.userName}`}>
					<div>{el.domain}</div>
					<div>{el.userName}</div>
					<div>{el.password}</div>
				</div>
			);
		});
	};

	return <div>{renderList()}</div>;
}

const mapStateToProps = (state) => {
	console.log(state.auth.passwordList);
	return { passwordList: state.auth.passwordList };
};

export default connect(mapStateToProps)(PasswordList);
