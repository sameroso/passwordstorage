import React, { useState } from 'react';
import { connect } from 'react-redux';

import SinglePasswordCard from './SinglePasswordCard';

function PasswordList({ passwordList }) {
	const renderList = () => {
		if (searchInput.length !== 0) {
			return filteredList.map((el) => {
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
		}
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
	const [searchInput, setSearchInput] = useState('');
	const [filteredList, setFilteredList] = useState([]);
	const findElements = (e) => {
		const x = passwordList.filter((el) => {
			if (
				el.domain.startsWith(e.target.value) ||
				el.userName.startsWith(e.target.value) ||
				el.password.startsWith(e.target.value)
			) {
				return el;
			}
		});
		setFilteredList(x);
	};
	return (
		<div className="container">
			<div className="row">
				<input
					style={{ margin:'auto auto',marginTop:"10px"}}
					value={searchInput}
					onChange={(e) => {
						setSearchInput(e.target.value);
						findElements(e);
					}}
				/>
			</div>
			<div className="row">{renderList()}</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return { passwordList: state.auth.passwordList };
};

export default connect(mapStateToProps)(PasswordList);
