import React from "react";

const withChildComponent = (child) => (WrappedComponent) => {
	return (props) => {
		return (
			<WrappedComponent {...props}>
				{child}
			</WrappedComponent>
		)
	}
}

export default withChildComponent