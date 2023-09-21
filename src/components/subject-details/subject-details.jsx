import React, {useEffect, useState} from 'react';
import './subject-details.css'
import Spinner from "../spinner";
import ErrorIndicate from "../error-indicate";
import ErrorButtons from "../error-buttons";
import {ErrorBoundary} from "react-error-boundary";

const initialState = {
	person: {},
	loading: true,
	error: false
}

const SubjectDetails = ({selectedId, getOne, getSubjectImage, folder}) => {

	const [state, setState] = useState(initialState)

	const {
		loading,
		error
	} = state

	const onError = () => {
		setState({...state, error: true})
	}

	const updateSubjectInfo = (id) => {
		getOne(id)
			.then((person) => {
				setState({person, loading: false, error: false})
			})
			.catch(onError)
	}

	useEffect(() => {
		setState({...state, loading: true})
		updateSubjectInfo(selectedId)
	}, [selectedId])


	const renderSpinner = loading && !error ? <Spinner/> : null
	const renderContent = !(loading || error)
		? <DetailsView
			infoItem={state.person}
			getSubjectImage={getSubjectImage}
			folder={folder}/>
		: null
	const renderError = error ? <ErrorIndicate/> : null

	return (
		<div className="card mb-3 subject-card">
			{renderSpinner}
			{renderContent}
			{renderError}
		</div>
	);
};

export default SubjectDetails;

const DetailsView = ({infoItem, getSubjectImage, folder}) => {

	const {id, name, ...resInfoItem} = infoItem

	const image = getSubjectImage(folder, id)

	const listDetails = Object.entries(resInfoItem).slice(0, 3).map(([key, value]) => {
		return (
			<li key={key} className="list-group-item">{key + ': ' + value}</li>
		)
	});

	return (
		<ErrorBoundary FallbackComponent={ErrorIndicate}>
			<div className="row g-0">
				<div className="col-md-4 img-card-container">
					<img src={image}
					     className="img-fluid rounded-start img-card" alt="planet.name"/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<ul className="list-group list-group-flush">
							{listDetails}
						</ul>
					</div>
					<ErrorButtons/>
				</div>
			</div>
		</ErrorBoundary>
	)
}