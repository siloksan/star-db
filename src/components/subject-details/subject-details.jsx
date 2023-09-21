import React, {useEffect, useState, Children, cloneElement} from 'react';
import './subject-details.css'
import Spinner from "../spinner";
import ErrorIndicate from "../error-indicate";
import ErrorButtons from "../error-buttons";
import {ErrorBoundary} from "react-error-boundary";

const initialState = {
	subject: {},
	loading: true,
	error: false
}

const SubjectDetails = ({ selectedId, getOne, detailList }) => {

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
			.then((subject) => {
				setState({subject, loading: false, error: false})
			})
			.catch(onError)
	}

	useEffect(() => {
		setState({...state, loading: true})
		updateSubjectInfo(selectedId)
	}, [selectedId])

	const detailListSubject = detailList.map(({ field, label }) => {
		return (
			<RowDetail key={field} field={field} label={label}/>
		)
	})

	const renderSpinner = loading && !error ? <Spinner/> : null
	const renderContent = !(loading || error)
		? <DetailsView
			infoItem={state.subject}>
			{detailListSubject}
		</DetailsView>
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

const DetailsView = (props) => {

	const {name, image, ...resInfoItem} = props.infoItem


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
							{/*{listDetails}*/}
							{
								Children.map(props.children, (child) => {
									return cloneElement(child, { resInfoItem })
							})
							}
						</ul>
					</div>
					<ErrorButtons/>
				</div>
			</div>
		</ErrorBoundary>
	)
}

const RowDetail = ({ resInfoItem, field, label }) => {
	return (
		<li className="list-group-item">
			<span>{label}: </span>
			<span>{resInfoItem[field]}</span>
		</li>
	)
}