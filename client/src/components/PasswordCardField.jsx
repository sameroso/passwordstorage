import React, { useState } from 'react';

import passwordEyeHide from '../passwordeye-hide.png';
import passwordEyeShow from '../passwordeye-show.png';

const PasswordCardField = ({ input, labelValue, boolean, readOnlyEdit }) => {
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

export default PasswordCardField;
