import React, { useState } from 'react';

import './PasswordCardField.css';

import passwordEyeHide from '../passwordeye-hide.png';
import passwordEyeShow from '../passwordeye-show.png';
import { BsEyeFill } from 'react-icons/bs';
import { BsEyeSlashFill } from 'react-icons/bs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const PasswordCardField = ({ input, labelValue, boolean, readOnlyEdit }) => {
	const [passwordEyeToggle, setPassswordEyeToggle] = useState(false);
	const toggle = () => setPassswordEyeToggle(!passwordEyeToggle);
	const passwordEye = passwordEyeToggle ? (
		<BsEyeSlashFill className="eye-style" />
	) : (
		<BsEyeFill className="eye-style" />
	);
	const passwordShowHide = passwordEyeToggle ? 'text' : 'password';

	const renderBorder = () => (readOnlyEdit ? '' : 'white solid 1px');
	const [copyClipboard, setCopyClipboard] = useState(false);
	const renderCopy = copyClipboard ? 'inline-block' : 'none';
	const renderCondicionalInput = () => {
		if (boolean === 'true') {
			return (
				<>
					<div className="col-sm-9 d-flex">
						<input
							style={{ borderRadius: '7px', border: `${renderBorder()}` }}
							readOnly={readOnlyEdit}
							{...input}
							type="text"
							className="form-control-plaintext input-fields text-center"
						/>
						<CopyToClipboard
							text={input.value}
							onCopy={() => setCopyClipboard(true)}>
							<small className="copy-span">copy</small>
						</CopyToClipboard>

						<span
							className="mx-auto copy-message"
							style={{ display: `${renderCopy}`, color: 'red' }}>
							Copied to clipboard
						</span>
					</div>
				</>
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
						className="form-control-plaintext input-fields text-center"
					/>
					<div
						className="input-group-append eye-container-style"
						onClick={toggle}>
						<span className="input-group-text eye-sub-container-style">
							{passwordEye}
						</span>
					</div>
					<CopyToClipboard
						text={input.value}
						onCopy={() => setCopyClipboard(true)}>
						<small className="copy-span">copy</small>
					</CopyToClipboard>
					<span
						className="mx-auto copy-message"
						style={{ display: `${renderCopy}`, color: 'red' }}>
						Copied to clipboard
					</span>
				</div>
			);
		}
	};
	return (
		<>
			<div className="form-group row mx-auto">
				<label className="col-sm-3 col-form-label text-white">
					{labelValue}
				</label>
				{renderCondicionalInput()}
			</div>
		</>
	);
};

export default PasswordCardField;
