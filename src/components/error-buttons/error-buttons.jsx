import React, {useState} from 'react';

import './error-butons.css'

const ErrorButtons = () => {
	const [error, setError] = useState(false)

	console.log('render');
	if (error) {
		this.foo.sd = 47
	}

	return (
		<button
			className="btn btn-danger btn-ld btn-error"
			onClick={() => setError(true)}>
			Throw Error
		</button>
	);
};

export default ErrorButtons;