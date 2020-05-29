import React, { useState } from 'react';
import './CreatePassword.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { savePassword } from '../actions';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import Navbar from './Navbar';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { BsEyeFill } from 'react-icons/bs';
import { BsEyeSlashFill } from 'react-icons/bs';
import LoadingPage from './LoadingPage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
	const passwordEye = passwordEyeToggle ? (
		<BsEyeSlashFill className="eye-icon" size="30px" />
	) : (
		<BsEyeFill className="eye-icon" size="30px" />
	);
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
					className="form-control input-create"
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
						className="form-control input-create input-create-password"
						id={id}
						{...input}
						type={passwordShowHide}
					/>
					<div className="my-auto ml-2" onClick={toggle}>
						{passwordEye}
					</div>
				</>
			);
		}
	};
	return (
		<div className="form-group">
			<label htmlFor={id} className="col-form-label text-white">
				{label}
			</label>
			<div className="d-flex">{renderCondicional()}</div>

			{renderError(touched, error)}
		</div>
	);
};

function CreatePassword({ savePassword, history, auth, handleSubmit }) {
	const [passwordSave, setPasswordSave] = useState(false);
	const isSaving = passwordSave ? (
		<Loader type="ThreeDots" color="white" height={20} width={20} />
	) : (
		'save'
	);

	const formSubmit = async (formValues) => {
		setPasswordSave(true);
		try {
			await savePassword(formValues, history);
			await toast.info('Password Saved with success', {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch {
			toast.error('An error Ocurred, Please try later', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setPasswordSave(false);
		}
	};

	if (auth === null) {
		return (
			<div>
				<LoadingPage />
			</div>
		);
	} else if (auth === false) {
		return <LoginPage />;
	} else {
		return (
			<div>
				<Navbar />
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
								<button type="button" className="back-btn">
									back
								</button>
							</Link>
							<button type="submit" className="save-btn">
								{isSaving}
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { auth: state.auth };
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
