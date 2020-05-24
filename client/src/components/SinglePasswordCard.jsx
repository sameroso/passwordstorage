import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { reset } from 'redux-form';

import { deletePassword } from '../actions';
import { editPassword } from '../actions';

import PasswordCardField from './PasswordCardField';

function SinglePasswordCard({
	handleSubmit,
	editPassword,
	_id,
	reset,
	deletePassword,
	formData,
}) {
	const [readOnly, setReadOnly] = useState(true);
	const onEdit = async () => {
		 await editPassword({ ...formData.values, _id });
		 setReadOnly(true)
	};
	const renderButton = () => {
		if (readOnly) {
			return (
				<div className="row justify-content-around">
					<button
						type="button"
						className="btn btn-outline-primary"
						onClick={() => setReadOnly(false)}>
						EDIT
					</button>
					<button
						onClick={() => deletePassword({ _id })}
						type="button"
						className="btn btn-outline-danger">
						DELETE
					</button>
				</div>
			);
		} else {
			return (
				<div className="row justify-content-around">
					<button
						type="button"
						className="btn btn-outline-primary"
						onClick={() => {
							setReadOnly(true);
							reset();
						}}>
						CANCEL
					</button>
					<button type="submit" className="btn btn-outline-danger">
						SAVE
					</button>
				</div>
			);
		}
	};
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit(onEdit());
			}}
			className="text-center py-4 my-4"
			style={{
				border: 'rgba(1,1,1) solid 1px',
				borderRadius: '8px',
				backgroundColor: 'rgb(191, 191, 181)',
			}}>
			<Field
				readOnlyEdit={readOnly}
				boolean="true"
				labelValue="Domain"
				component={PasswordCardField}
				name="domain"
			/>
			<Field
				readOnlyEdit={readOnly}
				boolean="true"
				labelValue="User"
				component={PasswordCardField}
				name="userName"
			/>
			<Field
				readOnlyEdit={readOnly}
				boolean="false"
				labelValue="Password"
				component={PasswordCardField}
				name="password"
			/>
			{renderButton()}
		</form>
	);
}

const SinglePasswordForm = reduxForm({ enableReinitialize: true })(
	SinglePasswordCard
);

const mapStateToProps = (state, ownProps) => {
	console.log(state.form[ownProps._id]);
	return { formData: state.form[ownProps._id] };
};

export default connect(mapStateToProps, {
	deletePassword,
	editPassword,
})(SinglePasswordForm);
