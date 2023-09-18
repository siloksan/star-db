import React, {useEffect, useState} from 'react';
import './person-details.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicate from "../error-indicate";
import ErrorButtons from "../error-buttons";

const initialState = {
	person: {},
	loading: true,
	error: false
}

const PersonDetails = ({ personId }) => {

	const swapiService = new SwapiService()

	const [state, setState] = useState(initialState)

	const {
		loading,
		error
	} = state

	const onError = () => {
		setState({...state, error: true })
	}

	const updatePerson = (id) => {
		swapiService
			.getPerson(id)
			.then((person) => {
				setState({ person , loading: false, error: false })
			})
			.catch(onError)
	}

	useEffect(() => {
		setState({...state, loading: true})
		updatePerson(personId)
	}, [personId])


	const renderSpinner = loading && !error ? <Spinner /> : null
	const renderContent = !(loading || error) ? <PersonDetailsView person={state.person}/> : null
	const renderError = error ? <ErrorIndicate /> : null

	return (
		<div className="card mb-3 person-card">
			{renderSpinner}
			{renderContent}
			{renderError}
		</div>
	);
};

export default PersonDetails;

const PersonDetailsView = ({ person: { id, name, gender, birthYear, eyeColor } }) => {

	return (
		<div className="row g-0">
			<div className="col-md-4 img-card-container">
				<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-fluid rounded-start img-card" alt="planet.name"/>
			</div>
			<div className="col-md-8">
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">{gender}</li>
						<li className="list-group-item">{birthYear}</li>
						<li className="list-group-item">{eyeColor}</li>
					</ul>
				</div>
				<ErrorButtons />
			</div>
		</div>
	)
}