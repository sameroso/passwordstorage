import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import './LoadingPage.css';

function LoadingPage() {
	return (
		<div className="bg-loading-page d-flex">
			<div className="container mx-auto my-auto">
				<div className='d-flex'>
					<div className="mx-auto">
						<div className="row">
							<h1 className="text-white text-center mx-auto">Loading</h1>
						</div>
						<div className="row">
							<Loader type="Bars" color="white" height={150} width={150} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default LoadingPage;
