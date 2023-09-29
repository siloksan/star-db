import React, {useEffect, useState} from "react";
import Spinner from "../spinner";
import ErrorIndicate from "../error-indicate";
import {useParams} from "react-router-dom";

const withDataComponent = (WrappedComponent) => {

	return (props) => {
		const [state, setState] = useState({
			data: [],
			loading: true,
			error: false
		})

		const { id } = useParams()

		const { data, loading, error } = state

		const getData = props.getData

		const onError = () => {
			setState({...state, error: true})
		}

		const selectedId = props.selectedId ? props.selectedId : null

		const updateComponent = (id) => {
			let canceled = false
			getData(id)
				.then((data) => {
					!canceled && setState({data, error: false, loading: false})
				})
				.catch(onError)

			return () => canceled = true
		}

		const subjectId = id ? id : selectedId

		useEffect(() => {
					updateComponent(subjectId)
			}, [subjectId, getData])

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