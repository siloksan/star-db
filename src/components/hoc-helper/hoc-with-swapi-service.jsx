import React, {useContext} from "react";
import {SwapiServiceContext} from "../app";

const withSwapiServiceComponent = (mapMethodsToProps) => (WrappedComponent) => {
	return (props) => {
		const swapiServiceContext = useContext(SwapiServiceContext)
		const swapiService = mapMethodsToProps(swapiServiceContext)
		return (
			<WrappedComponent {...props} {...swapiService}/>
		)
	}
}

export default withSwapiServiceComponent