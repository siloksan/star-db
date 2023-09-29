import React from 'react';
import {ErrorBoundary} from "react-error-boundary";
import ErrorIndicate from "../error-indicate";

import './row.css'
import PropTypes from "prop-types";
import {Route, Routes} from "react-router-dom";

const Row = ({leftBlock, rightBlock}) => {
	return (
		<ErrorBoundary FallbackComponent={ErrorIndicate}>
			<div className="row mb2 subject-page">
				<div className="col">
					{leftBlock}
				</div>
				<Routes>
					<Route path=":id" element={
						<div className="col-md-8">
						{rightBlock}
					</div>
					}/>
				</Routes>
			</div>
		</ErrorBoundary>
	)
}

Row.propTypes = {
	leftBlock: PropTypes.node,
	rightBlock: PropTypes.node
}

export default Row;