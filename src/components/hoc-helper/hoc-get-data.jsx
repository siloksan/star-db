import React, {useContext, useEffect, useState} from "react";
import Spinner from "../spinner";
import ErrorIndicate from "../error-indicate";
import {SwapiServiceContext} from "../app";

const withDataComponent = (WrappedComponent, mapMethodsToProps) => {

	return (props) => {
		const [state, setState] = useState({
			data: [],
			loading: true,
			error: false
		})

		const swapiService = useContext(SwapiServiceContext)

		const { data, loading, error } = state
		const getData = mapMethodsToProps(swapiService)

		const onError = () => {
			setState({...state, error: true})
		}

		const { selectedId } = props

		const updateComponent = (id) => {
			getData(id)
				.then((data) => {
					console.log(data);
					setState({data, error: false, loading: false})
				})
				.catch(onError)
		}


			useEffect(() => {
					updateComponent(selectedId)
			}, [selectedId])

		const renderSpinner = loading && !error ? <Spinner/> : null
		const renderContent = !(loading || error) ? <WrappedComponent {...props} data={data}/> : null
		const renderError = error ? <ErrorIndicate/> : null

		return (
			<div className="card mb-3 list-items">
				{renderSpinner}
				{renderContent}
				{renderError}
			</div>
		);
	}
}

export default withDataComponent