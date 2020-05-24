import React, { useState } from 'react';
import passwordEyeHide from '../passwordeye-hide.png';
import passwordEyeShow from '../passwordeye-show.png';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { savePassword } from '../actions';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import Navbar from './Navbar';

const useRenderInput = ({
	placeholder,
	input,
	id,
	label,
	boolean,
	meta: { touched, error },
}) => {
	const [passwordEyeToggle, setPassswordEyeToggle] = useState(false);
	const toggle = () => setPassswordEyeToggle(!passwordEyeToggle);
	const passwordEye = passwordEyeToggle ? passwordEyeHide : passwordEyeShow;
	const passwordShowHide = passwordEyeToggle ? 'text' : 'password';

	const renderError = (touched, error) => {
		if (touched && error) {
			return (
				<small className="form-text" style={{ color: 'red' }}>
					{error}
				</small>
			);
		} else {
			return null;
		}
	};

	const renderCondicional = () => {
		if (boolean === 'true') {
			return (
				<input
					autoComplete="on"
					placeholder={placeholder}
					className="form-control"
					id={id}
					{...input}
				/>
			);
		} else {
			return (
				<>
					<input
						autoComplete="on"
						placeholder={placeholder}
						className="form-control"
						id={id}
						{...input}
						type={passwordShowHide}
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
				</>
			);
		}
	};
	return (
		<div className="form-group">
			<label htmlFor={id} className="col-form-label">
				{label}
			</label>
			<div className="d-flex">{renderCondicional()}</div>

			{renderError(touched, error)}
		</div>
	);
};


function CreatePassword({ savePassword, history, auth, handleSubmit }) {
	const formSubmit = (formValues) => {
		savePassword(formValues, history);
	};

	if (auth === null) {
		return <div>loading</div>;
	} else if (auth === false) {
		return <LoginPage />;
	} else {
		return (
			<div>
				<Navbar/>
				<div className="container">
					<form className="mx-auto" onSubmit={handleSubmit(formSubmit)}>
						<Field
							placeholder="Insert the Domain"
							type="text"
							label="Domain"
							name="domain"
							id="domain"
							component={useRenderInput}
							boolean="true"
						/>
						<Field
							placeholder="insert the User Name"
							type="text"
							label="User Name"
							name="userName"
							id="userName"
							component={useRenderInput}
							boolean="true"
						/>
						<Field
							placeholder="insert the Password"
							type="text"
							label="Password"
							name="password"
							id="password"
							component={useRenderInput}
							boolean="false"
						/>

						<div className="row justify-content-around">
							<Link to="/">
								<button type="button" className="btn btn-outline-success">
									back
								</button>
							</Link>
							<button type="submit" className="btn btn-outline-danger">
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return { auth: state.auth};
};
function validate(values) {
	const errors = {};
	if (!values.domain) {
		errors.domain = 'You must provide a domain';
	}
	if (!values.userName) {
		errors.userName = 'You must provide a user name';
	}
	if (!values.password) {
		errors.password = 'You must provide a password';
	}

	return errors;
}

const createPasswordForm = reduxForm({
	form: 'createPassword',
	validate,
})(CreatePassword);

export default connect(mapStateToProps, { savePassword })(
	withRouter(createPasswordForm)
);
