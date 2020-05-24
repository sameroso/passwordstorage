import React from 'react';
import { connect } from 'react-redux';

import SinglePasswordCard from './SinglePasswordCard';

function PasswordList({ passwordList }) {
	const renderList = () => {
		return passwordList.map((el) => {
			return (
				<div className="col-md-6" key={`${el._id}`}>
					<SinglePasswordCard
						_id={el._id}
						domain={el.domain}
						userName={el.userName}
						password={el.password}
						form={`${el._id}`}
						initialValues={{
							domain: el.domain,
							userName: el.userName,
							password: el.password,
						}}
					/>
				</div>
			);
		});
	};

	return (
		<div className="container">
			<div className="row">{renderList()}</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return { passwordList: state.auth.passwordList };
};

export default connect(mapStateToProps)(PasswordList);
