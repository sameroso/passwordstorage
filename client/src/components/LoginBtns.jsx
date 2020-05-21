import React from 'react';
import './LoginBtns.css';
import fbLogo from '../fb-logo.png';
import googleLogo from '../google-logo.png';

function LoginBtns() {
	return (
		<div className="background-login">
			<div className="container">
				<div className="row mb-5">
					<div className="mx-auto my-auto">
						<a href="/auth/facebook"><button className="fb-btn">
							<div className="d-flex">
								<img src={fbLogo}></img>
								<h4 className="my-auto text-white ml-3">Login with Facebook</h4>
							</div>
						</button>
						</a>
					</div>
				</div>
				<div className="row mt-5">
					<div className="mx-auto my-auto">
						<a href="/auth/google"><button className="google-btn">
							<div className="d-flex">
								<img src={googleLogo}></img>
								<h4 className="my-auto text-danger ml-3">Login with Google</h4>
							</div>
						</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginBtns;
