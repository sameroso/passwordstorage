import React from 'react';
import LoginBtns from './LoginBtns';
import './LoginPage.css';
import passwordLogo from '../passwordlogo.png';


function LoginPage() {
	return (
		<div className="size d-flex bg-login">
			<div className="container d-flex">
				<div className="my-auto mx-auto">
				
					<div className="row">
						<img
							className="mx-auto img-fluid logo-size"
							src={passwordLogo}
							alt="logo"
						/>
					</div>
					<div className="row">
						<h2 className="mx-auto mb-4 font">
							Password Storage
						</h2>
					</div>
					<div className="row">
						<p className="mx-auto font">
							Store your password safely	
						</p>
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
