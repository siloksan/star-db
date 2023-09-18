import React from 'react';

import './error-indicate.css'
import iconError from './icon-error.png'

const ErrorIndicate = () => {
	return (
		<div className="row g-0 justify-content-center error-block">
			<img className="error-icon" src={iconError} alt="error icon"/>
			<h3 className="error-title">Oops!</h3>
			<p className="error-text">Something gone wrong. We're already solving this problem!</p>
		</div>
	);
};

export default ErrorIndicate;