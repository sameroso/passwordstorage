import React from 'react';
import './Modal.css'

function Modal({ id, actionName,onAction,btnType,type }) {
	return (
		<div
			className="modal fade modal-body-style"
			id={id}
			tabIndex="-1"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content modal-bg-config">
					<div className="modal-header">
						<h5 className="modal-title text-white" id="exampleModalLabel">
							{actionName}
						</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body text-white">Are you sure you want to <strong>{actionName}</strong> this {type}?</div>
					<div className="modal-footer">
						<button
							type="button"
							className="close-btn-style"
							data-dismiss="modal">
							CLOSE
						</button>
						<button type={btnType} className="action-btn-style" onClick={onAction} data-dismiss="modal">
							{actionName}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
