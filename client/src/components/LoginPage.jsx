import React from 'react';
import LoginBtns from './LoginBtns';
import './LoginPage.css';
import passwordLogo from '../passwordlogo.png';

function LoginPage() {
	return (
		<div className="size d-flex">
			<div className="container d-flex my-auto">
				<div className="my-auto mx-auto">
					<div className="row">
						<img
							className="mx-auto img-fluid logo-size"
							src={passwordLogo}
							alt="logo"
						/>
					</div>
					<div className="row">
						<h2 className="text-center mx-auto">
							Store Your Passwords Safely!!
						</h2>
					</div>
					<div className="mt-5">
						<LoginBtns />
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
