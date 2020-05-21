import React, { useState } from 'react';
import passwordEyeHide from '../passwordeye-hide.png';
import passwordEyeShow from '../passwordeye-show.png';

function CreatePassword() {
	const [passwordEyeToggle, setPassswordEyeToggle] = useState(false);
	const toggle = () => setPassswordEyeToggle(!passwordEyeToggle);
	const passwordEye = passwordEyeToggle ? passwordEyeHide : passwordEyeShow;
	const passwordShowHide = passwordEyeToggle ? 'text' : 'password';

	return (
		<div>
			<div className="container">
				<form className="mx-auto">
					<div class="form-group">
						<label for="domain" class="col-form-label">
							Domain Name
						</label>
						<div>
							<input
								type="text"
								class="form-control"
								id="domain"
								placeholder="Domain Name"
							/>
						</div>
					</div>
					<div class="form-group">
						<label for="user-name" class="col-form-label">
							User Name
						</label>
						<div>
							<input
								type="text"
								class="form-control"
								id="user-name"
								placeholder="User Name"
							/>
						</div>
					</div>
					<div class="form-group">
						<label for="user-name" class="col-form-label">
							Password
						</label>
						<div>
							<div className="row flex-nowrap">
								<div class="input-group-prepend">
									<div
										class="input-group-text"
										onClick={() => setPassswordEyeToggle(toggle)}>
										<img
											src={passwordEye}
											className="img-fluid"
											style={{ height: '30px' }}
										/>
									</div>
								</div>
								<input
									type={passwordShowHide}
									class="form-control"
									id="user-name"
									placeholder="User Name"
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreatePassword;
