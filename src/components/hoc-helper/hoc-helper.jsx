import React, {useEffect, useState} from "react";
import Spinner from "../spinner";
import ErrorIndicate from "../error-indicate";

const withDataComponent = (WrappedComponent, getData) => {
	return (props) => {
		const [state, setState] = useState({
			data: [],
			loading: true,
			error: false
		})

		const { data, loading, error } = state

		const onError = () => {
			setState({...state, error: true})
		}

		const updateComponent = () => {
			getData()
				.then((data) => {
					setState({data, error: false, loading: false})
				})
				.catch(onError)
		}

		useEffect(() => {
			updateComponent()
		}, [])

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