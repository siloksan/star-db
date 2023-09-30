import React, {Children, cloneElement} from 'react';
import './subject-details.css'

import ErrorIndicate from "../error-indicate";
import ErrorButtons from "../error-buttons";
import {ErrorBoundary} from "react-error-boundary";

const SubjectDetails = (props) => {

	const { data, detailList } = props

	const detailListSubject = detailList.map(({ field, label }) => {
		return (
			<RowDetail key={field} field={field} label={label}/>
		)
	})

	return (
		<div className="card mb-3">
			<DetailsView
				infoItem={data}>
				{detailListSubject}
			</DetailsView>
		</div>
	);
};

const DetailsView = (props) => {

	const {name, image, ...resInfoItem} = props.infoItem

	return (
		<ErrorBoundary FallbackComponent={ErrorIndicate}>
			<div className="row g-0 subject-card">
				<div className="col-md-4 img-card-container">
					<img src={image}
					     className="img-fluid rounded-start img-card" alt={name}/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<ul className="list-group list-group-flush">
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

export default SubjectDetails;

