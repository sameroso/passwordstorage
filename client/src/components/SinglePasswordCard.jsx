import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import passwordEyeHide from '../passwordeye-hide.png';
import passwordEyeShow from '../passwordeye-show.png';

const PasswordCardComponent = ({ input, labelValue, boolean }) => {
	const [passwordEyeToggle, setPassswordEyeToggle] = useState(false);
	const toggle = () => setPassswordEyeToggle(!passwordEyeToggle);
	const passwordEye = passwordEyeToggle ? passwordEyeHide : passwordEyeShow;
	const passwordShowHide = passwordEyeToggle ? 'text' : 'password';

	const renderCondicional = () => {
		if (boolean === "true") {
			return (
                <div className="col-sm-9">
				<input
					style={{ borderRadius: '7px' }}
					readOnly
					{...input}
					type="text"
					className="form-control-plaintext bg-white text-center"
				/>
                </div>
			);
		} else{
			return (
				<div className="col-sm-9 d-flex">
					<input
						style={{ borderRadius: '7px', width:'80%'}}
						readOnly
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
                    {renderCondicional()}
				</div>
			
		</>
	);
};

function SinglePasswordCard({ domain, userName }) {
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
				boolean="true"
				labelValue="Domain"
				component={PasswordCardComponent}
				name="domain"
			/>
			<Field
				boolean="true"
				labelValue="User"
				component={PasswordCardComponent}
				name="userName"
			/>
			<Field
				boolean="false"
				labelValue="Password"
				component={PasswordCardComponent}
				name="password"
			/>
			<div className="row justify-content-around">
				<button type="button" class="btn btn-outline-primary">
					EDIT
				</button>
				<button type="button" class="btn btn-outline-danger">
					DELETE
				</button>
			</div>
		</form>
	);
}

const SinglePasswordForm = reduxForm({})(SinglePasswordCard);

export default SinglePasswordForm;
