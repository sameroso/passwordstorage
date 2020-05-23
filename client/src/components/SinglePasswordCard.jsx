import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import passwordEyeHide from '../passwordeye-hide.png';
import passwordEyeShow from '../passwordeye-show.png';
import { reset } from 'redux-form';

import { deletePassword } from '../actions';

const PasswordCardComponent = ({
	input,
	labelValue,
	boolean,
	readOnlyEdit,
}) => {
	const [passwordEyeToggle, setPassswordEyeToggle] = useState(false);
	const toggle = () => setPassswordEyeToggle(!passwordEyeToggle);
	const passwordEye = passwordEyeToggle ? passwordEyeHide : passwordEyeShow;
	const passwordShowHide = passwordEyeToggle ? 'text' : 'password';

	const renderBorder = () => (readOnlyEdit ? 'none' : 'red solid 1px');

	const renderCondicionalInput = () => {
		if (boolean === 'true') {
			return (
				<div className="col-sm-9">
					<input
						style={{ borderRadius: '7px', border: `${renderBorder()}` }}
						readOnly={readOnlyEdit}
						{...input}
						type="text"
						className="form-control-plaintext bg-white text-center"
					/>
				</div>
			);
		} else {
			return (
				<div className="col-sm-9 d-flex">
					<input
						style={{
							borderRadius: '7px',
							width: '85%',
							border: `${renderBorder()}`,
						}}
						readOnly={readOnlyEdit}
						{...input}
						type={passwordShowHide}
						className="form-control-plaintext bg-white text-center"
					/>
					<div className="input-group-append" onClick={toggle}>
						<span className="input-group-text">
							<img
								src={passwordEye}
								alt=""
								className="img-fluid"
								style={{ height: '30px', width: '30px' }}
							/>
						</span>
					</div>
				</div>
			);
		}
	};
	return (
		<>
			<div className="form-group row mx-auto">
				<label className="col-sm-3 col-form-label">{labelValue}</label>
				{renderCondicionalInput()}
			</div>
		</>
	);
};

function SinglePasswordCard({_id, domain, userName, reset, deletePassword }) {
	const [readOnly, setReadOnly] = useState(true);
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
						onClick={()=>deletePassword({_id})}
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
					<button type="button" className="btn btn-outline-danger">
						SAVE
					</button>
				</div>
			);
		}
	};
	return (
		<form
			className="text-center py-4 my-4"
			style={{
				border: 'rgba(1,1,1) solid 1px',
				borderRadius: '8px',
				backgroundColor: 'rgb(191, 191, 181)',
			}}
			key={`${domain}${userName}`}>
			<Field
				readOnlyEdit={readOnly}
				boolean="true"
				labelValue="Domain"
				component={PasswordCardComponent}
				name="domain"
			/>
			<Field
				readOnlyEdit={readOnly}
				boolean="true"
				labelValue="User"
				component={PasswordCardComponent}
				name="userName"
			/>
			<Field
				readOnlyEdit={readOnly}
				boolean="false"
				labelValue="Password"
				component={PasswordCardComponent}
				name="password"
			/>
			{renderButton()}
		</form>
	);
}

const SinglePasswordForm = reduxForm({})(SinglePasswordCard);



export default connect(null,{ deletePassword })(SinglePasswordForm);
