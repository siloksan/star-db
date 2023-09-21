import React from 'react';
import {ErrorBoundary} from "react-error-boundary";
import ErrorIndicate from "../error-indicate";

import './row.css'

const Row = ({ leftBlock, rightBlock }) => {
	return (
		<ErrorBoundary FallbackComponent={ErrorIndicate}>
			<div className="row mb2 subject-page">
				<div className="col-md-4">
					{leftBlock}
				</div>
				<div className="col">
					{rightBlock}
				</div>
			</div>
		</ErrorBoundary>
	)
}

export default Row;