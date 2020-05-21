import React from 'react';
import LoginBtns from './LoginBtns'

function LoginPage() {
	return (
		<div>
			<div className="container">
				<div className="row">
                    <h2 className="text-center mx-auto">Store Your Passwords Safely!!</h2>
                </div>
				<div className="mt-5">
                	<LoginBtns/>
				</div>
			</div>
		</div>
	);
}



export default LoginPage;