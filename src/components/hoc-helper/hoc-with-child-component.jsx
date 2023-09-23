import React from "react";

const withChildComponent = (WrappedComponent, child) => {
	return (props) => {
		return (
			<WrappedComponent {...props}>
				{child}
			</WrappedComponent>
		)
	}
}

export default withChildComponent